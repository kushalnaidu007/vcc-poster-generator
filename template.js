var templates =
    [{
        name: 'Playing XI - 2024 Red Team',
        width: 1080,
        height: 1920,
        // url: 'assets/RedTeamSummary2024.jpeg',
        url: 'https://aashwin.github.io/vcc-poster-generator/assets/RedTeamSelection2024.jpg',

        fields: [

            {
                name: 'Team Name', options: { top: 230, left: 1010, fontFamily: 'Roboto', fontSize: '48', fontWeight: 'bold', fill: '#fff', originX: 'right', originY: 'center' }
            },
            {
                name: 'Date', options: { top: 265, left: 1010, fontFamily: 'Roboto', fontSize: '24', fontWeight: 'normal', fill: '#fff', originX: 'right', originY: 'center' }
            },
            {
                name: 'Other Team', template: 'vs {{value}}', options: { top: 550, left: 575, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'center', originY: 'center' }
            },
            {
                name: 'Location', template: 'at {{value}}', options: { top: 580, left: 575, fontFamily: 'Roboto', fontSize: '20', fontWeight: 'normal', fill: '#fff', originX: 'center', originY: 'center' }
            },
            // { name: 'vs', fixedValue: "VS", options: { top: 540, left: 575, fontFamily: 'Roboto', fontSize: '22', fontWeight: 'normal', fill: '#FFF', originX: 'center', originY: 'center' } },
            // { name: 'Other Team', options: { top: 675, left: 512, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#f7cc54', originX: 'center', originY: 'center' } },
            // { name: 'Date', options: { top: 725, left: 512, fontFamily: 'Roboto', fontSize: '25', fontWeight: 'bold', fill: '#fff', originX: 'center', originY: 'center' } },
            // { name: 'Day', options: { top: 765, left: 512, fontFamily: 'Roboto', fontSize: '25', fontWeight: 'bold', fill: '#a672ec', originX: 'center', originY: 'center' } },
            // { name: 'Other Team', options: { top: 565, left: 575, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'center', originY: 'center' } },
            { name: 'Player 1', options: { top: 617, left: 320, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#ffffff' } },
            { name: 'Player 2', options: { top: 710, left: 320, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#ffffff' } },
            { name: "Player 3", options: { top: 803, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 4", options: { top: 896, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 5", options: { top: 989, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 6", options: { top: 1082, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 7", options: { top: 1175, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 8", options: { top: 1268, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 9", options: { top: 1361, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 10", options: { top: 1454, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 11", options: { top: 1547, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } }
        ]
    },
    {
        name: 'Playing XI - 2024 Teal Team',
        width: 1080,
        height: 1920,
        // url: 'assets/RedTeamSummary2024.jpeg',
        url: 'https://aashwin.github.io/vcc-poster-generator/assets/BlueTeamSelection2024.jpg',

        fields: [

            {
                name: 'Team Name', options: { top: 230, left: 1010, fontFamily: 'Roboto', fontSize: '48', fontWeight: 'bold', fill: '#c4fced', originX: 'right', originY: 'center' }
            },
            {
                name: 'Date', options: { top: 265, left: 1010, fontFamily: 'Roboto', fontSize: '24', fontWeight: 'normal', fill: '#c4fced', originX: 'right', originY: 'center' }
            },
            {
                name: 'Other Team', template: 'vs {{value}}', options: { top: 550, left: 575, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'center', originY: 'center' }
            },
            {
                name: 'Location', template: 'at {{value}}', options: { top: 580, left: 575, fontFamily: 'Roboto', fontSize: '20', fontWeight: 'normal', fill: '#c4fced', originX: 'center', originY: 'center' }
            },
            // { name: 'vs', fixedValue: "VS", options: { top: 540, left: 575, fontFamily: 'Roboto', fontSize: '22', fontWeight: 'normal', fill: '#FFF', originX: 'center', originY: 'center' } },
            // { name: 'Other Team', options: { top: 675, left: 512, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#f7cc54', originX: 'center', originY: 'center' } },
            // { name: 'Date', options: { top: 725, left: 512, fontFamily: 'Roboto', fontSize: '25', fontWeight: 'bold', fill: '#fff', originX: 'center', originY: 'center' } },
            // { name: 'Day', options: { top: 765, left: 512, fontFamily: 'Roboto', fontSize: '25', fontWeight: 'bold', fill: '#a672ec', originX: 'center', originY: 'center' } },
            // { name: 'Other Team', options: { top: 565, left: 575, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'center', originY: 'center' } },
            { name: 'Player 1', options: { top: 617, left: 320, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#ffffff' } },
            { name: 'Player 2', options: { top: 710, left: 320, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#ffffff' } },
            { name: "Player 3", options: { top: 803, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 4", options: { top: 896, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 5", options: { top: 989, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 6", options: { top: 1082, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 7", options: { top: 1175, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 8", options: { top: 1268, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 9", options: { top: 1361, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 10", options: { top: 1454, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 11", options: { top: 1547, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } }
        ]
    },
    {
        name: 'Playing XI - 2024 Blue Team',
        width: 1080,
        height: 1920,
        // url: 'assets/RedTeamSummary2024.jpeg',
        url: 'https://aashwin.github.io/vcc-poster-generator/assets/OtherBlueTeamSummary2024.jpg',

        fields: [

            {
                name: 'Team Name', options: { top: 230, left: 1010, fontFamily: 'Roboto', fontSize: '48', fontWeight: 'bold', fill: '#c4fced', originX: 'right', originY: 'center' }
            },
            {
                name: 'Date', options: { top: 265, left: 1010, fontFamily: 'Roboto', fontSize: '24', fontWeight: 'normal', fill: '#c4fced', originX: 'right', originY: 'center' }
            },
            {
                name: 'Other Team', template: 'vs {{value}}', options: { top: 550, left: 575, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'center', originY: 'center' }
            },
            {
                name: 'Location', template: 'at {{value}}', options: { top: 580, left: 575, fontFamily: 'Roboto', fontSize: '20', fontWeight: 'normal', fill: '#c4fced', originX: 'center', originY: 'center' }
            },
            // { name: 'vs', fixedValue: "VS", options: { top: 540, left: 575, fontFamily: 'Roboto', fontSize: '22', fontWeight: 'normal', fill: '#FFF', originX: 'center', originY: 'center' } },
            // { name: 'Other Team', options: { top: 675, left: 512, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#f7cc54', originX: 'center', originY: 'center' } },
            // { name: 'Date', options: { top: 725, left: 512, fontFamily: 'Roboto', fontSize: '25', fontWeight: 'bold', fill: '#fff', originX: 'center', originY: 'center' } },
            // { name: 'Day', options: { top: 765, left: 512, fontFamily: 'Roboto', fontSize: '25', fontWeight: 'bold', fill: '#a672ec', originX: 'center', originY: 'center' } },
            // { name: 'Other Team', options: { top: 565, left: 575, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'center', originY: 'center' } },
            { name: 'Player 1', options: { top: 617, left: 320, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#ffffff' } },
            { name: 'Player 2', options: { top: 710, left: 320, fontFamily: 'Roboto', fontSize: '50', fontWeight: 'bold', fill: '#ffffff' } },
            { name: "Player 3", options: { top: 803, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 4", options: { top: 896, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 5", options: { top: 989, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 6", options: { top: 1082, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 7", options: { top: 1175, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 8", options: { top: 1268, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 9", options: { top: 1361, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 10", options: { top: 1454, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } },
            { name: "Player 11", options: { top: 1547, left: 320, fontFamily: "Roboto", fontSize: "50", fontWeight: "bold", fill: "#ffffff" } }
        ]
    },
    {
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
            { name: 'Location', options: { top: 795, left: 512, fontFamily: 'Roboto', fontSize: '22', fontWeight: 'normal', fill: '#ccc', originX: 'center', originY: 'center' } },
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
        name: 'Match Summary - Teal',
        width: 1920,
        height: 1080,
        url: 'https://aashwin.github.io/vcc-poster-generator/assets/tealmatchsummary2024.jpg',
        fields: [
            { name: 'Title', options: { top: 162, left: 306, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#fff', originX: 'left', originY: 'center' } },
            { name: 'Subtitle', options: { top: 205, left: 306, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'normal', fill: '#dcfef9', originX: 'left', originY: 'center' } },
            { name: 'Team 1', options: { top: 336, left: 96, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#165868' } },
            { name: 'Team 2', options: { top: 672, left: 96, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#165868' } },
            { name: 'Team 1 Score', options: { top: 336, left: 1272, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#4aac9c', originX: 'right' } },
            { name: 'Team 1 Overs', template: '{{value}} overs', options: { top: 339, left: 945, fontFamily: 'Roboto', fontSize: '38', fontWeight: 'normal', fill: '#4aac9c' } },
            { name: 'Team 2 Score', options: { top: 674, left: 1272, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#4aac9c', originX: 'right' } },
            { name: 'Team 2 Overs', template: '{{value}} overs', options: { top: 676, left: 945, fontFamily: 'Roboto', fontSize: '38', fontWeight: 'normal', fill: '#4aac9c' } },

            { name: 'Team 1 Batsman 1', options: { top: 450, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Batsman 1 Score', options: { top: 450, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 1 Batsman 2', options: { top: 558, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Batsman 2 Score', options: { top: 558, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },

            { name: 'Team 1 Bowler 1', options: { top: 788, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Bowler 1 Score', options: { top: 788, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 1 Bowler 1 Overs', template: '{{value}} overs', options: { top: 825, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#c3dff8', originX: 'right' } },
            { name: 'Team 1 Bowler 2', options: { top: 896, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Bowler 2 Score', options: { top: 896, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 1 Bowler 2 Overs', template: '{{value}} overs', options: { top: 933, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#c3dff8', originX: 'right' } },

            { name: 'Team 2 Batsman 1', options: { top: 787, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Batsman 1 Score', options: { top: 788, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Batsman 2', options: { top: 896, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Batsman 2 Score', options: { top: 896, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Bowler 1', options: { top: 450, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Bowler 1 Score', options: { top: 450, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Bowler 2 Overs', template: '{{value}} overs', options: { top: 487, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#c3dff8', originX: 'right' } },
            { name: 'Team 2 Bowler 2', options: { top: 558, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Bowler 2 Score', options: { top: 558, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Bowler 2 Overs', template: '{{value}} overs', options: { top: 595, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#c3dff8', originX: 'right' } },

            {
                name: 'Man of The Match', template: 'Man of the Match: {{value}}', options: {
                    top: 453, left: 1580, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#165868', originX: 'center', shadow: new fabric.Shadow({
                        color: '#dcfef9',
                        blur: 2
                    })
                }
            },
            {
                name: 'Bottom Line', options: {
                    top: 1002, left: 700, fontFamily: 'Roboto', fontSize: '32', fontWeight: 'bold', fill: '#ffc200', originX: 'center', shadow: new fabric.Shadow({
                        color: '#000',
                        blur: 2
                    })
                }
            }


        ]
    },
    {
        name: 'Match Summary - Blue',
        width: 1920,
        height: 1080,
        url: 'https://aashwin.github.io/vcc-poster-generator/assets/bluematchsummary2024.jpg',
        fields: [
            { name: 'Title', options: { top: 162, left: 306, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#fff', originX: 'left', originY: 'center' } },
            { name: 'Subtitle', options: { top: 205, left: 306, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'normal', fill: '#dcfef9', originX: 'left', originY: 'center' } },
            { name: 'Team 1', options: { top: 336, left: 96, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#003f5a' } },
            { name: 'Team 2', options: { top: 672, left: 96, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#003f5a' } },
            { name: 'Team 1 Score', options: { top: 336, left: 1272, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#dcfef9', originX: 'right' } },
            { name: 'Team 1 Overs', template: '{{value}} overs', options: { top: 339, left: 945, fontFamily: 'Roboto', fontSize: '38', fontWeight: 'normal', fill: '#dcfef9' } },
            { name: 'Team 2 Score', options: { top: 674, left: 1272, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#dcfef9', originX: 'right' } },
            { name: 'Team 2 Overs', template: '{{value}} overs', options: { top: 676, left: 945, fontFamily: 'Roboto', fontSize: '38', fontWeight: 'normal', fill: '#dcfef9' } },

            { name: 'Team 1 Batsman 1', options: { top: 450, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Batsman 1 Score', options: { top: 450, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 1 Batsman 2', options: { top: 558, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Batsman 2 Score', options: { top: 558, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },

            { name: 'Team 1 Bowler 1', options: { top: 788, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Bowler 1 Score', options: { top: 788, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 1 Bowler 1 Overs', template: '{{value}} overs', options: { top: 825, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#c3dff8', originX: 'right' } },
            { name: 'Team 1 Bowler 2', options: { top: 896, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Bowler 2 Score', options: { top: 896, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 1 Bowler 2 Overs', template: '{{value}} overs', options: { top: 933, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#c3dff8', originX: 'right' } },

            { name: 'Team 2 Batsman 1', options: { top: 787, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Batsman 1 Score', options: { top: 788, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Batsman 2', options: { top: 896, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Batsman 2 Score', options: { top: 896, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Bowler 1', options: { top: 450, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Bowler 1 Score', options: { top: 450, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Bowler 2 Overs', template: '{{value}} overs', options: { top: 487, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#c3dff8', originX: 'right' } },
            { name: 'Team 2 Bowler 2', options: { top: 558, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Bowler 2 Score', options: { top: 558, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Bowler 2 Overs', template: '{{value}} overs', options: { top: 595, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#c3dff8', originX: 'right' } },

            {
                name: 'Man of The Match', template: 'Man of the Match: {{value}}', options: {
                    top: 453, left: 1580, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#003f5a', originX: 'center', shadow: new fabric.Shadow({
                        color: '#dcfef9',
                        blur: 2
                    })
                }
            },
            {
                name: 'Bottom Line', options: {
                    top: 1002, left: 700, fontFamily: 'Roboto', fontSize: '32', fontWeight: 'bold', fill: '#ffc200', originX: 'center', shadow: new fabric.Shadow({
                        color: '#000',
                        blur: 2
                    })
                }
            }


        ]
    },

    {
        name: 'Match Summary - Red',
        width: 1920,
        height: 1080,
        url: 'https://aashwin.github.io/vcc-poster-generator/assets/MatchSummary2024Red.jpg',
        fields: [
            { name: 'Title', options: { top: 162, left: 306, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#fff', originX: 'left', originY: 'center' } },
            { name: 'Subtitle', options: { top: 205, left: 306, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'normal', fill: '#ffcdc9', originX: 'left', originY: 'center' } },
            { name: 'Team 1', options: { top: 336, left: 96, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#431313' } },
            { name: 'Team 2', options: { top: 672, left: 96, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#431313' } },
            { name: 'Team 1 Score', options: { top: 336, left: 1272, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#ffd200', originX: 'right' } },
            { name: 'Team 1 Overs', template: '{{value}} overs', options: { top: 339, left: 945, fontFamily: 'Roboto', fontSize: '38', fontWeight: 'normal', fill: '#ffd200' } },
            { name: 'Team 2 Score', options: { top: 674, left: 1272, fontFamily: 'Roboto', fontSize: '45', fontWeight: 'bold', fill: '#ffd200', originX: 'right' } },
            { name: 'Team 2 Overs', template: '{{value}} overs', options: { top: 676, left: 945, fontFamily: 'Roboto', fontSize: '38', fontWeight: 'normal', fill: '#ffd200' } },

            { name: 'Team 1 Batsman 1', options: { top: 450, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Batsman 1 Score', options: { top: 450, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 1 Batsman 2', options: { top: 558, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Batsman 2 Score', options: { top: 558, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },

            { name: 'Team 1 Bowler 1', options: { top: 788, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Bowler 1 Score', options: { top: 788, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 1 Bowler 1 Overs', template: '{{value}} overs', options: { top: 825, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#ffd6d6', originX: 'right' } },
            { name: 'Team 1 Bowler 2', options: { top: 896, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 1 Bowler 2 Score', options: { top: 896, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 1 Bowler 2 Overs', template: '{{value}} overs', options: { top: 933, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#ffd6d6', originX: 'right' } },

            { name: 'Team 2 Batsman 1', options: { top: 787, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Batsman 1 Score', options: { top: 788, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Batsman 2', options: { top: 896, left: 96, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Batsman 2 Score', options: { top: 896, left: 650, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Bowler 1', options: { top: 450, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Bowler 1 Score', options: { top: 450, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Bowler 2 Overs', template: '{{value}} overs', options: { top: 487, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#ffd6d6', originX: 'right' } },
            { name: 'Team 2 Bowler 2', options: { top: 558, left: 740, fontFamily: 'Roboto', fontSize: '40', fontWeight: 'bold', fill: '#fff' } },
            { name: 'Team 2 Bowler 2 Score', options: { top: 558, left: 1270, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#fff', originX: 'right' } },
            { name: 'Team 2 Bowler 2 Overs', template: '{{value}} overs', options: { top: 595, left: 1267, fontFamily: 'Roboto', fontSize: '12', fontWeight: 'normal', fill: '#ffd6d6', originX: 'right' } },

            {
                name: 'Man of The Match', template: 'Man of the Match: {{value}}', options: {
                    top: 453, left: 1580, fontFamily: 'Roboto', fontSize: '30', fontWeight: 'bold', fill: '#431313', originX: 'center', shadow: new fabric.Shadow({
                        color: '#dcfef9',
                        blur: 2
                    })
                }
            },
            {
                name: 'Bottom Line', options: {
                    top: 1002, left: 700, fontFamily: 'Roboto', fontSize: '32', fontWeight: 'bold', fill: '#ffc200', originX: 'center', shadow: new fabric.Shadow({
                        color: '#000',
                        blur: 2
                    })
                }
            }


        ]
    },
    {
        name: 'Match Summary - Purple',
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

            {
                name: 'Man of The Match', template: 'MAN OF THE MATCH: {{value}}', options: {
                    top: 952, left: 1000, fontFamily: 'Roboto', fontSize: '30', fontWeight: '900', fill: '#b00000', originX: 'center', shadow: new fabric.Shadow({
                        color: '#fff',
                        blur: 10
                    })
                }
            },
            { name: 'Bottom Line', options: { top: 1012, left: 1000, fontFamily: 'Roboto', fontSize: '32', fontWeight: '900', fill: '#ffc200', originX: 'center' } }


        ]
    }];
