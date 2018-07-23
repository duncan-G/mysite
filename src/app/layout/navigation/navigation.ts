export const navigation = [
    {
        'id'      : 'nav',
        'title'   : 'Navigation',
        'type'    : 'group',
        'children': [
            {
                'id'   : 'articles',
                'title': 'Articles',
                'type' : 'item',
                'icon' : 'library_books',
                'url'  : '/articles',
                'badge': {
                    'title': 25,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'about',
                'title': 'About Me',
                'type' : 'item',
                'icon' : 'account_circle',
                'url'  : '/about',
            },
            {
                'id'   : 'sample',
                'title': 'Sample',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/sample',
            }
        ]
    }
];
