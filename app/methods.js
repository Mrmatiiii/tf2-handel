const config = require('./config')



var t = module.exports = {
    log: function(info) {
        return `${package.name} | `.green + `${moment().format('LTS')} `+
        `${info == "info" ? info.green : ""+info == "trade" ? info.magenta : ""+info == "warn" ? info.yellow : ""}:`
    },
    
    isDonation: function(offer) {
        return offer.itemsToGive.length === 0 && offer.itemsToReceive.length > 0;
    },

    isTF2: function(item) {
        return item.appid == 440;
    },
      
    isCraftable : function(item) {
        var desc = item.descriptions;
        if(!desc)
            return false;

        return desc.some((i) => {
            return !(i.value == '( Not Usable in Crafting )');
        });
    }
}
