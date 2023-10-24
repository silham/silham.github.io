const redirectDots = new TypeIt("#redirectDots", {
  strings: ". . . . . . . . . .",
  speed: 50,
  startDelay: 300,
  cursor: false,
  loop: false,
  afterComplete: function () {
    window.location.href = "/home.html";
  },
});

const redirectTxt = new TypeIt("#redirectTxt", {
  strings: "redirecting",
  speed: 0,
  startDelay: 300,
  cursor: false,
  loop: false,
  afterComplete: function () {
    redirectDots.go();
  },
});

const typeName = new TypeIt("#name", {
  strings: "Shakil <br class='block lg:hidden' />Ilham",
  speed: 200,
  startDelay: 500,
  cursor: false,
  loop: false,
  afterComplete: function () {
    console.log("name ok");
    document
      .getElementById("promptTerminal")
      .classList.add("promptTerminalAnimate");
    setTimeout(() => {
      prompt.go();
    }, 1000);
  },
});
const prompt = new TypeIt("#prompt", {
  strings:
    "$ Do you want to know more about Shakil Ilham? (yes or no) : <input type='text' name='usr_txt' id='usr_txt' class='ml-1 -mt-[3px] bg-transparent outline-none focuse:outline-none border-none text-white h-[30px] w-[80px]'> ",
  speed: 0,
  startDelay: 500,
  cursor: false,
  loop: false,
  afterComplete: function () {
    let promptField = document.getElementById("usr_txt");
    promptField.focus();
    let userInput = "test";
    promptField.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        promptField.blur();
        userInput = promptField.value;
        if (
          userInput.toLowerCase() == "y" ||
          userInput.toLowerCase() == "yes"
        ) {
          console.log("redirect");
          redirectTxt.go();
        } else if (
          userInput.toLowerCase() == "n" ||
          userInput.toLowerCase() == "no"
        ) {
          console.log("don't redirect");
        }
      }
    });
  },
});
new TypeIt("#writer", {
  speed: 80,
  startDelay: 800,
  loop: false,
  afterComplete: function () {
    console.log("sqlExecute ok");
    const cursor1 = document.querySelector(".ti-cursor");
    cursor1.style.display = "none";
    typeName.go();
  },
})
  .type('<span class="text-[#0099ff]">SELECT</span> *', { delay: 250 })
  .delete(1, { delay: 150 })
  .type('name <span class="text-[#0099ff]">FROM</span> students', {
    delay: 250,
  })
  .move(-8, { delay: 250 })
  .type("cs50x_", { delay: 250 })
  .move(8, { delay: 200 })
  .break({ delay: 100 })
  .type('<span class="text-[#0099ff]">WHERE </span>', { delay: 200 })
  .type('age=<span class="text-[#bbff99]">20</span> ', { delay: 150 })
  .type('<span class="text-[#0099ff]">OR</span> ', { delay: 100 })
  .type("country=Sri ", { delay: 200 })
  .delete(4, { delay: 200 })
  .type('<span class="text-[#bf8040]">&#39;Sri Lanka&#39;</span>', {
    delay: 300,
  })
  .move(-20, { delay: 100 })
  .delete(2, { delay: 100 })
  .type('<span class="text-[#0099ff]">AND</span>', { delay: 200 })
  .move(20, { delay: 200 })
  .break()
  .type('<span class="text-[#0099ff]">AND</span> ', { delay: 150 })
  .type(
    'email=<a class="text-[#bf8040]" href="mailto:ilhamshakil@gmail.com" target="_blank">&#39;ilhamshakil@gmail.com&#39;</a> ',
    {
      delay: 350,
    }
  )
  .type('<span class="text-[#0099ff]">AND</span> ', { delay: 150 })
  .type(
    'portfolio=<a class="text-[#bf8040]" href="https://silham.github.io/" target="_blank">&#39;silham.github.io&#39;</a>',
    {
      delay: 350,
    }
  )
  .break()
  .type(' <span class="text-[#0099ff]">AND</span> ', { delay: 200 })
  .type('likeCoding=<span class="text-[#0099ff]">TRUE</span>', {
    delay: 350,
  })
  .delete(4, { delay: 150 })
  .type('<span class="text-[#bbff99]">1</span> ', { delay: 100 })
  .type(' <span class="text-[#0099ff]">AND</span> ', { delay: 200 })
  .type('likesTraveling=<span class="text-[#bbff99]">1</span>', {
    delay: 200,
  })
  .type(' <span class="text-[#0099ff]">AND</span> ', { delay: 200 })
  .type('likesGaming=<span class="text-[#bbff99]">1</span>', {
    delay: 200,
  })
  .type(' <span class="text-[#0099ff]">AND</span> ', {
    delay: 200,
  })
  .type('likesChess=<span class="text-[#bbff99]">1</span>', {
    delay: 350,
  })
  .type(";")
  .go();

// Function to count lines
function countLines(el) {
  var divHeight = el.offsetHeight;
  var lineHeight = parseInt(
    window.getComputedStyle(el, null).getPropertyValue("line-height")
  );
  return divHeight / lineHeight;
}

var p1 = document.getElementById("writer");
var p2 = document.getElementById("sql");

var lineCount = countLines(p1);

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    var newLineCount = countLines(p1);
    if (newLineCount !== lineCount) {
      lineCount = newLineCount;

      var htmlString =
        "\n&nbsp;&nbsp;&centerdot;&centerdot;&centerdot;&gt;<br/>";
      p2.innerHTML += htmlString;
    }
  });
});

var config = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
};

observer.observe(p1, config);
