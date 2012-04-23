Bannerx.panel.Home = function(config) {
    config = config || {};
    Ext.apply(config,{
        border: false
        ,baseCls: 'modx-formpanel'
        ,items: [{
            html: '<h2>'+_('bannerx.desc')+'</h2>'
            ,border: false
            ,cls: 'modx-page-header container'
        },{
            xtype: 'modx-tabs'
            ,id: 'bannerx-tabs'
            ,bodyStyle: 'padding: 10px'
            ,defaults: { border: false ,autoHeight: true }
			,stateful: true
			,stateId: 'bannerx-tabs'
			,stateEvents: ['tabchange']
			,getState:function() {
				return { activeTab:this.items.indexOf(this.getActiveTab()) };
			}
            ,items: [{
                title: _('bannerx.ads')
                ,id: 'bannerx-ads'
                ,border: false
                ,defaults: { autoHeight: true, border: false }
                ,items: [{
                    xtype: 'bannerx-grid-ads'
                    ,preventRender: true
                }]
            },{
                title: _('bannerx.positions')
                ,id: 'bannerx-positions'
                ,border: false
                ,defaults: { autoHeight: true, border: false }
                ,items: [{
                    xtype: 'bannerx-grid-positions'
                    ,preventRender: true
                }]
            },{
                title: _('bannerx.stats')
                ,id: 'bannerx-stats'
                ,border: false
                ,defaults: { autoHeight: true, border: false }
                ,items: [{
                    xtype: 'bannerx-panel-stats'
                    ,preventRender: true
                }]
            }]
        }]
    });
    Bannerx.panel.Home.superclass.constructor.call(this,config);
};
Ext.extend(Bannerx.panel.Home,MODx.Panel);
Ext.reg('bannerx-panel-home',Bannerx.panel.Home);
