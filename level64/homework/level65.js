//  davaleba 1
function გადავიდეთტესტში(შეფასებები, მოთხოვნა) {
    // გადმოცემული შეფასებები უნდა იყოს მასივი, ხოლო მოთხოვნა რიცხვი.
    if (!Array.isArray(შეფასებები) || typeof მოთხოვნა !== 'number') {
        throw new Error("არასწორი მონაცემები: გთხოვთ შეიტანოთ სწორი შეფასებები და მოთხოვნა.");
    }

    // ვამოწმებთ, თუ ერთი შეფასება მაინც აკმაყოფილებს მოთხოვნას
    const ჩაბარება = შეფასებები.some(შეფასება => შეფასება >= მოთხოვნა);

    return ჩაბარება ? "გადავიდეთ ტესტში" : "არ გადავიდეთ ტესტში";
}
const შეფასებები = [75, 80, 65]; // სტუდენტის შეფასებები
const მოთხოვნა = 70; // მინიმალური ქულა ტესტში გადასასვლელად

console.log(გადავიდეთტესტში(შეფასებები, მოთხოვნა)); // "გადავიდეთ ტესტში"



// davaleba 2
function canWeGoOut(isWeatherGood, isTimeSufficient, areWeReady) {
    // შევამოწმოთ პირობები: ამინდი კარგი უნდა იყოს ან დრო საკმარისი იყოს და მზად ვიყოთ
    if ((isWeatherGood || isTimeSufficient) && areWeReady) {
        return "Yes, we can go out.";
    } else {
        return "No, we cannot go out.";
    }
}
console.log(canWeGoOut(true, false, true)); // "Yes, we can go out."
console.log(canWeGoOut(false, false, true)); // "No, we cannot go out."
console.log(canWeGoOut(true, true, false)); // "No, we cannot go out."



// davaleba 3
// ფუნქცია "გადავდგათ თუ არა ნაბიჯი"
function shouldstepForward(barrier, accessiblespace, signalComing) {
    // თუ ბარიერი არ არის და წასასვლელი სივრცე ხელმისაწვდომია, ან მეორე მხარეს სიგნალი მოდის, დაბრუნდება true
    if (!barrier && accessiblespace || signalComing) {
        return true;
    }
    // სხვა შემთხვევაში დაბრუნდება false
    return false;
}
const barrier = false;
const accessiblespace = true;
const signalComing = false;

console.log(shouldstepForward(barrier, accessiblespace, signalComing)); // შედეგად უნდა დაბრუნდეს true


// davaleba 4
// ფუნქცია, რომელიც ამოწმებს, უნდა ავიღოთ თუ არა ნივთი
function shouldTakeItem(isAvailable, isAllowedToTake, isWantedBySomeoneElse) {
    // ამოწმებს, ყველა პირობა დადებითია თუ არა
    if (isAvailable && isAllowedToTake && !isWantedBySomeoneElse) {
        return true; // ნივთის აღება შესაძლებელია
    } else {
        return false; // ნივთის აღება შეუძლებელია
    }
}
const itemAvailable = true; // ნივთი ხელმისაწვდომია
const itemAllowedToTake = true; // ნივთის აღება დასაშვებია
const itemWantedBySomeoneElse = false; // ნივთი არავის სურს

console.log(shouldTakeItem(itemAvailable, itemAllowedToTake, itemWantedBySomeoneElse)); // true


// davaleba 5
function shouldRecallInformation(isRelevant, isNeeded, hasTimeToProcess) {
    // თუ ინფორმაცია აქტუალური, საჭიროა და დრო გვაქვს მისი დამუშავებისთვის
    if (isRelevant && isNeeded && hasTimeToProcess) {
        return true; // უნდა გავიხსენოთ ინფორმაცია
    }
    return false; // არ არის საჭირო ინფორმაციის გახსენება
}
const isRelevant = true; // ინფორმაცია აქტუალურია
const isNeeded = true; // ინფორმაცია ჯერ კიდევ საჭიროა
const hasTimeToProcess = false; // დრო არ გვაქვს

console.log(shouldRecallInformation(isRelevant, isNeeded, hasTimeToProcess));
// შედეგი: false



// davaleba 6
function shouldWeSleep(time, isTired, earlyWakeUp, isLightOff) {
    // Check if the time is late (e.g., after 10 PM)
    const isLate = time >= 22 || time < 6; // Assuming time is in 24-hour format

    // Determine if we should sleep based on the conditions
    if ((isLate && isTired) || (earlyWakeUp && isLightOff)) {
        return "Yes, you should go to sleep.";
    } else {
        return "No, you don\u2019t need to sleep right now.";
    }
}
const time = 23; // 11 PM
const isTired = true;
const earlyWakeUp = false;
const isLightOff = true;

console.log(shouldWeSleep(time, isTired, earlyWakeUp, isLightOff));



// davaleba 7
// ფუნქცია: "უნდა წავიდეთ თუ არა წვეულებაზე"
function shouldWeGoToParty(friendsAgree, noWorkTomorrow, isPartyNearby) {
    // თუ მეგობრები თანახმა არ არიან, მაშინ არ წავალთ
    if (!friendsAgree) {
        return "არ უნდა წავიდეთ - მეგობრები არ არიან თანახმა.";
    }

    // თუ მეორე დღეს სამუშაო გვაქვს და წვეულება შორს ტარდება, არ წავალთ
    if (!noWorkTomorrow && !isPartyNearby) {
        return "არ უნდა წავიდეთ - მეორე დღეს სამუშაო გვაქვს და წვეულება შორსაა.";
    }

    // თუ პირობები სრულდება, წავიდეთ
    return "უნდა წავიდეთ - ყველა პირობა სრულდება!";
}
console.log(shouldWeGoToParty(true, true, false)); // უნდა წავიდეთ - ყველა პირობა სრულდება!
console.log(shouldWeGoToParty(false, true, true)); // არ უნდა წავიდეთ - მეგობრები არ არიან თანახმა.
console.log(shouldWeGoToParty(true, false, false)); // არ უნდა წავიდეთ - მეორე დღეს სამუშაო გვაქვს და წვეულება შორსაა.


// davaleba 8
function shouldStayHome(weather, hasPlans) {
    if ((weather === "rainy" || weather === "snowy") && !hasPlans) {
      return true;  // დარჩით სახლში
    } else {
      return false; // წადი გარეთ
    }
  }
  let weather = "rainy"; // ან "snowy"
  let hasPlans = false;  // true თუ გეგმა გაქვთ გარეთ გასვლისთვის
  
  if (shouldStayHome(weather, hasPlans)) {
    console.log("უნდა დარჩე სახლში");
  } else {
    console.log("შეგიძლია გარეთ გახვიდე");
  }




// davaleba 9
function shouldGoForRun(weather, shoesAvailable, friendReady) {
    // weather არის სიმშრალე (true თუ მშრალია, false თუ არა)
    // shoesAvailable არის სიმართლე, თუ სპორტული ფეხსაცმელი ხელმისაწვდომია
    // friendReady არის სიმართლე, თუ მეგობარი მზად არის სირბილისთვის
  
    if (weather && (shoesAvailable || friendReady)) {
      return "გავიდეთ სირბილზე!";
    } else {
      return "არ უნდა გავიდეთ სირბილზე.";
    }
  }
  console.log(shouldGoForRun(true, true, false)); // "გავიდეთ სირბილზე!"
  console.log(shouldGoForRun(false, true, true)); // "არ უნდა გავიდეთ სირბილზე."



// davaleba 10
// ფუნქცია, რომელიც ამოწმებს, არის თუ არა დღეს შაბათი ან კვირა
function isWeekend(day) {
    return day === 'Saturday' || day === 'Sunday';
}

// ფუნქცია, რომელიც ამოწმებს, თუ გვაქვს სხვა საქმეები
function hasOtherTasks(tasks) {
    return tasks.length > 0;
}

// ფუნქცია, რომელიც ამოწმებს, თუ თამაში ჩვენი საყვარელი გუნდისაა
function isFavoriteTeamMatch(team, favoriteTeam) {
    return team === favoriteTeam;
}

// მთავარი ფუნქცია, რომელიც გადაამოწმებს ყველა პირობას
function shouldWatchFootball(day, tasks, team, favoriteTeam) {
    if (isWeekend(day) && !hasOtherTasks(tasks)) {
        return true; // ვუყუროთ ფეხბურთს
    } else if (isFavoriteTeamMatch(team, favoriteTeam)) {
        return true; // ვუყუროთ ფეხბურთს საყვარელი გუნდის თამაშს
    }
    return false; // არ ვუყუროთ ფეხბურთს
}
let today = 'Saturday';
let tasks = []; // სხვა საქმეები არ გვაქვს
let gameTeam = 'Barcelona';
let myFavoriteTeam = 'Barcelona';

console.log(shouldWatchFootball(today, tasks, gameTeam, myFavoriteTeam)); // true

tasks = ['Shopping']; // სხვა საქმეები გვაქვს
console.log(shouldWatchFootball(today, tasks, gameTeam, myFavoriteTeam)); // false

gameTeam = 'Barcelona';
console.log(shouldWatchFootball(today, tasks, gameTeam, myFavoriteTeam)); // false
