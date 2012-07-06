define([
    "dojo/_base/declare",
    "dojo/has",
    "dojo/topic",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin"
], function(
    declare,
    has,
    topic,
    WidgetBase,
    TemplatedMixin
) {
    return declare([WidgetBase, TemplatedMixin], {
        
        go: function(url) {
            if(!has('native-history-state')) {
                window.location = url;
                return;
            }
            
            topic.publish('sirprize/dojod/_Partial/push-state', {
                state: {},
                title: '',
                url: url
            });
        }
    });
});