const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'mdi:home-outline',
      badgeContent: 'new',
      badgeColor: 'error',
      children: [
        {
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        }
      ]
    }
  ]
}

export default navigation
