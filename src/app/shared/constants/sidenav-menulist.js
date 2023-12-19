import Alert from "../../../assets/icons/sidenav-Icons/alert.svg";
import Apps from "../../../assets/icons/sidenav-Icons/apps.svg";
import AreaChart from "../../../assets/icons/sidenav-Icons/area-charts.svg";
import Bucket from "../../../assets/icons/sidenav-Icons/bucket.svg";
import Calender from "../../../assets/icons/sidenav-Icons/calender.svg";
import Candlestick from "../../../assets/icons/sidenav-Icons/candlestick.svg";
import Chart from "../../../assets/icons/sidenav-Icons/chart.svg";
import Chats from "../../../assets/icons/sidenav-Icons/chats.svg";
import ColumnChart from "../../../assets/icons/sidenav-Icons/column-chart.svg";
import Custom from "../../../assets/icons/sidenav-Icons/custom.svg";
import Customer from "../../../assets/icons/sidenav-Icons/customer.svg";
import Element from "../../../assets/icons/sidenav-Icons/element.svg";
import Error from "../../../assets/icons/sidenav-Icons/error.svg";
import FeatherIcons from "../../../assets/icons/sidenav-Icons/feather-icon.svg";
import Feeds from "../../../assets/icons/sidenav-Icons/feeds.svg";
import GredientChart from "../../../assets/icons/sidenav-Icons/gredient-chart.svg";
import Layout from "../../../assets/icons/sidenav-Icons/layout.svg";
import LineChart from "../../../assets/icons/sidenav-Icons/line-chart.svg";
import Login from "../../../assets/icons/sidenav-Icons/login.svg";
import Mail from "../../../assets/icons/sidenav-Icons/mail.svg";
import Modern from "../../../assets/icons/sidenav-Icons/modern.svg";
import Notes from "../../../assets/icons/sidenav-Icons/notes.svg";
import Pie from "../../../assets/icons/sidenav-Icons/pie.svg";
import Pricing from "../../../assets/icons/sidenav-Icons/pricing.svg";
import QuillEditior from "../../../assets/icons/sidenav-Icons/quill-editor.svg";
import RadialChart from "../../../assets/icons/sidenav-Icons/radial-chart.svg";
import Register from "../../../assets/icons/sidenav-Icons/register.svg";
import ReserPassword from "../../../assets/icons/sidenav-Icons/reset-pass.svg";
import Shop from "../../../assets/icons/sidenav-Icons/shop.svg";
import Table from "../../../assets/icons/sidenav-Icons/table.svg";
import Timeline from "../../../assets/icons/sidenav-Icons/timeline.svg";
import TreeView from "../../../assets/icons/sidenav-Icons/tressview.svg";
import Typography from "../../../assets/icons/sidenav-Icons/typography.svg";
import User from "../../../assets/icons/sidenav-Icons/user.svg";
import Wizard from "../../../assets/icons/sidenav-Icons/wizard.svg";



export const MAIN_MENUS = [
  {
    label: "DASHBOARD",
    link: `dashboard`,
    hasSubMenu: true,
    subMenus: [
      {
        label: "Modern",
        link: "modern",
        icon: Modern,
      },
      {
        label: "Analytical",
        link: "analytical",
        icon: Chart,
      },
      {
        label: "eCommerce",
        link: "ecommerce",
        icon: Bucket,
      },
    ],
  },
  {
    label: "APP",
    link: `app`,
    hasSubMenu: true,
    subMenus: [
      {
        label: "Chats",
        link: "chats",
        icon: Chats,
      },
      {
        label: "Notes",
        link: "notes",
        icon: Notes,
      },
      {
        label: "Mail",
        link: "mail",
        icon:Mail,
      },
      {
        label: "Calender",
        link: "calender",
        icon: Calender,
      },
      {
        label: "Customers",
        link: "customer",
        icon:Customer,
      },
    ],
  },
  {
    label: "PAGES",
    link: `pages`,
    hasSubMenu: true,
    subMenus: [
      {
        label: "Shop",
        link: "shop",
        icon: Shop,
      },
      {
        label: "Alert",
        link: "alert",
        icon: Alert,
      },
      {
        label: "User Profile",
        link: "useProfile",
        icon: User,
      },
      {
        label: "Quill Editor",
        link: "useProfile",
        icon: QuillEditior,
      },
      {
        label: "  Treeview",
        link: "useProfile",
        icon: TreeView,
      },
      {
        label: "Pricing",
        link: "useProfile",
        icon: Pricing,
      },
      {
        label: "Typography",
        link: "useProfile",
        icon: Typography,
      },
      {
        label: "Feather Icon",
        link: "useProfile",
        icon: FeatherIcons,
      },
      {
        label: "Timeline",
        link: "useProfile",
        icon: Timeline,
      },
    ],
  },
  {
    label: "FORMS",
    link: `dashboard`,
    hasSubMenu: true,
    subMenus: [
      {
        label: "Form Elements",
        link: "modern",
        icon: Element,
      },
      {
        label: "Form Layout",
        link: "analytical",
        icon: Layout,
      },
      {
        label: "Form Custom",
        link: "ecommerce",
        icon:Custom,
      },
      {
        label: "Form Wizard",
        link: "ecommerce",
        icon: Wizard,
      },
    ],
  },
  {
    label: "TABLES",
    link: `dashboard`,
    hasSubMenu: true,
    subMenus: [
      {
        label: "Tables",
        link: "modern",
        icon: Table,
      },
    ],
  },
  {
    label: "WIDGETS",
    link: `app`,
    hasSubMenu: true,
    subMenus: [
      {
        label: "Widgets Feeds",
        link: "chats",
        icon: Feeds,
      },
      {
        label: "Widgets Apps",
        link: "notes",
        icon: Apps,
      },
    ],
  },
  {
    label: "CHARTS",
    link: `app`,
    hasSubMenu: true,
    subMenus: [
      {
        label: "Line Chart",
        link: "chats",
        icon: LineChart,
      },
      {
        label: "Gredient Chart",
        link: "notes",
        icon: GredientChart,
      },
      {
        label: "Doughnut & Pie",
        link: "notes",
        icon: Pie,
      },
      {
        label: "Area Chart",
        link: "mail",
        icon: AreaChart,
      },
      {
        label: "Column Chart",
        link: "calender",
        icon: ColumnChart,
      },
      {
        label: "Candlestick Chart",
        link: "customer",
        icon: Candlestick,
      },
      {
        label: "Radialbar & Radar",
        link: "customer",
        icon: RadialChart,
      },
    ],
  },
  {
    label: "AUTHENTICATION",
    link: `app`,
    hasSubMenu: true,
    subMenus: [
      {
        label: "Register",
        link: "chats",
        icon: Register,
      },
      {
        label: "Login",
        link: "notes",
        icon: Login,
      },
      {
        label: "Reset Password",
        link: "mail",
        icon: ReserPassword,
      },
      {
        label: "Error",
        link: "calender",
        icon: Error,
      },
    ],
  },
];
