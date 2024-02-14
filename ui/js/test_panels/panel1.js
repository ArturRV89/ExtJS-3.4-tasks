function buttonTest() {
    return new Ext.Button({
        text: 'Button №2',
        id: 'button2',
        handler: function () {
            Ext.getCmp('button2').hide();

            setTimeout(function () {
                Ext.getCmp('button1').show();
            }, 1500)
        }
    });
}

panel1 = new Ext.Panel({
    title: 'Задание 1',
    listeners: {
        scope: this,
        activate: function (a) {
            console.log('activate');
            a.doLayout();
        }
    },
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'panel',
            autoHeight: true,
            padding: 10,
            style: {
                fontWeight: 'bold',
                fontSize: '14px',
                color: 'green'
            },
            html: [
                '<p>Динамическое создание кнопок.</p>',
                'Добавить кнопку, при нажатии на которую, внизу будет появлятся такая же кнопка.',
                'При этом нажатая кнопка деактивируется через 3 секунды после нажатия'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            id: 'main',
            items: [
                {
                    xtype: 'button',
                    text: 'Button №1',
                    id: 'button1',
                    handler: function () {
                        let panel = Ext.getCmp('main');
                        let button = buttonTest();

                        panel.add(button);
                        panel.doLayout();

                        setTimeout(function () {
                            Ext.getCmp('button1').hide();
                        },2000)
                    }
                }
            ]
        }
    ]
});

