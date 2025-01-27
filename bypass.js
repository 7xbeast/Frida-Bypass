Java.perform(function () {
    console.log("looking for FridaCheckJNI.fridaCheck()");

    try {
        const FridaCheckJNI = Java.use('com.app.damnvulnerablebank.FridaCheckJNI');

        FridaCheckJNI.fridaCheck.implementation = function() {
            console.log("hooking fridaCheck().");
            var value = this.fridaCheck.call(this);
            console.log("fridaCheck() returned " + value);
            console.log("switching fridaCheck() to 0");
            return 0;  // Always return 0 to bypass checks
        };
    } catch (e) {
        console.log("Failed to hook fridaCheck: " + e.message);
    }
});
