var templates =
    [{
        name: 'Playing XI',
        width: 600,
        height: 400,
        url: 'https://aashwin.github.io/vcc-poster-generator/assets/playingxi.jpg',
        fields: [
            { name: 'Team 1', options: { originX: 'right', top: 65, left: 276, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'normal', fill: '#fff', textAlign: 'left' } },
            { name: 'Team 2', options: { top: 65, left: 366, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 1', options: { top: 200, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 2', options: { top: 219, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 3', options: { top: 236, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 4', options: { top: 253, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 5', options: { top: 270, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 6', options: { top: 287, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 7', options: { top: 304, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 8', options: { top: 321, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 9', options: { top: 338, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 10', options: { top: 355, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            { name: 'Player 11', options: { top: 372, left: 66, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff' } },
            {
                name: 'Impact Subs: ', options: {
                    top: 392, left: 66, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'bold', fill: '#fcdc86', shadow: new fabric.Shadow({
                        color: 'black',
                        blur: 10
                    })
                }
            },

            {
                name: 'Bottom Row', options: {
                    top: 433, left: 300, fontFamily: 'Roboto', fontSize: '14', fontWeight: 'normal', fill: '#fff', width: 600, originX: 'center', originY: 'center',
                    shadow: new fabric.Shadow({
                        color: 'black',
                        blur: 10
                    })
                }
            },


        ]
    },
    {
        name: 'Playing XI - Purple',
        width: 1024,
        height: 1821,
        url: 'assets/playingxi2.jpeg',
        fields: [
            { name: 'vs', fixedValue: "VS", options: { top: 625, left: 512, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#FFF', originX: 'center', originY: 'center' } },
            { name: 'Other Team', options: { top: 675, left: 512, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#f7cc54', originX: 'center', originY: 'center' } },
            { name: 'Date', options: { top: 725, left: 512, fontFamily: 'Roboto', fontSize: '25', fontWeight: 'bold', fill: '#fff', originX: 'center', originY: 'center' } },
            { name: 'Day', options: { top: 765, left: 512, fontFamily: 'Roboto', fontSize: '25', fontWeight: 'bold', fill: '#a672ec', originX: 'center', originY: 'center' } },
            { name: 'Player 1', options: { top: 875, left: 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54' } },
            { name: 'Player 2', options: { top: 950, left: 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54' } },
            { name: 'Player 3', options: { top: 1025, left: 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54' } },
            { name: 'Player 4', options: { top: 1100, left: 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54' } },
            { name: 'Player 5', options: { top: 1175, left: 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54' } },
            { name: 'Player 6', options: { top: 1250, left: 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54' } },
            { name: 'Player 7', options: { top: 875, left: 1024 - 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54', originX: 'right' } },
            { name: 'Player 8', options: { top: 950, left: 1024 - 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54', originX: 'right' } },
            { name: 'Player 9', options: { top: 1025, left: 1024 - 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54', originX: 'right' } },
            { name: 'Player 10', options: { top: 1100, left: 1024 - 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54', originX: 'right' } },
            { name: 'Player 11', options: { top: 1175, left: 1024 - 66, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#f7cc54', originX: 'right' } },
            {
                name: 'Impact Subs: ', template: 'Impact Subs: {{value}}', options: {
                    top: 1375, left: 512, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fcdc86', originX: 'center', originY: 'center'
                }
            }


        ]
    },
    {
        name: 'Match Summary',
        width: 1920,
        height: 1080,
        url: 'assets/matchsummary2.jpg',
        fields: [
            { name: 'Title', options: { top: 172, left: 1140, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#ffc200', originX: 'center', originY: 'center' } },
            { name: 'Subtitle', options: { top: 218, left: 1140, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'normal', fill: '#d399ff', originX: 'center', originY: 'center' } },
            { name: 'Team 1', options: { top: 312, left: 450, fontFamily: 'Roboto', fontSize: '45', fontWeight: '900', fill: '#1c013e' } },
            { name: 'Team 2', options: { top: 640, left: 470, fontFamily: 'Roboto', fontSize: '45', fontWeight: '900', fill: '#1c013e' } },
            { name: 'Team 1 Score', options: { top: 312, left: 1312, fontFamily: 'Roboto', fontSize: '45', fontWeight: '900', fill: '#1c013e' } },
            { name: 'Team 1 Overs', template: '{{value}} overs', options: { top: 316, left: 1140, fontFamily: 'Roboto', fontSize: '38', fontWeight: '100', fill: '#1c013e' } },
            { name: 'Team 2 Score', options: { top: 640, left: 1312, fontFamily: 'Roboto', fontSize: '45', fontWeight: '900', fill: '#1c013e' } },
            { name: 'Team 2 Overs', template: '{{value}} overs', options: { top: 643, left: 1140, fontFamily: 'Roboto', fontSize: '38', fontWeight: '100', fill: '#1c013e' } },
            { name: 'Team 1 Batsman 1', options: { top: 400, left: 490, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 1 Batsman 1 Score', options: { top: 400, left: 840, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 1 Batsman 2', options: { top: 470, left: 490, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 1 Batsman 2 Score', options: { top: 470, left: 840, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 1 Batsman 3', options: { top: 540, left: 490, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 1 Batsman 3 Score', options: { top: 540, left: 840, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },

            { name: 'Team 1 Bowler 1', options: { top: 728, left: 1020, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 1 Bowler 1 Score', options: { top: 728, left: 1300, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 1 Bowler 2', options: { top: 798, left: 1020, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 1 Bowler 2 Score', options: { top: 798, left: 1300, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 1 Bowler 3', options: { top: 868, left: 1020, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 1 Bowler 3 Score', options: { top: 868, left: 1300, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },



            { name: 'Team 2 Batsman 1', options: { top: 728, left: 490, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 2 Batsman 1 Score', options: { top: 728, left: 840, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 2 Batsman 2', options: { top: 798, left: 490, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 2 Batsman 2 Score', options: { top: 798, left: 840, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 2 Batsman 3', options: { top: 868, left: 490, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 2 Batsman 3 Score', options: { top: 868, left: 840, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },

            { name: 'Team 2 Bowler 1', options: { top: 400, left: 1020, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 2 Bowler 1 Score', options: { top: 400, left: 1300, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 2 Bowler 2', options: { top: 470, left: 1020, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 2 Bowler 2 Score', options: { top: 470, left: 1300, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 2 Bowler 3', options: { top: 540, left: 1020, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },
            { name: 'Team 2 Bowler 3 Score', options: { top: 540, left: 1300, fontFamily: 'Roboto', fontSize: '40', fontWeight: '900', fill: '#fff' } },

            { name: 'Man of The Match', template: 'MAN OF THE MATCH: {{value}}', options: { top: 952, left: 1000, fontFamily: 'Roboto', fontSize: '30', fontWeight: '900', fill: '#b00000', originX: 'center', shadow: new fabric.Shadow({
                color: '#fff',
                blur: 10
            }) } },
            { name: 'Bottom Line', options: { top: 1012, left: 1000, fontFamily: 'Roboto', fontSize: '32', fontWeight: '900', fill: '#ffc200', originX: 'center' } }


        ]
    }];
