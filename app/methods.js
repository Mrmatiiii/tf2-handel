const config = require('./config')



var t = module.exports = {
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
