import Vue from 'vue'
import {
  Button,
  ButtonGroup,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  MenuItemGroup,
  MenuItem,
  Submenu,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Pagination,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Dialog,
  Radio,
  RadioGroup,
  MessageBox,
  Message,
  Tree,
  Divider,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Popover,
  Card
} from 'element-ui'
const components = {
  Button,
  ButtonGroup,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  MenuItemGroup,
  MenuItem,
  Submenu,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Pagination,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Dialog,
  Radio,
  RadioGroup,
  Tree,
  Divider,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Popover,
  Card
}

Object.values(components).forEach(component => {
  Vue.use(component)
})

Input.props.clearable.default = true

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
