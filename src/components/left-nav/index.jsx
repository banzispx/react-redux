import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Icon} from 'antd'
// import {connect} from 'react-redux'

// import logo from '../../assets/images/logo.png'
import {menuList} from '../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;

/*
左侧导航的组件
 */
class LeftNav extends Component {
  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {
      menuNodes: this.getMenuNodes(menuList)
    };
  }
  // 
  getMenuNodes = (menuList) => {
    // 得到当前请求的路由路径
    const path = this.props.location.pathname

    return menuList.reduce((pre, item) => {

      // 如果当前用户有item对应的权限, 才需要显示对应的菜单项
      // if (this.hasAuth(item)) { 此处先不做判断


        // 向pre添加<Menu.Item>
        if(!item.children) {
          // 判断item是否是当前对应的item
          if (item.key===path || path.indexOf(item.key)===0) {
            // 更新redux中的headerTitle状态
            this.props.setHeadTitle(item.title)
          }

          pre.push((
            <Menu.Item key={item.key}>
              <Link to={item.key} onClick={() => this.props.setHeadTitle(item.title)}>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          ))
        } else {
          // 查找一个与当前请求路径匹配的子Item
          const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
          // 如果存在, 说明当前item的子列表需要打开
          if (cItem) {
            this.openKey = item.key
          }
          // 向pre添加<SubMenu>
          pre.push((
            <SubMenu
              key={item.key}
              title={
                <span>
              <Icon type={item.icon}/>
              <span>{item.title}</span>
            </span>
              }
            >
              {this.getMenuNodes(item.children)}
            </SubMenu>
          ))
        }
      

      return pre
    }, [])
  }

  /*
  在第一次render()之前执行一次
  为第一个render()准备数据(必须同步的)
   */
  componentDidMount () {
    console.log(23232)
  }

  render() {
    console.log(11212, this.state)
    // 得到当前请求的路由路径
    let path = this.props.location.pathname

    // 得到需要打开菜单项的key
    const openKey = this.openKey

    return (
      <div className="left-nav">
        <Menu
          mode="inline"
          theme="dark"
          // openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
        >

          {
            this.state.menuNodes
          }

        </Menu>
      </div>
    )
  }
}

/*
withRouter高阶组件:
包装非路由组件, 返回一个新的组件
新的组件向非路由组件传递3个属性: history/location/match
 */
export default withRouter(LeftNav)