// navData.js

const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'About Us',
      dropdown: [
        { label: 'Overview', path: '/about' },
        { label: 'Our Videos', path: '/video' },
        { label: 'FAQ', path: '/faq' },
        
      ],
    },
    {
      label: 'Our Projects',
      dropdown: [
        { label: 'All Projects', path: '/allProjects' },
        { label: 'Featured Properties', path: '/featuredProperties' },
        { label: 'Properties', path: '/allProperties' },
        
      ],
    },
    { label: 'Mango Insights', path: '/mango-insights' },
    { label: 'Compare Projects',path: '/compare'},
    { label: 'Career', path: '/career' },
    { label: 'Contact Us', path: '/contact' },
  ];
  
  
export default navItems;  
  