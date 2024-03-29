import { j as e, a as s, T as a } from "./index-8890f4e2.js";
const t = () =>
    e("div", {
      className: "carousel-cards grid w-full h-full",
      children: s("div", {
        className: "carousel-outer flex items-center justify-center",
        s: !0,
        children: [
          e("div", {
            className:
              "carousel-card rounded-[10px] absolute flex justify-start bg-secondary pl-[5px]",
            style: { "--delay": "-1" },
            children: e("pre", {
              children: s("code", {
                className: "font-mono font-[300] italic",
                children: [
                  e("span", {
                    className: "text-[#FF8F40]",
                    children: "async function ",
                  }),
                  e("span", {
                    className: "text-[#FFB454]",
                    children: "getData() { ",
                  }),
                  e("span", { className: "text-[#FF8F40]", children: "try " }),
                  e("span", { className: "text-purple-500", children: "{" }),
                  e("br", {}),
                  e("span", {
                    className: "text-[#FF8F40]",
                    children: " const ",
                  }),
                  e("span", {
                    className: "text-dimWhite",
                    children: "response ",
                  }),
                  e("span", {
                    className: "text-[#FF8F40]",
                    children: "= await ",
                  }),
                  e("span", { className: "text-[#F07178]", children: "fetch" }),
                  e("span", { className: "text-[#59C2FF]", children: "(" }),
                  e("span", {
                    className: "text-[#AAD94C]",
                    children: '"https://jsonapis.com/"',
                  }),
                  e("span", { className: "text-[#59C2FF]", children: ")" }),
                  e("span", { className: "text-[#B8CFE680]", children: ";" }),
                  e("br", {}),
                  e("span", {
                    className: "text-[#FF8F40]",
                    children: " const ",
                  }),
                  e("span", { className: "text-dimWhite", children: "data " }),
                  e("span", {
                    className: "text-[#FF8F40]",
                    children: "= await ",
                  }),
                  e("span", {
                    className: "text-dimWhite",
                    children: "response",
                  }),
                  e("span", { className: "text-[#FFB454]", children: ".json" }),
                  e("span", { className: "text-[#59C2FF]", children: "()" }),
                  e("span", { className: "text-[#B8CFE680]", children: ";" }),
                  e("br", {}),
                  e("span", {
                    className: "text-dimWhite",
                    children: " console",
                  }),
                  e("span", { className: "text-[#FFB454]", children: ".log" }),
                  e("span", { className: "text-[#59C2FF]", children: "(" }),
                  e("span", { className: "text-dimWhite", children: "data" }),
                  e("span", { className: "text-[#59C2FF]", children: ")" }),
                  e("span", { className: "text-[#B8CFE680]", children: "; " }),
                  e("span", { className: "text-purple-500", children: "} " }),
                  e("span", {
                    className: "text-[#FF8F40]",
                    children: "catch ",
                  }),
                  e("span", { className: "text-purple-500", children: "(" }),
                  e("span", { className: "text-dimWhite", children: "error" }),
                  e("span", { className: "text-purple-500", children: ") {" }),
                  e("br", {}),
                  e("span", {
                    className: "text-dimWhite",
                    children: " console",
                  }),
                  e("span", {
                    className: "text-[#FFB454]",
                    children: ".error",
                  }),
                  e("span", { className: "text-[#59C2FF]", children: "(" }),
                  e("span", { className: "text-dimWhite", children: "error" }),
                  e("span", { className: "text-[#59C2FF]", children: ")" }),
                  e("span", { className: "text-[#B8CFE680]", children: "; " }),
                  e("br", {}),
                  e("span", { className: "text-purple-500", children: "}" }),
                  e("span", {
                    className: "text-[#FFB454]",
                    children: "} getData()",
                  }),
                  e("span", { className: "text-[#B8CFE680]", children: "; " }),
                  e("br", {}),
                ],
              }),
            }),
          }),
          e("div", {
            className:
              "carousel-card rounded-[10px] absolute flex justify-start bg-secondary pl-[5px]",
            style: { "--delay": "0" },
            children: e("pre", {
              children: s("code", {
                className: "font-mono font-[300] italic",
                children: [
                  e("span", { className: "text-dimWhite", children: "$name" }),
                  e("span", { className: "text-[#F29668]", children: " = " }),
                  e("span", {
                    className: "text-[#AAD94C]",
                    children: "'David'",
                  }),
                  e("span", {
                    className: "text-dimWhite",
                    children: "; $limit",
                  }),
                  e("span", { className: "text-[#F29668]", children: " = " }),
                  e("span", { className: "text-purple-300", children: "1" }),
                  e("span", { className: "text-dimWhite", children: ";" }),
                  e("br", {}),
                  e("span", { children: " " }),
                  e("span", { className: "text-dimWhite", children: "$stmt" }),
                  e("span", { className: "text-[#F29668]", children: " = " }),
                  e("span", {
                    className: "text-dimWhite",
                    children: "$mysqli",
                  }),
                  e("span", { className: "text-[#F29668]", children: "->" }),
                  e("span", {
                    className: "text-[#FF8F40]",
                    children: "prepare(",
                  }),
                  e("span", {
                    className: "text-[#AAD94C]",
                    children: "'SELECT age,",
                  }),
                  e("br", {}),
                  s("span", {
                    className: "text-[#AAD94C]",
                    children: [
                      "  ",
                      "address FROM students WHERE name = ? LIMIT ?'",
                    ],
                  }),
                  e("span", { className: "text-[#FF8F40]", children: ")" }),
                  e("span", { className: "text-dimWhite", children: ";" }),
                  e("br", {}),
                  e("span", { children: " " }),
                  e("span", { className: "text-dimWhite", children: "$stmt" }),
                  e("span", { className: "text-[#F29668]", children: "->" }),
                  e("span", {
                    className: "text-[#FFB454]",
                    children: "bind_param(",
                  }),
                  e("span", { className: "text-[#AAD94C]", children: "'si'" }),
                  e("span", {
                    className: "text-dimWhite",
                    children: ", $name",
                  }),
                  e("span", {
                    className: "text-dimWhite",
                    children: ", $limit",
                  }),
                  e("span", { className: "text-[#FFB454]", children: ")" }),
                  e("span", { className: "text-dimWhite", children: ";" }),
                  e("br", {}),
                  e("span", { children: " " }),
                  e("span", { className: "text-dimWhite", children: "$stmt" }),
                  e("span", { className: "text-[#F29668]", children: "->" }),
                  e("span", {
                    className: "text-[#FFB454]",
                    children: "execute()",
                  }),
                  e("span", { className: "text-dimWhite", children: ";" }),
                  e("br", {}),
                  e("span", { children: " " }),
                  e("span", { className: "text-dimWhite", children: "$stmt" }),
                  e("span", { className: "text-[#F29668]", children: "->" }),
                  e("span", {
                    className: "text-[#FFB454]",
                    children: "bind_result(",
                  }),
                  e("span", {
                    className: "text-dimWhite",
                    children: "$age, address",
                  }),
                  e("span", { className: "text-[#FFB454]", children: ")" }),
                  e("span", { className: "text-dimWhite", children: ";" }),
                ],
              }),
            }),
          }),
          e("div", {
            className:
              "carousel-card rounded-[10px] absolute flex justify-start bg-secondary pl-[5px]",
            style: { "--delay": "1" },
            children: e("pre", {
              children: s("code", {
                className: "font-mono font-[300] italic",
                children: [
                  e("span", {
                    className: "text-[#FF8F40]",
                    children: "const ",
                  }),
                  e("span", { className: "text-[#59C2FF]", children: "{ " }),
                  e("span", {
                    className: "text-dimWhite",
                    children: "value, checked ",
                  }),
                  e("span", { className: "text-[#59C2FF]", children: "} " }),
                  e("span", { className: "text-[#F29668]", children: "= " }),
                  e("span", {
                    className: "text-purple-400",
                    children: "event",
                  }),
                  e("span", {
                    className: "text-dimWhite",
                    children: ".target",
                  }),
                  e("span", { className: "text-[#ffffff50]", children: ";" }),
                  e("br", {}),
                  e("span", { className: "text-[#FF8F40]", children: "if " }),
                  e("span", { className: "text-[#59C2FF]", children: "(" }),
                  e("span", {
                    className: "text-dimWhite",
                    children: "checked",
                  }),
                  e("span", { className: "text-[#59C2FF]", children: ") {" }),
                  e("br", {}),
                  e("span", {
                    className: "text-[#FFB454]",
                    children: " setFilters(",
                  }),
                  e("span", { className: "text-purple-600", children: "(" }),
                  e("span", {
                    className: "text-purple-300",
                    children: "prevState",
                  }),
                  e("span", { className: "text-purple-600", children: ") " }),
                  e("span", { className: "text-[#F29668]", children: "=> " }),
                  e("span", { className: "text-purple-600", children: "[" }),
                  e("span", { className: "text-[#FF8F40]", children: "..." }),
                  e("span", {
                    className: "text-purple-300",
                    children: "prevState",
                  }),
                  e("span", {
                    className: "text-dimWhite",
                    children: ", value",
                  }),
                  e("span", { className: "text-purple-600", children: "]" }),
                  e("span", { className: "text-[#FFB454]", children: ")" }),
                  e("span", { className: "text-[#ffffff50]", children: ";" }),
                  e("br", {}),
                  e("span", { className: "text-[#59C2FF]", children: "} " }),
                  e("span", { className: "text-[#FF8F40]", children: "else " }),
                  e("span", { className: "text-[#59C2FF]", children: "{ " }),
                  e("br", {}),
                  e("span", {
                    className: "text-[#FFB454]",
                    children: " setFilters(",
                  }),
                  e("span", { className: "text-purple-600", children: "(" }),
                  e("span", {
                    className: "text-purple-300",
                    children: "prevState",
                  }),
                  e("span", { className: "text-purple-600", children: ") " }),
                  e("span", { className: "text-[#F29668]", children: "=> " }),
                  e("span", {
                    className: "text-purple-300",
                    children: "prevState",
                  }),
                  e("span", {
                    className: "text-[#FFB454]",
                    children: ".filter",
                  }),
                  e("span", { className: "text-purple-600", children: "(" }),
                  e("br", {}),
                  e("span", { className: "text-[#59C2FF]", children: "   (" }),
                  e("span", {
                    className: "text-purple-300",
                    children: "filter",
                  }),
                  e("span", { className: "text-[#59C2FF]", children: ") " }),
                  e("span", { className: "text-[#F29668]", children: "=> " }),
                  e("span", {
                    className: "text-purple-300",
                    children: "filter ",
                  }),
                  e("span", { className: "text-[#F29668]", children: "!== " }),
                  e("span", { className: "text-dimWhite", children: "value" }),
                  e("span", { className: "text-purple-600", children: ")" }),
                  e("span", { className: "text-[#FFB454]", children: ")" }),
                  e("span", { className: "text-[#ffffff50]", children: ";" }),
                  e("span", { className: "text-[#59C2FF]", children: "}" }),
                  e("br", {}),
                ],
              }),
            }),
          }),
          e("div", {
            className:
              "carousel-card rounded-[10px] absolute flex justify-start bg-secondary pl-[5px]",
            style: { "--delay": "2" },
            children: e("pre", {
              children: s("code", {
                className: "font-mono font-[300] italic text-dimWhite",
                children: [
                  e("span", { className: "text-[#FF8F40]", children: "if " }),
                  e("span", { className: "text-[#FFB454]", children: "(" }),
                  e("span", {
                    className: "text-[#F07178]",
                    children: "!empty",
                  }),
                  e("span", { className: "text-purple-600", children: "(" }),
                  e("span", {
                    className: "text-dimWhite",
                    children: "$_SERVER",
                  }),
                  e("span", { className: "text-[#59C2FF]", children: "[" }),
                  e("span", {
                    className: "text-[#AAD94C]",
                    children: "'HTTP_CLIENT_IP'",
                  }),
                  e("span", { className: "text-[#59C2FF]", children: "]" }),
                  e("span", { className: "text-purple-600", children: ")" }),
                  e("span", { className: "text-[#FFB454]", children: ") {" }),
                  e("br", {}),
                  "  $ip",
                  e("span", { className: "text-[#F29668]", children: " = " }),
                  "$_SERVER",
                  e("span", { className: "text-purple-600", children: "[" }),
                  e("span", {
                    className: "text-[#AAD94C]",
                    children: "'HTTP_CLIENT_IP'",
                  }),
                  e("span", { className: "text-purple-600", children: "]" }),
                  e("span", { className: "text-[#ffffff50]", children: ";" }),
                  e("br", {}),
                  e("span", { className: "text-[#FFB454]", children: "} " }),
                  e("span", {
                    className: "text-[#FF8F40]",
                    children: "elseif ",
                  }),
                  e("span", { className: "text-[#FFB454]", children: "(" }),
                  e("span", {
                    className: "text-[#F07178]",
                    children: "!empty",
                  }),
                  e("span", { className: "text-purple-600", children: "(" }),
                  e("span", {
                    className: "text-dimWhite",
                    children: "$_SERVER",
                  }),
                  e("span", { className: "text-[#59C2FF]", children: "[" }),
                  e("span", {
                    className: "text-[#AAD94C]",
                    children: "'HTTP_X_FORWARDED_FOR'",
                  }),
                  e("span", { className: "text-[#59C2FF]", children: "]" }),
                  e("span", { className: "text-purple-600", children: ")" }),
                  e("span", { className: "text-[#FFB454]", children: ") {" }),
                  e("br", {}),
                  "  $ip",
                  e("span", { className: "text-[#F29668]", children: " = " }),
                  "$_SERVER",
                  e("span", { className: "text-purple-600", children: "[" }),
                  e("span", {
                    className: "text-[#AAD94C]",
                    children: "'HTTP_X_FORWARDED_FOR'",
                  }),
                  e("span", { className: "text-purple-600", children: "]" }),
                  e("span", { className: "text-[#ffffff50]", children: ";" }),
                  e("br", {}),
                  e("span", { className: "text-[#FFB454]", children: "} " }),
                  e("span", {
                    className: "text-[#FF8F40]",
                    children: " elseif ",
                  }),
                  e("span", { className: "text-[#FFB454]", children: "{" }),
                  e("br", {}),
                  "  $ip",
                  e("span", { className: "text-[#F29668]", children: " = " }),
                  "$_SERVER",
                  e("span", { className: "text-purple-600", children: "[" }),
                  e("span", {
                    className: "text-[#AAD94C]",
                    children: "'HTTP_X_FORWARDED_FOR'",
                  }),
                  e("span", { className: "text-purple-600", children: "]" }),
                  e("span", { className: "text-[#ffffff50]", children: ";" }),
                  e("span", { className: "text-[#FFB454]", children: " }" }),
                  e("br", {}),
                ],
              }),
            }),
          }),
          e("div", {
            className:
              "carousel-card rounded-[10px] absolute flex justify-start bg-secondary pl-[5px]",
            style: { "--delay": "2" },
            children: e("pre", {
              children: s("code", {
                className: "font-mono font-[300] italic text-dimWhite",
                children: [
                  "$zip",
                  e("span", { className: "text-[#F29668]", children: " = " }),
                  e("span", { className: "text-[#FF8F40]", children: "new " }),
                  e("span", {
                    className: "text-[#59C2FF]",
                    children: "ZipArchive",
                  }),
                  e("span", { className: "text-[#ffffff50]", children: ";" }),
                  e("br", {}),
                  "$file",
                  e("span", { className: "text-[#F29668]", children: " = " }),
                  "$zip$zip",
                  e("span", { className: "text-[#F29668]", children: "->" }),
                  e("span", { className: "text-[#FFB454]", children: "open(" }),
                  e("span", {
                    className: "text-[#AAD94C]",
                    children: "'file.zip'",
                  }),
                  e("span", { className: "text-[#FFB454]", children: ")" }),
                  ";",
                  e("br", {}),
                  e("span", { className: "text-[#FF8F40]", children: "if " }),
                  e("span", { className: "text-[#FFB454]", children: "(" }),
                  "$file",
                  e("span", { className: "text-[#FFB454]", children: ") {" }),
                  e("br", {}),
                  "  $zip",
                  e("span", { className: "text-[#F29668]", children: "->" }),
                  e("span", {
                    className: "text-[#FFB454]",
                    children: "extractTo",
                  }),
                  e("span", { className: "text-purple-600", children: "(" }),
                  e("span", {
                    className: "text-[#73B8FF]",
                    children: "'/extract_path/'",
                  }),
                  e("span", { className: "text-purple-600", children: ")" }),
                  e("span", { className: "text-[#ffffff50]", children: ";" }),
                  e("br", {}),
                  "  $zip",
                  e("span", { className: "text-[#F29668]", children: "->" }),
                  e("span", { className: "text-[#FFB454]", children: "close" }),
                  e("span", { className: "text-purple-600", children: "()" }),
                  e("span", { className: "text-[#ffffff50]", children: ";" }),
                  e("br", {}),
                  "  ",
                  e("span", { className: "text-[#F07178]", children: "echo " }),
                  e("span", {
                    className: "text-[#AAD94C]",
                    children: "'Archive extracted successfully!'",
                  }),
                  e("span", { className: "text-[#ffffff50]", children: "; " }),
                  e("span", { className: "text-[#FFB454]", children: "}" }),
                  e("br", {}),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  c = () =>
    s("div", {
      className:
        "mx-4 ss:mx-20 flex flex-1 items-center flex-row w-full h-full",
      children: [
        s("div", {
          className:
            "w-full h-full flex flex-1 flex-col justify-center items-start",
          children: [
            s("div", {
              className: "flex justify-start flex-col",
              children: [
                e("h4", {
                  className:
                    "text-[16px] ss:text-[18px] text-[#E5E9F0] leading-2 ss;leading-5",
                  children: "Hi all. I am",
                }),
                e("h1", {
                  className:
                    "text-[42px] xs:text-[48px] ss:text-[52px] md:text-[62px] text-[#E5E9F0] leading-[60px] ss:leading-[80px] letter-spacing-h",
                  children: "Shakil Ilham",
                }),
                s("h2", {
                  className:
                    "text-[24px] ss:text-[28px] md:text-[32px ] text-[#4D5BCE] leading-[28px] ss:leading-[40px] letter-spacing-h flex flex-row ",
                  children: [
                    e("span", { children: "> " }),
                    e("span", {
                      className: "ml-2",
                      children: e(a, {
                        options: {
                          strings: [
                            "front-end developer",
                            "UI/UX designer",
                            "photographer",
                          ],
                          autoStart: !0,
                          loop: !0,
                        },
                      }),
                    }),
                  ],
                }),
              ],
            }),
            s("div", {
              className: "flex justify-start flex-col mt-[5rem]",
              children: [
                s("p", {
                  className: "text-[14px] text-[#6C8AA8] leading-4",
                  children: [
                    "// transforming ideas into digital reality ",
                    e("br", {}),
                    "// browse my gitHub for innovative ideas and techniques",
                  ],
                }),
                s("p", {
                  children: [
                    e("span", {
                      className: "text-[#4D5BCE]",
                      children: "const ",
                    }),
                    e("span", {
                      className: "text-[#43D9AD]",
                      children: "githubLink ",
                    }),
                    e("span", { className: "text-[#FFFFFF]", children: "= " }),
                    e("span", {
                      className: "text-[#E99287]",
                      children: e("a", {
                        href: "#",
                        children: "“https://github.com/silham”",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e("div", {
          className:
            "w-full h-full ss:flex flex-[0.65] md:flex-[0.8] xl:flex-1 hidden",
          children: e(t, {}),
        }),
      ],
    });
export { c as default };
