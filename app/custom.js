module.exports = {
    optional: {
        game: [440, 730],
        leaveComment: true,
        manualDecline: false,
        comment: "+REP Thanks for using my trading service!"
    },
    
    message: {
        welcome: "Salut [name], I hope you're having a wonderful day or night so far. Type help to get started.",
        donate: "Oh you want to donate? How nice of you! You can send a donation by clicking this link: [tradeurl]",
        trade: "You can send an offer here: [tradeurl]",
        owner: "My owner is [owner]",
        group: "Invitation to my group has been sent",
        discord: "You can join my Discord here: ",
        classifieds: "All our listnings both sell and buy orders can be found here: [bptflink]",
        
    },

    trade: {
        donate: "Thanks! I've received your donation and I'm trying to accept it. You will be notified when it has gone through.",
        accept: "I've recived your offer, and I'm trying to accept it. You will be notified when it has gone through.",
        decline: "I'm trying to decline your offer, make sure that you have added the right amount and that the price is right.",
        escrow: "I'm trying to decline your offer. Reason: you have escrow.",
        
        donation: "Thanks! I've received your donation and I'm trying to accept it.",
        accepted: "Success! The offer you sent has gone through! Thanks for trading with me!",
        declined: "Your offer has now been declined",
        invalid: "Error. Your offer is now invalid. Maybe try sending a new one?",
        items: "Error. Your or my items were taken by someone else, try to send a new one.",
        expired: "Error. Your offer has expired.",
        canceled: "Error. You canceled the offer."
    }
}
