const smartgrid = require('smart-grid');

var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    container: {
        maxWidth: '940px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '940px', /* -> @media (max-width: 1100px) */
            fields: '30px' /* side fields */
        },
        md: {
            width: '778px',
            fields: '15px'
        },
        sm: {
            width: '455px',
            fields: '15px'
        },
        xs: {
            width: '320px',
            fields: '15px'
        }
        /*
        We can create any quantity of break points.

        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
	
	/*properties: [
        'justify-content'
    ]*/
};

smartgrid('source/styles/global', settings);
