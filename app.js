/* دالة نسخة 1
// تعريف دالة car ككائن مصنع
function car(brand, color) {
    // الخصائص
    let speed = 0; // السرعة الحالية
    let isRunning = false; // حالة تشغيل السيارة

    // العمليات أو الوظائف
    return {
        // عرض تفاصيل السيارة
        details: function() {
            console.log(`Car Brand: ${brand}, Color: ${color}, Current Speed: ${speed} km/h`);
        },

        // بدء تشغيل السيارة
        start: function() {
            if (isRunning) {
                console.log("The car is already running!");
            } else {
                isRunning = true;
                console.log("The car has started.");
            }
        },

        // إيقاف تشغيل السيارة
        stop: function() {
            if (!isRunning) {
                console.log("The car is already stopped!");
            } else {
                isRunning = false;
                speed = 0; // إعادة السرعة إلى 0 عند التوقف
                console.log("The car has stopped.");
            }
        },

        // تغيير السرعة
        accelerate: function(amount) {
            if (!isRunning) {
                console.log("You need to start the car first!");
            } else {
                speed += amount;
                console.log(`The car accelerated to ${speed} km/h.`);
            }
        },

        // تخفيض السرعة
        brake: function(amount) {
            if (!isRunning) {
                console.log("The car is not running!");
            } else {
                speed -= amount;
                if (speed < 0) speed = 0; // تجنب السرعات السالبة
                console.log(`The car slowed down to ${speed} km/h.`);
            }
        }
    };
}

// إنشاء سيارة جديدة
const myCar = car("Toyota", "Red");

// استخدام الوظائف
myCar.details();      // تفاصيل السيارة
myCar.start();        // تشغيل السيارة
myCar.accelerate(50); // زيادة السرعة
myCar.brake(20);      // تخفيض السرعة
myCar.details();      // عرض التفاصيل مرة أخرى
myCar.stop();         // إيقاف السيارة
*/


//نسخة محدثة 2

function car(brand, color, fuelCapacity = 50, tireHealth = 100) {
    // الخصائص
    let speed = 0; // السرعة الحالية
    let isRunning = false; // حالة تشغيل السيارة
    let fuel = fuelCapacity; // كمية الوقود الحالية (بالليتر)
    let tires = tireHealth; // حالة الإطارات (نسبة مئوية)

    // العمليات أو الوظائف
    return {
        // عرض تفاصيل السيارة
        details: function () {
            console.log(`
                Car Brand: ${brand}, 
                Color: ${color}, 
                Current Speed: ${speed} km/h, 
                Fuel: ${fuel}L, 
                Tire Health: ${tires}%
            `);
        },

        // بدء تشغيل السيارة
        start: function () {
            if (fuel <= 0) {
                console.log("Cannot start the car. No fuel!");
            } else if (isRunning) {
                console.log("The car is already running!");
            } else {
                isRunning = true;
                console.log("The car has started.");
            }
        },

        // إيقاف تشغيل السيارة
        stop: function () {
            if (!isRunning) {
                console.log("The car is already stopped!");
            } else {
                isRunning = false;
                speed = 0; // إعادة السرعة إلى 0 عند التوقف
                console.log("The car has stopped.");
            }
        },

        // زيادة السرعة
        accelerate: function (amount) {
            if (!isRunning) {
                console.log("You need to start the car first!");
            } else if (fuel <= 0) {
                console.log("Cannot accelerate. No fuel!");
            } else {
                speed += amount;
                fuel -= amount * 0.1; // استهلاك الوقود عند التسارع
                if (fuel < 0) fuel = 0;
                tires -= amount * 0.05; // تدهور الإطارات مع السرعة
                if (tires < 0) tires = 0;
                console.log(`The car accelerated to ${speed} km/h. Fuel left: ${fuel.toFixed(1)}L.`);
            }
        },

        // تخفيض السرعة
        brake: function (amount) {
            if (!isRunning) {
                console.log("The car is not running!");
            } else {
                speed -= amount;
                if (speed < 0) speed = 0; // تجنب السرعات السالبة
                console.log(`The car slowed down to ${speed} km/h.`);
            }
        },

        // تعبئة الوقود
        refuel: function (amount) {
            if (amount <= 0) {
                console.log("Invalid amount of fuel!");
            } else {
                fuel += amount;
                if (fuel > fuelCapacity) fuel = fuelCapacity;
                console.log(`The car has been refueled. Fuel now: ${fuel}L.`);
            }
        },

        // إصلاح الإطارات
        repairTires: function () {
            tires = 100; // استعادة الإطارات إلى حالتها الأصلية
            console.log("The tires have been repaired. Tire Health: 100%.");
        }
    };
}

// إنشاء سيارة جديدة
const myCar = car("Toyota", "Blue", 60, 90);

// استخدام الوظائف
myCar.details();       // عرض التفاصيل
myCar.start();         // تشغيل السيارة
myCar.accelerate(50);  // زيادة السرعة
myCar.brake(20);       // تخفيض السرعة
myCar.details();       // عرض التفاصيل بعد التحديث
myCar.refuel(20);      // تعبئة الوقود
myCar.repairTires();   // إصلاح الإطارات
myCar.stop();          // إيقاف السيارة


// 

