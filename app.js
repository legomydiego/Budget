var budgetController = (function() {

})();

var UIController = (function() {
    return {
        getInput: function() {
            return {
                type: document.querySelector('.add__type').value, //will be income or expense selected
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
        }
    };
})();

var controller = (function(budgetCtrl, UICtrl) {
    var ctrlAddItem = function() {
        //Get input data
        var input = UICtrl.getInput();
        console.log(input);
        //add the item to budget controller
        //add to the UI
        //Calculate Budget
        //display budget
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 ||event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);