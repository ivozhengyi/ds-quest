window.REVIEW_QUESTIONS = [
  {
    "id": "R1-triangle-v1",
    "chapter": 1,
    "mode": "review",
    "family": "R1-triangle",
    "variant": 1,
    "title": "精确频度：for(i=1;i<=n;i++) for(j=1;j<=i;j++) @; 当 n=6。写出 @ 次数与渐近时间。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      3,
      14,
      21
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "固定 i 时内层执行 i 次。\nf(n)=1+2+…+n=n(n+1)/2；代入 n=6 得 21。\n保留最高阶，时间 O(n²)。",
    "solution": [
      "固定 i 时内层执行 i 次。",
      "f(n)=1+2+…+n=n(n+1)/2；代入 n=6 得 21。",
      "保留最高阶，时间 O(n²)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "本次 @ 执行次数",
        "answer": "21",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n²)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先数@这个动作，而不是数循环判断。",
      "plan": [
        "固定i，内层从1到i，写成1+2+…+n。",
        "代入给定n求整数次数；时间级别另取最高增长项。"
      ],
      "format": "第一空填整数次数，第二空写O(...)。"
    },
    "worked": [
      {
        "caption": "先固定外层i，再累计@次数",
        "heads": [
          "i",
          "本轮内层次数",
          "累计@次数"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "2",
            "3"
          ],
          [
            "3",
            "3",
            "6"
          ],
          [
            "4",
            "4",
            "10"
          ],
          [
            "5",
            "5",
            "15"
          ],
          [
            "6",
            "6",
            "21"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R1-triangle-v2",
    "chapter": 1,
    "mode": "review",
    "family": "R1-triangle",
    "variant": 2,
    "title": "精确频度：for(i=1;i<=n;i++) for(j=1;j<=i;j++) @; 当 n=11。写出 @ 次数与渐近时间。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      3,
      14,
      21
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "固定 i 时内层执行 i 次。\nf(n)=1+2+…+n=n(n+1)/2；代入 n=11 得 66。\n保留最高阶，时间 O(n²)。",
    "solution": [
      "固定 i 时内层执行 i 次。",
      "f(n)=1+2+…+n=n(n+1)/2；代入 n=11 得 66。",
      "保留最高阶，时间 O(n²)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "本次 @ 执行次数",
        "answer": "66",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n²)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先数@这个动作，而不是数循环判断。",
      "plan": [
        "固定i，内层从1到i，写成1+2+…+n。",
        "代入给定n求整数次数；时间级别另取最高增长项。"
      ],
      "format": "第一空填整数次数，第二空写O(...)。"
    },
    "worked": [
      {
        "caption": "先固定外层i，再累计@次数",
        "heads": [
          "i",
          "本轮内层次数",
          "累计@次数"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "2",
            "3"
          ],
          [
            "3",
            "3",
            "6"
          ],
          [
            "4",
            "4",
            "10"
          ],
          [
            "5",
            "5",
            "15"
          ],
          [
            "6",
            "6",
            "21"
          ],
          [
            "7",
            "7",
            "28"
          ],
          [
            "8",
            "8",
            "36"
          ],
          [
            "9",
            "9",
            "45"
          ],
          [
            "10",
            "10",
            "55"
          ],
          [
            "11",
            "11",
            "66"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R1-triangle-v3",
    "chapter": 1,
    "mode": "review",
    "family": "R1-triangle",
    "variant": 3,
    "title": "精确频度：for(i=1;i<=n;i++) for(j=1;j<=i;j++) @; 当 n=20。写出 @ 次数与渐近时间。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      3,
      14,
      21
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "固定 i 时内层执行 i 次。\nf(n)=1+2+…+n=n(n+1)/2；代入 n=20 得 210。\n保留最高阶，时间 O(n²)。",
    "solution": [
      "固定 i 时内层执行 i 次。",
      "f(n)=1+2+…+n=n(n+1)/2；代入 n=20 得 210。",
      "保留最高阶，时间 O(n²)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "本次 @ 执行次数",
        "answer": "210",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n²)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先数@这个动作，而不是数循环判断。",
      "plan": [
        "固定i，内层从1到i，写成1+2+…+n。",
        "代入给定n求整数次数；时间级别另取最高增长项。"
      ],
      "format": "第一空填整数次数，第二空写O(...)。"
    },
    "worked": [
      {
        "caption": "先固定外层i，再累计@次数",
        "heads": [
          "i",
          "本轮内层次数",
          "累计@次数"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "2",
            "3"
          ],
          [
            "3",
            "3",
            "6"
          ],
          [
            "4",
            "4",
            "10"
          ],
          [
            "5",
            "5",
            "15"
          ],
          [
            "6",
            "6",
            "21"
          ],
          [
            "7",
            "7",
            "28"
          ],
          [
            "8",
            "8",
            "36"
          ],
          [
            "9",
            "9",
            "45"
          ],
          [
            "10",
            "10",
            "55"
          ],
          [
            "11",
            "11",
            "66"
          ],
          [
            "12",
            "12",
            "78"
          ],
          [
            "13",
            "13",
            "91"
          ],
          [
            "14",
            "14",
            "105"
          ],
          [
            "15",
            "15",
            "120"
          ],
          [
            "16",
            "16",
            "136"
          ],
          [
            "17",
            "17",
            "153"
          ],
          [
            "18",
            "18",
            "171"
          ],
          [
            "19",
            "19",
            "190"
          ],
          [
            "20",
            "20",
            "210"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R1-triangle-v4",
    "chapter": 1,
    "mode": "review",
    "family": "R1-triangle",
    "variant": 4,
    "title": "精确频度：for(i=1;i<=n;i++) for(j=1;j<=i;j++) @; 当 n=31。写出 @ 次数与渐近时间。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      3,
      14,
      21
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "固定 i 时内层执行 i 次。\nf(n)=1+2+…+n=n(n+1)/2；代入 n=31 得 496。\n保留最高阶，时间 O(n²)。",
    "solution": [
      "固定 i 时内层执行 i 次。",
      "f(n)=1+2+…+n=n(n+1)/2；代入 n=31 得 496。",
      "保留最高阶，时间 O(n²)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "本次 @ 执行次数",
        "answer": "496",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n²)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先数@这个动作，而不是数循环判断。",
      "plan": [
        "固定i，内层从1到i，写成1+2+…+n。",
        "代入给定n求整数次数；时间级别另取最高增长项。"
      ],
      "format": "第一空填整数次数，第二空写O(...)。"
    },
    "worked": [
      {
        "caption": "先固定外层i，再累计@次数",
        "heads": [
          "i",
          "本轮内层次数",
          "累计@次数"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "2",
            "3"
          ],
          [
            "3",
            "3",
            "6"
          ],
          [
            "4",
            "4",
            "10"
          ],
          [
            "5",
            "5",
            "15"
          ],
          [
            "6",
            "6",
            "21"
          ],
          [
            "7",
            "7",
            "28"
          ],
          [
            "8",
            "8",
            "36"
          ],
          [
            "9",
            "9",
            "45"
          ],
          [
            "10",
            "10",
            "55"
          ],
          [
            "11",
            "11",
            "66"
          ],
          [
            "12",
            "12",
            "78"
          ],
          [
            "13",
            "13",
            "91"
          ],
          [
            "14",
            "14",
            "105"
          ],
          [
            "15",
            "15",
            "120"
          ],
          [
            "16",
            "16",
            "136"
          ],
          [
            "17",
            "17",
            "153"
          ],
          [
            "18",
            "18",
            "171"
          ],
          [
            "19",
            "19",
            "190"
          ],
          [
            "20",
            "20",
            "210"
          ],
          [
            "21",
            "21",
            "231"
          ],
          [
            "22",
            "22",
            "253"
          ],
          [
            "23",
            "23",
            "276"
          ],
          [
            "24",
            "24",
            "300"
          ],
          [
            "25",
            "25",
            "325"
          ],
          [
            "26",
            "26",
            "351"
          ],
          [
            "27",
            "27",
            "378"
          ],
          [
            "28",
            "28",
            "406"
          ],
          [
            "29",
            "29",
            "435"
          ],
          [
            "30",
            "30",
            "465"
          ],
          [
            "31",
            "31",
            "496"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R1-triple-v1",
    "chapter": 1,
    "mode": "review",
    "family": "R1-triple",
    "variant": 1,
    "title": "精确频度：for i=1..n，for j=1..n，for k=1..j 执行 @。当 n=5，分别求次数和时间级别。",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      31
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "每个 i 对应 Σj=n(n+1)/2 次，外层再乘 n。\nf(n)=n²(n+1)/2，n=5 时为 75。\n时间 O(n³)。",
    "solution": [
      "每个 i 对应 Σj=n(n+1)/2 次，外层再乘 n。",
      "f(n)=n²(n+1)/2，n=5 时为 75。",
      "时间 O(n³)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "75",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n³)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "内层次数随j变，不能把三层一律当n³次。",
      "plan": [
        "先对j=1..n求和，再乘外层i的n轮。",
        "精确次数与渐近时间分开写，别丢低次项的精确贡献。"
      ],
      "format": "先写@的次数，再填时间复杂度。"
    },
    "worked": [
      {
        "caption": "固定一个i时，k的次数按j相加；这样的i共n个",
        "heads": [
          "j",
          "本轮k执行次数",
          "当前i累计"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "2",
            "3"
          ],
          [
            "3",
            "3",
            "6"
          ],
          [
            "4",
            "4",
            "10"
          ],
          [
            "5",
            "5",
            "15"
          ]
        ]
      }
    ],
    "walkthrough": [
      "每个i的内层合计15，一共有5个i，因此总次数5×15=75。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R1-triple-v2",
    "chapter": 1,
    "mode": "review",
    "family": "R1-triple",
    "variant": 2,
    "title": "精确频度：for i=1..n，for j=1..n，for k=1..j 执行 @。当 n=9，分别求次数和时间级别。",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      31
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "每个 i 对应 Σj=n(n+1)/2 次，外层再乘 n。\nf(n)=n²(n+1)/2，n=9 时为 405。\n时间 O(n³)。",
    "solution": [
      "每个 i 对应 Σj=n(n+1)/2 次，外层再乘 n。",
      "f(n)=n²(n+1)/2，n=9 时为 405。",
      "时间 O(n³)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "405",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n³)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "内层次数随j变，不能把三层一律当n³次。",
      "plan": [
        "先对j=1..n求和，再乘外层i的n轮。",
        "精确次数与渐近时间分开写，别丢低次项的精确贡献。"
      ],
      "format": "先写@的次数，再填时间复杂度。"
    },
    "worked": [
      {
        "caption": "固定一个i时，k的次数按j相加；这样的i共n个",
        "heads": [
          "j",
          "本轮k执行次数",
          "当前i累计"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "2",
            "3"
          ],
          [
            "3",
            "3",
            "6"
          ],
          [
            "4",
            "4",
            "10"
          ],
          [
            "5",
            "5",
            "15"
          ],
          [
            "6",
            "6",
            "21"
          ],
          [
            "7",
            "7",
            "28"
          ],
          [
            "8",
            "8",
            "36"
          ],
          [
            "9",
            "9",
            "45"
          ]
        ]
      }
    ],
    "walkthrough": [
      "每个i的内层合计45，一共有9个i，因此总次数9×45=405。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R1-triple-v3",
    "chapter": 1,
    "mode": "review",
    "family": "R1-triple",
    "variant": 3,
    "title": "精确频度：for i=1..n，for j=1..n，for k=1..j 执行 @。当 n=12，分别求次数和时间级别。",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      31
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "每个 i 对应 Σj=n(n+1)/2 次，外层再乘 n。\nf(n)=n²(n+1)/2，n=12 时为 936。\n时间 O(n³)。",
    "solution": [
      "每个 i 对应 Σj=n(n+1)/2 次，外层再乘 n。",
      "f(n)=n²(n+1)/2，n=12 时为 936。",
      "时间 O(n³)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "936",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n³)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "内层次数随j变，不能把三层一律当n³次。",
      "plan": [
        "先对j=1..n求和，再乘外层i的n轮。",
        "精确次数与渐近时间分开写，别丢低次项的精确贡献。"
      ],
      "format": "先写@的次数，再填时间复杂度。"
    },
    "worked": [
      {
        "caption": "固定一个i时，k的次数按j相加；这样的i共n个",
        "heads": [
          "j",
          "本轮k执行次数",
          "当前i累计"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "2",
            "3"
          ],
          [
            "3",
            "3",
            "6"
          ],
          [
            "4",
            "4",
            "10"
          ],
          [
            "5",
            "5",
            "15"
          ],
          [
            "6",
            "6",
            "21"
          ],
          [
            "7",
            "7",
            "28"
          ],
          [
            "8",
            "8",
            "36"
          ],
          [
            "9",
            "9",
            "45"
          ],
          [
            "10",
            "10",
            "55"
          ],
          [
            "11",
            "11",
            "66"
          ],
          [
            "12",
            "12",
            "78"
          ]
        ]
      }
    ],
    "walkthrough": [
      "每个i的内层合计78，一共有12个i，因此总次数12×78=936。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R1-geometric-v1",
    "chapter": 1,
    "mode": "review",
    "family": "R1-geometric",
    "variant": 1,
    "title": "i=1; while(i<=64) { @; i=i*2; }。注意 <=，求精确次数与时间复杂度（将上界记为 n）。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      14,
      31
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "i 的取值是 1,2,4,…，直到超过 64。\n次数=⌊log_2(64)⌋+1=7。\n底数为常数不改变 O(log n)。",
    "solution": [
      "i 的取值是 1,2,4,…，直到超过 64。",
      "次数=⌊log_2(64)⌋+1=7。",
      "底数为常数不改变 O(log n)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "7",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(log n)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "找出循环实际执行时i的每一个值。",
      "plan": [
        "从1开始依次乘给定底数，只数不超过上界的值。",
        "特别检查恰好等于上界的一轮也执行，再总结对数级。"
      ],
      "format": "次数填整数；复杂度把上界重新记作n。"
    },
    "worked": [
      {
        "caption": "每个合法i对应一次@，注意等于上界也算",
        "heads": [
          "轮次",
          "进入循环时i",
          "动作"
        ],
        "rows": [
          [
            "1",
            "1",
            "执行@，再乘2"
          ],
          [
            "2",
            "2",
            "执行@，再乘2"
          ],
          [
            "3",
            "4",
            "执行@，再乘2"
          ],
          [
            "4",
            "8",
            "执行@，再乘2"
          ],
          [
            "5",
            "16",
            "执行@，再乘2"
          ],
          [
            "6",
            "32",
            "执行@，再乘2"
          ],
          [
            "7",
            "64",
            "执行@，再乘2"
          ],
          [
            "停止",
            "128",
            "已经超过上界，不执行@"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R1-geometric-v2",
    "chapter": 1,
    "mode": "review",
    "family": "R1-geometric",
    "variant": 2,
    "title": "i=1; while(i<=81) { @; i=i*3; }。注意 <=，求精确次数与时间复杂度（将上界记为 n）。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      14,
      31
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "i 的取值是 1,3,9,…，直到超过 81。\n次数=⌊log_3(81)⌋+1=5。\n底数为常数不改变 O(log n)。",
    "solution": [
      "i 的取值是 1,3,9,…，直到超过 81。",
      "次数=⌊log_3(81)⌋+1=5。",
      "底数为常数不改变 O(log n)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "5",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(log n)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "找出循环实际执行时i的每一个值。",
      "plan": [
        "从1开始依次乘给定底数，只数不超过上界的值。",
        "特别检查恰好等于上界的一轮也执行，再总结对数级。"
      ],
      "format": "次数填整数；复杂度把上界重新记作n。"
    },
    "worked": [
      {
        "caption": "每个合法i对应一次@，注意等于上界也算",
        "heads": [
          "轮次",
          "进入循环时i",
          "动作"
        ],
        "rows": [
          [
            "1",
            "1",
            "执行@，再乘3"
          ],
          [
            "2",
            "3",
            "执行@，再乘3"
          ],
          [
            "3",
            "9",
            "执行@，再乘3"
          ],
          [
            "4",
            "27",
            "执行@，再乘3"
          ],
          [
            "5",
            "81",
            "执行@，再乘3"
          ],
          [
            "停止",
            "243",
            "已经超过上界，不执行@"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R1-geometric-v3",
    "chapter": 1,
    "mode": "review",
    "family": "R1-geometric",
    "variant": 3,
    "title": "i=1; while(i<=100) { @; i=i*4; }。注意 <=，求精确次数与时间复杂度（将上界记为 n）。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      14,
      31
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "i 的取值是 1,4,16,…，直到超过 100。\n次数=⌊log_4(100)⌋+1=4。\n底数为常数不改变 O(log n)。",
    "solution": [
      "i 的取值是 1,4,16,…，直到超过 100。",
      "次数=⌊log_4(100)⌋+1=4。",
      "底数为常数不改变 O(log n)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "4",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(log n)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "找出循环实际执行时i的每一个值。",
      "plan": [
        "从1开始依次乘给定底数，只数不超过上界的值。",
        "特别检查恰好等于上界的一轮也执行，再总结对数级。"
      ],
      "format": "次数填整数；复杂度把上界重新记作n。"
    },
    "worked": [
      {
        "caption": "每个合法i对应一次@，注意等于上界也算",
        "heads": [
          "轮次",
          "进入循环时i",
          "动作"
        ],
        "rows": [
          [
            "1",
            "1",
            "执行@，再乘4"
          ],
          [
            "2",
            "4",
            "执行@，再乘4"
          ],
          [
            "3",
            "16",
            "执行@，再乘4"
          ],
          [
            "4",
            "64",
            "执行@，再乘4"
          ],
          [
            "停止",
            "256",
            "已经超过上界，不执行@"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R1-geometric-v4",
    "chapter": 1,
    "mode": "review",
    "family": "R1-geometric",
    "variant": 4,
    "title": "i=1; while(i<=255) { @; i=i*2; }。注意 <=，求精确次数与时间复杂度（将上界记为 n）。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      14,
      31
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "i 的取值是 1,2,4,…，直到超过 255。\n次数=⌊log_2(255)⌋+1=8。\n底数为常数不改变 O(log n)。",
    "solution": [
      "i 的取值是 1,2,4,…，直到超过 255。",
      "次数=⌊log_2(255)⌋+1=8。",
      "底数为常数不改变 O(log n)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "8",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(log n)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "找出循环实际执行时i的每一个值。",
      "plan": [
        "从1开始依次乘给定底数，只数不超过上界的值。",
        "特别检查恰好等于上界的一轮也执行，再总结对数级。"
      ],
      "format": "次数填整数；复杂度把上界重新记作n。"
    },
    "worked": [
      {
        "caption": "每个合法i对应一次@，注意等于上界也算",
        "heads": [
          "轮次",
          "进入循环时i",
          "动作"
        ],
        "rows": [
          [
            "1",
            "1",
            "执行@，再乘2"
          ],
          [
            "2",
            "2",
            "执行@，再乘2"
          ],
          [
            "3",
            "4",
            "执行@，再乘2"
          ],
          [
            "4",
            "8",
            "执行@，再乘2"
          ],
          [
            "5",
            "16",
            "执行@，再乘2"
          ],
          [
            "6",
            "32",
            "执行@，再乘2"
          ],
          [
            "7",
            "64",
            "执行@，再乘2"
          ],
          [
            "8",
            "128",
            "执行@，再乘2"
          ],
          [
            "停止",
            "256",
            "已经超过上界，不执行@"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R1-coupled-v1",
    "chapter": 1,
    "mode": "review",
    "family": "R1-coupled",
    "variant": 1,
    "title": "i=1,j=0; while(i+j<=n) { if(i>j) { @; j++; } else i++; }。当 n=8，求 @ 次数和整段时间级别。",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      14
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "i+j 从 1 开始，每轮增加 1，循环共 8 轮。\nj++ 和 i++ 交替，j++ 出现在奇数轮。\n@ 次数=⌈n/2⌉=4；整段 O(n)。",
    "solution": [
      "i+j 从 1 开始，每轮增加 1，循环共 8 轮。",
      "j++ 和 i++ 交替，j++ 出现在奇数轮。",
      "@ 次数=⌈n/2⌉=4；整段 O(n)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "4",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "跟踪i、j谁增长，不要把两个变量误当两层循环。",
      "plan": [
        "从i=1、j=0列出前几轮，标记哪轮真正执行@。",
        "每轮i+j只增1，@只在交替的某一类轮次出现。"
      ],
      "format": "分别填@总次数与整段时间级别。"
    },
    "worked": [
      {
        "caption": "每轮i+j增一，但并非每轮都有@",
        "heads": [
          "轮前i",
          "轮前j",
          "条件中的i+j",
          "执行分支",
          "累计@"
        ],
        "rows": [
          [
            "1",
            "0",
            "1",
            "执行@，j加1",
            "1"
          ],
          [
            "1",
            "1",
            "2",
            "i加1，本轮没有@",
            "1"
          ],
          [
            "2",
            "1",
            "3",
            "执行@，j加1",
            "2"
          ],
          [
            "2",
            "2",
            "4",
            "i加1，本轮没有@",
            "2"
          ],
          [
            "3",
            "2",
            "5",
            "执行@，j加1",
            "3"
          ],
          [
            "3",
            "3",
            "6",
            "i加1，本轮没有@",
            "3"
          ],
          [
            "4",
            "3",
            "7",
            "执行@，j加1",
            "4"
          ],
          [
            "4",
            "4",
            "8",
            "i加1，本轮没有@",
            "4"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R1-coupled-v2",
    "chapter": 1,
    "mode": "review",
    "family": "R1-coupled",
    "variant": 2,
    "title": "i=1,j=0; while(i+j<=n) { if(i>j) { @; j++; } else i++; }。当 n=9，求 @ 次数和整段时间级别。",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      14
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "i+j 从 1 开始，每轮增加 1，循环共 9 轮。\nj++ 和 i++ 交替，j++ 出现在奇数轮。\n@ 次数=⌈n/2⌉=5；整段 O(n)。",
    "solution": [
      "i+j 从 1 开始，每轮增加 1，循环共 9 轮。",
      "j++ 和 i++ 交替，j++ 出现在奇数轮。",
      "@ 次数=⌈n/2⌉=5；整段 O(n)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "5",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "跟踪i、j谁增长，不要把两个变量误当两层循环。",
      "plan": [
        "从i=1、j=0列出前几轮，标记哪轮真正执行@。",
        "每轮i+j只增1，@只在交替的某一类轮次出现。"
      ],
      "format": "分别填@总次数与整段时间级别。"
    },
    "worked": [
      {
        "caption": "每轮i+j增一，但并非每轮都有@",
        "heads": [
          "轮前i",
          "轮前j",
          "条件中的i+j",
          "执行分支",
          "累计@"
        ],
        "rows": [
          [
            "1",
            "0",
            "1",
            "执行@，j加1",
            "1"
          ],
          [
            "1",
            "1",
            "2",
            "i加1，本轮没有@",
            "1"
          ],
          [
            "2",
            "1",
            "3",
            "执行@，j加1",
            "2"
          ],
          [
            "2",
            "2",
            "4",
            "i加1，本轮没有@",
            "2"
          ],
          [
            "3",
            "2",
            "5",
            "执行@，j加1",
            "3"
          ],
          [
            "3",
            "3",
            "6",
            "i加1，本轮没有@",
            "3"
          ],
          [
            "4",
            "3",
            "7",
            "执行@，j加1",
            "4"
          ],
          [
            "4",
            "4",
            "8",
            "i加1，本轮没有@",
            "4"
          ],
          [
            "5",
            "4",
            "9",
            "执行@，j加1",
            "5"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R1-coupled-v3",
    "chapter": 1,
    "mode": "review",
    "family": "R1-coupled",
    "variant": 3,
    "title": "i=1,j=0; while(i+j<=n) { if(i>j) { @; j++; } else i++; }。当 n=15，求 @ 次数和整段时间级别。",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      14
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "i+j 从 1 开始，每轮增加 1，循环共 15 轮。\nj++ 和 i++ 交替，j++ 出现在奇数轮。\n@ 次数=⌈n/2⌉=8；整段 O(n)。",
    "solution": [
      "i+j 从 1 开始，每轮增加 1，循环共 15 轮。",
      "j++ 和 i++ 交替，j++ 出现在奇数轮。",
      "@ 次数=⌈n/2⌉=8；整段 O(n)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "8",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "跟踪i、j谁增长，不要把两个变量误当两层循环。",
      "plan": [
        "从i=1、j=0列出前几轮，标记哪轮真正执行@。",
        "每轮i+j只增1，@只在交替的某一类轮次出现。"
      ],
      "format": "分别填@总次数与整段时间级别。"
    },
    "worked": [
      {
        "caption": "每轮i+j增一，但并非每轮都有@",
        "heads": [
          "轮前i",
          "轮前j",
          "条件中的i+j",
          "执行分支",
          "累计@"
        ],
        "rows": [
          [
            "1",
            "0",
            "1",
            "执行@，j加1",
            "1"
          ],
          [
            "1",
            "1",
            "2",
            "i加1，本轮没有@",
            "1"
          ],
          [
            "2",
            "1",
            "3",
            "执行@，j加1",
            "2"
          ],
          [
            "2",
            "2",
            "4",
            "i加1，本轮没有@",
            "2"
          ],
          [
            "3",
            "2",
            "5",
            "执行@，j加1",
            "3"
          ],
          [
            "3",
            "3",
            "6",
            "i加1，本轮没有@",
            "3"
          ],
          [
            "4",
            "3",
            "7",
            "执行@，j加1",
            "4"
          ],
          [
            "4",
            "4",
            "8",
            "i加1，本轮没有@",
            "4"
          ],
          [
            "5",
            "4",
            "9",
            "执行@，j加1",
            "5"
          ],
          [
            "5",
            "5",
            "10",
            "i加1，本轮没有@",
            "5"
          ],
          [
            "6",
            "5",
            "11",
            "执行@，j加1",
            "6"
          ],
          [
            "6",
            "6",
            "12",
            "i加1，本轮没有@",
            "6"
          ],
          [
            "7",
            "6",
            "13",
            "执行@，j加1",
            "7"
          ],
          [
            "7",
            "7",
            "14",
            "i加1，本轮没有@",
            "7"
          ],
          [
            "8",
            "7",
            "15",
            "执行@，j加1",
            "8"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R1-coupled-v4",
    "chapter": 1,
    "mode": "review",
    "family": "R1-coupled",
    "variant": 4,
    "title": "i=1,j=0; while(i+j<=n) { if(i>j) { @; j++; } else i++; }。当 n=20，求 @ 次数和整段时间级别。",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      14
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "i+j 从 1 开始，每轮增加 1，循环共 20 轮。\nj++ 和 i++ 交替，j++ 出现在奇数轮。\n@ 次数=⌈n/2⌉=10；整段 O(n)。",
    "solution": [
      "i+j 从 1 开始，每轮增加 1，循环共 20 轮。",
      "j++ 和 i++ 交替，j++ 出现在奇数轮。",
      "@ 次数=⌈n/2⌉=10；整段 O(n)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "@ 次数",
        "answer": "10",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "跟踪i、j谁增长，不要把两个变量误当两层循环。",
      "plan": [
        "从i=1、j=0列出前几轮，标记哪轮真正执行@。",
        "每轮i+j只增1，@只在交替的某一类轮次出现。"
      ],
      "format": "分别填@总次数与整段时间级别。"
    },
    "worked": [
      {
        "caption": "每轮i+j增一，但并非每轮都有@",
        "heads": [
          "轮前i",
          "轮前j",
          "条件中的i+j",
          "执行分支",
          "累计@"
        ],
        "rows": [
          [
            "1",
            "0",
            "1",
            "执行@，j加1",
            "1"
          ],
          [
            "1",
            "1",
            "2",
            "i加1，本轮没有@",
            "1"
          ],
          [
            "2",
            "1",
            "3",
            "执行@，j加1",
            "2"
          ],
          [
            "2",
            "2",
            "4",
            "i加1，本轮没有@",
            "2"
          ],
          [
            "3",
            "2",
            "5",
            "执行@，j加1",
            "3"
          ],
          [
            "3",
            "3",
            "6",
            "i加1，本轮没有@",
            "3"
          ],
          [
            "4",
            "3",
            "7",
            "执行@，j加1",
            "4"
          ],
          [
            "4",
            "4",
            "8",
            "i加1，本轮没有@",
            "4"
          ],
          [
            "5",
            "4",
            "9",
            "执行@，j加1",
            "5"
          ],
          [
            "5",
            "5",
            "10",
            "i加1，本轮没有@",
            "5"
          ],
          [
            "6",
            "5",
            "11",
            "执行@，j加1",
            "6"
          ],
          [
            "6",
            "6",
            "12",
            "i加1，本轮没有@",
            "6"
          ],
          [
            "7",
            "6",
            "13",
            "执行@，j加1",
            "7"
          ],
          [
            "7",
            "7",
            "14",
            "i加1，本轮没有@",
            "7"
          ],
          [
            "8",
            "7",
            "15",
            "执行@，j加1",
            "8"
          ],
          [
            "8",
            "8",
            "16",
            "i加1，本轮没有@",
            "8"
          ],
          [
            "9",
            "8",
            "17",
            "执行@，j加1",
            "9"
          ],
          [
            "9",
            "9",
            "18",
            "i加1，本轮没有@",
            "9"
          ],
          [
            "10",
            "9",
            "19",
            "执行@，j加1",
            "10"
          ],
          [
            "10",
            "10",
            "20",
            "i加1，本轮没有@",
            "10"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R1-concept-v1",
    "chapter": 1,
    "mode": "review",
    "family": "R1-concept",
    "variant": 1,
    "title": "频度 10¹⁰n³+n⁴ 的主导时间级别是什么？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      12,
      28
    ],
    "origin": "同类考法新题",
    "topic": "r1-1",
    "hint": "",
    "explain": "渐近比较时 n⁴ 最终超过常数倍 n³，保留最高幂。",
    "solution": [
      "渐近比较时 n⁴ 最终超过常数倍 n³，保留最高幂。"
    ],
    "rubric": [],
    "options": [
      "O(n³)",
      "O(n⁴)",
      "O(10¹⁰)",
      "O(n⁷)"
    ],
    "answer": 1,
    "support": {
      "ask": "先识别题目问的是增长级别、概率条件还是算法质量。",
      "plan": [
        "增长题比较主导项；平均题明确输入分布。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：n⁴最终超过任何固定常数倍的n³，不能只看大常数。",
      "符合：渐近比较时 n⁴ 最终超过常数倍 n³，保留最高幂。",
      "核对条件：10¹⁰是常数，原式还随n增长。",
      "核对条件：两项相加不应把指数相加成7。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R1-concept-v2",
    "chapter": 1,
    "mode": "review",
    "family": "R1-concept",
    "variant": 2,
    "title": "顺序执行 O(n log n) 和 O(n²) 两段代码，总体最坏界是？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      12,
      28
    ],
    "origin": "同类考法新题",
    "topic": "r1-2",
    "hint": "",
    "explain": "顺序相加，保留增长较快的 n²。",
    "solution": [
      "顺序相加，保留增长较快的 n²。"
    ],
    "rubric": [],
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n³ log n)"
    ],
    "answer": 0,
    "support": {
      "ask": "先识别题目问的是增长级别、概率条件还是算法质量。",
      "plan": [
        "增长题比较主导项；平均题明确输入分布。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "符合：顺序相加，保留增长较快的 n²。",
      "核对条件：log n甚至漏掉两段的主要工作量。",
      "核对条件：n²段比n log n增长更快，不能忽略。",
      "核对条件：n³ log n来自相乘，但题目说顺序执行，应相加。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R1-concept-v3",
    "chapter": 1,
    "mode": "review",
    "family": "R1-concept",
    "variant": 3,
    "title": "补充：T(n)=2T(n/2)+O(n)，n为2的幂。按每层代价求和，时间的主要增长项是哪一个？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [],
    "origin": "拓展训练：通用递推分析，非所给卷直接考法",
    "topic": "r1-3",
    "hint": "",
    "explain": "每层总处理 O(n)，共有 log₂n 层。属于复杂度拓展题。",
    "solution": [
      "每层总处理 O(n)，共有 log₂n 层。属于复杂度拓展题。"
    ],
    "rubric": [],
    "options": [
      "n log n",
      "n²",
      "n",
      "log n"
    ],
    "answer": 0,
    "support": {
      "ask": "先识别题目问的是增长级别、概率条件还是算法质量。",
      "plan": [
        "增长题比较主导项；平均题明确输入分布。"
      ],
      "format": "补充题；先完成课件循环与简单递归主线，再按需练习。"
    },
    "optionReasons": [
      "符合：每层总处理 O(n)，共有 log₂n 层。属于复杂度拓展题。",
      "每层约n、约log₂n层，累计主要项为n log n；n²不是这里的主要增长项。",
      "核对条件：每层总量约n，但不只一层，还有约log n层。",
      "核对条件：这是层数，漏了每层处理约n的成本。"
    ],
    "priority": "extension",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R1-concept-v4",
    "chapter": 1,
    "mode": "review",
    "family": "R1-concept",
    "variant": 4,
    "title": "算法分析中，平均情况需要额外明确什么？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      12,
      28
    ],
    "origin": "同类考法新题",
    "topic": "r1-2",
    "hint": "",
    "explain": "平均值必须基于输入或目标的概率分布。",
    "solution": [
      "平均值必须基于输入或目标的概率分布。"
    ],
    "rubric": [],
    "options": [
      "源文件名",
      "变量命名",
      "输入概率分布",
      "显示器大小"
    ],
    "answer": 2,
    "support": {
      "ask": "先识别题目问的是增长级别、概率条件还是算法质量。",
      "plan": [
        "增长题比较主导项；平均题明确输入分布。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：文件名不提供各类输入发生概率，不能据它求平均。",
      "核对条件：变量命名不决定输入分布。",
      "符合：平均值必须基于输入或目标的概率分布。",
      "核对条件：显示器大小与算法输入的概率空间无关。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R1-concept-v5",
    "chapter": 1,
    "mode": "review",
    "family": "R1-concept",
    "variant": 5,
    "title": "输入错误数据时仍能给出恰当处理，主要体现哪项设计要求？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      12,
      28
    ],
    "origin": "同类考法新题",
    "topic": "r1-2",
    "hint": "",
    "explain": "健壮性指能识别、处理非法输入等异常情况。",
    "solution": [
      "健壮性指能识别、处理非法输入等异常情况。"
    ],
    "rubric": [],
    "options": [
      "可读性",
      "健壮性",
      "稳定性",
      "随机性"
    ],
    "answer": 1,
    "support": {
      "ask": "先识别题目问的是增长级别、概率条件还是算法质量。",
      "plan": [
        "增长题比较主导项；平均题明确输入分布。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：可读性是人能否容易看懂代码，不专指异常输入处理。",
      "符合：健壮性指能识别、处理非法输入等异常情况。",
      "核对条件：排序稳定性关心相等记录次序，与异常输入不属于同一评价。",
      "核对条件：随机性不是恰当处理非法输入的设计要求。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R1-space-v1",
    "chapter": 1,
    "mode": "review",
    "family": "R1-space",
    "variant": 1,
    "title": "用数组暂存 n=7 个元素；每个元素 4 字节，仅计算该临时数组空间。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      3
    ],
    "origin": "同类考法新题",
    "topic": "r1-3",
    "hint": "",
    "explain": "空间=7×4=28 字节，随 n 线性增长。",
    "solution": [
      "空间=7×4=28 字节，随 n 线性增长。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "数组字节数",
        "answer": "28",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "渐近空间",
        "answer": "O(n)",
        "points": 1,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "只算题目指定的临时数组，不把输入重复计入。",
      "plan": [
        "元素数乘每元素字节数，得到具体字节量。",
        "再把元素数视为可增长的n，判断空间级别。"
      ],
      "format": "字节空填数字；空间空填O(...)。"
    },
    "walkthrough": [
      "只算题目指定的临时数组，不把输入重复计入。",
      "元素数乘每元素字节数，得到具体字节量。",
      "再把元素数视为可增长的n，判断空间级别。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R1-space-v2",
    "chapter": 1,
    "mode": "review",
    "family": "R1-space",
    "variant": 2,
    "title": "用数组暂存 n=16 个元素；每个元素 4 字节，仅计算该临时数组空间。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      3
    ],
    "origin": "同类考法新题",
    "topic": "r1-3",
    "hint": "",
    "explain": "空间=16×4=64 字节，随 n 线性增长。",
    "solution": [
      "空间=16×4=64 字节，随 n 线性增长。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "数组字节数",
        "answer": "64",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "渐近空间",
        "answer": "O(n)",
        "points": 1,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "只算题目指定的临时数组，不把输入重复计入。",
      "plan": [
        "元素数乘每元素字节数，得到具体字节量。",
        "再把元素数视为可增长的n，判断空间级别。"
      ],
      "format": "字节空填数字；空间空填O(...)。"
    },
    "walkthrough": [
      "只算题目指定的临时数组，不把输入重复计入。",
      "元素数乘每元素字节数，得到具体字节量。",
      "再把元素数视为可增长的n，判断空间级别。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R1-space-v3",
    "chapter": 1,
    "mode": "review",
    "family": "R1-space",
    "variant": 3,
    "title": "用数组暂存 n=25 个元素；每个元素 4 字节，仅计算该临时数组空间。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      3
    ],
    "origin": "同类考法新题",
    "topic": "r1-3",
    "hint": "",
    "explain": "空间=25×4=100 字节，随 n 线性增长。",
    "solution": [
      "空间=25×4=100 字节，随 n 线性增长。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "数组字节数",
        "answer": "100",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "渐近空间",
        "answer": "O(n)",
        "points": 1,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "只算题目指定的临时数组，不把输入重复计入。",
      "plan": [
        "元素数乘每元素字节数，得到具体字节量。",
        "再把元素数视为可增长的n，判断空间级别。"
      ],
      "format": "字节空填数字；空间空填O(...)。"
    },
    "walkthrough": [
      "只算题目指定的临时数组，不把输入重复计入。",
      "元素数乘每元素字节数，得到具体字节量。",
      "再把元素数视为可增长的n，判断空间级别。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-circle-code-v1",
    "chapter": 2,
    "mode": "review",
    "family": "R2-circle-code",
    "variant": 1,
    "title": "带头结点 L 的递增循环单链表，尾结点 next 指向 L。编写 Insert(L,x)，把 x=1 插入 [3, 7, 11] 后仍非递减；允许重复键，需处理空表。用类 C 写出算法及复杂度。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      3
    ],
    "origin": "同类考法新题",
    "topic": "r2-1",
    "hint": "",
    "explain": "p=L; while(p->next!=L && p->next->data<=x) p=p->next;\ns=malloc(sizeof(Node)); if(!s) return ERROR; s->data=x;\ns->next=p->next; p->next=s; return OK;\n空表时 L->next==L，循环不进入；前插、尾插都通过同样两句接链。查找 O(n)，连接 O(1)。",
    "solution": [
      "p=L; while(p->next!=L && p->next->data<=x) p=p->next;",
      "s=malloc(sizeof(Node)); if(!s) return ERROR; s->data=x;",
      "s->next=p->next; p->next=s; return OK;",
      "空表时 L->next==L，循环不进入；前插、尾插都通过同样两句接链。查找 O(n)，连接 O(1)。"
    ],
    "rubric": [
      {
        "label": "循环以 p->next!=L 结束，避免把头结点当数据",
        "points": 2
      },
      {
        "label": "找到最后一个 <=x 的位置，兼顾空表与两端",
        "points": 2
      },
      {
        "label": "先 s->next 再 p->next，分配失败有处理",
        "points": 2
      },
      {
        "label": "说明查找 O(n)、接链 O(1)，指针类型一致",
        "points": 2
      }
    ],
    "support": {
      "ask": "这是带头、尾部回到头结点的有序循环表。",
      "plan": [
        "用前驱p从L走，停止条件必须排除回到L，不能读头结点数据。",
        "先让新结点接旧后继，再改前驱；用空表、首插、尾插各检验一次。"
      ],
      "format": "用类C或清楚伪代码；说明O(n)查找与O(1)接链。"
    },
    "worked": [
      {
        "caption": "先定位前驱，再接链；表中数字代表该值所在结点",
        "heads": [
          "阶段",
          "当前前驱/结果",
          "下一步或链接"
        ],
        "rows": [
          [
            "初始化",
            "L",
            "第一个有效结点或L"
          ],
          [
            "停止，下一项比x大",
            "L",
            "3"
          ],
          [
            "先接后继",
            "新结点s",
            "s.next=原p.next"
          ],
          [
            "再接前驱",
            "p",
            "p.next=s"
          ],
          [
            "完整结果",
            "1，3，7，11",
            "空表也使用同样两句"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-circle-code-v2",
    "chapter": 2,
    "mode": "review",
    "family": "R2-circle-code",
    "variant": 2,
    "title": "带头结点 L 的递增循环单链表，尾结点 next 指向 L。编写 Insert(L,x)，把 x=8 插入 [2, 6, 10] 后仍非递减；允许重复键，需处理空表。用类 C 写出算法及复杂度。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      3
    ],
    "origin": "同类考法新题",
    "topic": "r2-1",
    "hint": "",
    "explain": "p=L; while(p->next!=L && p->next->data<=x) p=p->next;\ns=malloc(sizeof(Node)); if(!s) return ERROR; s->data=x;\ns->next=p->next; p->next=s; return OK;\n空表时 L->next==L，循环不进入；前插、尾插都通过同样两句接链。查找 O(n)，连接 O(1)。",
    "solution": [
      "p=L; while(p->next!=L && p->next->data<=x) p=p->next;",
      "s=malloc(sizeof(Node)); if(!s) return ERROR; s->data=x;",
      "s->next=p->next; p->next=s; return OK;",
      "空表时 L->next==L，循环不进入；前插、尾插都通过同样两句接链。查找 O(n)，连接 O(1)。"
    ],
    "rubric": [
      {
        "label": "循环以 p->next!=L 结束，避免把头结点当数据",
        "points": 2
      },
      {
        "label": "找到最后一个 <=x 的位置，兼顾空表与两端",
        "points": 2
      },
      {
        "label": "先 s->next 再 p->next，分配失败有处理",
        "points": 2
      },
      {
        "label": "说明查找 O(n)、接链 O(1)，指针类型一致",
        "points": 2
      }
    ],
    "support": {
      "ask": "这是带头、尾部回到头结点的有序循环表。",
      "plan": [
        "用前驱p从L走，停止条件必须排除回到L，不能读头结点数据。",
        "先让新结点接旧后继，再改前驱；用空表、首插、尾插各检验一次。"
      ],
      "format": "用类C或清楚伪代码；说明O(n)查找与O(1)接链。"
    },
    "worked": [
      {
        "caption": "先定位前驱，再接链；表中数字代表该值所在结点",
        "heads": [
          "阶段",
          "当前前驱/结果",
          "下一步或链接"
        ],
        "rows": [
          [
            "初始化",
            "L",
            "第一个有效结点或L"
          ],
          [
            "继续向后找",
            "2",
            "检查下一项"
          ],
          [
            "继续向后找",
            "6",
            "检查下一项"
          ],
          [
            "停止，下一项比x大",
            "6",
            "10"
          ],
          [
            "先接后继",
            "新结点s",
            "s.next=原p.next"
          ],
          [
            "再接前驱",
            "p",
            "p.next=s"
          ],
          [
            "完整结果",
            "2，6，8，10",
            "空表也使用同样两句"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-circle-code-v3",
    "chapter": 2,
    "mode": "review",
    "family": "R2-circle-code",
    "variant": 3,
    "title": "带头结点 L 的递增循环单链表，尾结点 next 指向 L。编写 Insert(L,x)，把 x=15 插入 [4, 8, 12] 后仍非递减；允许重复键，需处理空表。用类 C 写出算法及复杂度。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      3
    ],
    "origin": "同类考法新题",
    "topic": "r2-1",
    "hint": "",
    "explain": "p=L; while(p->next!=L && p->next->data<=x) p=p->next;\ns=malloc(sizeof(Node)); if(!s) return ERROR; s->data=x;\ns->next=p->next; p->next=s; return OK;\n空表时 L->next==L，循环不进入；前插、尾插都通过同样两句接链。查找 O(n)，连接 O(1)。",
    "solution": [
      "p=L; while(p->next!=L && p->next->data<=x) p=p->next;",
      "s=malloc(sizeof(Node)); if(!s) return ERROR; s->data=x;",
      "s->next=p->next; p->next=s; return OK;",
      "空表时 L->next==L，循环不进入；前插、尾插都通过同样两句接链。查找 O(n)，连接 O(1)。"
    ],
    "rubric": [
      {
        "label": "循环以 p->next!=L 结束，避免把头结点当数据",
        "points": 2
      },
      {
        "label": "找到最后一个 <=x 的位置，兼顾空表与两端",
        "points": 2
      },
      {
        "label": "先 s->next 再 p->next，分配失败有处理",
        "points": 2
      },
      {
        "label": "说明查找 O(n)、接链 O(1)，指针类型一致",
        "points": 2
      }
    ],
    "support": {
      "ask": "这是带头、尾部回到头结点的有序循环表。",
      "plan": [
        "用前驱p从L走，停止条件必须排除回到L，不能读头结点数据。",
        "先让新结点接旧后继，再改前驱；用空表、首插、尾插各检验一次。"
      ],
      "format": "用类C或清楚伪代码；说明O(n)查找与O(1)接链。"
    },
    "worked": [
      {
        "caption": "先定位前驱，再接链；表中数字代表该值所在结点",
        "heads": [
          "阶段",
          "当前前驱/结果",
          "下一步或链接"
        ],
        "rows": [
          [
            "初始化",
            "L",
            "第一个有效结点或L"
          ],
          [
            "继续向后找",
            "4",
            "检查下一项"
          ],
          [
            "继续向后找",
            "8",
            "检查下一项"
          ],
          [
            "继续向后找",
            "12",
            "检查下一项"
          ],
          [
            "停止，已回到L",
            "12",
            "L"
          ],
          [
            "先接后继",
            "新结点s",
            "s.next=原p.next"
          ],
          [
            "再接前驱",
            "p",
            "p.next=s"
          ],
          [
            "完整结果",
            "4，8，12，15",
            "空表也使用同样两句"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-delete-code-v1",
    "chapter": 2,
    "mode": "review",
    "family": "R2-delete-code",
    "variant": 1,
    "title": "带头结点的普通单链表 L，编写算法删除所有值为 2 的结点，并返回删除个数。以 [2, 2, 3, 2] 检验连续命中和删空情况。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      29
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "pre=L; p=L->next; count=0;\nwhile(p!=NULL) { if(p->data==2) { pre->next=p->next; free(p); p=pre->next; count++; } else { pre=p; p=p->next; } }\nreturn count;\n每个有效结点只检查一次，时间 O(n)、额外空间 O(1)；命中后 pre 不前移。",
    "solution": [
      "pre=L; p=L->next; count=0;",
      "while(p!=NULL) { if(p->data==2) { pre->next=p->next; free(p); p=pre->next; count++; } else { pre=p; p=p->next; } }",
      "return count;",
      "每个有效结点只检查一次，时间 O(n)、额外空间 O(1)；命中后 pre 不前移。"
    ],
    "rubric": [
      {
        "label": "正确初始化前驱和当前指针",
        "points": 2
      },
      {
        "label": "命中后先接链再释放，且不跳过连续命中",
        "points": 2
      },
      {
        "label": "未命中时同步向前推进",
        "points": 2
      },
      {
        "label": "返回正确个数且说明 O(n)/O(1)",
        "points": 2
      }
    ],
    "support": {
      "ask": "删除所有命中结点，最容易漏掉连续两个相同值。",
      "plan": [
        "pre指未删部分末尾，p指当前待检；命中时先接链再释放。",
        "命中后pre不前移，p回到pre的新后继；未命中才双指针前进。"
      ],
      "format": "给出完整循环、返回计数，以及时间和额外空间。"
    },
    "worked": [
      {
        "caption": "对连续命中逐个检查，未处理部分不能跳过",
        "heads": [
          "当前值",
          "动作",
          "已保留前缀",
          "删除计数"
        ],
        "rows": [
          [
            "2",
            "绕过并释放；pre不前进",
            "空",
            "1"
          ],
          [
            "2",
            "绕过并释放；pre不前进",
            "空",
            "2"
          ],
          [
            "3",
            "保留；pre移到本结点",
            "3",
            "2"
          ],
          [
            "2",
            "绕过并释放；pre不前进",
            "3",
            "3"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-delete-code-v2",
    "chapter": 2,
    "mode": "review",
    "family": "R2-delete-code",
    "variant": 2,
    "title": "带头结点的普通单链表 L，编写算法删除所有值为 4 的结点，并返回删除个数。以 [1, 4, 4, 4] 检验连续命中和删空情况。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      29
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "pre=L; p=L->next; count=0;\nwhile(p!=NULL) { if(p->data==4) { pre->next=p->next; free(p); p=pre->next; count++; } else { pre=p; p=p->next; } }\nreturn count;\n每个有效结点只检查一次，时间 O(n)、额外空间 O(1)；命中后 pre 不前移。",
    "solution": [
      "pre=L; p=L->next; count=0;",
      "while(p!=NULL) { if(p->data==4) { pre->next=p->next; free(p); p=pre->next; count++; } else { pre=p; p=p->next; } }",
      "return count;",
      "每个有效结点只检查一次，时间 O(n)、额外空间 O(1)；命中后 pre 不前移。"
    ],
    "rubric": [
      {
        "label": "正确初始化前驱和当前指针",
        "points": 2
      },
      {
        "label": "命中后先接链再释放，且不跳过连续命中",
        "points": 2
      },
      {
        "label": "未命中时同步向前推进",
        "points": 2
      },
      {
        "label": "返回正确个数且说明 O(n)/O(1)",
        "points": 2
      }
    ],
    "support": {
      "ask": "删除所有命中结点，最容易漏掉连续两个相同值。",
      "plan": [
        "pre指未删部分末尾，p指当前待检；命中时先接链再释放。",
        "命中后pre不前移，p回到pre的新后继；未命中才双指针前进。"
      ],
      "format": "给出完整循环、返回计数，以及时间和额外空间。"
    },
    "worked": [
      {
        "caption": "对连续命中逐个检查，未处理部分不能跳过",
        "heads": [
          "当前值",
          "动作",
          "已保留前缀",
          "删除计数"
        ],
        "rows": [
          [
            "1",
            "保留；pre移到本结点",
            "1",
            "0"
          ],
          [
            "4",
            "绕过并释放；pre不前进",
            "1",
            "1"
          ],
          [
            "4",
            "绕过并释放；pre不前进",
            "1",
            "2"
          ],
          [
            "4",
            "绕过并释放；pre不前进",
            "1",
            "3"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-delete-code-v3",
    "chapter": 2,
    "mode": "review",
    "family": "R2-delete-code",
    "variant": 3,
    "title": "带头结点的普通单链表 L，编写算法删除所有值为 7 的结点，并返回删除个数。以 [7, 7, 7] 检验连续命中和删空情况。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      29
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "pre=L; p=L->next; count=0;\nwhile(p!=NULL) { if(p->data==7) { pre->next=p->next; free(p); p=pre->next; count++; } else { pre=p; p=p->next; } }\nreturn count;\n每个有效结点只检查一次，时间 O(n)、额外空间 O(1)；命中后 pre 不前移。",
    "solution": [
      "pre=L; p=L->next; count=0;",
      "while(p!=NULL) { if(p->data==7) { pre->next=p->next; free(p); p=pre->next; count++; } else { pre=p; p=p->next; } }",
      "return count;",
      "每个有效结点只检查一次，时间 O(n)、额外空间 O(1)；命中后 pre 不前移。"
    ],
    "rubric": [
      {
        "label": "正确初始化前驱和当前指针",
        "points": 2
      },
      {
        "label": "命中后先接链再释放，且不跳过连续命中",
        "points": 2
      },
      {
        "label": "未命中时同步向前推进",
        "points": 2
      },
      {
        "label": "返回正确个数且说明 O(n)/O(1)",
        "points": 2
      }
    ],
    "support": {
      "ask": "删除所有命中结点，最容易漏掉连续两个相同值。",
      "plan": [
        "pre指未删部分末尾，p指当前待检；命中时先接链再释放。",
        "命中后pre不前移，p回到pre的新后继；未命中才双指针前进。"
      ],
      "format": "给出完整循环、返回计数，以及时间和额外空间。"
    },
    "worked": [
      {
        "caption": "对连续命中逐个检查，未处理部分不能跳过",
        "heads": [
          "当前值",
          "动作",
          "已保留前缀",
          "删除计数"
        ],
        "rows": [
          [
            "7",
            "绕过并释放；pre不前进",
            "空",
            "1"
          ],
          [
            "7",
            "绕过并释放；pre不前进",
            "空",
            "2"
          ],
          [
            "7",
            "绕过并释放；pre不前进",
            "空",
            "3"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-reverse-code-v1",
    "chapter": 2,
    "mode": "review",
    "family": "R2-reverse-code",
    "variant": 1,
    "title": "编写带头结点普通单链表的原地逆置算法，不新建数据结点。测试输入为 [1, 2, 3, 4]，并说明空表是否适用。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      14
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "p=L->next; L->next=NULL;\nwhile(p!=NULL) { q=p->next; p->next=L->next; L->next=p; p=q; }\n结果为 [4, 3, 2, 1]。空表 p=NULL，循环不进入。\n时间 O(n)，额外空间 O(1)。每轮先保存原后继 q。",
    "solution": [
      "p=L->next; L->next=NULL;",
      "while(p!=NULL) { q=p->next; p->next=L->next; L->next=p; p=q; }",
      "结果为 [4, 3, 2, 1]。空表 p=NULL，循环不进入。",
      "时间 O(n)，额外空间 O(1)。每轮先保存原后继 q。"
    ],
    "rubric": [
      {
        "label": "摘下原链并初始化新空链",
        "points": 2
      },
      {
        "label": "先保存 q，避免丢失未处理部分",
        "points": 2
      },
      {
        "label": "头插连接正确，p 沿原链继续",
        "points": 2
      },
      {
        "label": "空表适用；复杂度正确",
        "points": 2
      }
    ],
    "support": {
      "ask": "原地逆置允许改链接，但不能新建数据结点。",
      "plan": [
        "先断开头结点形成新空链，逐个取旧链结点。",
        "每次先保存旧后继，再把当前结点头插到新链，最后沿旧后继继续。"
      ],
      "format": "写关键代码并检查空表、单结点；不能丢失未处理链。"
    },
    "worked": [
      {
        "caption": "先保存原后继，再把当前结点插到新链头",
        "heads": [
          "当前取出的值",
          "原链尚未处理",
          "新链顺序"
        ],
        "rows": [
          [
            "1",
            "2，3，4",
            "1"
          ],
          [
            "2",
            "3，4",
            "2，1"
          ],
          [
            "3",
            "4",
            "3，2，1"
          ],
          [
            "4",
            "空",
            "4，3，2，1"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-reverse-code-v2",
    "chapter": 2,
    "mode": "review",
    "family": "R2-reverse-code",
    "variant": 2,
    "title": "编写带头结点普通单链表的原地逆置算法，不新建数据结点。测试输入为 [7]，并说明空表是否适用。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      14
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "p=L->next; L->next=NULL;\nwhile(p!=NULL) { q=p->next; p->next=L->next; L->next=p; p=q; }\n结果为 [7]。空表 p=NULL，循环不进入。\n时间 O(n)，额外空间 O(1)。每轮先保存原后继 q。",
    "solution": [
      "p=L->next; L->next=NULL;",
      "while(p!=NULL) { q=p->next; p->next=L->next; L->next=p; p=q; }",
      "结果为 [7]。空表 p=NULL，循环不进入。",
      "时间 O(n)，额外空间 O(1)。每轮先保存原后继 q。"
    ],
    "rubric": [
      {
        "label": "摘下原链并初始化新空链",
        "points": 2
      },
      {
        "label": "先保存 q，避免丢失未处理部分",
        "points": 2
      },
      {
        "label": "头插连接正确，p 沿原链继续",
        "points": 2
      },
      {
        "label": "空表适用；复杂度正确",
        "points": 2
      }
    ],
    "support": {
      "ask": "原地逆置允许改链接，但不能新建数据结点。",
      "plan": [
        "先断开头结点形成新空链，逐个取旧链结点。",
        "每次先保存旧后继，再把当前结点头插到新链，最后沿旧后继继续。"
      ],
      "format": "写关键代码并检查空表、单结点；不能丢失未处理链。"
    },
    "worked": [
      {
        "caption": "先保存原后继，再把当前结点插到新链头",
        "heads": [
          "当前取出的值",
          "原链尚未处理",
          "新链顺序"
        ],
        "rows": [
          [
            "7",
            "空",
            "7"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-reverse-code-v3",
    "chapter": 2,
    "mode": "review",
    "family": "R2-reverse-code",
    "variant": 3,
    "title": "编写带头结点普通单链表的原地逆置算法，不新建数据结点。测试输入为 [2, 5, 8]，并说明空表是否适用。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      14
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "p=L->next; L->next=NULL;\nwhile(p!=NULL) { q=p->next; p->next=L->next; L->next=p; p=q; }\n结果为 [8, 5, 2]。空表 p=NULL，循环不进入。\n时间 O(n)，额外空间 O(1)。每轮先保存原后继 q。",
    "solution": [
      "p=L->next; L->next=NULL;",
      "while(p!=NULL) { q=p->next; p->next=L->next; L->next=p; p=q; }",
      "结果为 [8, 5, 2]。空表 p=NULL，循环不进入。",
      "时间 O(n)，额外空间 O(1)。每轮先保存原后继 q。"
    ],
    "rubric": [
      {
        "label": "摘下原链并初始化新空链",
        "points": 2
      },
      {
        "label": "先保存 q，避免丢失未处理部分",
        "points": 2
      },
      {
        "label": "头插连接正确，p 沿原链继续",
        "points": 2
      },
      {
        "label": "空表适用；复杂度正确",
        "points": 2
      }
    ],
    "support": {
      "ask": "原地逆置允许改链接，但不能新建数据结点。",
      "plan": [
        "先断开头结点形成新空链，逐个取旧链结点。",
        "每次先保存旧后继，再把当前结点头插到新链，最后沿旧后继继续。"
      ],
      "format": "写关键代码并检查空表、单结点；不能丢失未处理链。"
    },
    "worked": [
      {
        "caption": "先保存原后继，再把当前结点插到新链头",
        "heads": [
          "当前取出的值",
          "原链尚未处理",
          "新链顺序"
        ],
        "rows": [
          [
            "2",
            "5，8",
            "2"
          ],
          [
            "5",
            "8",
            "5，2"
          ],
          [
            "8",
            "空",
            "8，5，2"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-merge-code-v1",
    "chapter": 2,
    "mode": "review",
    "family": "R2-merge-code",
    "variant": 1,
    "title": "将两个带头结点、非递减单链表 [1, 4, 7] 与 [2, 3, 8] 合并为一个非递减表，复用原数据结点。写出算法，重复值保留。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      3,
      29
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "p=La->next; q=Lb->next; tail=La;\nwhile(p && q) { if(p->data<=q->data) { tail->next=p; p=p->next; } else { tail->next=q; q=q->next; } tail=tail->next; }\ntail->next = p ? p : q; Lb->next=NULL; // Lb 头结点的释放责任由调用者约定\n结果 [1, 2, 3, 4, 7, 8]；时间 O(m+n)、额外空间 O(1)。",
    "solution": [
      "p=La->next; q=Lb->next; tail=La;",
      "while(p && q) { if(p->data<=q->data) { tail->next=p; p=p->next; } else { tail->next=q; q=q->next; } tail=tail->next; }",
      "tail->next = p ? p : q; Lb->next=NULL; // Lb 头结点的释放责任由调用者约定",
      "结果 [1, 2, 3, 4, 7, 8]；时间 O(m+n)、额外空间 O(1)。"
    ],
    "rubric": [
      {
        "label": "两个游标从有效首元开始，保留重复值",
        "points": 2
      },
      {
        "label": "每次连接较小者并推进相应游标",
        "points": 2
      },
      {
        "label": "尾指针正确推进并接上剩余链",
        "points": 2
      },
      {
        "label": "说明头结点所有权和复杂度",
        "points": 2
      }
    ],
    "support": {
      "ask": "复用两张非递减链表的结点，重复值也要保留。",
      "plan": [
        "两个游标比较当前值，连接较小者，并只推进该游标。",
        "尾指针随新接结点走；一侧用完后直接接剩余链，交代头结点责任。"
      ],
      "format": "提供代码、边界与O(m+n)/O(1)结论。"
    },
    "worked": [
      {
        "caption": "每步只推进被取走的一侧；相等值仍各保留",
        "heads": [
          "A当前",
          "B当前",
          "本次选择",
          "结果前缀"
        ],
        "rows": [
          [
            "1",
            "2",
            "取A",
            "1"
          ],
          [
            "4",
            "2",
            "取B",
            "1，2"
          ],
          [
            "4",
            "3",
            "取B",
            "1，2，3"
          ],
          [
            "4",
            "8",
            "取A",
            "1，2，3，4"
          ],
          [
            "7",
            "8",
            "取A",
            "1，2，3，4，7"
          ],
          [
            "一侧结束",
            "剩余链",
            "直接连接",
            "1，2，3，4，7，8"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-merge-code-v2",
    "chapter": 2,
    "mode": "review",
    "family": "R2-merge-code",
    "variant": 2,
    "title": "将两个带头结点、非递减单链表 [2, 5] 与 [2, 5, 9] 合并为一个非递减表，复用原数据结点。写出算法，重复值保留。",
    "type": "code",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      3,
      29
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "p=La->next; q=Lb->next; tail=La;\nwhile(p && q) { if(p->data<=q->data) { tail->next=p; p=p->next; } else { tail->next=q; q=q->next; } tail=tail->next; }\ntail->next = p ? p : q; Lb->next=NULL; // Lb 头结点的释放责任由调用者约定\n结果 [2, 2, 5, 5, 9]；时间 O(m+n)、额外空间 O(1)。",
    "solution": [
      "p=La->next; q=Lb->next; tail=La;",
      "while(p && q) { if(p->data<=q->data) { tail->next=p; p=p->next; } else { tail->next=q; q=q->next; } tail=tail->next; }",
      "tail->next = p ? p : q; Lb->next=NULL; // Lb 头结点的释放责任由调用者约定",
      "结果 [2, 2, 5, 5, 9]；时间 O(m+n)、额外空间 O(1)。"
    ],
    "rubric": [
      {
        "label": "两个游标从有效首元开始，保留重复值",
        "points": 2
      },
      {
        "label": "每次连接较小者并推进相应游标",
        "points": 2
      },
      {
        "label": "尾指针正确推进并接上剩余链",
        "points": 2
      },
      {
        "label": "说明头结点所有权和复杂度",
        "points": 2
      }
    ],
    "support": {
      "ask": "复用两张非递减链表的结点，重复值也要保留。",
      "plan": [
        "两个游标比较当前值，连接较小者，并只推进该游标。",
        "尾指针随新接结点走；一侧用完后直接接剩余链，交代头结点责任。"
      ],
      "format": "提供代码、边界与O(m+n)/O(1)结论。"
    },
    "worked": [
      {
        "caption": "每步只推进被取走的一侧；相等值仍各保留",
        "heads": [
          "A当前",
          "B当前",
          "本次选择",
          "结果前缀"
        ],
        "rows": [
          [
            "2",
            "2",
            "取A",
            "2"
          ],
          [
            "5",
            "2",
            "取B",
            "2，2"
          ],
          [
            "5",
            "5",
            "取A",
            "2，2，5"
          ],
          [
            "一侧结束",
            "剩余链",
            "直接连接",
            "2，2，5，5，9"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-seq-moves-v1",
    "chapter": 2,
    "mode": "review",
    "family": "R2-seq-moves",
    "variant": 1,
    "title": "长度 n=12 的顺序表，容量足够，在第 i=1 位之前插入。求移动次数；随后删除新插入项又需移动多少次？",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      25
    ],
    "origin": "同类考法新题",
    "topic": "r2-3",
    "hint": "",
    "explain": "插入时原第 i..n 位后移，共 12 个。\n插入后长度为 n+1，删除第 i 位需左移 (n+1)-i=12 个。",
    "solution": [
      "插入时原第 i..n 位后移，共 12 个。",
      "插入后长度为 n+1，删除第 i 位需左移 (n+1)-i=12 个。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "插入的元素移动次数",
        "answer": "12",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "删除该新项的元素移动次数",
        "answer": "12",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "数原第i项到第n项，首尾都包含。",
      "plan": [
        "插入移动n−i+1项，先核对i=n+1时应为0。",
        "若随后删新项，表长已经变成n+1，不能沿用旧长度。"
      ],
      "format": "数值题填整数；原题符号空用n-i+1等显式等价式。"
    },
    "walkthrough": [
      "数原第i项到第n项，首尾都包含。",
      "插入移动n−i+1项，先核对i=n+1时应为0。",
      "若随后删新项，表长已经变成n+1，不能沿用旧长度。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-seq-moves-v2",
    "chapter": 2,
    "mode": "review",
    "family": "R2-seq-moves",
    "variant": 2,
    "title": "长度 n=15 的顺序表，容量足够，在第 i=8 位之前插入。求移动次数；随后删除新插入项又需移动多少次？",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      25
    ],
    "origin": "同类考法新题",
    "topic": "r2-3",
    "hint": "",
    "explain": "插入时原第 i..n 位后移，共 8 个。\n插入后长度为 n+1，删除第 i 位需左移 (n+1)-i=8 个。",
    "solution": [
      "插入时原第 i..n 位后移，共 8 个。",
      "插入后长度为 n+1，删除第 i 位需左移 (n+1)-i=8 个。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "插入的元素移动次数",
        "answer": "8",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "删除该新项的元素移动次数",
        "answer": "8",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "数原第i项到第n项，首尾都包含。",
      "plan": [
        "插入移动n−i+1项，先核对i=n+1时应为0。",
        "若随后删新项，表长已经变成n+1，不能沿用旧长度。"
      ],
      "format": "数值题填整数；原题符号空用n-i+1等显式等价式。"
    },
    "walkthrough": [
      "数原第i项到第n项，首尾都包含。",
      "插入移动n−i+1项，先核对i=n+1时应为0。",
      "若随后删新项，表长已经变成n+1，不能沿用旧长度。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-seq-moves-v3",
    "chapter": 2,
    "mode": "review",
    "family": "R2-seq-moves",
    "variant": 3,
    "title": "长度 n=20 的顺序表，容量足够，在第 i=21 位之前插入。求移动次数；随后删除新插入项又需移动多少次？",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      25
    ],
    "origin": "同类考法新题",
    "topic": "r2-3",
    "hint": "",
    "explain": "插入时原第 i..n 位后移，共 0 个。\n插入后长度为 n+1，删除第 i 位需左移 (n+1)-i=0 个。",
    "solution": [
      "插入时原第 i..n 位后移，共 0 个。",
      "插入后长度为 n+1，删除第 i 位需左移 (n+1)-i=0 个。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "插入的元素移动次数",
        "answer": "0",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "删除该新项的元素移动次数",
        "answer": "0",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "数原第i项到第n项，首尾都包含。",
      "plan": [
        "插入移动n−i+1项，先核对i=n+1时应为0。",
        "若随后删新项，表长已经变成n+1，不能沿用旧长度。"
      ],
      "format": "数值题填整数；原题符号空用n-i+1等显式等价式。"
    },
    "walkthrough": [
      "数原第i项到第n项，首尾都包含。",
      "插入移动n−i+1项，先核对i=n+1时应为0。",
      "若随后删新项，表长已经变成n+1，不能沿用旧长度。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-seq-moves-v4",
    "chapter": 2,
    "mode": "review",
    "family": "R2-seq-moves",
    "variant": 4,
    "title": "长度 n=9 的顺序表，容量足够，在第 i=4 位之前插入。求移动次数；随后删除新插入项又需移动多少次？",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      25
    ],
    "origin": "同类考法新题",
    "topic": "r2-3",
    "hint": "",
    "explain": "插入时原第 i..n 位后移，共 6 个。\n插入后长度为 n+1，删除第 i 位需左移 (n+1)-i=6 个。",
    "solution": [
      "插入时原第 i..n 位后移，共 6 个。",
      "插入后长度为 n+1，删除第 i 位需左移 (n+1)-i=6 个。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "插入的元素移动次数",
        "answer": "6",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "删除该新项的元素移动次数",
        "answer": "6",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "数原第i项到第n项，首尾都包含。",
      "plan": [
        "插入移动n−i+1项，先核对i=n+1时应为0。",
        "若随后删新项，表长已经变成n+1，不能沿用旧长度。"
      ],
      "format": "数值题填整数；原题符号空用n-i+1等显式等价式。"
    },
    "walkthrough": [
      "数原第i项到第n项，首尾都包含。",
      "插入移动n−i+1项，先核对i=n+1时应为0。",
      "若随后删新项，表长已经变成n+1，不能沿用旧长度。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-address-v1",
    "chapter": 2,
    "mode": "review",
    "family": "R2-address",
    "variant": 1,
    "title": "顺序表首元素字节地址 160，每元素 4 字节，位序从 1 开始。第 10 个元素地址是多少？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11
    ],
    "origin": "同类考法新题",
    "topic": "r2-3",
    "hint": "",
    "explain": "首元素前偏移 0，第 10 个前有 9 个，地址=160+9×4=196。",
    "solution": [
      "首元素前偏移 0，第 10 个前有 9 个，地址=160+9×4=196。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "字节地址",
        "answer": "196",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先找“第几个之前有几项”，再乘字节长。",
      "plan": [
        "位序k从1开始，第k项之前有k−1项。",
        "地址=首地址+跳过项数×每项字节数；不是首地址再乘字节数。"
      ],
      "format": "填目标元素起始字节地址。"
    },
    "walkthrough": [
      "先找“第几个之前有几项”，再乘字节长。",
      "位序k从1开始，第k项之前有k−1项。",
      "地址=首地址+跳过项数×每项字节数；不是首地址再乘字节数。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-address-v2",
    "chapter": 2,
    "mode": "review",
    "family": "R2-address",
    "variant": 2,
    "title": "顺序表首元素字节地址 200，每元素 8 字节，位序从 1 开始。第 7 个元素地址是多少？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11
    ],
    "origin": "同类考法新题",
    "topic": "r2-3",
    "hint": "",
    "explain": "首元素前偏移 0，第 7 个前有 6 个，地址=200+6×8=248。",
    "solution": [
      "首元素前偏移 0，第 7 个前有 6 个，地址=200+6×8=248。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "字节地址",
        "answer": "248",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先找“第几个之前有几项”，再乘字节长。",
      "plan": [
        "位序k从1开始，第k项之前有k−1项。",
        "地址=首地址+跳过项数×每项字节数；不是首地址再乘字节数。"
      ],
      "format": "填目标元素起始字节地址。"
    },
    "walkthrough": [
      "先找“第几个之前有几项”，再乘字节长。",
      "位序k从1开始，第k项之前有k−1项。",
      "地址=首地址+跳过项数×每项字节数；不是首地址再乘字节数。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-address-v3",
    "chapter": 2,
    "mode": "review",
    "family": "R2-address",
    "variant": 3,
    "title": "顺序表首元素字节地址 1000，每元素 2 字节，位序从 1 开始。第 11 个元素地址是多少？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11
    ],
    "origin": "同类考法新题",
    "topic": "r2-3",
    "hint": "",
    "explain": "首元素前偏移 0，第 11 个前有 10 个，地址=1000+10×2=1020。",
    "solution": [
      "首元素前偏移 0，第 11 个前有 10 个，地址=1000+10×2=1020。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "字节地址",
        "answer": "1020",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先找“第几个之前有几项”，再乘字节长。",
      "plan": [
        "位序k从1开始，第k项之前有k−1项。",
        "地址=首地址+跳过项数×每项字节数；不是首地址再乘字节数。"
      ],
      "format": "填目标元素起始字节地址。"
    },
    "walkthrough": [
      "先找“第几个之前有几项”，再乘字节长。",
      "位序k从1开始，第k项之前有k−1项。",
      "地址=首地址+跳过项数×每项字节数；不是首地址再乘字节数。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-pointer-trace-v1",
    "chapter": 2,
    "mode": "review",
    "family": "R2-pointer-trace",
    "variant": 1,
    "title": "带头结点 L 的链为 L→10,20,30→NULL。p=L->next；q=p->next；p->next=q->next；free(q)。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      25,
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "p 指向 10，q 指向 20；删除 q 后接到 30。",
    "solution": [
      "p 指向 10，q 指向 20；删除 q 后接到 30。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "剩余数据序列",
        "answer": "10,30",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "新的 p->next->data",
        "answer": "30",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每句代码改变的究竟是变量指向，还是某个next。",
      "plan": [
        "先标p、q各指哪个结点，再画前驱绕过q的新链接。",
        "free只释放已绕过的q，不会自动修改其他链接。"
      ],
      "format": "序列按剩余逻辑次序，用逗号分隔。"
    },
    "walkthrough": [
      "每句代码改变的究竟是变量指向，还是某个next。",
      "先标p、q各指哪个结点，再画前驱绕过q的新链接。",
      "free只释放已绕过的q，不会自动修改其他链接。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-pointer-trace-v2",
    "chapter": 2,
    "mode": "review",
    "family": "R2-pointer-trace",
    "variant": 2,
    "title": "带头结点 L 的链为 L→5,8,13→NULL。p=L->next；q=p->next；p->next=q->next；free(q)。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      25,
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "p 指向 5，q 指向 8；删除 q 后接到 13。",
    "solution": [
      "p 指向 5，q 指向 8；删除 q 后接到 13。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "剩余数据序列",
        "answer": "5,13",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "新的 p->next->data",
        "answer": "13",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每句代码改变的究竟是变量指向，还是某个next。",
      "plan": [
        "先标p、q各指哪个结点，再画前驱绕过q的新链接。",
        "free只释放已绕过的q，不会自动修改其他链接。"
      ],
      "format": "序列按剩余逻辑次序，用逗号分隔。"
    },
    "walkthrough": [
      "每句代码改变的究竟是变量指向，还是某个next。",
      "先标p、q各指哪个结点，再画前驱绕过q的新链接。",
      "free只释放已绕过的q，不会自动修改其他链接。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-pointer-trace-v3",
    "chapter": 2,
    "mode": "review",
    "family": "R2-pointer-trace",
    "variant": 3,
    "title": "带头结点 L 的链为 L→2,4,6→NULL。p=L->next；q=p->next；p->next=q->next；free(q)。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      25,
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "p 指向 2，q 指向 4；删除 q 后接到 6。",
    "solution": [
      "p 指向 2，q 指向 4；删除 q 后接到 6。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "剩余数据序列",
        "answer": "2,6",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "新的 p->next->data",
        "answer": "6",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每句代码改变的究竟是变量指向，还是某个next。",
      "plan": [
        "先标p、q各指哪个结点，再画前驱绕过q的新链接。",
        "free只释放已绕过的q，不会自动修改其他链接。"
      ],
      "format": "序列按剩余逻辑次序，用逗号分隔。"
    },
    "walkthrough": [
      "每句代码改变的究竟是变量指向，还是某个next。",
      "先标p、q各指哪个结点，再画前驱绕过q的新链接。",
      "free只释放已绕过的q，不会自动修改其他链接。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-pointer-trace-v4",
    "chapter": 2,
    "mode": "review",
    "family": "R2-pointer-trace",
    "variant": 4,
    "title": "带头结点 L 的链为 L→11,22,33→NULL。p=L->next；q=p->next；p->next=q->next；free(q)。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      25,
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "p 指向 11，q 指向 22；删除 q 后接到 33。",
    "solution": [
      "p 指向 11，q 指向 22；删除 q 后接到 33。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "剩余数据序列",
        "answer": "11,33",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "新的 p->next->data",
        "answer": "33",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每句代码改变的究竟是变量指向，还是某个next。",
      "plan": [
        "先标p、q各指哪个结点，再画前驱绕过q的新链接。",
        "free只释放已绕过的q，不会自动修改其他链接。"
      ],
      "format": "序列按剩余逻辑次序，用逗号分隔。"
    },
    "walkthrough": [
      "每句代码改变的究竟是变量指向，还是某个next。",
      "先标p、q各指哪个结点，再画前驱绕过q的新链接。",
      "free只释放已绕过的q，不会自动修改其他链接。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R2-pitfalls-v1",
    "chapter": 2,
    "mode": "review",
    "family": "R2-pitfalls",
    "variant": 1,
    "title": "已知非空双向循环链表结点 q，删除 q 的正确链接修复是？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      3,
      25,
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-1",
    "hint": "",
    "explain": "必须修复前后两个方向；保存和接链必须发生在释放之前。",
    "solution": [
      "必须修复前后两个方向；保存和接链必须发生在释放之前。"
    ],
    "rubric": [],
    "options": [
      "q->prior->next=q->next; q->next->prior=q->prior",
      "q=q->next",
      "free(q) 后再访问 q->prior",
      "只改 q->next"
    ],
    "answer": 0,
    "support": {
      "ask": "先核对头结点、循环性和当前指针是否有效。",
      "plan": [
        "删除双向结点时，两侧邻居都必须互相接好。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "符合：必须修复前后两个方向；保存和接链必须发生在释放之前。",
      "核对条件：q改指后继并没有把原q从邻居链接里摘除。",
      "核对条件：释放后不能继续访问q的域，顺序必须反过来。",
      "核对条件：只改q自己的域不能修复前驱与后继之间的双向链接。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R2-pitfalls-v2",
    "chapter": 2,
    "mode": "review",
    "family": "R2-pitfalls",
    "variant": 2,
    "title": "已知 p 后插入 s，把 p->next=s 放在 s->next=p->next 之前，会发生什么？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      3,
      25,
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-1",
    "hint": "",
    "explain": "第二句读到的 p->next 已是 s，会使 s->next=s。",
    "solution": [
      "第二句读到的 p->next 已是 s，会使 s->next=s。"
    ],
    "rubric": [],
    "options": [
      "自动回到头结点",
      "只影响表长",
      "始终正确",
      "s 自环且原后继可能丢失"
    ],
    "answer": 3,
    "support": {
      "ask": "先核对头结点、循环性和当前指针是否有效。",
      "plan": [
        "删除双向结点时，两侧邻居都必须互相接好。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：这两句不会自动修复为头结点链接；新结点会指向自身。",
      "核对条件：这是链接结构出错，不只是表长数值有误。",
      "核对条件：第二句读取的p.next已经是s，所以会s.next=s，不能成立。",
      "符合：第二句读到的 p->next 已是 s，会使 s->next=s。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R2-pitfalls-v3",
    "chapter": 2,
    "mode": "review",
    "family": "R2-pitfalls",
    "variant": 3,
    "title": "单链表只知道待删除结点 p 的值，定位并删除它的最坏复杂度是？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      3,
      25,
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-1",
    "hint": "",
    "explain": "查找前驱或位置通常需要线性扫描，不能只计算改指针的常数时间。",
    "solution": [
      "查找前驱或位置通常需要线性扫描，不能只计算改指针的常数时间。"
    ],
    "rubric": [],
    "options": [
      "O(n²)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "support": {
      "ask": "先核对头结点、循环性和当前指针是否有效。",
      "plan": [
        "删除双向结点时，两侧邻居都必须互相接好。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：一次查找前驱再接链是线性，不需要再套n次。",
      "核对条件：常数只适用于已知合法前驱后的链接修改，本题还要定位。",
      "核对条件：普通单链表不能按中点地址直接二分跳转。",
      "符合：查找前驱或位置通常需要线性扫描，不能只计算改指针的常数时间。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R2-pitfalls-v4",
    "chapter": 2,
    "mode": "review",
    "family": "R2-pitfalls",
    "variant": 4,
    "title": "不带头结点的普通单链表，删除首元时必须更新什么？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      3,
      25,
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-1",
    "hint": "",
    "explain": "首元就是头指针所指结点，删除它后要让头指针指向新首元。",
    "solution": [
      "首元就是头指针所指结点，删除它后要让头指针指向新首元。"
    ],
    "rubric": [],
    "options": [
      "仅释放局部 p",
      "调用者保存的头指针",
      "所有结点地址",
      "最后元素值"
    ],
    "answer": 1,
    "support": {
      "ask": "先核对头结点、循环性和当前指针是否有效。",
      "plan": [
        "删除双向结点时，两侧邻居都必须互相接好。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：只释放局部变量所指结点，会让调用者的头指针仍指向失效地址。",
      "符合：首元就是头指针所指结点，删除它后要让头指针指向新首元。",
      "核对条件：其余结点不需搬家，只改入口链接。",
      "核对条件：删除首元不需要改尾结点的数据值。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R2-pitfalls-v5",
    "chapter": 2,
    "mode": "review",
    "family": "R2-pitfalls",
    "variant": 5,
    "title": "带头结点循环单链表的空表状态为？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      3,
      25,
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-1",
    "hint": "",
    "explain": "循环链表空表由头结点指向自身，与普通带头单链表判空不同。",
    "solution": [
      "循环链表空表由头结点指向自身，与普通带头单链表判空不同。"
    ],
    "rubric": [],
    "options": [
      "L->next==L",
      "L->next==NULL",
      "L->data==0",
      "L==NULL"
    ],
    "answer": 0,
    "support": {
      "ask": "先核对头结点、循环性和当前指针是否有效。",
      "plan": [
        "删除双向结点时，两侧邻居都必须互相接好。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "符合：循环链表空表由头结点指向自身，与普通带头单链表判空不同。",
      "核对条件：next为空对应普通非循环表，题目是循环表。",
      "核对条件：头结点数据域不是空表状态标记。",
      "核对条件：带头结点时空表仍保留L，L不应为空。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R2-double-delete-v1",
    "chapter": 2,
    "mode": "review",
    "family": "R2-double-delete",
    "variant": 1,
    "title": "非空双向循环链表含头结点，q 指向有效结点，值为 0。写出删除 q 的关键语句，解释为何不先 free(q)。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "q->prior->next=q->next;\nq->next->prior=q->prior;\nfree(q);\n先释放后读取 q 的域属于释放后访问。循环头结点让首尾的邻居指针也存在。",
    "solution": [
      "q->prior->next=q->next;",
      "q->next->prior=q->prior;",
      "free(q);",
      "先释放后读取 q 的域属于释放后访问。循环头结点让首尾的邻居指针也存在。"
    ],
    "rubric": [
      {
        "label": "前驱的 next 修复正确",
        "points": 2
      },
      {
        "label": "后继的 prior 修复正确",
        "points": 2
      },
      {
        "label": "最后释放且不再使用 q",
        "points": 2
      },
      {
        "label": "说明首尾边界和释放顺序",
        "points": 2
      }
    ],
    "support": {
      "ask": "先核对头结点、循环性和当前指针是否有效。",
      "plan": [
        "删除双向结点时，两侧邻居都必须互相接好。",
        "释放操作最后执行；查找成本、改链接成本要分别考虑。"
      ],
      "format": "单选对照链接含义；代码题写两条修复语句再释放。"
    },
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-double-delete-v2",
    "chapter": 2,
    "mode": "review",
    "family": "R2-double-delete",
    "variant": 2,
    "title": "非空双向循环链表含头结点，q 指向有效结点，值为 9。写出删除 q 的关键语句，解释为何不先 free(q)。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "q->prior->next=q->next;\nq->next->prior=q->prior;\nfree(q);\n先释放后读取 q 的域属于释放后访问。循环头结点让首尾的邻居指针也存在。",
    "solution": [
      "q->prior->next=q->next;",
      "q->next->prior=q->prior;",
      "free(q);",
      "先释放后读取 q 的域属于释放后访问。循环头结点让首尾的邻居指针也存在。"
    ],
    "rubric": [
      {
        "label": "前驱的 next 修复正确",
        "points": 2
      },
      {
        "label": "后继的 prior 修复正确",
        "points": 2
      },
      {
        "label": "最后释放且不再使用 q",
        "points": 2
      },
      {
        "label": "说明首尾边界和释放顺序",
        "points": 2
      }
    ],
    "support": {
      "ask": "先核对头结点、循环性和当前指针是否有效。",
      "plan": [
        "删除双向结点时，两侧邻居都必须互相接好。",
        "释放操作最后执行；查找成本、改链接成本要分别考虑。"
      ],
      "format": "单选对照链接含义；代码题写两条修复语句再释放。"
    },
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R2-double-delete-v3",
    "chapter": 2,
    "mode": "review",
    "family": "R2-double-delete",
    "variant": 3,
    "title": "非空双向循环链表含头结点，q 指向有效结点，值为 20。写出删除 q 的关键语句，解释为何不先 free(q)。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      30
    ],
    "origin": "同类考法新题",
    "topic": "r2-2",
    "hint": "",
    "explain": "q->prior->next=q->next;\nq->next->prior=q->prior;\nfree(q);\n先释放后读取 q 的域属于释放后访问。循环头结点让首尾的邻居指针也存在。",
    "solution": [
      "q->prior->next=q->next;",
      "q->next->prior=q->prior;",
      "free(q);",
      "先释放后读取 q 的域属于释放后访问。循环头结点让首尾的邻居指针也存在。"
    ],
    "rubric": [
      {
        "label": "前驱的 next 修复正确",
        "points": 2
      },
      {
        "label": "后继的 prior 修复正确",
        "points": 2
      },
      {
        "label": "最后释放且不再使用 q",
        "points": 2
      },
      {
        "label": "说明首尾边界和释放顺序",
        "points": 2
      }
    ],
    "support": {
      "ask": "先核对头结点、循环性和当前指针是否有效。",
      "plan": [
        "删除双向结点时，两侧邻居都必须互相接好。",
        "释放操作最后执行；查找成本、改链接成本要分别考虑。"
      ],
      "format": "单选对照链接含义；代码题写两条修复语句再释放。"
    },
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R3-stack-legal-v1",
    "chapter": 3,
    "mode": "review",
    "family": "R3-stack-legal",
    "variant": 1,
    "title": "按 1,2,3,4,5 依次入栈，允许交错出栈，输出 4,3,5,1,2 是否合法？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      12,
      19
    ],
    "origin": "同类考法新题",
    "topic": "r3-1",
    "hint": "",
    "explain": "模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列要求从栈内部越过未弹出的元素。",
    "solution": [
      "模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列要求从栈内部越过未弹出的元素。"
    ],
    "rubric": [],
    "options": [
      "只有队列合法",
      "取决于元素地址",
      "合法",
      "不合法，违背栈顶次序"
    ],
    "answer": 3,
    "support": {
      "ask": "输入顺序固定，允许交错弹出，但只能弹栈顶。",
      "plan": [
        "目标还没入栈就顺次压到它；已入栈却被其他值压住则不合法。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "逐个目标模拟；栈按底→顶书写",
        "heads": [
          "本次要输出",
          "动作",
          "动作后栈",
          "迄今容量峰值/结论"
        ],
        "rows": [
          [
            "4",
            "压1、压2、压3、压4、弹4",
            "1，2，3",
            "4"
          ],
          [
            "3",
            "弹3",
            "1，2",
            "4"
          ],
          [
            "5",
            "压5、弹5",
            "1，2",
            "4"
          ],
          [
            "1",
            "无新输入",
            "1，2",
            "栈顶不是所需值，失败"
          ]
        ]
      }
    ],
    "optionReasons": [
      "核对条件：普通队列只能保持1、2、3、4、5的输入先后，这不是题中所列输出。",
      "核对条件：地址不改变入栈顺序和栈顶限制，不影响合法性。",
      "核对条件：想输出1时栈为1，2，所需值并不在栈顶，不能越过上方元素。",
      "符合：模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列要求从栈内部越过未弹出的元素。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R3-stack-legal-v2",
    "chapter": 3,
    "mode": "review",
    "family": "R3-stack-legal",
    "variant": 2,
    "title": "按 1,2,3,4,5 依次入栈，允许交错出栈，输出 4,5,3,2,1 是否合法？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      12,
      19
    ],
    "origin": "同类考法新题",
    "topic": "r3-1",
    "hint": "",
    "explain": "模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列可完成。",
    "solution": [
      "模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列可完成。"
    ],
    "rubric": [],
    "options": [
      "取决于元素地址",
      "合法",
      "不合法，违背栈顶次序",
      "只有队列合法"
    ],
    "answer": 1,
    "support": {
      "ask": "输入顺序固定，允许交错弹出，但只能弹栈顶。",
      "plan": [
        "目标还没入栈就顺次压到它；已入栈却被其他值压住则不合法。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "逐个目标模拟；栈按底→顶书写",
        "heads": [
          "本次要输出",
          "动作",
          "动作后栈",
          "迄今容量峰值/结论"
        ],
        "rows": [
          [
            "4",
            "压1、压2、压3、压4、弹4",
            "1，2，3",
            "4"
          ],
          [
            "5",
            "压5、弹5",
            "1，2，3",
            "4"
          ],
          [
            "3",
            "弹3",
            "1，2",
            "4"
          ],
          [
            "2",
            "弹2",
            "1",
            "4"
          ],
          [
            "1",
            "弹1",
            "空",
            "4"
          ]
        ]
      }
    ],
    "optionReasons": [
      "核对条件：地址不改变入栈顺序和栈顶限制，不影响合法性。",
      "符合：模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列可完成。",
      "核对条件：下方逐项目标均能从栈顶取走，找不到违背栈顶规则的步骤，不能判非法。",
      "核对条件：普通队列只能保持1、2、3、4、5的输入先后，这不是题中所列输出。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R3-stack-legal-v3",
    "chapter": 3,
    "mode": "review",
    "family": "R3-stack-legal",
    "variant": 3,
    "title": "按 1,2,3,4,5 依次入栈，允许交错出栈，输出 2,1,4,3,5 是否合法？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      12,
      19
    ],
    "origin": "同类考法新题",
    "topic": "r3-1",
    "hint": "",
    "explain": "模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列可完成。",
    "solution": [
      "模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列可完成。"
    ],
    "rubric": [],
    "options": [
      "合法",
      "不合法，违背栈顶次序",
      "只有队列合法",
      "取决于元素地址"
    ],
    "answer": 0,
    "support": {
      "ask": "输入顺序固定，允许交错弹出，但只能弹栈顶。",
      "plan": [
        "目标还没入栈就顺次压到它；已入栈却被其他值压住则不合法。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "逐个目标模拟；栈按底→顶书写",
        "heads": [
          "本次要输出",
          "动作",
          "动作后栈",
          "迄今容量峰值/结论"
        ],
        "rows": [
          [
            "2",
            "压1、压2、弹2",
            "1",
            "2"
          ],
          [
            "1",
            "弹1",
            "空",
            "2"
          ],
          [
            "4",
            "压3、压4、弹4",
            "3",
            "2"
          ],
          [
            "3",
            "弹3",
            "空",
            "2"
          ],
          [
            "5",
            "压5、弹5",
            "空",
            "2"
          ]
        ]
      }
    ],
    "optionReasons": [
      "符合：模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列可完成。",
      "核对条件：下方逐项目标均能从栈顶取走，找不到违背栈顶规则的步骤，不能判非法。",
      "核对条件：普通队列只能保持1、2、3、4、5的输入先后，这不是题中所列输出。",
      "核对条件：地址不改变入栈顺序和栈顶限制，不影响合法性。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R3-stack-legal-v4",
    "chapter": 3,
    "mode": "review",
    "family": "R3-stack-legal",
    "variant": 4,
    "title": "按 1,2,3,4,5 依次入栈，允许交错出栈，输出 3,2,1,5,4 是否合法？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      12,
      19
    ],
    "origin": "同类考法新题",
    "topic": "r3-1",
    "hint": "",
    "explain": "模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列可完成。",
    "solution": [
      "模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列可完成。"
    ],
    "rubric": [],
    "options": [
      "不合法，违背栈顶次序",
      "只有队列合法",
      "取决于元素地址",
      "合法"
    ],
    "answer": 3,
    "support": {
      "ask": "输入顺序固定，允许交错弹出，但只能弹栈顶。",
      "plan": [
        "目标还没入栈就顺次压到它；已入栈却被其他值压住则不合法。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "逐个目标模拟；栈按底→顶书写",
        "heads": [
          "本次要输出",
          "动作",
          "动作后栈",
          "迄今容量峰值/结论"
        ],
        "rows": [
          [
            "3",
            "压1、压2、压3、弹3",
            "1，2",
            "3"
          ],
          [
            "2",
            "弹2",
            "1",
            "3"
          ],
          [
            "1",
            "弹1",
            "空",
            "3"
          ],
          [
            "5",
            "压4、压5、弹5",
            "4",
            "3"
          ],
          [
            "4",
            "弹4",
            "空",
            "3"
          ]
        ]
      }
    ],
    "optionReasons": [
      "核对条件：下方逐项目标均能从栈顶取走，找不到违背栈顶规则的步骤，不能判非法。",
      "核对条件：普通队列只能保持1、2、3、4、5的输入先后，这不是题中所列输出。",
      "核对条件：地址不改变入栈顺序和栈顶限制，不影响合法性。",
      "符合：模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。该序列可完成。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R3-stack-capacity-v1",
    "chapter": 3,
    "mode": "review",
    "family": "R3-stack-capacity",
    "variant": 1,
    "title": "元素 1..6 按序输入栈 S，弹出后立即进入队列 P。要使 P 输出 2,4,3,6,5,1，S 的最小容量是多少？",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      2,
      26
    ],
    "origin": "同类考法新题",
    "topic": "r3-1",
    "hint": "",
    "explain": "模拟压栈与弹栈，只在所需目标未出现时继续压入。\n整个过程同时在栈中的最大元素数为 3，所以最小容量=3。\n队列保持入队次序，不额外改变输出序列。",
    "solution": [
      "模拟压栈与弹栈，只在所需目标未出现时继续压入。",
      "整个过程同时在栈中的最大元素数为 3，所以最小容量=3。",
      "队列保持入队次序，不额外改变输出序列。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最小容量",
        "answer": "3",
        "points": 4,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "输入顺序固定，允许交错弹出，但只能弹栈顶。",
      "plan": [
        "目标还没入栈就顺次压到它；已入栈却被其他值压住则不合法。",
        "合法时记录同时在栈中的最大数量；进入队列不会再次改变弹出次序。"
      ],
      "format": "容量填峰值整数，非法序列不能凭空计算一个容量。"
    },
    "worked": [
      {
        "caption": "逐个目标模拟；栈按底→顶书写",
        "heads": [
          "本次要输出",
          "动作",
          "动作后栈",
          "迄今容量峰值/结论"
        ],
        "rows": [
          [
            "2",
            "压1、压2、弹2",
            "1",
            "2"
          ],
          [
            "4",
            "压3、压4、弹4",
            "1，3",
            "3"
          ],
          [
            "3",
            "弹3",
            "1",
            "3"
          ],
          [
            "6",
            "压5、压6、弹6",
            "1，5",
            "3"
          ],
          [
            "5",
            "弹5",
            "1",
            "3"
          ],
          [
            "1",
            "弹1",
            "空",
            "3"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R3-stack-capacity-v2",
    "chapter": 3,
    "mode": "review",
    "family": "R3-stack-capacity",
    "variant": 2,
    "title": "元素 1..6 按序输入栈 S，弹出后立即进入队列 P。要使 P 输出 3,2,1,6,5,4，S 的最小容量是多少？",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      2,
      26
    ],
    "origin": "同类考法新题",
    "topic": "r3-1",
    "hint": "",
    "explain": "模拟压栈与弹栈，只在所需目标未出现时继续压入。\n整个过程同时在栈中的最大元素数为 3，所以最小容量=3。\n队列保持入队次序，不额外改变输出序列。",
    "solution": [
      "模拟压栈与弹栈，只在所需目标未出现时继续压入。",
      "整个过程同时在栈中的最大元素数为 3，所以最小容量=3。",
      "队列保持入队次序，不额外改变输出序列。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最小容量",
        "answer": "3",
        "points": 4,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "输入顺序固定，允许交错弹出，但只能弹栈顶。",
      "plan": [
        "目标还没入栈就顺次压到它；已入栈却被其他值压住则不合法。",
        "合法时记录同时在栈中的最大数量；进入队列不会再次改变弹出次序。"
      ],
      "format": "容量填峰值整数，非法序列不能凭空计算一个容量。"
    },
    "worked": [
      {
        "caption": "逐个目标模拟；栈按底→顶书写",
        "heads": [
          "本次要输出",
          "动作",
          "动作后栈",
          "迄今容量峰值/结论"
        ],
        "rows": [
          [
            "3",
            "压1、压2、压3、弹3",
            "1，2",
            "3"
          ],
          [
            "2",
            "弹2",
            "1",
            "3"
          ],
          [
            "1",
            "弹1",
            "空",
            "3"
          ],
          [
            "6",
            "压4、压5、压6、弹6",
            "4，5",
            "3"
          ],
          [
            "5",
            "弹5",
            "4",
            "3"
          ],
          [
            "4",
            "弹4",
            "空",
            "3"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R3-stack-capacity-v3",
    "chapter": 3,
    "mode": "review",
    "family": "R3-stack-capacity",
    "variant": 3,
    "title": "元素 1..6 按序输入栈 S，弹出后立即进入队列 P。要使 P 输出 1,2,3,4,5,6，S 的最小容量是多少？",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      2,
      26
    ],
    "origin": "同类考法新题",
    "topic": "r3-1",
    "hint": "",
    "explain": "模拟压栈与弹栈，只在所需目标未出现时继续压入。\n整个过程同时在栈中的最大元素数为 1，所以最小容量=1。\n队列保持入队次序，不额外改变输出序列。",
    "solution": [
      "模拟压栈与弹栈，只在所需目标未出现时继续压入。",
      "整个过程同时在栈中的最大元素数为 1，所以最小容量=1。",
      "队列保持入队次序，不额外改变输出序列。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最小容量",
        "answer": "1",
        "points": 4,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "输入顺序固定，允许交错弹出，但只能弹栈顶。",
      "plan": [
        "目标还没入栈就顺次压到它；已入栈却被其他值压住则不合法。",
        "合法时记录同时在栈中的最大数量；进入队列不会再次改变弹出次序。"
      ],
      "format": "容量填峰值整数，非法序列不能凭空计算一个容量。"
    },
    "worked": [
      {
        "caption": "逐个目标模拟；栈按底→顶书写",
        "heads": [
          "本次要输出",
          "动作",
          "动作后栈",
          "迄今容量峰值/结论"
        ],
        "rows": [
          [
            "1",
            "压1、弹1",
            "空",
            "1"
          ],
          [
            "2",
            "压2、弹2",
            "空",
            "1"
          ],
          [
            "3",
            "压3、弹3",
            "空",
            "1"
          ],
          [
            "4",
            "压4、弹4",
            "空",
            "1"
          ],
          [
            "5",
            "压5、弹5",
            "空",
            "1"
          ],
          [
            "6",
            "压6、弹6",
            "空",
            "1"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R3-stack-capacity-v4",
    "chapter": 3,
    "mode": "review",
    "family": "R3-stack-capacity",
    "variant": 4,
    "title": "元素 1..6 按序输入栈 S，弹出后立即进入队列 P。要使 P 输出 4,3,2,1,6,5，S 的最小容量是多少？",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      2,
      26
    ],
    "origin": "同类考法新题",
    "topic": "r3-1",
    "hint": "",
    "explain": "模拟压栈与弹栈，只在所需目标未出现时继续压入。\n整个过程同时在栈中的最大元素数为 4，所以最小容量=4。\n队列保持入队次序，不额外改变输出序列。",
    "solution": [
      "模拟压栈与弹栈，只在所需目标未出现时继续压入。",
      "整个过程同时在栈中的最大元素数为 4，所以最小容量=4。",
      "队列保持入队次序，不额外改变输出序列。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最小容量",
        "answer": "4",
        "points": 4,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "输入顺序固定，允许交错弹出，但只能弹栈顶。",
      "plan": [
        "目标还没入栈就顺次压到它；已入栈却被其他值压住则不合法。",
        "合法时记录同时在栈中的最大数量；进入队列不会再次改变弹出次序。"
      ],
      "format": "容量填峰值整数，非法序列不能凭空计算一个容量。"
    },
    "worked": [
      {
        "caption": "逐个目标模拟；栈按底→顶书写",
        "heads": [
          "本次要输出",
          "动作",
          "动作后栈",
          "迄今容量峰值/结论"
        ],
        "rows": [
          [
            "4",
            "压1、压2、压3、压4、弹4",
            "1，2，3",
            "4"
          ],
          [
            "3",
            "弹3",
            "1，2",
            "4"
          ],
          [
            "2",
            "弹2",
            "1",
            "4"
          ],
          [
            "1",
            "弹1",
            "空",
            "4"
          ],
          [
            "6",
            "压5、压6、弹6",
            "5",
            "4"
          ],
          [
            "5",
            "弹5",
            "空",
            "4"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R3-postfix-v1",
    "chapter": 3,
    "mode": "review",
    "family": "R3-postfix",
    "variant": 1,
    "title": "求后缀表达式 5 3 - 2 * 18 6 / + 的值，/ 表示普通除法。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "从左到右扫描，遇操作数入栈。\n遇二元运算符先弹右操作数，再弹左操作数。\n最终结果 7。",
    "solution": [
      "从左到右扫描，遇操作数入栈。",
      "遇二元运算符先弹右操作数，再弹左操作数。",
      "最终结果 7。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "计算结果",
        "answer": "7",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先读数还是先读运算符，决定当前操作。",
      "plan": [
        "数入栈；二元运算先弹右数b，再弹左数a，算a op b。",
        "每个结果压回，结束应只剩一个结果；减法除法特别核对顺序。"
      ],
      "format": "填最终数值，分数或小数按题设接受。"
    },
    "worked": [
      {
        "caption": "从左到右；每个中间结果都压回栈",
        "heads": [
          "读到",
          "动作",
          "栈底→栈顶"
        ],
        "rows": [
          [
            "5",
            "操作数入栈",
            "5"
          ],
          [
            "3",
            "操作数入栈",
            "5，3"
          ],
          [
            "-",
            "先弹右数3，再弹左数5，算5-3=2",
            "2"
          ],
          [
            "2",
            "操作数入栈",
            "2，2"
          ],
          [
            "*",
            "先弹右数2，再弹左数2，算2*2=4",
            "4"
          ],
          [
            "18",
            "操作数入栈",
            "4，18"
          ],
          [
            "6",
            "操作数入栈",
            "4，18，6"
          ],
          [
            "/",
            "先弹右数6，再弹左数18，算18/6=3",
            "4，3"
          ],
          [
            "+",
            "先弹右数3，再弹左数4，算4+3=7",
            "7"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-postfix-v2",
    "chapter": 3,
    "mode": "review",
    "family": "R3-postfix",
    "variant": 2,
    "title": "求后缀表达式 3 2 + 4 5 * + 的值，/ 表示普通除法。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "从左到右扫描，遇操作数入栈。\n遇二元运算符先弹右操作数，再弹左操作数。\n最终结果 25。",
    "solution": [
      "从左到右扫描，遇操作数入栈。",
      "遇二元运算符先弹右操作数，再弹左操作数。",
      "最终结果 25。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "计算结果",
        "answer": "25",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先读数还是先读运算符，决定当前操作。",
      "plan": [
        "数入栈；二元运算先弹右数b，再弹左数a，算a op b。",
        "每个结果压回，结束应只剩一个结果；减法除法特别核对顺序。"
      ],
      "format": "填最终数值，分数或小数按题设接受。"
    },
    "worked": [
      {
        "caption": "从左到右；每个中间结果都压回栈",
        "heads": [
          "读到",
          "动作",
          "栈底→栈顶"
        ],
        "rows": [
          [
            "3",
            "操作数入栈",
            "3"
          ],
          [
            "2",
            "操作数入栈",
            "3，2"
          ],
          [
            "+",
            "先弹右数2，再弹左数3，算3+2=5",
            "5"
          ],
          [
            "4",
            "操作数入栈",
            "5，4"
          ],
          [
            "5",
            "操作数入栈",
            "5，4，5"
          ],
          [
            "*",
            "先弹右数5，再弹左数4，算4*5=20",
            "5，20"
          ],
          [
            "+",
            "先弹右数20，再弹左数5，算5+20=25",
            "25"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-postfix-v3",
    "chapter": 3,
    "mode": "review",
    "family": "R3-postfix",
    "variant": 3,
    "title": "求后缀表达式 8 3 - 2 * 的值，/ 表示普通除法。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "从左到右扫描，遇操作数入栈。\n遇二元运算符先弹右操作数，再弹左操作数。\n最终结果 10。",
    "solution": [
      "从左到右扫描，遇操作数入栈。",
      "遇二元运算符先弹右操作数，再弹左操作数。",
      "最终结果 10。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "计算结果",
        "answer": "10",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先读数还是先读运算符，决定当前操作。",
      "plan": [
        "数入栈；二元运算先弹右数b，再弹左数a，算a op b。",
        "每个结果压回，结束应只剩一个结果；减法除法特别核对顺序。"
      ],
      "format": "填最终数值，分数或小数按题设接受。"
    },
    "worked": [
      {
        "caption": "从左到右；每个中间结果都压回栈",
        "heads": [
          "读到",
          "动作",
          "栈底→栈顶"
        ],
        "rows": [
          [
            "8",
            "操作数入栈",
            "8"
          ],
          [
            "3",
            "操作数入栈",
            "8，3"
          ],
          [
            "-",
            "先弹右数3，再弹左数8，算8-3=5",
            "5"
          ],
          [
            "2",
            "操作数入栈",
            "5，2"
          ],
          [
            "*",
            "先弹右数2，再弹左数5，算5*2=10",
            "10"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-postfix-v4",
    "chapter": 3,
    "mode": "review",
    "family": "R3-postfix",
    "variant": 4,
    "title": "求后缀表达式 9 3 / 2 1 + * 的值，/ 表示普通除法。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "从左到右扫描，遇操作数入栈。\n遇二元运算符先弹右操作数，再弹左操作数。\n最终结果 9。",
    "solution": [
      "从左到右扫描，遇操作数入栈。",
      "遇二元运算符先弹右操作数，再弹左操作数。",
      "最终结果 9。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "计算结果",
        "answer": "9",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先读数还是先读运算符，决定当前操作。",
      "plan": [
        "数入栈；二元运算先弹右数b，再弹左数a，算a op b。",
        "每个结果压回，结束应只剩一个结果；减法除法特别核对顺序。"
      ],
      "format": "填最终数值，分数或小数按题设接受。"
    },
    "worked": [
      {
        "caption": "从左到右；每个中间结果都压回栈",
        "heads": [
          "读到",
          "动作",
          "栈底→栈顶"
        ],
        "rows": [
          [
            "9",
            "操作数入栈",
            "9"
          ],
          [
            "3",
            "操作数入栈",
            "9，3"
          ],
          [
            "/",
            "先弹右数3，再弹左数9，算9/3=3",
            "3"
          ],
          [
            "2",
            "操作数入栈",
            "3，2"
          ],
          [
            "1",
            "操作数入栈",
            "3，2，1"
          ],
          [
            "+",
            "先弹右数1，再弹左数2，算2+1=3",
            "3，3"
          ],
          [
            "*",
            "先弹右数3，再弹左数3，算3*3=9",
            "9"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-postfix-v5",
    "chapter": 3,
    "mode": "review",
    "family": "R3-postfix",
    "variant": 5,
    "title": "求后缀表达式 20 4 / 7 2 - + 的值，/ 表示普通除法。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "从左到右扫描，遇操作数入栈。\n遇二元运算符先弹右操作数，再弹左操作数。\n最终结果 10。",
    "solution": [
      "从左到右扫描，遇操作数入栈。",
      "遇二元运算符先弹右操作数，再弹左操作数。",
      "最终结果 10。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "计算结果",
        "answer": "10",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先读数还是先读运算符，决定当前操作。",
      "plan": [
        "数入栈；二元运算先弹右数b，再弹左数a，算a op b。",
        "每个结果压回，结束应只剩一个结果；减法除法特别核对顺序。"
      ],
      "format": "填最终数值，分数或小数按题设接受。"
    },
    "worked": [
      {
        "caption": "从左到右；每个中间结果都压回栈",
        "heads": [
          "读到",
          "动作",
          "栈底→栈顶"
        ],
        "rows": [
          [
            "20",
            "操作数入栈",
            "20"
          ],
          [
            "4",
            "操作数入栈",
            "20，4"
          ],
          [
            "/",
            "先弹右数4，再弹左数20，算20/4=5",
            "5"
          ],
          [
            "7",
            "操作数入栈",
            "5，7"
          ],
          [
            "2",
            "操作数入栈",
            "5，7，2"
          ],
          [
            "-",
            "先弹右数2，再弹左数7，算7-2=5",
            "5，5"
          ],
          [
            "+",
            "先弹右数5，再弹左数5，算5+5=10",
            "10"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-infix-v1",
    "chapter": 3,
    "mode": "review",
    "family": "R3-infix",
    "variant": 1,
    "title": "把中缀 a+b*c 转为后缀。运算符 + - * / 均按通常优先级和左结合处理。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      17,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "操作数保持次序，运算符按优先级与括号借助栈处理。\n结果 abc*+，括号不出现在结果中。",
    "solution": [
      "操作数保持次序，运算符按优先级与括号借助栈处理。",
      "结果 abc*+，括号不出现在结果中。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "后缀表达式",
        "answer": "abc*+",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "保持操作数原顺序，只用栈调整运算符输出时机。",
      "plan": [
        "乘除优先于加减，同级左结合时先弹旧运算符。",
        "右括号触发弹出到左括号；括号本身不出现在后缀中。"
      ],
      "format": "后缀可用空格分隔，本题字母均为单字符操作数。"
    },
    "worked": [
      {
        "caption": "注意这里栈中保存运算符，不是求值时的数字",
        "heads": [
          "读到",
          "操作",
          "栈底→顶",
          "已输出后缀"
        ],
        "rows": [
          [
            "a",
            "操作数直接输出",
            "空",
            "a"
          ],
          [
            "+",
            "先弹高或同优先级，再入栈",
            "+",
            "a"
          ],
          [
            "b",
            "操作数直接输出",
            "+",
            "a b"
          ],
          [
            "*",
            "先弹高或同优先级，再入栈",
            "+*",
            "a b"
          ],
          [
            "c",
            "操作数直接输出",
            "+*",
            "a b c"
          ],
          [
            "结束",
            "弹出剩余运算符",
            "空",
            "a b c * +"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-infix-v2",
    "chapter": 3,
    "mode": "review",
    "family": "R3-infix",
    "variant": 2,
    "title": "把中缀 (a+b)*c 转为后缀。运算符 + - * / 均按通常优先级和左结合处理。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      17,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "操作数保持次序，运算符按优先级与括号借助栈处理。\n结果 ab+c*，括号不出现在结果中。",
    "solution": [
      "操作数保持次序，运算符按优先级与括号借助栈处理。",
      "结果 ab+c*，括号不出现在结果中。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "后缀表达式",
        "answer": "ab+c*",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "保持操作数原顺序，只用栈调整运算符输出时机。",
      "plan": [
        "乘除优先于加减，同级左结合时先弹旧运算符。",
        "右括号触发弹出到左括号；括号本身不出现在后缀中。"
      ],
      "format": "后缀可用空格分隔，本题字母均为单字符操作数。"
    },
    "worked": [
      {
        "caption": "注意这里栈中保存运算符，不是求值时的数字",
        "heads": [
          "读到",
          "操作",
          "栈底→顶",
          "已输出后缀"
        ],
        "rows": [
          [
            "(",
            "左括号入栈",
            "(",
            "空"
          ],
          [
            "a",
            "操作数直接输出",
            "(",
            "a"
          ],
          [
            "+",
            "先弹高或同优先级，再入栈",
            "(+",
            "a"
          ],
          [
            "b",
            "操作数直接输出",
            "(+",
            "a b"
          ],
          [
            ")",
            "弹到左括号，括号不输出",
            "空",
            "a b +"
          ],
          [
            "*",
            "先弹高或同优先级，再入栈",
            "*",
            "a b +"
          ],
          [
            "c",
            "操作数直接输出",
            "*",
            "a b + c"
          ],
          [
            "结束",
            "弹出剩余运算符",
            "空",
            "a b + c *"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-infix-v3",
    "chapter": 3,
    "mode": "review",
    "family": "R3-infix",
    "variant": 3,
    "title": "把中缀 a-b/c+d 转为后缀。运算符 + - * / 均按通常优先级和左结合处理。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      17,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "操作数保持次序，运算符按优先级与括号借助栈处理。\n结果 abc/-d+，括号不出现在结果中。",
    "solution": [
      "操作数保持次序，运算符按优先级与括号借助栈处理。",
      "结果 abc/-d+，括号不出现在结果中。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "后缀表达式",
        "answer": "abc/-d+",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "保持操作数原顺序，只用栈调整运算符输出时机。",
      "plan": [
        "乘除优先于加减，同级左结合时先弹旧运算符。",
        "右括号触发弹出到左括号；括号本身不出现在后缀中。"
      ],
      "format": "后缀可用空格分隔，本题字母均为单字符操作数。"
    },
    "worked": [
      {
        "caption": "注意这里栈中保存运算符，不是求值时的数字",
        "heads": [
          "读到",
          "操作",
          "栈底→顶",
          "已输出后缀"
        ],
        "rows": [
          [
            "a",
            "操作数直接输出",
            "空",
            "a"
          ],
          [
            "-",
            "先弹高或同优先级，再入栈",
            "-",
            "a"
          ],
          [
            "b",
            "操作数直接输出",
            "-",
            "a b"
          ],
          [
            "/",
            "先弹高或同优先级，再入栈",
            "-/",
            "a b"
          ],
          [
            "c",
            "操作数直接输出",
            "-/",
            "a b c"
          ],
          [
            "+",
            "先弹高或同优先级，再入栈",
            "+",
            "a b c / -"
          ],
          [
            "d",
            "操作数直接输出",
            "+",
            "a b c / - d"
          ],
          [
            "结束",
            "弹出剩余运算符",
            "空",
            "a b c / - d +"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-infix-v4",
    "chapter": 3,
    "mode": "review",
    "family": "R3-infix",
    "variant": 4,
    "title": "把中缀 a*(b+c)-d/e 转为后缀。运算符 + - * / 均按通常优先级和左结合处理。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      17,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "操作数保持次序，运算符按优先级与括号借助栈处理。\n结果 abc+*de/-，括号不出现在结果中。",
    "solution": [
      "操作数保持次序，运算符按优先级与括号借助栈处理。",
      "结果 abc+*de/-，括号不出现在结果中。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "后缀表达式",
        "answer": "abc+*de/-",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "保持操作数原顺序，只用栈调整运算符输出时机。",
      "plan": [
        "乘除优先于加减，同级左结合时先弹旧运算符。",
        "右括号触发弹出到左括号；括号本身不出现在后缀中。"
      ],
      "format": "后缀可用空格分隔，本题字母均为单字符操作数。"
    },
    "worked": [
      {
        "caption": "注意这里栈中保存运算符，不是求值时的数字",
        "heads": [
          "读到",
          "操作",
          "栈底→顶",
          "已输出后缀"
        ],
        "rows": [
          [
            "a",
            "操作数直接输出",
            "空",
            "a"
          ],
          [
            "*",
            "先弹高或同优先级，再入栈",
            "*",
            "a"
          ],
          [
            "(",
            "左括号入栈",
            "*(",
            "a"
          ],
          [
            "b",
            "操作数直接输出",
            "*(",
            "a b"
          ],
          [
            "+",
            "先弹高或同优先级，再入栈",
            "*(+",
            "a b"
          ],
          [
            "c",
            "操作数直接输出",
            "*(+",
            "a b c"
          ],
          [
            ")",
            "弹到左括号，括号不输出",
            "*",
            "a b c +"
          ],
          [
            "-",
            "先弹高或同优先级，再入栈",
            "-",
            "a b c + *"
          ],
          [
            "d",
            "操作数直接输出",
            "-",
            "a b c + * d"
          ],
          [
            "/",
            "先弹高或同优先级，再入栈",
            "-/",
            "a b c + * d"
          ],
          [
            "e",
            "操作数直接输出",
            "-/",
            "a b c + * d e"
          ],
          [
            "结束",
            "弹出剩余运算符",
            "空",
            "a b c + * d e / -"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-ring-v1",
    "chapter": 3,
    "mode": "review",
    "family": "R3-ring",
    "variant": 1,
    "title": "循环队列数组容量 m=8，牺牲一个单元，front=6,rear=2。先合法出队 2 次，再入队 1 次。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      25,
      26,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r3-3",
    "hint": "",
    "explain": "初长=(2-6+8)%8=4。\nfront=(6+2)%8=0；rear=(2+1)%8=3。\n终长=3；有效容量为 7。",
    "solution": [
      "初长=(2-6+8)%8=4。",
      "front=(6+2)%8=0；rear=(2+1)%8=3。",
      "终长=3；有效容量为 7。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "初始长度",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终 front",
        "answer": "0",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终 rear",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终长度",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先固定front是队头、rear是下一入队位置。",
      "plan": [
        "初长从front沿环数到rear之前；出队只推进front。",
        "再执行入队推进rear，每次对数组容量m取余；重新核对长度。"
      ],
      "format": "各空分别填长度或指针下标，不把位置值直接当长度。"
    },
    "worked": [
      {
        "caption": "每次只推进本操作对应的指针",
        "heads": [
          "操作",
          "front",
          "rear",
          "当前长度"
        ],
        "rows": [
          [
            "初始",
            "6",
            "2",
            "4"
          ],
          [
            "出队1",
            "7",
            "2",
            "3"
          ],
          [
            "出队2",
            "0",
            "2",
            "2"
          ],
          [
            "入队1",
            "0",
            "3",
            "3"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-ring-v2",
    "chapter": 3,
    "mode": "review",
    "family": "R3-ring",
    "variant": 2,
    "title": "循环队列数组容量 m=10，牺牲一个单元，front=8,rear=3。先合法出队 1 次，再入队 2 次。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      25,
      26,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r3-3",
    "hint": "",
    "explain": "初长=(3-8+10)%10=5。\nfront=(8+1)%10=9；rear=(3+2)%10=5。\n终长=6；有效容量为 9。",
    "solution": [
      "初长=(3-8+10)%10=5。",
      "front=(8+1)%10=9；rear=(3+2)%10=5。",
      "终长=6；有效容量为 9。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "初始长度",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终 front",
        "answer": "9",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终 rear",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终长度",
        "answer": "6",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先固定front是队头、rear是下一入队位置。",
      "plan": [
        "初长从front沿环数到rear之前；出队只推进front。",
        "再执行入队推进rear，每次对数组容量m取余；重新核对长度。"
      ],
      "format": "各空分别填长度或指针下标，不把位置值直接当长度。"
    },
    "worked": [
      {
        "caption": "每次只推进本操作对应的指针",
        "heads": [
          "操作",
          "front",
          "rear",
          "当前长度"
        ],
        "rows": [
          [
            "初始",
            "8",
            "3",
            "5"
          ],
          [
            "出队1",
            "9",
            "3",
            "4"
          ],
          [
            "入队1",
            "9",
            "4",
            "5"
          ],
          [
            "入队2",
            "9",
            "5",
            "6"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-ring-v3",
    "chapter": 3,
    "mode": "review",
    "family": "R3-ring",
    "variant": 3,
    "title": "循环队列数组容量 m=6，牺牲一个单元，front=4,rear=1。先合法出队 2 次，再入队 2 次。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      25,
      26,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r3-3",
    "hint": "",
    "explain": "初长=(1-4+6)%6=3。\nfront=(4+2)%6=0；rear=(1+2)%6=3。\n终长=3；有效容量为 5。",
    "solution": [
      "初长=(1-4+6)%6=3。",
      "front=(4+2)%6=0；rear=(1+2)%6=3。",
      "终长=3；有效容量为 5。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "初始长度",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终 front",
        "answer": "0",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终 rear",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终长度",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先固定front是队头、rear是下一入队位置。",
      "plan": [
        "初长从front沿环数到rear之前；出队只推进front。",
        "再执行入队推进rear，每次对数组容量m取余；重新核对长度。"
      ],
      "format": "各空分别填长度或指针下标，不把位置值直接当长度。"
    },
    "worked": [
      {
        "caption": "每次只推进本操作对应的指针",
        "heads": [
          "操作",
          "front",
          "rear",
          "当前长度"
        ],
        "rows": [
          [
            "初始",
            "4",
            "1",
            "3"
          ],
          [
            "出队1",
            "5",
            "1",
            "2"
          ],
          [
            "出队2",
            "0",
            "1",
            "1"
          ],
          [
            "入队1",
            "0",
            "2",
            "2"
          ],
          [
            "入队2",
            "0",
            "3",
            "3"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-ring-v4",
    "chapter": 3,
    "mode": "review",
    "family": "R3-ring",
    "variant": 4,
    "title": "循环队列数组容量 m=12，牺牲一个单元，front=10,rear=4。先合法出队 3 次，再入队 1 次。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      25,
      26,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r3-3",
    "hint": "",
    "explain": "初长=(4-10+12)%12=6。\nfront=(10+3)%12=1；rear=(4+1)%12=5。\n终长=4；有效容量为 11。",
    "solution": [
      "初长=(4-10+12)%12=6。",
      "front=(10+3)%12=1；rear=(4+1)%12=5。",
      "终长=4；有效容量为 11。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "初始长度",
        "answer": "6",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终 front",
        "answer": "1",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终 rear",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终长度",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先固定front是队头、rear是下一入队位置。",
      "plan": [
        "初长从front沿环数到rear之前；出队只推进front。",
        "再执行入队推进rear，每次对数组容量m取余；重新核对长度。"
      ],
      "format": "各空分别填长度或指针下标，不把位置值直接当长度。"
    },
    "worked": [
      {
        "caption": "每次只推进本操作对应的指针",
        "heads": [
          "操作",
          "front",
          "rear",
          "当前长度"
        ],
        "rows": [
          [
            "初始",
            "10",
            "4",
            "6"
          ],
          [
            "出队1",
            "11",
            "4",
            "5"
          ],
          [
            "出队2",
            "0",
            "4",
            "4"
          ],
          [
            "出队3",
            "1",
            "4",
            "3"
          ],
          [
            "入队1",
            "1",
            "5",
            "4"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-bracket-v1",
    "chapter": 3,
    "mode": "review",
    "family": "R3-bracket",
    "variant": 1,
    "title": "字符串 ([{}]) 的括号匹配结论是什么？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "逐个匹配最近未闭合左括号，并在结束时检查栈空。本串满足。",
    "solution": [
      "逐个匹配最近未闭合左括号，并在结束时检查栈空。本串满足。"
    ],
    "rubric": [],
    "options": [
      "仅凭总数相等就匹配",
      "取决于存储结构",
      "匹配",
      "不匹配"
    ],
    "answer": 2,
    "support": {
      "ask": "每个右括号必须关闭最近的未匹配左括号。",
      "plan": [
        "左括号入栈；右括号与栈顶类型不符或无栈顶就失败。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "栈保存最近尚未闭合的左括号",
        "heads": [
          "读到",
          "未匹配栈",
          "判断"
        ],
        "rows": [
          [
            "(",
            "(",
            "左括号入栈"
          ],
          [
            "[",
            "(，[",
            "左括号入栈"
          ],
          [
            "{",
            "(，[，{",
            "左括号入栈"
          ],
          [
            "}",
            "(，[",
            "类型相同，弹出左括号"
          ],
          [
            "]",
            "(",
            "类型相同，弹出左括号"
          ],
          [
            ")",
            "空",
            "类型相同，弹出左括号"
          ],
          [
            "扫描结束",
            "空",
            "匹配"
          ]
        ]
      }
    ],
    "optionReasons": [
      "核对条件：数量条件不能保证最近左括号与当前右括号类型相同，例如([)]。",
      "核对条件：匹配规则由括号类型和嵌套决定，数组栈或链栈应得出同样结论。",
      "符合：逐个匹配最近未闭合左括号，并在结束时检查栈空。本串满足。",
      "核对条件：每次右括号都与栈顶匹配且结束栈空，不能判为不匹配。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R3-bracket-v2",
    "chapter": 3,
    "mode": "review",
    "family": "R3-bracket",
    "variant": 2,
    "title": "字符串 ([)] 的括号匹配结论是什么？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "逐个匹配最近未闭合左括号，并在结束时检查栈空。本串存在类型次序错误或残留左括号。",
    "solution": [
      "逐个匹配最近未闭合左括号，并在结束时检查栈空。本串存在类型次序错误或残留左括号。"
    ],
    "rubric": [],
    "options": [
      "取决于存储结构",
      "匹配",
      "不匹配",
      "仅凭总数相等就匹配"
    ],
    "answer": 2,
    "support": {
      "ask": "每个右括号必须关闭最近的未匹配左括号。",
      "plan": [
        "左括号入栈；右括号与栈顶类型不符或无栈顶就失败。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "栈保存最近尚未闭合的左括号",
        "heads": [
          "读到",
          "未匹配栈",
          "判断"
        ],
        "rows": [
          [
            "(",
            "(",
            "左括号入栈"
          ],
          [
            "[",
            "(，[",
            "左括号入栈"
          ],
          [
            ")",
            "(，[",
            "不匹配，立即停止"
          ]
        ]
      }
    ],
    "optionReasons": [
      "核对条件：匹配规则由括号类型和嵌套决定，数组栈或链栈应得出同样结论。",
      "核对条件：下方过程有类型冲突或结束后残余左括号，不满足全部匹配条件。",
      "符合：逐个匹配最近未闭合左括号，并在结束时检查栈空。本串存在类型次序错误或残留左括号。",
      "核对条件：数量条件不能保证最近左括号与当前右括号类型相同，例如([)]。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R3-bracket-v3",
    "chapter": 3,
    "mode": "review",
    "family": "R3-bracket",
    "variant": 3,
    "title": "字符串 (() 的括号匹配结论是什么？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-2",
    "hint": "",
    "explain": "逐个匹配最近未闭合左括号，并在结束时检查栈空。本串存在类型次序错误或残留左括号。",
    "solution": [
      "逐个匹配最近未闭合左括号，并在结束时检查栈空。本串存在类型次序错误或残留左括号。"
    ],
    "rubric": [],
    "options": [
      "匹配",
      "不匹配",
      "仅凭总数相等就匹配",
      "取决于存储结构"
    ],
    "answer": 1,
    "support": {
      "ask": "每个右括号必须关闭最近的未匹配左括号。",
      "plan": [
        "左括号入栈；右括号与栈顶类型不符或无栈顶就失败。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "栈保存最近尚未闭合的左括号",
        "heads": [
          "读到",
          "未匹配栈",
          "判断"
        ],
        "rows": [
          [
            "(",
            "(",
            "左括号入栈"
          ],
          [
            "(",
            "(，(",
            "左括号入栈"
          ],
          [
            ")",
            "(",
            "类型相同，弹出左括号"
          ],
          [
            "扫描结束",
            "(",
            "仍有左括号，失败"
          ]
        ]
      }
    ],
    "optionReasons": [
      "核对条件：下方过程有类型冲突或结束后残余左括号，不满足全部匹配条件。",
      "符合：逐个匹配最近未闭合左括号，并在结束时检查栈空。本串存在类型次序错误或残留左括号。",
      "核对条件：数量条件不能保证最近左括号与当前右括号类型相同，例如([)]。",
      "核对条件：匹配规则由括号类型和嵌套决定，数组栈或链栈应得出同样结论。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R3-hanoi-v1",
    "chapter": 3,
    "mode": "review",
    "family": "R3-hanoi",
    "variant": 1,
    "title": "4 个盘的标准汉诺塔，求最少移动次数和递归栈最大深度（忽略 n=0 的空调用）。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      21,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-4",
    "hint": "",
    "explain": "T(n)=2T(n−1)+1=2ⁿ−1=15。\n同时保留的非空调用最多 4 层，深度与总次数不同。",
    "solution": [
      "T(n)=2T(n−1)+1=2ⁿ−1=15。",
      "同时保留的非空调用最多 4 层，深度与总次数不同。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最少移动次数",
        "answer": "15",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最大非空调用层数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "总移动次数和最大非空调用层数是两个问题。",
      "plan": [
        "每个n盘任务包含两次n−1盘任务与中间一次最大盘移动。",
        "总次数按2ⁿ−1，深度按n；题目已排除n=0空调用。"
      ],
      "format": "两个空都填整数，不把总次数当栈深。"
    },
    "worked": [
      {
        "caption": "先从小规模递推，深度只按调用链增加",
        "heads": [
          "盘数",
          "最少移动",
          "最大非空调用层数"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "3",
            "2"
          ],
          [
            "3",
            "7",
            "3"
          ],
          [
            "4",
            "15",
            "4"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-hanoi-v2",
    "chapter": 3,
    "mode": "review",
    "family": "R3-hanoi",
    "variant": 2,
    "title": "7 个盘的标准汉诺塔，求最少移动次数和递归栈最大深度（忽略 n=0 的空调用）。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      21,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-4",
    "hint": "",
    "explain": "T(n)=2T(n−1)+1=2ⁿ−1=127。\n同时保留的非空调用最多 7 层，深度与总次数不同。",
    "solution": [
      "T(n)=2T(n−1)+1=2ⁿ−1=127。",
      "同时保留的非空调用最多 7 层，深度与总次数不同。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最少移动次数",
        "answer": "127",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最大非空调用层数",
        "answer": "7",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "总移动次数和最大非空调用层数是两个问题。",
      "plan": [
        "每个n盘任务包含两次n−1盘任务与中间一次最大盘移动。",
        "总次数按2ⁿ−1，深度按n；题目已排除n=0空调用。"
      ],
      "format": "两个空都填整数，不把总次数当栈深。"
    },
    "worked": [
      {
        "caption": "先从小规模递推，深度只按调用链增加",
        "heads": [
          "盘数",
          "最少移动",
          "最大非空调用层数"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "3",
            "2"
          ],
          [
            "3",
            "7",
            "3"
          ],
          [
            "4",
            "15",
            "4"
          ],
          [
            "5",
            "31",
            "5"
          ],
          [
            "6",
            "63",
            "6"
          ],
          [
            "7",
            "127",
            "7"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-hanoi-v3",
    "chapter": 3,
    "mode": "review",
    "family": "R3-hanoi",
    "variant": 3,
    "title": "10 个盘的标准汉诺塔，求最少移动次数和递归栈最大深度（忽略 n=0 的空调用）。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      21,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r3-4",
    "hint": "",
    "explain": "T(n)=2T(n−1)+1=2ⁿ−1=1023。\n同时保留的非空调用最多 10 层，深度与总次数不同。",
    "solution": [
      "T(n)=2T(n−1)+1=2ⁿ−1=1023。",
      "同时保留的非空调用最多 10 层，深度与总次数不同。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最少移动次数",
        "answer": "1023",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最大非空调用层数",
        "answer": "10",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "总移动次数和最大非空调用层数是两个问题。",
      "plan": [
        "每个n盘任务包含两次n−1盘任务与中间一次最大盘移动。",
        "总次数按2ⁿ−1，深度按n；题目已排除n=0空调用。"
      ],
      "format": "两个空都填整数，不把总次数当栈深。"
    },
    "worked": [
      {
        "caption": "先从小规模递推，深度只按调用链增加",
        "heads": [
          "盘数",
          "最少移动",
          "最大非空调用层数"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "3",
            "2"
          ],
          [
            "3",
            "7",
            "3"
          ],
          [
            "4",
            "15",
            "4"
          ],
          [
            "5",
            "31",
            "5"
          ],
          [
            "6",
            "63",
            "6"
          ],
          [
            "7",
            "127",
            "7"
          ],
          [
            "8",
            "255",
            "8"
          ],
          [
            "9",
            "511",
            "9"
          ],
          [
            "10",
            "1023",
            "10"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R3-boundary-v1",
    "chapter": 3,
    "mode": "review",
    "family": "R3-boundary",
    "variant": 1,
    "title": "仅允许一端插入、两端删除的是？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      27
    ],
    "origin": "同类考法新题",
    "topic": "r3-4",
    "hint": "",
    "explain": "限制输入端，删除仍可以从两端进行。",
    "solution": [
      "限制输入端，删除仍可以从两端进行。"
    ],
    "rubric": [],
    "options": [
      "输出受限双端队列",
      "普通栈",
      "循环单链表",
      "输入受限双端队列"
    ],
    "answer": 3,
    "support": {
      "ask": "受限的是输入端还是输出端；是否带头结点。",
      "plan": [
        "输入受限表示一端能入，两端能出，输出受限相反。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：输出受限只允许一端删除，而本题删除可用两端。",
      "核对条件：普通栈只允许同一端插入和删除。",
      "核对条件：循环链表是一种存储结构，本身未约定双端队列操作权限。",
      "符合：限制输入端，删除仍可以从两端进行。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R3-boundary-v2",
    "chapter": 3,
    "mode": "review",
    "family": "R3-boundary",
    "variant": 2,
    "title": "无头结点链队只有一个结点，出队后 front 与 rear 应？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      27
    ],
    "origin": "同类考法新题",
    "topic": "r3-3",
    "hint": "",
    "explain": "删空后不能保留悬空尾指针。",
    "solution": [
      "删空后不能保留悬空尾指针。"
    ],
    "rubric": [],
    "options": [
      "两者都为 NULL",
      "继续指向原结点",
      "仅 front=NULL",
      "仅 rear=NULL"
    ],
    "answer": 0,
    "support": {
      "ask": "受限的是输入端还是输出端；是否带头结点。",
      "plan": [
        "输入受限表示一端能入，两端能出，输出受限相反。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "符合：删空后不能保留悬空尾指针。",
      "核对条件：原结点已经被移走或释放，保留其地址会形成悬空指针。",
      "核对条件：front清空后，rear若不改仍悬空。",
      "核对条件：rear清空后，front若不改仍指已删结点。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R4-rowcol-v1",
    "chapter": 4,
    "mode": "review",
    "family": "R4-rowcol",
    "variant": 1,
    "title": "A[1..5][1..6]，每元素 4 字节，a[1][1] 起始地址 1234。求 a[3][4] 两种存法的起始地址。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      22,
      25
    ],
    "origin": "同类考法新题",
    "topic": "r4-1",
    "hint": "",
    "explain": "行优先偏移=(3-1)×6+(4-1)，地址=1294。\n列优先偏移=(4-1)×5+(3-1)，地址=1302。\n用行数乘列偏移、列数乘行偏移，最后再乘字节数。",
    "solution": [
      "行优先偏移=(3-1)×6+(4-1)，地址=1294。",
      "列优先偏移=(4-1)×5+(3-1)，地址=1302。",
      "用行数乘列偏移、列数乘行偏移，最后再乘字节数。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "行优先地址",
        "answer": "1294",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "列优先地址",
        "answer": "1302",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先数元素偏移，再把元素数换成字节。",
      "plan": [
        "行优先：跨完整行，再加本行前面项；列优先交换这两个角色。",
        "原下标从1起，要分别减1；最后统一乘每项字节数。"
      ],
      "format": "两空填两种布局的目标起始地址。"
    },
    "worked": [
      {
        "caption": "先算元素数，再统一换成字节",
        "heads": [
          "布局",
          "完整行/列贡献",
          "本行/列贡献",
          "元素偏移",
          "实际地址"
        ],
        "rows": [
          [
            "行优先",
            "12",
            "3",
            "15",
            "1294"
          ],
          [
            "列优先",
            "15",
            "2",
            "17",
            "1302"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-rowcol-v2",
    "chapter": 4,
    "mode": "review",
    "family": "R4-rowcol",
    "variant": 2,
    "title": "A[1..6][1..8]，每元素 2 字节，a[1][1] 起始地址 1000。求 a[2][4] 两种存法的起始地址。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      22,
      25
    ],
    "origin": "同类考法新题",
    "topic": "r4-1",
    "hint": "",
    "explain": "行优先偏移=(2-1)×8+(4-1)，地址=1022。\n列优先偏移=(4-1)×6+(2-1)，地址=1038。\n用行数乘列偏移、列数乘行偏移，最后再乘字节数。",
    "solution": [
      "行优先偏移=(2-1)×8+(4-1)，地址=1022。",
      "列优先偏移=(4-1)×6+(2-1)，地址=1038。",
      "用行数乘列偏移、列数乘行偏移，最后再乘字节数。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "行优先地址",
        "answer": "1022",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "列优先地址",
        "answer": "1038",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先数元素偏移，再把元素数换成字节。",
      "plan": [
        "行优先：跨完整行，再加本行前面项；列优先交换这两个角色。",
        "原下标从1起，要分别减1；最后统一乘每项字节数。"
      ],
      "format": "两空填两种布局的目标起始地址。"
    },
    "worked": [
      {
        "caption": "先算元素数，再统一换成字节",
        "heads": [
          "布局",
          "完整行/列贡献",
          "本行/列贡献",
          "元素偏移",
          "实际地址"
        ],
        "rows": [
          [
            "行优先",
            "8",
            "3",
            "11",
            "1022"
          ],
          [
            "列优先",
            "18",
            "1",
            "19",
            "1038"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-rowcol-v3",
    "chapter": 4,
    "mode": "review",
    "family": "R4-rowcol",
    "variant": 3,
    "title": "A[1..4][1..7]，每元素 8 字节，a[1][1] 起始地址 2048。求 a[4][6] 两种存法的起始地址。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      22,
      25
    ],
    "origin": "同类考法新题",
    "topic": "r4-1",
    "hint": "",
    "explain": "行优先偏移=(4-1)×7+(6-1)，地址=2256。\n列优先偏移=(6-1)×4+(4-1)，地址=2232。\n用行数乘列偏移、列数乘行偏移，最后再乘字节数。",
    "solution": [
      "行优先偏移=(4-1)×7+(6-1)，地址=2256。",
      "列优先偏移=(6-1)×4+(4-1)，地址=2232。",
      "用行数乘列偏移、列数乘行偏移，最后再乘字节数。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "行优先地址",
        "answer": "2256",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "列优先地址",
        "answer": "2232",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先数元素偏移，再把元素数换成字节。",
      "plan": [
        "行优先：跨完整行，再加本行前面项；列优先交换这两个角色。",
        "原下标从1起，要分别减1；最后统一乘每项字节数。"
      ],
      "format": "两空填两种布局的目标起始地址。"
    },
    "worked": [
      {
        "caption": "先算元素数，再统一换成字节",
        "heads": [
          "布局",
          "完整行/列贡献",
          "本行/列贡献",
          "元素偏移",
          "实际地址"
        ],
        "rows": [
          [
            "行优先",
            "21",
            "5",
            "26",
            "2256"
          ],
          [
            "列优先",
            "20",
            "3",
            "23",
            "2232"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-rowcol-v4",
    "chapter": 4,
    "mode": "review",
    "family": "R4-rowcol",
    "variant": 4,
    "title": "A[1..8][1..5]，每元素 4 字节，a[1][1] 起始地址 500。求 a[6][3] 两种存法的起始地址。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      22,
      25
    ],
    "origin": "同类考法新题",
    "topic": "r4-1",
    "hint": "",
    "explain": "行优先偏移=(6-1)×5+(3-1)，地址=608。\n列优先偏移=(3-1)×8+(6-1)，地址=584。\n用行数乘列偏移、列数乘行偏移，最后再乘字节数。",
    "solution": [
      "行优先偏移=(6-1)×5+(3-1)，地址=608。",
      "列优先偏移=(3-1)×8+(6-1)，地址=584。",
      "用行数乘列偏移、列数乘行偏移，最后再乘字节数。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "行优先地址",
        "answer": "608",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "列优先地址",
        "answer": "584",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先数元素偏移，再把元素数换成字节。",
      "plan": [
        "行优先：跨完整行，再加本行前面项；列优先交换这两个角色。",
        "原下标从1起，要分别减1；最后统一乘每项字节数。"
      ],
      "format": "两空填两种布局的目标起始地址。"
    },
    "worked": [
      {
        "caption": "先算元素数，再统一换成字节",
        "heads": [
          "布局",
          "完整行/列贡献",
          "本行/列贡献",
          "元素偏移",
          "实际地址"
        ],
        "rows": [
          [
            "行优先",
            "25",
            "2",
            "27",
            "608"
          ],
          [
            "列优先",
            "16",
            "5",
            "21",
            "584"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-rowcol-v5",
    "chapter": 4,
    "mode": "review",
    "family": "R4-rowcol",
    "variant": 5,
    "title": "A[1..3][1..9]，每元素 1 字节，a[1][1] 起始地址 100。求 a[2][8] 两种存法的起始地址。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      22,
      25
    ],
    "origin": "同类考法新题",
    "topic": "r4-1",
    "hint": "",
    "explain": "行优先偏移=(2-1)×9+(8-1)，地址=116。\n列优先偏移=(8-1)×3+(2-1)，地址=122。\n用行数乘列偏移、列数乘行偏移，最后再乘字节数。",
    "solution": [
      "行优先偏移=(2-1)×9+(8-1)，地址=116。",
      "列优先偏移=(8-1)×3+(2-1)，地址=122。",
      "用行数乘列偏移、列数乘行偏移，最后再乘字节数。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "行优先地址",
        "answer": "116",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "列优先地址",
        "answer": "122",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先数元素偏移，再把元素数换成字节。",
      "plan": [
        "行优先：跨完整行，再加本行前面项；列优先交换这两个角色。",
        "原下标从1起，要分别减1；最后统一乘每项字节数。"
      ],
      "format": "两空填两种布局的目标起始地址。"
    },
    "worked": [
      {
        "caption": "先算元素数，再统一换成字节",
        "heads": [
          "布局",
          "完整行/列贡献",
          "本行/列贡献",
          "元素偏移",
          "实际地址"
        ],
        "rows": [
          [
            "行优先",
            "9",
            "7",
            "16",
            "116"
          ],
          [
            "列优先",
            "21",
            "1",
            "22",
            "122"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-infer-dim-v1",
    "chapter": 4,
    "mode": "review",
    "family": "R4-infer-dim",
    "variant": 1,
    "title": "二维数组 A[0..5][0..n-1] 按行优先连续存储，每元素 1 字节。A[0][0] 地址 644，A[2][2] 地址 676。",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      24
    ],
    "origin": "同类考法新题",
    "topic": "r4-1",
    "hint": "",
    "explain": "(676-644)/1=2n+2，解得 n=15。\nA[4][5]=644+(4×15+5)×1=709。",
    "solution": [
      "(676-644)/1=2n+2，解得 n=15。",
      "A[4][5]=644+(4×15+5)×1=709。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "列数 n",
        "answer": "15",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "A[4][5] 地址",
        "answer": "709",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "用已知两地址的差倒推出每行长度。",
      "plan": [
        "地址差先除每项字节数，变成元素偏移。",
        "从[0][0]到[2][2]跨2行再2项，列方程求n，再代入新坐标。"
      ],
      "format": "n填整数；下一空填实际字节地址。"
    },
    "walkthrough": [
      "用已知两地址的差倒推出每行长度。",
      "地址差先除每项字节数，变成元素偏移。",
      "从[0][0]到[2][2]跨2行再2项，列方程求n，再代入新坐标。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R4-infer-dim-v2",
    "chapter": 4,
    "mode": "review",
    "family": "R4-infer-dim",
    "variant": 2,
    "title": "二维数组 A[0..5][0..n-1] 按行优先连续存储，每元素 4 字节。A[0][0] 地址 100，A[2][2] 地址 164。",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      24
    ],
    "origin": "同类考法新题",
    "topic": "r4-1",
    "hint": "",
    "explain": "(164-100)/4=2n+2，解得 n=7。\nA[4][5]=100+(4×7+5)×4=232。",
    "solution": [
      "(164-100)/4=2n+2，解得 n=7。",
      "A[4][5]=100+(4×7+5)×4=232。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "列数 n",
        "answer": "7",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "A[4][5] 地址",
        "answer": "232",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "用已知两地址的差倒推出每行长度。",
      "plan": [
        "地址差先除每项字节数，变成元素偏移。",
        "从[0][0]到[2][2]跨2行再2项，列方程求n，再代入新坐标。"
      ],
      "format": "n填整数；下一空填实际字节地址。"
    },
    "walkthrough": [
      "用已知两地址的差倒推出每行长度。",
      "地址差先除每项字节数，变成元素偏移。",
      "从[0][0]到[2][2]跨2行再2项，列方程求n，再代入新坐标。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R4-infer-dim-v3",
    "chapter": 4,
    "mode": "review",
    "family": "R4-infer-dim",
    "variant": 3,
    "title": "二维数组 A[0..5][0..n-1] 按行优先连续存储，每元素 2 字节。A[0][0] 地址 800，A[2][2] 地址 840。",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "sourcePages": [
      24
    ],
    "origin": "同类考法新题",
    "topic": "r4-1",
    "hint": "",
    "explain": "(840-800)/2=2n+2，解得 n=9。\nA[4][5]=800+(4×9+5)×2=882。",
    "solution": [
      "(840-800)/2=2n+2，解得 n=9。",
      "A[4][5]=800+(4×9+5)×2=882。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "列数 n",
        "answer": "9",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "A[4][5] 地址",
        "answer": "882",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "用已知两地址的差倒推出每行长度。",
      "plan": [
        "地址差先除每项字节数，变成元素偏移。",
        "从[0][0]到[2][2]跨2行再2项，列方程求n，再代入新坐标。"
      ],
      "format": "n填整数；下一空填实际字节地址。"
    },
    "walkthrough": [
      "用已知两地址的差倒推出每行长度。",
      "地址差先除每项字节数，变成元素偏移。",
      "从[0][0]到[2][2]跨2行再2项，列方程求n，再代入新坐标。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R4-triangle-v1",
    "chapter": 4,
    "mode": "review",
    "family": "R4-triangle",
    "variant": 1,
    "title": "n=6 的下三角矩阵（上三角全为 0）按行压缩，原坐标从 1 开始，压缩数组从 0 开始；每元素 2 字节，基址 2000。求 a[4][3]。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      22
    ],
    "origin": "同类考法新题",
    "topic": "r4-2",
    "hint": "",
    "explain": "前 3 行共 6 个，行内再偏移 2，k=8。\n地址=2000+8×2=2016；总位置=21。",
    "solution": [
      "前 3 行共 6 个，行内再偏移 2，k=8。",
      "地址=2000+8×2=2016；总位置=21。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "压缩下标 k",
        "answer": "8",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "元素字节地址",
        "answer": "2016",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "需要保存的下三角位置数",
        "answer": "21",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先认清是上方为零，还是上方映射到对称位置。",
      "plan": [
        "对称上三角先交换行列，使行号不小于列号。",
        "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
      ],
      "format": "原坐标1起、压缩下标0起；地址题还要乘元素字节数。"
    },
    "walkthrough": [
      "先认清是上方为零，还是上方映射到对称位置。",
      "对称上三角先交换行列，使行号不小于列号。",
      "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-triangle-v2",
    "chapter": 4,
    "mode": "review",
    "family": "R4-triangle",
    "variant": 2,
    "title": "n=8 的下三角矩阵（上三角全为 0）按行压缩，原坐标从 1 开始，压缩数组从 0 开始；每元素 4 字节，基址 2000。求 a[7][2]。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      22
    ],
    "origin": "同类考法新题",
    "topic": "r4-2",
    "hint": "",
    "explain": "前 6 行共 21 个，行内再偏移 1，k=22。\n地址=2000+22×4=2088；总位置=36。",
    "solution": [
      "前 6 行共 21 个，行内再偏移 1，k=22。",
      "地址=2000+22×4=2088；总位置=36。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "压缩下标 k",
        "answer": "22",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "元素字节地址",
        "answer": "2088",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "需要保存的下三角位置数",
        "answer": "36",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先认清是上方为零，还是上方映射到对称位置。",
      "plan": [
        "对称上三角先交换行列，使行号不小于列号。",
        "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
      ],
      "format": "原坐标1起、压缩下标0起；地址题还要乘元素字节数。"
    },
    "walkthrough": [
      "先认清是上方为零，还是上方映射到对称位置。",
      "对称上三角先交换行列，使行号不小于列号。",
      "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-triangle-v3",
    "chapter": 4,
    "mode": "review",
    "family": "R4-triangle",
    "variant": 3,
    "title": "n=10 的下三角矩阵（上三角全为 0）按行压缩，原坐标从 1 开始，压缩数组从 0 开始；每元素 1 字节，基址 2000。求 a[9][5]。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      22
    ],
    "origin": "同类考法新题",
    "topic": "r4-2",
    "hint": "",
    "explain": "前 8 行共 36 个，行内再偏移 4，k=40。\n地址=2000+40×1=2040；总位置=55。",
    "solution": [
      "前 8 行共 36 个，行内再偏移 4，k=40。",
      "地址=2000+40×1=2040；总位置=55。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "压缩下标 k",
        "answer": "40",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "元素字节地址",
        "answer": "2040",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "需要保存的下三角位置数",
        "answer": "55",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先认清是上方为零，还是上方映射到对称位置。",
      "plan": [
        "对称上三角先交换行列，使行号不小于列号。",
        "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
      ],
      "format": "原坐标1起、压缩下标0起；地址题还要乘元素字节数。"
    },
    "walkthrough": [
      "先认清是上方为零，还是上方映射到对称位置。",
      "对称上三角先交换行列，使行号不小于列号。",
      "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-triangle-v4",
    "chapter": 4,
    "mode": "review",
    "family": "R4-triangle",
    "variant": 4,
    "title": "n=5 的下三角矩阵（上三角全为 0）按行压缩，原坐标从 1 开始，压缩数组从 0 开始；每元素 8 字节，基址 2000。求 a[5][5]。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      22
    ],
    "origin": "同类考法新题",
    "topic": "r4-2",
    "hint": "",
    "explain": "前 4 行共 10 个，行内再偏移 4，k=14。\n地址=2000+14×8=2112；总位置=15。",
    "solution": [
      "前 4 行共 10 个，行内再偏移 4，k=14。",
      "地址=2000+14×8=2112；总位置=15。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "压缩下标 k",
        "answer": "14",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "元素字节地址",
        "answer": "2112",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "需要保存的下三角位置数",
        "answer": "15",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先认清是上方为零，还是上方映射到对称位置。",
      "plan": [
        "对称上三角先交换行列，使行号不小于列号。",
        "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
      ],
      "format": "原坐标1起、压缩下标0起；地址题还要乘元素字节数。"
    },
    "walkthrough": [
      "先认清是上方为零，还是上方映射到对称位置。",
      "对称上三角先交换行列，使行号不小于列号。",
      "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-symmetric-v1",
    "chapter": 4,
    "mode": "review",
    "family": "R4-symmetric",
    "variant": 1,
    "title": "6 阶对称矩阵只存含主对角线的下三角，原下标 1 起，压缩下标 0 起。a[2][5] 映射到哪个下标？",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      22
    ],
    "origin": "同类考法新题",
    "topic": "r4-2",
    "hint": "",
    "explain": "i<j，先利用对称性改查 a[5][2]。\nk=5×(5-1)/2+2-1=11。",
    "solution": [
      "i<j，先利用对称性改查 a[5][2]。",
      "k=5×(5-1)/2+2-1=11。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "压缩下标",
        "answer": "11",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先认清是上方为零，还是上方映射到对称位置。",
      "plan": [
        "对称上三角先交换行列，使行号不小于列号。",
        "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
      ],
      "format": "原坐标1起、压缩下标0起；地址题还要乘元素字节数。"
    },
    "walkthrough": [
      "先认清是上方为零，还是上方映射到对称位置。",
      "对称上三角先交换行列，使行号不小于列号。",
      "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-symmetric-v2",
    "chapter": 4,
    "mode": "review",
    "family": "R4-symmetric",
    "variant": 2,
    "title": "7 阶对称矩阵只存含主对角线的下三角，原下标 1 起，压缩下标 0 起。a[1][7] 映射到哪个下标？",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      22
    ],
    "origin": "同类考法新题",
    "topic": "r4-2",
    "hint": "",
    "explain": "i<j，先利用对称性改查 a[7][1]。\nk=7×(7-1)/2+1-1=21。",
    "solution": [
      "i<j，先利用对称性改查 a[7][1]。",
      "k=7×(7-1)/2+1-1=21。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "压缩下标",
        "answer": "21",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先认清是上方为零，还是上方映射到对称位置。",
      "plan": [
        "对称上三角先交换行列，使行号不小于列号。",
        "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
      ],
      "format": "原坐标1起、压缩下标0起；地址题还要乘元素字节数。"
    },
    "walkthrough": [
      "先认清是上方为零，还是上方映射到对称位置。",
      "对称上三角先交换行列，使行号不小于列号。",
      "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-symmetric-v3",
    "chapter": 4,
    "mode": "review",
    "family": "R4-symmetric",
    "variant": 3,
    "title": "5 阶对称矩阵只存含主对角线的下三角，原下标 1 起，压缩下标 0 起。a[3][4] 映射到哪个下标？",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      22
    ],
    "origin": "同类考法新题",
    "topic": "r4-2",
    "hint": "",
    "explain": "i<j，先利用对称性改查 a[4][3]。\nk=4×(4-1)/2+3-1=8。",
    "solution": [
      "i<j，先利用对称性改查 a[4][3]。",
      "k=4×(4-1)/2+3-1=8。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "压缩下标",
        "answer": "8",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先认清是上方为零，还是上方映射到对称位置。",
      "plan": [
        "对称上三角先交换行列，使行号不小于列号。",
        "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
      ],
      "format": "原坐标1起、压缩下标0起；地址题还要乘元素字节数。"
    },
    "walkthrough": [
      "先认清是上方为零，还是上方映射到对称位置。",
      "对称上三角先交换行列，使行号不小于列号。",
      "前i−1行共i(i−1)/2项，再加本行前j−1项，得到0起下标。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-band-v1",
    "chapter": 4,
    "mode": "review",
    "family": "R4-band",
    "variant": 1,
    "title": "n=8 阶三对角矩阵，仅保存 |i-j|<=1 的带区。共有多少个位置？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      11
    ],
    "origin": "同类考法新题",
    "topic": "r4-2",
    "hint": "",
    "explain": "首尾各 2 个，另外 6 行各 3 个，总数 3n-2=22。",
    "solution": [
      "首尾各 2 个，另外 6 行各 3 个，总数 3n-2=22。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "带区位置数",
        "answer": "22",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "只保存主对角线及其上下紧邻两条斜线。",
      "plan": [
        "主线n项，另外两条各n−1项。",
        "合计3n−2；带外零不逐个分配位置。"
      ],
      "format": "填需保存的带区位置数，不填整矩阵n²。"
    },
    "walkthrough": [
      "只保存主对角线及其上下紧邻两条斜线。",
      "主线n项，另外两条各n−1项。",
      "合计3n−2；带外零不逐个分配位置。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-band-v2",
    "chapter": 4,
    "mode": "review",
    "family": "R4-band",
    "variant": 2,
    "title": "n=15 阶三对角矩阵，仅保存 |i-j|<=1 的带区。共有多少个位置？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      11
    ],
    "origin": "同类考法新题",
    "topic": "r4-2",
    "hint": "",
    "explain": "首尾各 2 个，另外 13 行各 3 个，总数 3n-2=43。",
    "solution": [
      "首尾各 2 个，另外 13 行各 3 个，总数 3n-2=43。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "带区位置数",
        "answer": "43",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "只保存主对角线及其上下紧邻两条斜线。",
      "plan": [
        "主线n项，另外两条各n−1项。",
        "合计3n−2；带外零不逐个分配位置。"
      ],
      "format": "填需保存的带区位置数，不填整矩阵n²。"
    },
    "walkthrough": [
      "只保存主对角线及其上下紧邻两条斜线。",
      "主线n项，另外两条各n−1项。",
      "合计3n−2；带外零不逐个分配位置。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-transpose-v1",
    "chapter": 4,
    "mode": "review",
    "family": "R4-transpose",
    "variant": 1,
    "title": "稀疏矩阵 3×4 的行序三元组为 [(1, 2, 5), (1, 4, 8), (2, 1, 3), (3, 2, 7)]。转置后重新按行、列升序排列；用 r,c,v;… 输入完整结果。",
    "type": "fields",
    "points": 6,
    "difficulty": "综合拔高",
    "sourcePages": [
      45,
      46
    ],
    "origin": "同类考法新题",
    "topic": "r4-3",
    "hint": "",
    "explain": "交换每个三元组的前两个字段，值不变。\n再按新行、新列排序：[(1, 2, 3), (2, 1, 5), (2, 3, 7), (4, 1, 8)]。\n只交换字段而不重排，会破坏行序。",
    "solution": [
      "交换每个三元组的前两个字段，值不变。",
      "再按新行、新列排序：[(1, 2, 3), (2, 1, 5), (2, 3, 7), (4, 1, 8)]。",
      "只交换字段而不重排，会破坏行序。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "转置后的行数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "转置后的列数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "有序三元组序列",
        "answer": "1,2,3;2,1,5;2,3,7;4,1,8",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每个三元组的前两个字段是行和列，第三个是值。",
      "plan": [
        "逐项交换行列，保留数值，新行数=原列数。",
        "交换后按新行、新列升序重排，不能只交换字段不整理次序。"
      ],
      "format": "序列按r,c,v;…输入，必须保留每个非零元。"
    },
    "worked": [
      {
        "caption": "逐项交换坐标，排序后才是新行序",
        "heads": [
          "原三元组",
          "交换后",
          "新行序位置"
        ],
        "rows": [
          [
            "(1, 2, 5)",
            "(2, 1, 5)",
            "2"
          ],
          [
            "(1, 4, 8)",
            "(4, 1, 8)",
            "4"
          ],
          [
            "(2, 1, 3)",
            "(1, 2, 3)",
            "1"
          ],
          [
            "(3, 2, 7)",
            "(2, 3, 7)",
            "3"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R4-transpose-v2",
    "chapter": 4,
    "mode": "review",
    "family": "R4-transpose",
    "variant": 2,
    "title": "稀疏矩阵 4×3 的行序三元组为 [(1, 3, 2), (2, 1, 5), (4, 2, 9)]。转置后重新按行、列升序排列；用 r,c,v;… 输入完整结果。",
    "type": "fields",
    "points": 6,
    "difficulty": "综合拔高",
    "sourcePages": [
      45,
      46
    ],
    "origin": "同类考法新题",
    "topic": "r4-3",
    "hint": "",
    "explain": "交换每个三元组的前两个字段，值不变。\n再按新行、新列排序：[(1, 2, 5), (2, 4, 9), (3, 1, 2)]。\n只交换字段而不重排，会破坏行序。",
    "solution": [
      "交换每个三元组的前两个字段，值不变。",
      "再按新行、新列排序：[(1, 2, 5), (2, 4, 9), (3, 1, 2)]。",
      "只交换字段而不重排，会破坏行序。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "转置后的行数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "转置后的列数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "有序三元组序列",
        "answer": "1,2,5;2,4,9;3,1,2",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每个三元组的前两个字段是行和列，第三个是值。",
      "plan": [
        "逐项交换行列，保留数值，新行数=原列数。",
        "交换后按新行、新列升序重排，不能只交换字段不整理次序。"
      ],
      "format": "序列按r,c,v;…输入，必须保留每个非零元。"
    },
    "worked": [
      {
        "caption": "逐项交换坐标，排序后才是新行序",
        "heads": [
          "原三元组",
          "交换后",
          "新行序位置"
        ],
        "rows": [
          [
            "(1, 3, 2)",
            "(3, 1, 2)",
            "3"
          ],
          [
            "(2, 1, 5)",
            "(1, 2, 5)",
            "1"
          ],
          [
            "(4, 2, 9)",
            "(2, 4, 9)",
            "2"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R4-transpose-v3",
    "chapter": 4,
    "mode": "review",
    "family": "R4-transpose",
    "variant": 3,
    "title": "稀疏矩阵 3×3 的行序三元组为 [(1, 2, 6), (2, 1, 4), (2, 3, 7), (3, 1, 8)]。转置后重新按行、列升序排列；用 r,c,v;… 输入完整结果。",
    "type": "fields",
    "points": 6,
    "difficulty": "综合拔高",
    "sourcePages": [
      45,
      46
    ],
    "origin": "同类考法新题",
    "topic": "r4-3",
    "hint": "",
    "explain": "交换每个三元组的前两个字段，值不变。\n再按新行、新列排序：[(1, 2, 4), (1, 3, 8), (2, 1, 6), (3, 2, 7)]。\n只交换字段而不重排，会破坏行序。",
    "solution": [
      "交换每个三元组的前两个字段，值不变。",
      "再按新行、新列排序：[(1, 2, 4), (1, 3, 8), (2, 1, 6), (3, 2, 7)]。",
      "只交换字段而不重排，会破坏行序。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "转置后的行数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "转置后的列数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "有序三元组序列",
        "answer": "1,2,4;1,3,8;2,1,6;3,2,7",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每个三元组的前两个字段是行和列，第三个是值。",
      "plan": [
        "逐项交换行列，保留数值，新行数=原列数。",
        "交换后按新行、新列升序重排，不能只交换字段不整理次序。"
      ],
      "format": "序列按r,c,v;…输入，必须保留每个非零元。"
    },
    "worked": [
      {
        "caption": "逐项交换坐标，排序后才是新行序",
        "heads": [
          "原三元组",
          "交换后",
          "新行序位置"
        ],
        "rows": [
          [
            "(1, 2, 6)",
            "(2, 1, 6)",
            "3"
          ],
          [
            "(2, 1, 4)",
            "(1, 2, 4)",
            "1"
          ],
          [
            "(2, 3, 7)",
            "(3, 2, 7)",
            "4"
          ],
          [
            "(3, 1, 8)",
            "(1, 3, 8)",
            "2"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R4-transpose-v4",
    "chapter": 4,
    "mode": "review",
    "family": "R4-transpose",
    "variant": 4,
    "title": "稀疏矩阵 5×5 的行序三元组为 [(1, 2, 3), (1, 5, 6), (2, 1, 4), (2, 3, 5), (2, 4, 9), (4, 1, 2), (4, 3, 7), (5, 4, 8)]。转置后重新按行、列升序排列；用 r,c,v;… 输入完整结果。",
    "type": "fields",
    "points": 6,
    "difficulty": "综合拔高",
    "sourcePages": [
      45,
      46
    ],
    "origin": "同类考法新题",
    "topic": "r4-3",
    "hint": "",
    "explain": "交换每个三元组的前两个字段，值不变。\n再按新行、新列排序：[(1, 2, 4), (1, 4, 2), (2, 1, 3), (3, 2, 5), (3, 4, 7), (4, 2, 9), (4, 5, 8), (5, 1, 6)]。\n只交换字段而不重排，会破坏行序。",
    "solution": [
      "交换每个三元组的前两个字段，值不变。",
      "再按新行、新列排序：[(1, 2, 4), (1, 4, 2), (2, 1, 3), (3, 2, 5), (3, 4, 7), (4, 2, 9), (4, 5, 8), (5, 1, 6)]。",
      "只交换字段而不重排，会破坏行序。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "转置后的行数",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "转置后的列数",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "有序三元组序列",
        "answer": "1,2,4;1,4,2;2,1,3;3,2,5;3,4,7;4,2,9;4,5,8;5,1,6",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每个三元组的前两个字段是行和列，第三个是值。",
      "plan": [
        "逐项交换行列，保留数值，新行数=原列数。",
        "交换后按新行、新列升序重排，不能只交换字段不整理次序。"
      ],
      "format": "序列按r,c,v;…输入，必须保留每个非零元。"
    },
    "worked": [
      {
        "caption": "逐项交换坐标，排序后才是新行序",
        "heads": [
          "原三元组",
          "交换后",
          "新行序位置"
        ],
        "rows": [
          [
            "(1, 2, 3)",
            "(2, 1, 3)",
            "3"
          ],
          [
            "(1, 5, 6)",
            "(5, 1, 6)",
            "8"
          ],
          [
            "(2, 1, 4)",
            "(1, 2, 4)",
            "1"
          ],
          [
            "(2, 3, 5)",
            "(3, 2, 5)",
            "4"
          ],
          [
            "(2, 4, 9)",
            "(4, 2, 9)",
            "6"
          ],
          [
            "(4, 1, 2)",
            "(1, 4, 2)",
            "2"
          ],
          [
            "(4, 3, 7)",
            "(3, 4, 7)",
            "5"
          ],
          [
            "(5, 4, 8)",
            "(4, 5, 8)",
            "7"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R4-fasttranspose-v1",
    "chapter": 4,
    "mode": "review",
    "family": "R4-fasttranspose",
    "variant": 1,
    "title": "快速转置中 num[1..4]=[2, 0, 3, 1]，三元组从 1 起存，求尚未填入数据时 cpot。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      12,
      45
    ],
    "origin": "同类考法新题",
    "topic": "r4-3",
    "hint": "",
    "explain": "cpot[1]=1；cpot[c]=cpot[c-1]+num[c-1]。\n得到 [1, 3, 3, 6]；零计数列可能共享起始位置。",
    "solution": [
      "cpot[1]=1；cpot[c]=cpot[c-1]+num[c-1]。",
      "得到 [1, 3, 3, 6]；零计数列可能共享起始位置。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "cpot 序列",
        "answer": "1,3,3,6",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每一列的数量变成转置后对应行的长度。",
      "plan": [
        "第1组从1开始，下一组起点等于上一组起点加上一组数量。",
        "零长度组不占位置，可能与后一组共享初始起点。"
      ],
      "format": "填尚未写入元素前的cpot序列，逗号分隔。"
    },
    "worked": [
      {
        "caption": "初始cpot是一组的首位置，不是数量本身",
        "heads": [
          "列号",
          "num",
          "初始cpot",
          "累计推进"
        ],
        "rows": [
          [
            "1",
            "2",
            "1",
            "下一组从3开始"
          ],
          [
            "2",
            "0",
            "3",
            "下一组从3开始"
          ],
          [
            "3",
            "3",
            "3",
            "下一组从6开始"
          ],
          [
            "4",
            "1",
            "6",
            "下一组从7开始"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-fasttranspose-v2",
    "chapter": 4,
    "mode": "review",
    "family": "R4-fasttranspose",
    "variant": 2,
    "title": "快速转置中 num[1..4]=[0, 2, 1, 2]，三元组从 1 起存，求尚未填入数据时 cpot。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      12,
      45
    ],
    "origin": "同类考法新题",
    "topic": "r4-3",
    "hint": "",
    "explain": "cpot[1]=1；cpot[c]=cpot[c-1]+num[c-1]。\n得到 [1, 1, 3, 4]；零计数列可能共享起始位置。",
    "solution": [
      "cpot[1]=1；cpot[c]=cpot[c-1]+num[c-1]。",
      "得到 [1, 1, 3, 4]；零计数列可能共享起始位置。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "cpot 序列",
        "answer": "1,1,3,4",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每一列的数量变成转置后对应行的长度。",
      "plan": [
        "第1组从1开始，下一组起点等于上一组起点加上一组数量。",
        "零长度组不占位置，可能与后一组共享初始起点。"
      ],
      "format": "填尚未写入元素前的cpot序列，逗号分隔。"
    },
    "worked": [
      {
        "caption": "初始cpot是一组的首位置，不是数量本身",
        "heads": [
          "列号",
          "num",
          "初始cpot",
          "累计推进"
        ],
        "rows": [
          [
            "1",
            "0",
            "1",
            "下一组从1开始"
          ],
          [
            "2",
            "2",
            "1",
            "下一组从3开始"
          ],
          [
            "3",
            "1",
            "3",
            "下一组从4开始"
          ],
          [
            "4",
            "2",
            "4",
            "下一组从6开始"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-fasttranspose-v3",
    "chapter": 4,
    "mode": "review",
    "family": "R4-fasttranspose",
    "variant": 3,
    "title": "快速转置中 num[1..4]=[1, 1, 0, 4]，三元组从 1 起存，求尚未填入数据时 cpot。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      12,
      45
    ],
    "origin": "同类考法新题",
    "topic": "r4-3",
    "hint": "",
    "explain": "cpot[1]=1；cpot[c]=cpot[c-1]+num[c-1]。\n得到 [1, 2, 3, 3]；零计数列可能共享起始位置。",
    "solution": [
      "cpot[1]=1；cpot[c]=cpot[c-1]+num[c-1]。",
      "得到 [1, 2, 3, 3]；零计数列可能共享起始位置。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "cpot 序列",
        "answer": "1,2,3,3",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每一列的数量变成转置后对应行的长度。",
      "plan": [
        "第1组从1开始，下一组起点等于上一组起点加上一组数量。",
        "零长度组不占位置，可能与后一组共享初始起点。"
      ],
      "format": "填尚未写入元素前的cpot序列，逗号分隔。"
    },
    "worked": [
      {
        "caption": "初始cpot是一组的首位置，不是数量本身",
        "heads": [
          "列号",
          "num",
          "初始cpot",
          "累计推进"
        ],
        "rows": [
          [
            "1",
            "1",
            "1",
            "下一组从2开始"
          ],
          [
            "2",
            "1",
            "2",
            "下一组从3开始"
          ],
          [
            "3",
            "0",
            "3",
            "下一组从3开始"
          ],
          [
            "4",
            "4",
            "3",
            "下一组从7开始"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-fasttranspose-v4",
    "chapter": 4,
    "mode": "review",
    "family": "R4-fasttranspose",
    "variant": 4,
    "title": "快速转置中 num[1..4]=[3, 0, 0, 2]，三元组从 1 起存，求尚未填入数据时 cpot。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      12,
      45
    ],
    "origin": "同类考法新题",
    "topic": "r4-3",
    "hint": "",
    "explain": "cpot[1]=1；cpot[c]=cpot[c-1]+num[c-1]。\n得到 [1, 4, 4, 4]；零计数列可能共享起始位置。",
    "solution": [
      "cpot[1]=1；cpot[c]=cpot[c-1]+num[c-1]。",
      "得到 [1, 4, 4, 4]；零计数列可能共享起始位置。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "cpot 序列",
        "answer": "1,4,4,4",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每一列的数量变成转置后对应行的长度。",
      "plan": [
        "第1组从1开始，下一组起点等于上一组起点加上一组数量。",
        "零长度组不占位置，可能与后一组共享初始起点。"
      ],
      "format": "填尚未写入元素前的cpot序列，逗号分隔。"
    },
    "worked": [
      {
        "caption": "初始cpot是一组的首位置，不是数量本身",
        "heads": [
          "列号",
          "num",
          "初始cpot",
          "累计推进"
        ],
        "rows": [
          [
            "1",
            "3",
            "1",
            "下一组从4开始"
          ],
          [
            "2",
            "0",
            "4",
            "下一组从4开始"
          ],
          [
            "3",
            "0",
            "4",
            "下一组从4开始"
          ],
          [
            "4",
            "2",
            "4",
            "下一组从6开始"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R4-storage-v1",
    "chapter": 4,
    "mode": "review",
    "family": "R4-storage",
    "variant": 1,
    "title": "快速转置中列辅助向量主要提高什么？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      12,
      45
    ],
    "origin": "同类考法新题",
    "topic": "r4-3",
    "hint": "",
    "explain": "预先确定新行起始位置，避免每列重新扫描全部三元组。",
    "solution": [
      "预先确定新行起始位置，避免每列重新扫描全部三元组。"
    ],
    "rubric": [],
    "options": [
      "矩阵秩",
      "原矩阵行数",
      "转置效率",
      "元素数值"
    ],
    "answer": 2,
    "support": {
      "ask": "确认辅助向量或链接真正改变的工作。",
      "plan": [
        "快速转置先分配各行区段，省掉反复扫描整张三元组表。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：转置算法的快慢不改变数学矩阵的秩。",
      "核对条件：转置后的行数由原列数决定，辅助向量不改变维度。",
      "符合：预先确定新行起始位置，避免每列重新扫描全部三元组。",
      "核对条件：辅助向量记录数量和位置，不修改非零元素数值。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R4-storage-v2",
    "chapter": 4,
    "mode": "review",
    "family": "R4-storage",
    "variant": 2,
    "title": "十字链表删除一个非零元时，必须修复？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      12,
      45
    ],
    "origin": "同类考法新题",
    "topic": "r4-3",
    "hint": "",
    "explain": "一个结点同时属于所在行和列的链，两侧链接都要维护。",
    "solution": [
      "一个结点同时属于所在行和列的链，两侧链接都要维护。"
    ],
    "rubric": [],
    "options": [
      "仅行链",
      "仅列链",
      "行链和列链",
      "所有零元素"
    ],
    "answer": 2,
    "support": {
      "ask": "确认辅助向量或链接真正改变的工作。",
      "plan": [
        "快速转置先分配各行区段，省掉反复扫描整张三元组表。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：只修行链会让列链还连着已删除结点。",
      "核对条件：只修列链会让行链还连着已删除结点。",
      "符合：一个结点同时属于所在行和列的链，两侧链接都要维护。",
      "核对条件：零元素本来不逐个存成结点，无需修改所有零元。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R5-counts-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-counts",
    "variant": 1,
    "title": "非空二叉树共有 2014 个结点，其中度为 1 的结点有 13 个。求叶子数和度为 2 的结点数。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "n0+n1+n2=2014 且 n0=n2+1。\nn0=(2014-13+1)/2=1001，n2=1000。\n这里是任意二叉树，不套完全二叉树叶子公式。",
    "solution": [
      "n0+n1+n2=2014 且 n0=n2+1。",
      "n0=(2014-13+1)/2=1001，n2=1000。",
      "这里是任意二叉树，不套完全二叉树叶子公式。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "叶子数 n0",
        "answer": "1001",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "度为 2 的结点数 n2",
        "answer": "1000",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "题目是任意非空二叉树，不一定完全。",
      "plan": [
        "列总数n=n₀+n₁+n₂与叶子关系n₀=n₂+1。",
        "联立得到n₀=(n−n₁+1)/2，再用n₂=n₀−1，代回总数验证。"
      ],
      "format": "填叶子和双孩子结点数，不能机械用完全树的叶子公式。"
    },
    "walkthrough": [
      "题目是任意非空二叉树，不一定完全。",
      "列总数n=n₀+n₁+n₂与叶子关系n₀=n₂+1。",
      "联立得到n₀=(n−n₁+1)/2，再用n₂=n₀−1，代回总数验证。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-counts-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-counts",
    "variant": 2,
    "title": "非空二叉树共有 2015 个结点，其中度为 1 的结点有 4 个。求叶子数和度为 2 的结点数。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "n0+n1+n2=2015 且 n0=n2+1。\nn0=(2015-4+1)/2=1006，n2=1005。\n这里是任意二叉树，不套完全二叉树叶子公式。",
    "solution": [
      "n0+n1+n2=2015 且 n0=n2+1。",
      "n0=(2015-4+1)/2=1006，n2=1005。",
      "这里是任意二叉树，不套完全二叉树叶子公式。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "叶子数 n0",
        "answer": "1006",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "度为 2 的结点数 n2",
        "answer": "1005",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "题目是任意非空二叉树，不一定完全。",
      "plan": [
        "列总数n=n₀+n₁+n₂与叶子关系n₀=n₂+1。",
        "联立得到n₀=(n−n₁+1)/2，再用n₂=n₀−1，代回总数验证。"
      ],
      "format": "填叶子和双孩子结点数，不能机械用完全树的叶子公式。"
    },
    "walkthrough": [
      "题目是任意非空二叉树，不一定完全。",
      "列总数n=n₀+n₁+n₂与叶子关系n₀=n₂+1。",
      "联立得到n₀=(n−n₁+1)/2，再用n₂=n₀−1，代回总数验证。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-counts-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-counts",
    "variant": 3,
    "title": "非空二叉树共有 99 个结点，其中度为 1 的结点有 10 个。求叶子数和度为 2 的结点数。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "n0+n1+n2=99 且 n0=n2+1。\nn0=(99-10+1)/2=45，n2=44。\n这里是任意二叉树，不套完全二叉树叶子公式。",
    "solution": [
      "n0+n1+n2=99 且 n0=n2+1。",
      "n0=(99-10+1)/2=45，n2=44。",
      "这里是任意二叉树，不套完全二叉树叶子公式。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "叶子数 n0",
        "answer": "45",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "度为 2 的结点数 n2",
        "answer": "44",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "题目是任意非空二叉树，不一定完全。",
      "plan": [
        "列总数n=n₀+n₁+n₂与叶子关系n₀=n₂+1。",
        "联立得到n₀=(n−n₁+1)/2，再用n₂=n₀−1，代回总数验证。"
      ],
      "format": "填叶子和双孩子结点数，不能机械用完全树的叶子公式。"
    },
    "walkthrough": [
      "题目是任意非空二叉树，不一定完全。",
      "列总数n=n₀+n₁+n₂与叶子关系n₀=n₂+1。",
      "联立得到n₀=(n−n₁+1)/2，再用n₂=n₀−1，代回总数验证。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-counts-v4",
    "chapter": 5,
    "mode": "review",
    "family": "R5-counts",
    "variant": 4,
    "title": "非空二叉树共有 150 个结点，其中度为 1 的结点有 7 个。求叶子数和度为 2 的结点数。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "n0+n1+n2=150 且 n0=n2+1。\nn0=(150-7+1)/2=72，n2=71。\n这里是任意二叉树，不套完全二叉树叶子公式。",
    "solution": [
      "n0+n1+n2=150 且 n0=n2+1。",
      "n0=(150-7+1)/2=72，n2=71。",
      "这里是任意二叉树，不套完全二叉树叶子公式。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "叶子数 n0",
        "answer": "72",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "度为 2 的结点数 n2",
        "answer": "71",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "题目是任意非空二叉树，不一定完全。",
      "plan": [
        "列总数n=n₀+n₁+n₂与叶子关系n₀=n₂+1。",
        "联立得到n₀=(n−n₁+1)/2，再用n₂=n₀−1，代回总数验证。"
      ],
      "format": "填叶子和双孩子结点数，不能机械用完全树的叶子公式。"
    },
    "walkthrough": [
      "题目是任意非空二叉树，不一定完全。",
      "列总数n=n₀+n₁+n₂与叶子关系n₀=n₂+1。",
      "联立得到n₀=(n−n₁+1)/2，再用n₂=n₀−1，代回总数验证。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-complete-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-complete",
    "variant": 1,
    "title": "2013 个结点的完全二叉树，根为第 1 层、按层从 1 编号。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      21,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "h=⌊log₂2013⌋+1=11；叶子=⌈n/2⌉=1007。\n父亲 ⌊503/2⌋=251；左孩子 2i=1006，需检查不超过 n。",
    "solution": [
      "h=⌊log₂2013⌋+1=11；叶子=⌈n/2⌉=1007。",
      "父亲 ⌊503/2⌋=251；左孩子 2i=1006，需检查不超过 n。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "树高",
        "answer": "11",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "叶子个数",
        "answer": "1007",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 503 的双亲编号",
        "answer": "251",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 503 的左孩子编号（不存在填0）",
        "answer": "1006",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "题目已保证完全，可以按层编号。",
      "plan": [
        "逐层容量1、2、4……确定高度；叶子位于编号超过⌊n/2⌋的部分。",
        "双亲取⌊i/2⌋，孩子取2i或2i+1，再检查是否超过n。"
      ],
      "format": "不存在孩子按题意填0；根从第1层计。"
    },
    "walkthrough": [
      "题目已保证完全，可以按层编号。",
      "逐层容量1、2、4……确定高度；叶子位于编号超过⌊n/2⌋的部分。",
      "双亲取⌊i/2⌋，孩子取2i或2i+1，再检查是否超过n。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-complete-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-complete",
    "variant": 2,
    "title": "31 个结点的完全二叉树，根为第 1 层、按层从 1 编号。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      21,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "h=⌊log₂31⌋+1=5；叶子=⌈n/2⌉=16。\n父亲 ⌊8/2⌋=4；左孩子 2i=16，需检查不超过 n。",
    "solution": [
      "h=⌊log₂31⌋+1=5；叶子=⌈n/2⌉=16。",
      "父亲 ⌊8/2⌋=4；左孩子 2i=16，需检查不超过 n。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "树高",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "叶子个数",
        "answer": "16",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 8 的双亲编号",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 8 的左孩子编号（不存在填0）",
        "answer": "16",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "题目已保证完全，可以按层编号。",
      "plan": [
        "逐层容量1、2、4……确定高度；叶子位于编号超过⌊n/2⌋的部分。",
        "双亲取⌊i/2⌋，孩子取2i或2i+1，再检查是否超过n。"
      ],
      "format": "不存在孩子按题意填0；根从第1层计。"
    },
    "walkthrough": [
      "题目已保证完全，可以按层编号。",
      "逐层容量1、2、4……确定高度；叶子位于编号超过⌊n/2⌋的部分。",
      "双亲取⌊i/2⌋，孩子取2i或2i+1，再检查是否超过n。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-complete-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-complete",
    "variant": 3,
    "title": "50 个结点的完全二叉树，根为第 1 层、按层从 1 编号。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      21,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "h=⌊log₂50⌋+1=6；叶子=⌈n/2⌉=25。\n父亲 ⌊17/2⌋=8；左孩子 2i=34，需检查不超过 n。",
    "solution": [
      "h=⌊log₂50⌋+1=6；叶子=⌈n/2⌉=25。",
      "父亲 ⌊17/2⌋=8；左孩子 2i=34，需检查不超过 n。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "树高",
        "answer": "6",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "叶子个数",
        "answer": "25",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 17 的双亲编号",
        "answer": "8",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 17 的左孩子编号（不存在填0）",
        "answer": "34",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "题目已保证完全，可以按层编号。",
      "plan": [
        "逐层容量1、2、4……确定高度；叶子位于编号超过⌊n/2⌋的部分。",
        "双亲取⌊i/2⌋，孩子取2i或2i+1，再检查是否超过n。"
      ],
      "format": "不存在孩子按题意填0；根从第1层计。"
    },
    "walkthrough": [
      "题目已保证完全，可以按层编号。",
      "逐层容量1、2、4……确定高度；叶子位于编号超过⌊n/2⌋的部分。",
      "双亲取⌊i/2⌋，孩子取2i或2i+1，再检查是否超过n。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-complete-v4",
    "chapter": 5,
    "mode": "review",
    "family": "R5-complete",
    "variant": 4,
    "title": "64 个结点的完全二叉树，根为第 1 层、按层从 1 编号。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      21,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "h=⌊log₂64⌋+1=7；叶子=⌈n/2⌉=32。\n父亲 ⌊31/2⌋=15；左孩子 2i=62，需检查不超过 n。",
    "solution": [
      "h=⌊log₂64⌋+1=7；叶子=⌈n/2⌉=32。",
      "父亲 ⌊31/2⌋=15；左孩子 2i=62，需检查不超过 n。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "树高",
        "answer": "7",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "叶子个数",
        "answer": "32",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 31 的双亲编号",
        "answer": "15",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 31 的左孩子编号（不存在填0）",
        "answer": "62",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "题目已保证完全，可以按层编号。",
      "plan": [
        "逐层容量1、2、4……确定高度；叶子位于编号超过⌊n/2⌋的部分。",
        "双亲取⌊i/2⌋，孩子取2i或2i+1，再检查是否超过n。"
      ],
      "format": "不存在孩子按题意填0；根从第1层计。"
    },
    "walkthrough": [
      "题目已保证完全，可以按层编号。",
      "逐层容量1、2、4……确定高度；叶子位于编号超过⌊n/2⌋的部分。",
      "双亲取⌊i/2⌋，孩子取2i或2i+1，再检查是否超过n。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-catalan-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-catalan",
    "variant": 1,
    "title": "3 个标识互异的结点，固定先序遍历次序，允许任意二叉树形状且区分左右。共有多少种二叉树？",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      12,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "固定先序次序后，每个形状唯一对应标识分配。种数为 Catalan Cₙ=binom(2n,n)/(n+1)。\nn=3 时为 5。",
    "solution": [
      "固定先序次序后，每个形状唯一对应标识分配。种数为 Catalan Cₙ=binom(2n,n)/(n+1)。",
      "n=3 时为 5。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "二叉树种数",
        "answer": "5",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "固定前序不等于固定左右形状。",
      "plan": [
        "可按根左子树结点数0到n−1分类，每类是左右形状数相乘。",
        "卡特兰数把这些类别相加；标识互异且前序固定后，每种形状恰有一种标识分配。"
      ],
      "format": "填形状总数；n=3时按2+1+2逐类核对。"
    },
    "worked": [
      {
        "caption": "按左子树结点数分类，左右形状数相乘后相加",
        "heads": [
          "左结点数",
          "右结点数",
          "本类形状数"
        ],
        "rows": [
          [
            "0",
            "2",
            "2"
          ],
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "0",
            "2"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-catalan-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-catalan",
    "variant": 2,
    "title": "4 个标识互异的结点，固定先序遍历次序，允许任意二叉树形状且区分左右。共有多少种二叉树？",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      12,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "固定先序次序后，每个形状唯一对应标识分配。种数为 Catalan Cₙ=binom(2n,n)/(n+1)。\nn=4 时为 14。",
    "solution": [
      "固定先序次序后，每个形状唯一对应标识分配。种数为 Catalan Cₙ=binom(2n,n)/(n+1)。",
      "n=4 时为 14。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "二叉树种数",
        "answer": "14",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "固定前序不等于固定左右形状。",
      "plan": [
        "可按根左子树结点数0到n−1分类，每类是左右形状数相乘。",
        "卡特兰数把这些类别相加；标识互异且前序固定后，每种形状恰有一种标识分配。"
      ],
      "format": "填形状总数；n=3时按2+1+2逐类核对。"
    },
    "worked": [
      {
        "caption": "按左子树结点数分类，左右形状数相乘后相加",
        "heads": [
          "左结点数",
          "右结点数",
          "本类形状数"
        ],
        "rows": [
          [
            "0",
            "3",
            "5"
          ],
          [
            "1",
            "2",
            "2"
          ],
          [
            "2",
            "1",
            "2"
          ],
          [
            "3",
            "0",
            "5"
          ]
        ]
      }
    ],
    "priority": "extension",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-catalan-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-catalan",
    "variant": 3,
    "title": "5 个标识互异的结点，固定先序遍历次序，允许任意二叉树形状且区分左右。共有多少种二叉树？",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      12,
      24
    ],
    "origin": "同类考法新题",
    "topic": "r5-1",
    "hint": "",
    "explain": "固定先序次序后，每个形状唯一对应标识分配。种数为 Catalan Cₙ=binom(2n,n)/(n+1)。\nn=5 时为 42。",
    "solution": [
      "固定先序次序后，每个形状唯一对应标识分配。种数为 Catalan Cₙ=binom(2n,n)/(n+1)。",
      "n=5 时为 42。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "二叉树种数",
        "answer": "42",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "固定前序不等于固定左右形状。",
      "plan": [
        "可按根左子树结点数0到n−1分类，每类是左右形状数相乘。",
        "卡特兰数把这些类别相加；标识互异且前序固定后，每种形状恰有一种标识分配。"
      ],
      "format": "填形状总数；n=3时按2+1+2逐类核对。"
    },
    "worked": [
      {
        "caption": "按左子树结点数分类，左右形状数相乘后相加",
        "heads": [
          "左结点数",
          "右结点数",
          "本类形状数"
        ],
        "rows": [
          [
            "0",
            "4",
            "14"
          ],
          [
            "1",
            "3",
            "5"
          ],
          [
            "2",
            "2",
            "4"
          ],
          [
            "3",
            "1",
            "5"
          ],
          [
            "4",
            "0",
            "14"
          ]
        ]
      }
    ],
    "priority": "extension",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-reconstruct-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-reconstruct",
    "variant": 1,
    "title": "结点标识互异，已知 先序 ABDGCFHEK、中序 BGDAHFCEK。重建二叉树后填写；顺序存储按完全二叉树位置从 1 编号，缺位仍保留。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      4,
      13
    ],
    "origin": "历年题改编",
    "topic": "r5-2",
    "hint": "",
    "explain": "根=A。每次在中序中定位根，再递归切分左右子树。\nA:左=B,右=C\nB:左=空,右=D\nD:左=G,右=空\nG:左=空,右=空\nC:左=F,右=E\nF:左=H,右=空\nH:左=空,右=空\nE:左=空,右=K\nK:左=空,右=空\n后序=GDBHFKECA；位置映射=1:A, 2:B, 3:C, 5:D, 6:F, 7:E, 10:G, 12:H, 15:K\n高度=4，最大编号=15。",
    "solution": [
      "根=A。每次在中序中定位根，再递归切分左右子树。",
      "A:左=B,右=C",
      "B:左=空,右=D",
      "D:左=G,右=空",
      "G:左=空,右=空",
      "C:左=F,右=E",
      "F:左=H,右=空",
      "H:左=空,右=空",
      "E:左=空,右=K",
      "K:左=空,右=空",
      "后序=GDBHFKECA；位置映射=1:A, 2:B, 3:C, 5:D, 6:F, 7:E, 10:G, 12:H, 15:K",
      "高度=4，最大编号=15。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "后序序列",
        "answer": "GDBHFKECA",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "树高",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "需要的最大位置编号",
        "answer": "15",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 B 的位置编号",
        "answer": "2",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先序或后序确定根，中序决定左右各有多少项。",
      "plan": [
        "在当前中序中找根，用左段长度切开另一序列，分别递归。",
        "构好树后再求遍历和位置号；有空位也不能把顺序编号挤紧。"
      ],
      "format": "字母遍历保持次序；最大编号与实际结点数是不同量。"
    },
    "worked": [
      {
        "caption": "每行是一棵当前子树：先定根，再用中序切开",
        "heads": [
          "子树位置",
          "已知遍历",
          "当前中序",
          "根",
          "左中序",
          "右中序"
        ],
        "rows": [
          [
            "根",
            "ABDGCFHEK",
            "BGDAHFCEK",
            "A",
            "BGD",
            "HFCEK"
          ],
          [
            "根左",
            "BDG",
            "BGD",
            "B",
            "空",
            "GD"
          ],
          [
            "根左右",
            "DG",
            "GD",
            "D",
            "G",
            "空"
          ],
          [
            "根左右左",
            "G",
            "G",
            "G",
            "空",
            "空"
          ],
          [
            "根右",
            "CFHEK",
            "HFCEK",
            "C",
            "HF",
            "EK"
          ],
          [
            "根右左",
            "FH",
            "HF",
            "F",
            "H",
            "空"
          ],
          [
            "根右左左",
            "H",
            "H",
            "H",
            "空",
            "空"
          ],
          [
            "根右右",
            "EK",
            "EK",
            "E",
            "空",
            "K"
          ],
          [
            "根右右右",
            "K",
            "K",
            "K",
            "空",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-reconstruct-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-reconstruct",
    "variant": 2,
    "title": "结点标识互异，已知 后序 DEBFGCA、中序 DBEAFCG。重建二叉树后填写；顺序存储按完全二叉树位置从 1 编号，缺位仍保留。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      4,
      13
    ],
    "origin": "同类考法新题",
    "topic": "r5-2",
    "hint": "",
    "explain": "根=A。每次在中序中定位根，再递归切分左右子树。\nA:左=B,右=C\nB:左=D,右=E\nD:左=空,右=空\nE:左=空,右=空\nC:左=F,右=G\nF:左=空,右=空\nG:左=空,右=空\n先序=ABDECFG；位置映射=1:A, 2:B, 3:C, 4:D, 5:E, 6:F, 7:G\n高度=3，最大编号=7。",
    "solution": [
      "根=A。每次在中序中定位根，再递归切分左右子树。",
      "A:左=B,右=C",
      "B:左=D,右=E",
      "D:左=空,右=空",
      "E:左=空,右=空",
      "C:左=F,右=G",
      "F:左=空,右=空",
      "G:左=空,右=空",
      "先序=ABDECFG；位置映射=1:A, 2:B, 3:C, 4:D, 5:E, 6:F, 7:G",
      "高度=3，最大编号=7。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "先序序列",
        "answer": "ABDECFG",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "树高",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "需要的最大位置编号",
        "answer": "7",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 D 的位置编号",
        "answer": "4",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先序或后序确定根，中序决定左右各有多少项。",
      "plan": [
        "在当前中序中找根，用左段长度切开另一序列，分别递归。",
        "构好树后再求遍历和位置号；有空位也不能把顺序编号挤紧。"
      ],
      "format": "字母遍历保持次序；最大编号与实际结点数是不同量。"
    },
    "worked": [
      {
        "caption": "每行是一棵当前子树：先定根，再用中序切开",
        "heads": [
          "子树位置",
          "已知遍历",
          "当前中序",
          "根",
          "左中序",
          "右中序"
        ],
        "rows": [
          [
            "根",
            "DEBFGCA",
            "DBEAFCG",
            "A",
            "DBE",
            "FCG"
          ],
          [
            "根左",
            "DEB",
            "DBE",
            "B",
            "D",
            "E"
          ],
          [
            "根左左",
            "D",
            "D",
            "D",
            "空",
            "空"
          ],
          [
            "根左右",
            "E",
            "E",
            "E",
            "空",
            "空"
          ],
          [
            "根右",
            "FGC",
            "FCG",
            "C",
            "F",
            "G"
          ],
          [
            "根右左",
            "F",
            "F",
            "F",
            "空",
            "空"
          ],
          [
            "根右右",
            "G",
            "G",
            "G",
            "空",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-reconstruct-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-reconstruct",
    "variant": 3,
    "title": "结点标识互异，已知 先序 MFGHRTV、中序 GFHMRTV。重建二叉树后填写；顺序存储按完全二叉树位置从 1 编号，缺位仍保留。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      4,
      13
    ],
    "origin": "同类考法新题",
    "topic": "r5-2",
    "hint": "",
    "explain": "根=M。每次在中序中定位根，再递归切分左右子树。\nM:左=F,右=R\nF:左=G,右=H\nG:左=空,右=空\nH:左=空,右=空\nR:左=空,右=T\nT:左=空,右=V\nV:左=空,右=空\n后序=GHFVTRM；位置映射=1:M, 2:F, 3:R, 4:G, 5:H, 7:T, 15:V\n高度=4，最大编号=15。",
    "solution": [
      "根=M。每次在中序中定位根，再递归切分左右子树。",
      "M:左=F,右=R",
      "F:左=G,右=H",
      "G:左=空,右=空",
      "H:左=空,右=空",
      "R:左=空,右=T",
      "T:左=空,右=V",
      "V:左=空,右=空",
      "后序=GHFVTRM；位置映射=1:M, 2:F, 3:R, 4:G, 5:H, 7:T, 15:V",
      "高度=4，最大编号=15。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "后序序列",
        "answer": "GHFVTRM",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "树高",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "需要的最大位置编号",
        "answer": "15",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 G 的位置编号",
        "answer": "4",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先序或后序确定根，中序决定左右各有多少项。",
      "plan": [
        "在当前中序中找根，用左段长度切开另一序列，分别递归。",
        "构好树后再求遍历和位置号；有空位也不能把顺序编号挤紧。"
      ],
      "format": "字母遍历保持次序；最大编号与实际结点数是不同量。"
    },
    "worked": [
      {
        "caption": "每行是一棵当前子树：先定根，再用中序切开",
        "heads": [
          "子树位置",
          "已知遍历",
          "当前中序",
          "根",
          "左中序",
          "右中序"
        ],
        "rows": [
          [
            "根",
            "MFGHRTV",
            "GFHMRTV",
            "M",
            "GFH",
            "RTV"
          ],
          [
            "根左",
            "FGH",
            "GFH",
            "F",
            "G",
            "H"
          ],
          [
            "根左左",
            "G",
            "G",
            "G",
            "空",
            "空"
          ],
          [
            "根左右",
            "H",
            "H",
            "H",
            "空",
            "空"
          ],
          [
            "根右",
            "RTV",
            "RTV",
            "R",
            "空",
            "TV"
          ],
          [
            "根右右",
            "TV",
            "TV",
            "T",
            "空",
            "V"
          ],
          [
            "根右右右",
            "V",
            "V",
            "V",
            "空",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-reconstruct-v4",
    "chapter": 5,
    "mode": "review",
    "family": "R5-reconstruct",
    "variant": 4,
    "title": "结点标识互异，已知 后序 BFADGHK、中序 BDFAKHG。重建二叉树后填写；顺序存储按完全二叉树位置从 1 编号，缺位仍保留。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      4,
      13
    ],
    "origin": "同类考法新题",
    "topic": "r5-2",
    "hint": "",
    "explain": "根=K。每次在中序中定位根，再递归切分左右子树。\nK:左=D,右=H\nD:左=B,右=A\nB:左=空,右=空\nA:左=F,右=空\nF:左=空,右=空\nH:左=空,右=G\nG:左=空,右=空\n先序=KDBAFHG；位置映射=1:K, 2:D, 3:H, 4:B, 5:A, 7:G, 10:F\n高度=4，最大编号=10。",
    "solution": [
      "根=K。每次在中序中定位根，再递归切分左右子树。",
      "K:左=D,右=H",
      "D:左=B,右=A",
      "B:左=空,右=空",
      "A:左=F,右=空",
      "F:左=空,右=空",
      "H:左=空,右=G",
      "G:左=空,右=空",
      "先序=KDBAFHG；位置映射=1:K, 2:D, 3:H, 4:B, 5:A, 7:G, 10:F",
      "高度=4，最大编号=10。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "先序序列",
        "answer": "KDBAFHG",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "树高",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "需要的最大位置编号",
        "answer": "10",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "结点 B 的位置编号",
        "answer": "4",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先序或后序确定根，中序决定左右各有多少项。",
      "plan": [
        "在当前中序中找根，用左段长度切开另一序列，分别递归。",
        "构好树后再求遍历和位置号；有空位也不能把顺序编号挤紧。"
      ],
      "format": "字母遍历保持次序；最大编号与实际结点数是不同量。"
    },
    "worked": [
      {
        "caption": "每行是一棵当前子树：先定根，再用中序切开",
        "heads": [
          "子树位置",
          "已知遍历",
          "当前中序",
          "根",
          "左中序",
          "右中序"
        ],
        "rows": [
          [
            "根",
            "BFADGHK",
            "BDFAKHG",
            "K",
            "BDFA",
            "HG"
          ],
          [
            "根左",
            "BFAD",
            "BDFA",
            "D",
            "B",
            "FA"
          ],
          [
            "根左左",
            "B",
            "B",
            "B",
            "空",
            "空"
          ],
          [
            "根左右",
            "FA",
            "FA",
            "A",
            "F",
            "空"
          ],
          [
            "根左右左",
            "F",
            "F",
            "F",
            "空",
            "空"
          ],
          [
            "根右",
            "GH",
            "HG",
            "H",
            "空",
            "G"
          ],
          [
            "根右右",
            "G",
            "G",
            "G",
            "空",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-pointertable-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-pointertable",
    "variant": 1,
    "title": "二叉链表的指针表见下方，0 表示空，根指针 T=1。按左右指针关系求前、中、后序遍历，不按物理编号排序。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      34,
      35,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "从根指针开始按左右链接还原，而非按表的列序或字母序。\nA:左=B,右=C\nB:左=空,右=D\nD:左=G,右=空\nG:左=空,右=空\nC:左=F,右=E\nF:左=H,右=空\nH:左=空,右=空\nE:左=空,右=K\nK:左=空,右=空\n前/中/后序分别是 ABDGCFHEK, BGDAHFCEK, GDBHFKECA",
    "solution": [
      "从根指针开始按左右链接还原，而非按表的列序或字母序。",
      "A:左=B,右=C",
      "B:左=空,右=D",
      "D:左=G,右=空",
      "G:左=空,右=空",
      "C:左=F,右=E",
      "F:左=H,右=空",
      "H:左=空,右=空",
      "E:左=空,右=K",
      "K:左=空,右=空",
      "前/中/后序分别是 ABDGCFHEK, BGDAHFCEK, GDBHFKECA"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "前序",
        "answer": "ABDGCFHEK",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "中序",
        "answer": "BGDAHFCEK",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "后序",
        "answer": "GDBHFKECA",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "given": {
      "kind": "table",
      "caption": "题目给定：二叉链表指针表",
      "heads": [
        "编号",
        "数据",
        "左孩子编号",
        "右孩子编号"
      ],
      "rows": [
        [
          1,
          "A",
          6,
          4
        ],
        [
          2,
          "E",
          0,
          3
        ],
        [
          3,
          "K",
          0,
          0
        ],
        [
          4,
          "C",
          8,
          2
        ],
        [
          5,
          "D",
          9,
          0
        ],
        [
          6,
          "B",
          0,
          5
        ],
        [
          7,
          "H",
          0,
          0
        ],
        [
          8,
          "F",
          7,
          0
        ],
        [
          9,
          "G",
          0,
          0
        ]
      ]
    },
    "support": {
      "ask": "先还原逻辑链接，不按表行顺序输出。",
      "plan": [
        "从根指针T开始，左、右字段是目标结点编号，0为空。",
        "按DLR、LDR、LRD输出数据值；表中物理编号不等于按层位置号。"
      ],
      "format": "遍历写值序列，不写物理编号；每个结点恰一次。"
    },
    "worked": [
      {
        "caption": "先按链接还原位置，物理编号只用于查表",
        "heads": [
          "逻辑位置",
          "物理编号",
          "值",
          "左指针",
          "右指针"
        ],
        "rows": [
          [
            "根",
            "1",
            "A",
            "6",
            "4"
          ],
          [
            "根左",
            "6",
            "B",
            "空",
            "5"
          ],
          [
            "根左右",
            "5",
            "D",
            "9",
            "空"
          ],
          [
            "根左右左",
            "9",
            "G",
            "空",
            "空"
          ],
          [
            "根右",
            "4",
            "C",
            "8",
            "2"
          ],
          [
            "根右左",
            "8",
            "F",
            "7",
            "空"
          ],
          [
            "根右左左",
            "7",
            "H",
            "空",
            "空"
          ],
          [
            "根右右",
            "2",
            "E",
            "空",
            "3"
          ],
          [
            "根右右右",
            "3",
            "K",
            "空",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-pointertable-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-pointertable",
    "variant": 2,
    "title": "二叉链表的指针表见下方，0 表示空，根指针 T=6。按左右指针关系求前、中、后序遍历，不按物理编号排序。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      34,
      35,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "从根指针开始按左右链接还原，而非按表的列序或字母序。\nA:左=B,右=C\nB:左=D,右=E\nD:左=空,右=空\nE:左=空,右=空\nC:左=F,右=G\nF:左=空,右=空\nG:左=空,右=空\n前/中/后序分别是 ABDECFG, DBEAFCG, DEBFGCA",
    "solution": [
      "从根指针开始按左右链接还原，而非按表的列序或字母序。",
      "A:左=B,右=C",
      "B:左=D,右=E",
      "D:左=空,右=空",
      "E:左=空,右=空",
      "C:左=F,右=G",
      "F:左=空,右=空",
      "G:左=空,右=空",
      "前/中/后序分别是 ABDECFG, DBEAFCG, DEBFGCA"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "前序",
        "answer": "ABDECFG",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "中序",
        "answer": "DBEAFCG",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "后序",
        "answer": "DEBFGCA",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "given": {
      "kind": "table",
      "caption": "题目给定：二叉链表指针表",
      "heads": [
        "编号",
        "数据",
        "左孩子编号",
        "右孩子编号"
      ],
      "rows": [
        [
          1,
          "B",
          2,
          5
        ],
        [
          2,
          "D",
          0,
          0
        ],
        [
          3,
          "C",
          7,
          4
        ],
        [
          4,
          "G",
          0,
          0
        ],
        [
          5,
          "E",
          0,
          0
        ],
        [
          6,
          "A",
          1,
          3
        ],
        [
          7,
          "F",
          0,
          0
        ]
      ]
    },
    "support": {
      "ask": "先还原逻辑链接，不按表行顺序输出。",
      "plan": [
        "从根指针T开始，左、右字段是目标结点编号，0为空。",
        "按DLR、LDR、LRD输出数据值；表中物理编号不等于按层位置号。"
      ],
      "format": "遍历写值序列，不写物理编号；每个结点恰一次。"
    },
    "worked": [
      {
        "caption": "先按链接还原位置，物理编号只用于查表",
        "heads": [
          "逻辑位置",
          "物理编号",
          "值",
          "左指针",
          "右指针"
        ],
        "rows": [
          [
            "根",
            "6",
            "A",
            "1",
            "3"
          ],
          [
            "根左",
            "1",
            "B",
            "2",
            "5"
          ],
          [
            "根左左",
            "2",
            "D",
            "空",
            "空"
          ],
          [
            "根左右",
            "5",
            "E",
            "空",
            "空"
          ],
          [
            "根右",
            "3",
            "C",
            "7",
            "4"
          ],
          [
            "根右左",
            "7",
            "F",
            "空",
            "空"
          ],
          [
            "根右右",
            "4",
            "G",
            "空",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-pointertable-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-pointertable",
    "variant": 3,
    "title": "二叉链表的指针表见下方，0 表示空，根指针 T=2。按左右指针关系求前、中、后序遍历，不按物理编号排序。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      34,
      35,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "从根指针开始按左右链接还原，而非按表的列序或字母序。\nM:左=F,右=R\nF:左=G,右=H\nG:左=空,右=空\nH:左=空,右=空\nR:左=空,右=T\nT:左=空,右=V\nV:左=空,右=空\n前/中/后序分别是 MFGHRTV, GFHMRTV, GHFVTRM",
    "solution": [
      "从根指针开始按左右链接还原，而非按表的列序或字母序。",
      "M:左=F,右=R",
      "F:左=G,右=H",
      "G:左=空,右=空",
      "H:左=空,右=空",
      "R:左=空,右=T",
      "T:左=空,右=V",
      "V:左=空,右=空",
      "前/中/后序分别是 MFGHRTV, GFHMRTV, GHFVTRM"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "前序",
        "answer": "MFGHRTV",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "中序",
        "answer": "GFHMRTV",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "后序",
        "answer": "GHFVTRM",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "given": {
      "kind": "table",
      "caption": "题目给定：二叉链表指针表",
      "heads": [
        "编号",
        "数据",
        "左孩子编号",
        "右孩子编号"
      ],
      "rows": [
        [
          1,
          "T",
          0,
          4
        ],
        [
          2,
          "M",
          6,
          5
        ],
        [
          3,
          "G",
          0,
          0
        ],
        [
          4,
          "V",
          0,
          0
        ],
        [
          5,
          "R",
          0,
          1
        ],
        [
          6,
          "F",
          3,
          7
        ],
        [
          7,
          "H",
          0,
          0
        ]
      ]
    },
    "support": {
      "ask": "先还原逻辑链接，不按表行顺序输出。",
      "plan": [
        "从根指针T开始，左、右字段是目标结点编号，0为空。",
        "按DLR、LDR、LRD输出数据值；表中物理编号不等于按层位置号。"
      ],
      "format": "遍历写值序列，不写物理编号；每个结点恰一次。"
    },
    "worked": [
      {
        "caption": "先按链接还原位置，物理编号只用于查表",
        "heads": [
          "逻辑位置",
          "物理编号",
          "值",
          "左指针",
          "右指针"
        ],
        "rows": [
          [
            "根",
            "2",
            "M",
            "6",
            "5"
          ],
          [
            "根左",
            "6",
            "F",
            "3",
            "7"
          ],
          [
            "根左左",
            "3",
            "G",
            "空",
            "空"
          ],
          [
            "根左右",
            "7",
            "H",
            "空",
            "空"
          ],
          [
            "根右",
            "5",
            "R",
            "空",
            "1"
          ],
          [
            "根右右",
            "1",
            "T",
            "空",
            "4"
          ],
          [
            "根右右右",
            "4",
            "V",
            "空",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-pointertable-v4",
    "chapter": 5,
    "mode": "review",
    "family": "R5-pointertable",
    "variant": 4,
    "title": "二叉链表的指针表见下方，0 表示空，根指针 T=1。按左右指针关系求前、中、后序遍历，不按物理编号排序。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      34,
      35,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "从根指针开始按左右链接还原，而非按表的列序或字母序。\nK:左=D,右=H\nD:左=B,右=A\nB:左=空,右=空\nA:左=F,右=空\nF:左=空,右=空\nH:左=空,右=G\nG:左=空,右=空\n前/中/后序分别是 KDBAFHG, BDFAKHG, BFADGHK",
    "solution": [
      "从根指针开始按左右链接还原，而非按表的列序或字母序。",
      "K:左=D,右=H",
      "D:左=B,右=A",
      "B:左=空,右=空",
      "A:左=F,右=空",
      "F:左=空,右=空",
      "H:左=空,右=G",
      "G:左=空,右=空",
      "前/中/后序分别是 KDBAFHG, BDFAKHG, BFADGHK"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "前序",
        "answer": "KDBAFHG",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "中序",
        "answer": "BDFAKHG",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "后序",
        "answer": "BFADGHK",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "given": {
      "kind": "table",
      "caption": "题目给定：二叉链表指针表",
      "heads": [
        "编号",
        "数据",
        "左孩子编号",
        "右孩子编号"
      ],
      "rows": [
        [
          1,
          "K",
          5,
          3
        ],
        [
          2,
          "A",
          6,
          0
        ],
        [
          3,
          "H",
          0,
          4
        ],
        [
          4,
          "G",
          0,
          0
        ],
        [
          5,
          "D",
          7,
          2
        ],
        [
          6,
          "F",
          0,
          0
        ],
        [
          7,
          "B",
          0,
          0
        ]
      ]
    },
    "support": {
      "ask": "先还原逻辑链接，不按表行顺序输出。",
      "plan": [
        "从根指针T开始，左、右字段是目标结点编号，0为空。",
        "按DLR、LDR、LRD输出数据值；表中物理编号不等于按层位置号。"
      ],
      "format": "遍历写值序列，不写物理编号；每个结点恰一次。"
    },
    "worked": [
      {
        "caption": "先按链接还原位置，物理编号只用于查表",
        "heads": [
          "逻辑位置",
          "物理编号",
          "值",
          "左指针",
          "右指针"
        ],
        "rows": [
          [
            "根",
            "1",
            "K",
            "5",
            "3"
          ],
          [
            "根左",
            "5",
            "D",
            "7",
            "2"
          ],
          [
            "根左左",
            "7",
            "B",
            "空",
            "空"
          ],
          [
            "根左右",
            "2",
            "A",
            "6",
            "空"
          ],
          [
            "根左右左",
            "6",
            "F",
            "空",
            "空"
          ],
          [
            "根右",
            "3",
            "H",
            "空",
            "4"
          ],
          [
            "根右右",
            "4",
            "G",
            "空",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-sparse-array-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-sparse-array",
    "variant": 1,
    "title": "一棵 4 个结点的二叉树只有右孩子，根 A，沿右链依次是 A,B,C,D。根编号 1，用完全二叉树位置顺序存储。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      4,
      13,
      34
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "右链编号 1,3,7,…，第 h 层为 2ʰ−1=15。\n有效结点虽仅 4 个，顺序存储仍要留到 15 号。\n二叉链表空指针域=n+1=5。",
    "solution": [
      "右链编号 1,3,7,…，第 h 层为 2ʰ−1=15。",
      "有效结点虽仅 4 个，顺序存储仍要留到 15 号。",
      "二叉链表空指针域=n+1=5。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最后结点位置编号",
        "answer": "15",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "至少需要的数组位置数（不含0号）",
        "answer": "15",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "二叉链表空孩子指针数",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "这是一条向右的链，按完全树位置留空。",
      "plan": [
        "从位置1开始，右孩子位置递推为2i+1。",
        "最后位置决定数组要预留多远；空孩子指针另按非空树n+1数。"
      ],
      "format": "不含0号的位置总数等于最大位置编号，不是有效结点数。"
    },
    "worked": [
      {
        "caption": "每向右下一层，位置号乘2再加1",
        "heads": [
          "层",
          "结点",
          "位置编号"
        ],
        "rows": [
          [
            "1",
            "A",
            "1"
          ],
          [
            "2",
            "B",
            "3"
          ],
          [
            "3",
            "C",
            "7"
          ],
          [
            "4",
            "D",
            "15"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-sparse-array-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-sparse-array",
    "variant": 2,
    "title": "一棵 5 个结点的二叉树只有右孩子，根 A，沿右链依次是 A,B,C,D,E。根编号 1，用完全二叉树位置顺序存储。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      4,
      13,
      34
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "右链编号 1,3,7,…，第 h 层为 2ʰ−1=31。\n有效结点虽仅 5 个，顺序存储仍要留到 31 号。\n二叉链表空指针域=n+1=6。",
    "solution": [
      "右链编号 1,3,7,…，第 h 层为 2ʰ−1=31。",
      "有效结点虽仅 5 个，顺序存储仍要留到 31 号。",
      "二叉链表空指针域=n+1=6。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最后结点位置编号",
        "answer": "31",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "至少需要的数组位置数（不含0号）",
        "answer": "31",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "二叉链表空孩子指针数",
        "answer": "6",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "这是一条向右的链，按完全树位置留空。",
      "plan": [
        "从位置1开始，右孩子位置递推为2i+1。",
        "最后位置决定数组要预留多远；空孩子指针另按非空树n+1数。"
      ],
      "format": "不含0号的位置总数等于最大位置编号，不是有效结点数。"
    },
    "worked": [
      {
        "caption": "每向右下一层，位置号乘2再加1",
        "heads": [
          "层",
          "结点",
          "位置编号"
        ],
        "rows": [
          [
            "1",
            "A",
            "1"
          ],
          [
            "2",
            "B",
            "3"
          ],
          [
            "3",
            "C",
            "7"
          ],
          [
            "4",
            "D",
            "15"
          ],
          [
            "5",
            "E",
            "31"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-sparse-array-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-sparse-array",
    "variant": 3,
    "title": "一棵 6 个结点的二叉树只有右孩子，根 A，沿右链依次是 A,B,C,D,E,F。根编号 1，用完全二叉树位置顺序存储。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      4,
      13,
      34
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "右链编号 1,3,7,…，第 h 层为 2ʰ−1=63。\n有效结点虽仅 6 个，顺序存储仍要留到 63 号。\n二叉链表空指针域=n+1=7。",
    "solution": [
      "右链编号 1,3,7,…，第 h 层为 2ʰ−1=63。",
      "有效结点虽仅 6 个，顺序存储仍要留到 63 号。",
      "二叉链表空指针域=n+1=7。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最后结点位置编号",
        "answer": "63",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "至少需要的数组位置数（不含0号）",
        "answer": "63",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "二叉链表空孩子指针数",
        "answer": "7",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "这是一条向右的链，按完全树位置留空。",
      "plan": [
        "从位置1开始，右孩子位置递推为2i+1。",
        "最后位置决定数组要预留多远；空孩子指针另按非空树n+1数。"
      ],
      "format": "不含0号的位置总数等于最大位置编号，不是有效结点数。"
    },
    "worked": [
      {
        "caption": "每向右下一层，位置号乘2再加1",
        "heads": [
          "层",
          "结点",
          "位置编号"
        ],
        "rows": [
          [
            "1",
            "A",
            "1"
          ],
          [
            "2",
            "B",
            "3"
          ],
          [
            "3",
            "C",
            "7"
          ],
          [
            "4",
            "D",
            "15"
          ],
          [
            "5",
            "E",
            "31"
          ],
          [
            "6",
            "F",
            "63"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-sparse-array-v4",
    "chapter": 5,
    "mode": "review",
    "family": "R5-sparse-array",
    "variant": 4,
    "title": "一棵 7 个结点的二叉树只有右孩子，根 A，沿右链依次是 A,B,C,D,E,F,G。根编号 1，用完全二叉树位置顺序存储。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      4,
      13,
      34
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "右链编号 1,3,7,…，第 h 层为 2ʰ−1=127。\n有效结点虽仅 7 个，顺序存储仍要留到 127 号。\n二叉链表空指针域=n+1=8。",
    "solution": [
      "右链编号 1,3,7,…，第 h 层为 2ʰ−1=127。",
      "有效结点虽仅 7 个，顺序存储仍要留到 127 号。",
      "二叉链表空指针域=n+1=8。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最后结点位置编号",
        "answer": "127",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "至少需要的数组位置数（不含0号）",
        "answer": "127",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "二叉链表空孩子指针数",
        "answer": "8",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "这是一条向右的链，按完全树位置留空。",
      "plan": [
        "从位置1开始，右孩子位置递推为2i+1。",
        "最后位置决定数组要预留多远；空孩子指针另按非空树n+1数。"
      ],
      "format": "不含0号的位置总数等于最大位置编号，不是有效结点数。"
    },
    "worked": [
      {
        "caption": "每向右下一层，位置号乘2再加1",
        "heads": [
          "层",
          "结点",
          "位置编号"
        ],
        "rows": [
          [
            "1",
            "A",
            "1"
          ],
          [
            "2",
            "B",
            "3"
          ],
          [
            "3",
            "C",
            "7"
          ],
          [
            "4",
            "D",
            "15"
          ],
          [
            "5",
            "E",
            "31"
          ],
          [
            "6",
            "F",
            "63"
          ],
          [
            "7",
            "G",
            "127"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-forest-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-forest",
    "variant": 1,
    "title": "将题目给定的二叉树按孩子兄弟表示还原成一般树/森林。根指针指向 A；左右孩子表见下方，∅ 表示空。列出森林的根及每个结点的孩子，可在纸上画图。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      10,
      28,
      35,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-4",
    "hint": "",
    "explain": "森林根从根的右链读取：['A', 'D']。\nA 的孩子：B、E\nB 的孩子：C\nC 的孩子：无\nD 的孩子：F\nE 的孩子：无\nF 的孩子：无\n左指针是第一孩子，沿这些孩子的右指针依次找到其他兄弟；不能把二叉右边仍当一般树孩子。",
    "solution": [
      "森林根从根的右链读取：['A', 'D']。",
      "A 的孩子：B、E",
      "B 的孩子：C",
      "C 的孩子：无",
      "D 的孩子：F",
      "E 的孩子：无",
      "F 的孩子：无",
      "左指针是第一孩子，沿这些孩子的右指针依次找到其他兄弟；不能把二叉右边仍当一般树孩子。"
    ],
    "rubric": [
      {
        "label": "森林根及顺序正确",
        "points": 2
      },
      {
        "label": "逐个还原第一孩子和其右兄弟链",
        "points": 4
      },
      {
        "label": "不把右兄弟误挂为自己的孩子，图或文字无遗漏",
        "points": 2
      }
    ],
    "given": {
      "kind": "table",
      "caption": "题目给定：二叉树左右孩子表",
      "heads": [
        "结点",
        "左孩子",
        "右孩子"
      ],
      "rows": [
        [
          "A",
          "B",
          "D"
        ],
        [
          "B",
          "C",
          "E"
        ],
        [
          "C",
          "∅",
          "∅"
        ],
        [
          "D",
          "F",
          "∅"
        ],
        [
          "E",
          "∅",
          "∅"
        ],
        [
          "F",
          "∅",
          "∅"
        ]
      ]
    },
    "support": {
      "ask": "左右字段现在按第一孩子与下一兄弟解释。",
      "plan": [
        "先沿根右链列出森林各棵树的根。",
        "对每个结点，从左孩子起再沿右链列全体孩子，右兄弟不能挂成自己的孩子。"
      ],
      "format": "列根序列和每个结点孩子；叶子写无，可配纸笔图。"
    },
    "worked": [
      {
        "caption": "左一次进入孩子，再沿这些孩子的右链找兄弟",
        "heads": [
          "原结点",
          "二叉左字段",
          "二叉右字段",
          "还原后的全部孩子"
        ],
        "rows": [
          [
            "A",
            "B",
            "D",
            "B，E"
          ],
          [
            "B",
            "C",
            "E",
            "C"
          ],
          [
            "C",
            "∅",
            "∅",
            "空"
          ],
          [
            "D",
            "F",
            "∅",
            "F"
          ],
          [
            "E",
            "∅",
            "∅",
            "空"
          ],
          [
            "F",
            "∅",
            "∅",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R5-forest-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-forest",
    "variant": 2,
    "title": "将题目给定的二叉树按孩子兄弟表示还原成一般树/森林。根指针指向 A；左右孩子表见下方，∅ 表示空。列出森林的根及每个结点的孩子，可在纸上画图。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      10,
      28,
      35,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-4",
    "hint": "",
    "explain": "森林根从根的右链读取：['A']。\nA 的孩子：B、D、G\nB 的孩子：C\nC 的孩子：E\nD 的孩子：F\nE 的孩子：无\nF 的孩子：无\nG 的孩子：无\n左指针是第一孩子，沿这些孩子的右指针依次找到其他兄弟；不能把二叉右边仍当一般树孩子。",
    "solution": [
      "森林根从根的右链读取：['A']。",
      "A 的孩子：B、D、G",
      "B 的孩子：C",
      "C 的孩子：E",
      "D 的孩子：F",
      "E 的孩子：无",
      "F 的孩子：无",
      "G 的孩子：无",
      "左指针是第一孩子，沿这些孩子的右指针依次找到其他兄弟；不能把二叉右边仍当一般树孩子。"
    ],
    "rubric": [
      {
        "label": "森林根及顺序正确",
        "points": 2
      },
      {
        "label": "逐个还原第一孩子和其右兄弟链",
        "points": 4
      },
      {
        "label": "不把右兄弟误挂为自己的孩子，图或文字无遗漏",
        "points": 2
      }
    ],
    "given": {
      "kind": "table",
      "caption": "题目给定：二叉树左右孩子表",
      "heads": [
        "结点",
        "左孩子",
        "右孩子"
      ],
      "rows": [
        [
          "A",
          "B",
          "∅"
        ],
        [
          "B",
          "C",
          "D"
        ],
        [
          "C",
          "E",
          "∅"
        ],
        [
          "D",
          "F",
          "G"
        ],
        [
          "E",
          "∅",
          "∅"
        ],
        [
          "F",
          "∅",
          "∅"
        ],
        [
          "G",
          "∅",
          "∅"
        ]
      ]
    },
    "support": {
      "ask": "左右字段现在按第一孩子与下一兄弟解释。",
      "plan": [
        "先沿根右链列出森林各棵树的根。",
        "对每个结点，从左孩子起再沿右链列全体孩子，右兄弟不能挂成自己的孩子。"
      ],
      "format": "列根序列和每个结点孩子；叶子写无，可配纸笔图。"
    },
    "worked": [
      {
        "caption": "左一次进入孩子，再沿这些孩子的右链找兄弟",
        "heads": [
          "原结点",
          "二叉左字段",
          "二叉右字段",
          "还原后的全部孩子"
        ],
        "rows": [
          [
            "A",
            "B",
            "∅",
            "B，D，G"
          ],
          [
            "B",
            "C",
            "D",
            "C"
          ],
          [
            "C",
            "E",
            "∅",
            "E"
          ],
          [
            "D",
            "F",
            "G",
            "F"
          ],
          [
            "E",
            "∅",
            "∅",
            "空"
          ],
          [
            "F",
            "∅",
            "∅",
            "空"
          ],
          [
            "G",
            "∅",
            "∅",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R5-forest-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-forest",
    "variant": 3,
    "title": "将题目给定的二叉树按孩子兄弟表示还原成一般树/森林。根指针指向 M；左右孩子表见下方，∅ 表示空。列出森林的根及每个结点的孩子，可在纸上画图。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      10,
      28,
      35,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-4",
    "hint": "",
    "explain": "森林根从根的右链读取：['M', 'R']。\nM 的孩子：N、P\nN 的孩子：无\nP 的孩子：无\nR 的孩子：S\nS 的孩子：无\n左指针是第一孩子，沿这些孩子的右指针依次找到其他兄弟；不能把二叉右边仍当一般树孩子。",
    "solution": [
      "森林根从根的右链读取：['M', 'R']。",
      "M 的孩子：N、P",
      "N 的孩子：无",
      "P 的孩子：无",
      "R 的孩子：S",
      "S 的孩子：无",
      "左指针是第一孩子，沿这些孩子的右指针依次找到其他兄弟；不能把二叉右边仍当一般树孩子。"
    ],
    "rubric": [
      {
        "label": "森林根及顺序正确",
        "points": 2
      },
      {
        "label": "逐个还原第一孩子和其右兄弟链",
        "points": 4
      },
      {
        "label": "不把右兄弟误挂为自己的孩子，图或文字无遗漏",
        "points": 2
      }
    ],
    "given": {
      "kind": "table",
      "caption": "题目给定：二叉树左右孩子表",
      "heads": [
        "结点",
        "左孩子",
        "右孩子"
      ],
      "rows": [
        [
          "M",
          "N",
          "R"
        ],
        [
          "N",
          "∅",
          "P"
        ],
        [
          "P",
          "∅",
          "∅"
        ],
        [
          "R",
          "S",
          "∅"
        ],
        [
          "S",
          "∅",
          "∅"
        ]
      ]
    },
    "support": {
      "ask": "左右字段现在按第一孩子与下一兄弟解释。",
      "plan": [
        "先沿根右链列出森林各棵树的根。",
        "对每个结点，从左孩子起再沿右链列全体孩子，右兄弟不能挂成自己的孩子。"
      ],
      "format": "列根序列和每个结点孩子；叶子写无，可配纸笔图。"
    },
    "worked": [
      {
        "caption": "左一次进入孩子，再沿这些孩子的右链找兄弟",
        "heads": [
          "原结点",
          "二叉左字段",
          "二叉右字段",
          "还原后的全部孩子"
        ],
        "rows": [
          [
            "M",
            "N",
            "R",
            "N，P"
          ],
          [
            "N",
            "∅",
            "P",
            "空"
          ],
          [
            "P",
            "∅",
            "∅",
            "空"
          ],
          [
            "R",
            "S",
            "∅",
            "S"
          ],
          [
            "S",
            "∅",
            "∅",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R5-forest-v4",
    "chapter": 5,
    "mode": "review",
    "family": "R5-forest",
    "variant": 4,
    "title": "将题目给定的二叉树按孩子兄弟表示还原成一般树/森林。根指针指向 A；左右孩子表见下方，∅ 表示空。列出森林的根及每个结点的孩子，可在纸上画图。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      10,
      28,
      35,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-4",
    "hint": "",
    "explain": "森林根从根的右链读取：['A']。\nA 的孩子：B、D、I\nB 的孩子：C\nC 的孩子：E\nD 的孩子：F\nE 的孩子：无\nF 的孩子：H\nH 的孩子：无\nI 的孩子：J\nJ 的孩子：无\n左指针是第一孩子，沿这些孩子的右指针依次找到其他兄弟；不能把二叉右边仍当一般树孩子。",
    "solution": [
      "森林根从根的右链读取：['A']。",
      "A 的孩子：B、D、I",
      "B 的孩子：C",
      "C 的孩子：E",
      "D 的孩子：F",
      "E 的孩子：无",
      "F 的孩子：H",
      "H 的孩子：无",
      "I 的孩子：J",
      "J 的孩子：无",
      "左指针是第一孩子，沿这些孩子的右指针依次找到其他兄弟；不能把二叉右边仍当一般树孩子。"
    ],
    "rubric": [
      {
        "label": "森林根及顺序正确",
        "points": 2
      },
      {
        "label": "逐个还原第一孩子和其右兄弟链",
        "points": 4
      },
      {
        "label": "不把右兄弟误挂为自己的孩子，图或文字无遗漏",
        "points": 2
      }
    ],
    "given": {
      "kind": "table",
      "caption": "题目给定：二叉树左右孩子表",
      "heads": [
        "结点",
        "左孩子",
        "右孩子"
      ],
      "rows": [
        [
          "A",
          "B",
          "∅"
        ],
        [
          "B",
          "C",
          "D"
        ],
        [
          "C",
          "E",
          "∅"
        ],
        [
          "D",
          "F",
          "I"
        ],
        [
          "E",
          "∅",
          "∅"
        ],
        [
          "F",
          "H",
          "∅"
        ],
        [
          "H",
          "∅",
          "∅"
        ],
        [
          "I",
          "J",
          "∅"
        ],
        [
          "J",
          "∅",
          "∅"
        ]
      ]
    },
    "support": {
      "ask": "左右字段现在按第一孩子与下一兄弟解释。",
      "plan": [
        "先沿根右链列出森林各棵树的根。",
        "对每个结点，从左孩子起再沿右链列全体孩子，右兄弟不能挂成自己的孩子。"
      ],
      "format": "列根序列和每个结点孩子；叶子写无，可配纸笔图。"
    },
    "worked": [
      {
        "caption": "左一次进入孩子，再沿这些孩子的右链找兄弟",
        "heads": [
          "原结点",
          "二叉左字段",
          "二叉右字段",
          "还原后的全部孩子"
        ],
        "rows": [
          [
            "A",
            "B",
            "∅",
            "B，D，I"
          ],
          [
            "B",
            "C",
            "D",
            "C"
          ],
          [
            "C",
            "E",
            "∅",
            "E"
          ],
          [
            "D",
            "F",
            "I",
            "F"
          ],
          [
            "E",
            "∅",
            "∅",
            "空"
          ],
          [
            "F",
            "H",
            "∅",
            "H"
          ],
          [
            "H",
            "∅",
            "∅",
            "空"
          ],
          [
            "I",
            "J",
            "∅",
            "J"
          ],
          [
            "J",
            "∅",
            "∅",
            "空"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R5-huffman-tree-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-huffman-tree",
    "variant": 1,
    "title": "字符 A..G 的频数依次为 [47, 7, 3, 6, 20, 4, 13]。构造哈夫曼树，约定左 0 右 1，给出一组前缀编码和 WPL；相同权值时允许不同合并次序。再求平均码长，写清总频数与 WPL 的关系。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      9,
      17,
      43,
      44
    ],
    "origin": "同类考法新题",
    "topic": "r5-5",
    "hint": "",
    "explain": "合并过程：[(3, 4, 7), (6, 7, 13), (7, 13, 20), (13, 20, 33), (20, 33, 53), (47, 53, 100)]。 一组合法码字见上方码表；每个码字是从根到对应叶子的边标号。 WPL 为每次合并的新权值之和=226。 左右互换或相同权值选法不同，编码可不同；检验前缀性和相同的最优 WPL，不能只逐字对答案。 总频数=100；平均码长=226/100=113/50位/字符。",
    "solution": [
      "合并过程：[(3, 4, 7), (6, 7, 13), (7, 13, 20), (13, 20, 33), (20, 33, 53), (47, 53, 100)]。",
      "一组合法码字见上方码表；每个码字是从根到对应叶子的边标号。",
      "WPL 为每次合并的新权值之和=226。",
      "左右互换或相同权值选法不同，编码可不同；检验前缀性和相同的最优 WPL，不能只逐字对答案。",
      "总频数=100；平均码长=226/100=113/50位/字符。"
    ],
    "rubric": [
      {
        "label": "按当前最小两权逐次合并，构树关系正确",
        "points": 4
      },
      {
        "label": "码字与树相符且满足前缀性；允许合法多解",
        "points": 2
      },
      {
        "label": "平均码长由WPL除总频数得到，为113/50位/字符",
        "points": 2
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "3",
            "4",
            "7",
            "6，7，7，13，20，47",
            "7"
          ],
          [
            "6",
            "7",
            "13",
            "7，13，13，20，47",
            "20"
          ],
          [
            "7",
            "13",
            "20",
            "13，20，20，47",
            "40"
          ],
          [
            "13",
            "20",
            "33",
            "20，33，47",
            "73"
          ],
          [
            "20",
            "33",
            "53",
            "47，53",
            "126"
          ],
          [
            "47",
            "53",
            "100",
            "100",
            "226"
          ]
        ]
      },
      {
        "caption": "一组合法码表：左右或等权选择不同可有别的正确答案",
        "heads": [
          "字符",
          "频数",
          "码字",
          "码长",
          "频数×码长"
        ],
        "rows": [
          [
            "A",
            "47",
            "0",
            "1",
            "47"
          ],
          [
            "B",
            "7",
            "1101",
            "4",
            "28"
          ],
          [
            "C",
            "3",
            "1000",
            "4",
            "12"
          ],
          [
            "D",
            "6",
            "1100",
            "4",
            "24"
          ],
          [
            "E",
            "20",
            "111",
            "3",
            "60"
          ],
          [
            "F",
            "4",
            "1001",
            "4",
            "16"
          ],
          [
            "G",
            "13",
            "101",
            "3",
            "39"
          ]
        ]
      },
      {
        "caption": "从加权总成本换成每个字符的平均成本",
        "heads": [
          "量",
          "如何计算",
          "本题结果"
        ],
        "rows": [
          [
            "WPL",
            "各叶子频数×码长相加",
            "226"
          ],
          [
            "总频数",
            "各字符出现次数相加",
            "100"
          ],
          [
            "平均码长",
            "226/100",
            "113/50 位/字符"
          ]
        ]
      }
    ],
    "referenceCodes": {
      "A": "0",
      "C": "1000",
      "F": "1001",
      "G": "101",
      "D": "1100",
      "B": "1101",
      "E": "111"
    },
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R5-huffman-tree-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-huffman-tree",
    "variant": 2,
    "title": "字符 A..F 的频数依次为 [35, 25, 20, 10, 6, 4]。构造哈夫曼树，约定左 0 右 1，给出一组前缀编码和 WPL；相同权值时允许不同合并次序。再求平均码长，写清总频数与 WPL 的关系。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      9,
      17,
      43,
      44
    ],
    "origin": "同类考法新题",
    "topic": "r5-5",
    "hint": "",
    "explain": "合并过程：[(4, 6, 10), (10, 10, 20), (20, 20, 40), (25, 35, 60), (40, 60, 100)]。 一组合法码字见上方码表；每个码字是从根到对应叶子的边标号。 WPL 为每次合并的新权值之和=230。 左右互换或相同权值选法不同，编码可不同；检验前缀性和相同的最优 WPL，不能只逐字对答案。 总频数=100；平均码长=230/100=23/10位/字符。",
    "solution": [
      "合并过程：[(4, 6, 10), (10, 10, 20), (20, 20, 40), (25, 35, 60), (40, 60, 100)]。",
      "一组合法码字见上方码表；每个码字是从根到对应叶子的边标号。",
      "WPL 为每次合并的新权值之和=230。",
      "左右互换或相同权值选法不同，编码可不同；检验前缀性和相同的最优 WPL，不能只逐字对答案。",
      "总频数=100；平均码长=230/100=23/10位/字符。"
    ],
    "rubric": [
      {
        "label": "按当前最小两权逐次合并，构树关系正确",
        "points": 4
      },
      {
        "label": "码字与树相符且满足前缀性；允许合法多解",
        "points": 2
      },
      {
        "label": "平均码长由WPL除总频数得到，为23/10位/字符",
        "points": 2
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "4",
            "6",
            "10",
            "10，10，20，25，35",
            "10"
          ],
          [
            "10",
            "10",
            "20",
            "20，20，25，35",
            "30"
          ],
          [
            "20",
            "20",
            "40",
            "25，35，40",
            "70"
          ],
          [
            "25",
            "35",
            "60",
            "40，60",
            "130"
          ],
          [
            "40",
            "60",
            "100",
            "100",
            "230"
          ]
        ]
      },
      {
        "caption": "一组合法码表：左右或等权选择不同可有别的正确答案",
        "heads": [
          "字符",
          "频数",
          "码字",
          "码长",
          "频数×码长"
        ],
        "rows": [
          [
            "A",
            "35",
            "11",
            "2",
            "70"
          ],
          [
            "B",
            "25",
            "10",
            "2",
            "50"
          ],
          [
            "C",
            "20",
            "00",
            "2",
            "40"
          ],
          [
            "D",
            "10",
            "010",
            "3",
            "30"
          ],
          [
            "E",
            "6",
            "0111",
            "4",
            "24"
          ],
          [
            "F",
            "4",
            "0110",
            "4",
            "16"
          ]
        ]
      },
      {
        "caption": "从加权总成本换成每个字符的平均成本",
        "heads": [
          "量",
          "如何计算",
          "本题结果"
        ],
        "rows": [
          [
            "WPL",
            "各叶子频数×码长相加",
            "230"
          ],
          [
            "总频数",
            "各字符出现次数相加",
            "100"
          ],
          [
            "平均码长",
            "230/100",
            "23/10 位/字符"
          ]
        ]
      }
    ],
    "referenceCodes": {
      "C": "00",
      "D": "010",
      "F": "0110",
      "E": "0111",
      "B": "10",
      "A": "11"
    },
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R5-huffman-tree-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-huffman-tree",
    "variant": 3,
    "title": "字符 A..H 的频数依次为 [10, 5, 15, 35, 5, 15, 10, 5]。构造哈夫曼树，约定左 0 右 1，给出一组前缀编码和 WPL；相同权值时允许不同合并次序。再求平均码长，写清总频数与 WPL 的关系。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      9,
      17,
      43,
      44
    ],
    "origin": "同类考法新题",
    "topic": "r5-5",
    "hint": "",
    "explain": "合并过程：[(5, 5, 10), (5, 10, 15), (10, 10, 20), (15, 15, 30), (15, 20, 35), (30, 35, 65), (35, 65, 100)]。 一组合法码字见上方码表；每个码字是从根到对应叶子的边标号。 WPL 为每次合并的新权值之和=275。 左右互换或相同权值选法不同，编码可不同；检验前缀性和相同的最优 WPL，不能只逐字对答案。 总频数=100；平均码长=275/100=11/4位/字符。",
    "solution": [
      "合并过程：[(5, 5, 10), (5, 10, 15), (10, 10, 20), (15, 15, 30), (15, 20, 35), (30, 35, 65), (35, 65, 100)]。",
      "一组合法码字见上方码表；每个码字是从根到对应叶子的边标号。",
      "WPL 为每次合并的新权值之和=275。",
      "左右互换或相同权值选法不同，编码可不同；检验前缀性和相同的最优 WPL，不能只逐字对答案。",
      "总频数=100；平均码长=275/100=11/4位/字符。"
    ],
    "rubric": [
      {
        "label": "按当前最小两权逐次合并，构树关系正确",
        "points": 4
      },
      {
        "label": "码字与树相符且满足前缀性；允许合法多解",
        "points": 2
      },
      {
        "label": "平均码长由WPL除总频数得到，为11/4位/字符",
        "points": 2
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "5",
            "5",
            "10",
            "5，10，10，10，15，15，35",
            "10"
          ],
          [
            "5",
            "10",
            "15",
            "10，10，15，15，15，35",
            "25"
          ],
          [
            "10",
            "10",
            "20",
            "15，15，15，20，35",
            "45"
          ],
          [
            "15",
            "15",
            "30",
            "15，20，30，35",
            "75"
          ],
          [
            "15",
            "20",
            "35",
            "30，35，35",
            "110"
          ],
          [
            "30",
            "35",
            "65",
            "35，65",
            "175"
          ],
          [
            "35",
            "65",
            "100",
            "100",
            "275"
          ]
        ]
      },
      {
        "caption": "一组合法码表：左右或等权选择不同可有别的正确答案",
        "heads": [
          "字符",
          "频数",
          "码字",
          "码长",
          "频数×码长"
        ],
        "rows": [
          [
            "A",
            "10",
            "001",
            "3",
            "30"
          ],
          [
            "B",
            "5",
            "0110",
            "4",
            "20"
          ],
          [
            "C",
            "15",
            "100",
            "3",
            "45"
          ],
          [
            "D",
            "35",
            "11",
            "2",
            "70"
          ],
          [
            "E",
            "5",
            "0111",
            "4",
            "20"
          ],
          [
            "F",
            "15",
            "101",
            "3",
            "45"
          ],
          [
            "G",
            "10",
            "010",
            "3",
            "30"
          ],
          [
            "H",
            "5",
            "000",
            "3",
            "15"
          ]
        ]
      },
      {
        "caption": "从加权总成本换成每个字符的平均成本",
        "heads": [
          "量",
          "如何计算",
          "本题结果"
        ],
        "rows": [
          [
            "WPL",
            "各叶子频数×码长相加",
            "275"
          ],
          [
            "总频数",
            "各字符出现次数相加",
            "100"
          ],
          [
            "平均码长",
            "275/100",
            "11/4 位/字符"
          ]
        ]
      }
    ],
    "referenceCodes": {
      "H": "000",
      "A": "001",
      "G": "010",
      "B": "0110",
      "E": "0111",
      "C": "100",
      "F": "101",
      "D": "11"
    },
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R5-huffman-tree-v4",
    "chapter": 5,
    "mode": "review",
    "family": "R5-huffman-tree",
    "variant": 4,
    "title": "字符 A..D 的频数依次为 [9, 4, 5, 2]。构造哈夫曼树，约定左 0 右 1，给出一组前缀编码和 WPL；相同权值时允许不同合并次序。再求平均码长，写清总频数与 WPL 的关系。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      9,
      17,
      43,
      44
    ],
    "origin": "同类考法新题",
    "topic": "r5-5",
    "hint": "",
    "explain": "合并过程：[(2, 4, 6), (5, 6, 11), (9, 11, 20)]。 一组合法码字见上方码表；每个码字是从根到对应叶子的边标号。 WPL 为每次合并的新权值之和=37。 左右互换或相同权值选法不同，编码可不同；检验前缀性和相同的最优 WPL，不能只逐字对答案。 总频数=20；平均码长=37/20=37/20位/字符。",
    "solution": [
      "合并过程：[(2, 4, 6), (5, 6, 11), (9, 11, 20)]。",
      "一组合法码字见上方码表；每个码字是从根到对应叶子的边标号。",
      "WPL 为每次合并的新权值之和=37。",
      "左右互换或相同权值选法不同，编码可不同；检验前缀性和相同的最优 WPL，不能只逐字对答案。",
      "总频数=20；平均码长=37/20=37/20位/字符。"
    ],
    "rubric": [
      {
        "label": "按当前最小两权逐次合并，构树关系正确",
        "points": 4
      },
      {
        "label": "码字与树相符且满足前缀性；允许合法多解",
        "points": 2
      },
      {
        "label": "平均码长由WPL除总频数得到，为37/20位/字符",
        "points": 2
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "2",
            "4",
            "6",
            "5，6，9",
            "6"
          ],
          [
            "5",
            "6",
            "11",
            "9，11",
            "17"
          ],
          [
            "9",
            "11",
            "20",
            "20",
            "37"
          ]
        ]
      },
      {
        "caption": "一组合法码表：左右或等权选择不同可有别的正确答案",
        "heads": [
          "字符",
          "频数",
          "码字",
          "码长",
          "频数×码长"
        ],
        "rows": [
          [
            "A",
            "9",
            "0",
            "1",
            "9"
          ],
          [
            "B",
            "4",
            "111",
            "3",
            "12"
          ],
          [
            "C",
            "5",
            "10",
            "2",
            "10"
          ],
          [
            "D",
            "2",
            "110",
            "3",
            "6"
          ]
        ]
      },
      {
        "caption": "从加权总成本换成每个字符的平均成本",
        "heads": [
          "量",
          "如何计算",
          "本题结果"
        ],
        "rows": [
          [
            "WPL",
            "各叶子频数×码长相加",
            "37"
          ],
          [
            "总频数",
            "各字符出现次数相加",
            "20"
          ],
          [
            "平均码长",
            "37/20",
            "37/20 位/字符"
          ]
        ]
      }
    ],
    "referenceCodes": {
      "A": "0",
      "C": "10",
      "D": "110",
      "B": "111"
    },
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R5-huffman-numeric-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-huffman-numeric",
    "variant": 1,
    "title": "字符频数 [10, 20, 30, 40]，先构造哈夫曼树。求 WPL、平均码长与最短固定长编码的码长。允许输入分数或小数，数值误差不超过 0.001。",
    "type": "fields",
    "points": 5,
    "difficulty": "考试标准",
    "sourcePages": [
      9,
      17,
      43,
      44
    ],
    "origin": "同类考法新题",
    "topic": "r5-6",
    "hint": "",
    "explain": "合并 [(10, 20, 30), (30, 30, 60), (40, 60, 100)]，合并代价和 190。\n平均码长=WPL/总频数=190/100=1.900000。\n固定长需要 ⌈log₂4⌉=2 位。",
    "solution": [
      "合并 [(10, 20, 30), (30, 30, 60), (40, 60, 100)]，合并代价和 190。",
      "平均码长=WPL/总频数=190/100=1.900000。",
      "固定长需要 ⌈log₂4⌉=2 位。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "WPL",
        "answer": "190",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "平均码长",
        "answer": "19/10",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "固定长码每字符位数",
        "answer": "2",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "10",
            "20",
            "30",
            "30，30，40",
            "30"
          ],
          [
            "30",
            "30",
            "60",
            "40，60",
            "90"
          ],
          [
            "40",
            "60",
            "100",
            "100",
            "190"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-huffman-numeric-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-huffman-numeric",
    "variant": 2,
    "title": "字符频数 [8, 12, 18, 24, 38]，先构造哈夫曼树。求 WPL、平均码长与最短固定长编码的码长。允许输入分数或小数，数值误差不超过 0.001。",
    "type": "fields",
    "points": 5,
    "difficulty": "考试标准",
    "sourcePages": [
      9,
      17,
      43,
      44
    ],
    "origin": "同类考法新题",
    "topic": "r5-6",
    "hint": "",
    "explain": "合并 [(8, 12, 20), (18, 20, 38), (24, 38, 62), (38, 62, 100)]，合并代价和 220。\n平均码长=WPL/总频数=220/100=2.200000。\n固定长需要 ⌈log₂5⌉=3 位。",
    "solution": [
      "合并 [(8, 12, 20), (18, 20, 38), (24, 38, 62), (38, 62, 100)]，合并代价和 220。",
      "平均码长=WPL/总频数=220/100=2.200000。",
      "固定长需要 ⌈log₂5⌉=3 位。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "WPL",
        "answer": "220",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "平均码长",
        "answer": "11/5",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "固定长码每字符位数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "8",
            "12",
            "20",
            "18，20，24，38",
            "20"
          ],
          [
            "18",
            "20",
            "38",
            "24，38，38",
            "58"
          ],
          [
            "24",
            "38",
            "62",
            "38，62",
            "120"
          ],
          [
            "38",
            "62",
            "100",
            "100",
            "220"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-huffman-numeric-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-huffman-numeric",
    "variant": 3,
    "title": "字符频数 [4, 6, 10, 15, 25, 40]，先构造哈夫曼树。求 WPL、平均码长与最短固定长编码的码长。允许输入分数或小数，数值误差不超过 0.001。",
    "type": "fields",
    "points": 5,
    "difficulty": "考试标准",
    "sourcePages": [
      9,
      17,
      43,
      44
    ],
    "origin": "同类考法新题",
    "topic": "r5-6",
    "hint": "",
    "explain": "合并 [(4, 6, 10), (10, 10, 20), (15, 20, 35), (25, 35, 60), (40, 60, 100)]，合并代价和 225。\n平均码长=WPL/总频数=225/100=2.250000。\n固定长需要 ⌈log₂6⌉=3 位。",
    "solution": [
      "合并 [(4, 6, 10), (10, 10, 20), (15, 20, 35), (25, 35, 60), (40, 60, 100)]，合并代价和 225。",
      "平均码长=WPL/总频数=225/100=2.250000。",
      "固定长需要 ⌈log₂6⌉=3 位。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "WPL",
        "answer": "225",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "平均码长",
        "answer": "9/4",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "固定长码每字符位数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "4",
            "6",
            "10",
            "10，10，15，25，40",
            "10"
          ],
          [
            "10",
            "10",
            "20",
            "15，20，25，40",
            "30"
          ],
          [
            "15",
            "20",
            "35",
            "25，35，40",
            "65"
          ],
          [
            "25",
            "35",
            "60",
            "40，60",
            "125"
          ],
          [
            "40",
            "60",
            "100",
            "100",
            "225"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-huffman-numeric-v4",
    "chapter": 5,
    "mode": "review",
    "family": "R5-huffman-numeric",
    "variant": 4,
    "title": "字符频数 [5, 9, 12, 13, 16, 45]，先构造哈夫曼树。求 WPL、平均码长与最短固定长编码的码长。允许输入分数或小数，数值误差不超过 0.001。",
    "type": "fields",
    "points": 5,
    "difficulty": "考试标准",
    "sourcePages": [
      9,
      17,
      43,
      44
    ],
    "origin": "同类考法新题",
    "topic": "r5-6",
    "hint": "",
    "explain": "合并 [(5, 9, 14), (12, 13, 25), (14, 16, 30), (25, 30, 55), (45, 55, 100)]，合并代价和 224。\n平均码长=WPL/总频数=224/100=2.240000。\n固定长需要 ⌈log₂6⌉=3 位。",
    "solution": [
      "合并 [(5, 9, 14), (12, 13, 25), (14, 16, 30), (25, 30, 55), (45, 55, 100)]，合并代价和 224。",
      "平均码长=WPL/总频数=224/100=2.240000。",
      "固定长需要 ⌈log₂6⌉=3 位。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "WPL",
        "answer": "224",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "平均码长",
        "answer": "56/25",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "固定长码每字符位数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "5",
            "9",
            "14",
            "12，13，14，16，45",
            "14"
          ],
          [
            "12",
            "13",
            "25",
            "14，16，25，45",
            "39"
          ],
          [
            "14",
            "16",
            "30",
            "25，30，45",
            "69"
          ],
          [
            "25",
            "30",
            "55",
            "45，55",
            "124"
          ],
          [
            "45",
            "55",
            "100",
            "100",
            "224"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-compression-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-compression",
    "variant": 1,
    "title": "频数 [35, 25, 20, 10, 6, 4]，比较最短固定长编码与哈夫曼编码。这里定义“压缩比”为原固定长总位数 / 压缩后总位数；忽略码表开销。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      17,
      43
    ],
    "origin": "同类考法新题",
    "topic": "r5-6",
    "hint": "",
    "explain": "WPL=230，平均码长=23/10。\n固定长每字符 3 位，压缩比=3/(23/10)=1.304348。\n不要把反比或节省百分数填进这个空。",
    "solution": [
      "WPL=230，平均码长=23/10。",
      "固定长每字符 3 位，压缩比=3/(23/10)=1.304348。",
      "不要把反比或节省百分数填进这个空。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "平均哈夫曼码长",
        "answer": "23/10",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "压缩比（非百分数）",
        "answer": "30/23",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "4",
            "6",
            "10",
            "10，10，20，25，35",
            "10"
          ],
          [
            "10",
            "10",
            "20",
            "20，20，25，35",
            "30"
          ],
          [
            "20",
            "20",
            "40",
            "25，35，40",
            "70"
          ],
          [
            "25",
            "35",
            "60",
            "40，60",
            "130"
          ],
          [
            "40",
            "60",
            "100",
            "100",
            "230"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-compression-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-compression",
    "variant": 2,
    "title": "频数 [25, 25, 20, 15, 10, 5]，比较最短固定长编码与哈夫曼编码。这里定义“压缩比”为原固定长总位数 / 压缩后总位数；忽略码表开销。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      17,
      43
    ],
    "origin": "同类考法新题",
    "topic": "r5-6",
    "hint": "",
    "explain": "WPL=245，平均码长=49/20。\n固定长每字符 3 位，压缩比=3/(49/20)=1.224490。\n不要把反比或节省百分数填进这个空。",
    "solution": [
      "WPL=245，平均码长=49/20。",
      "固定长每字符 3 位，压缩比=3/(49/20)=1.224490。",
      "不要把反比或节省百分数填进这个空。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "平均哈夫曼码长",
        "answer": "49/20",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "压缩比（非百分数）",
        "answer": "60/49",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "5",
            "10",
            "15",
            "15，15，20，25，25",
            "15"
          ],
          [
            "15",
            "15",
            "30",
            "20，25，25，30",
            "45"
          ],
          [
            "20",
            "25",
            "45",
            "25，30，45",
            "90"
          ],
          [
            "25",
            "30",
            "55",
            "45，55",
            "145"
          ],
          [
            "45",
            "55",
            "100",
            "100",
            "245"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-compression-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-compression",
    "variant": 3,
    "title": "频数 [5, 10, 15, 20, 20, 30]，比较最短固定长编码与哈夫曼编码。这里定义“压缩比”为原固定长总位数 / 压缩后总位数；忽略码表开销。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      17,
      43
    ],
    "origin": "同类考法新题",
    "topic": "r5-6",
    "hint": "",
    "explain": "WPL=245，平均码长=49/20。\n固定长每字符 3 位，压缩比=3/(49/20)=1.224490。\n不要把反比或节省百分数填进这个空。",
    "solution": [
      "WPL=245，平均码长=49/20。",
      "固定长每字符 3 位，压缩比=3/(49/20)=1.224490。",
      "不要把反比或节省百分数填进这个空。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "平均哈夫曼码长",
        "answer": "49/20",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "压缩比（非百分数）",
        "answer": "60/49",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先独立构树，再区分WPL、平均码长与固定长成本。",
      "plan": [
        "每轮取当前两个最小权合并并放回，记录新权之和。",
        "WPL除总频数得平均码长；固定长码向上取整，压缩比方向必须按题干。"
      ],
      "format": "码字可能多解；用前缀性和最优WPL核对，不逐字死比编码。"
    },
    "worked": [
      {
        "caption": "每轮都重新把新权值放回候选集合",
        "heads": [
          "最小1",
          "最小2",
          "新根权",
          "合并后所有根权",
          "累计WPL代价"
        ],
        "rows": [
          [
            "5",
            "10",
            "15",
            "15，15，20，20，30",
            "15"
          ],
          [
            "15",
            "15",
            "30",
            "20，20，30，30",
            "45"
          ],
          [
            "20",
            "20",
            "40",
            "30，30，40",
            "85"
          ],
          [
            "30",
            "30",
            "60",
            "40，60",
            "145"
          ],
          [
            "40",
            "60",
            "100",
            "100",
            "245"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-bst-inorder-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-bst-inorder",
    "variant": 1,
    "title": "将互异关键字 [19, 18, 60, 40, 7, 31, 72, 65] 依次插入空 BST（不做平衡旋转）。",
    "type": "fields",
    "points": 5,
    "difficulty": "考试标准",
    "sourcePages": [
      8,
      33,
      40
    ],
    "origin": "同类考法新题",
    "topic": "r5-7",
    "hint": "",
    "explain": "19:左=18,右=60\n18:左=7,右=空\n7:左=空,右=空\n60:左=40,右=72\n40:左=31,右=空\n31:左=空,右=空\n72:左=65,右=空\n65:左=空,右=空\n中序为 [7, 18, 19, 31, 40, 60, 65, 72]。\n各结点层数和=22，ASL=22/8。",
    "solution": [
      "19:左=18,右=60",
      "18:左=7,右=空",
      "7:左=空,右=空",
      "60:左=40,右=72",
      "40:左=31,右=空",
      "31:左=空,右=空",
      "72:左=65,右=空",
      "65:左=空,右=空",
      "中序为 [7, 18, 19, 31, 40, 60, 65, 72]。",
      "各结点层数和=22，ASL=22/8。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "中序序列",
        "answer": "7,18,19,31,40,60,65,72",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "树高",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "成功等概率 ASL",
        "answer": "11/4",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "按题给次序插入，而不是先排序再构树。",
      "plan": [
        "从根比较，小左大右，到空位接新叶子，并记录每个键最终层数。",
        "中序应递增；成功等概率ASL为全部层数和除记录数，根计1。"
      ],
      "format": "画图可用逐点左右孩子替代；层数不是边数。"
    },
    "worked": [
      {
        "caption": "只按给定插入次序走链接，层数从根1开始",
        "heads": [
          "插入键",
          "走过的方向",
          "最终层数",
          "动作"
        ],
        "rows": [
          [
            "19",
            "空树",
            "1",
            "根"
          ],
          [
            "18",
            "19左",
            "2",
            "作为新叶子插入"
          ],
          [
            "60",
            "19右",
            "2",
            "作为新叶子插入"
          ],
          [
            "40",
            "19右→60左",
            "3",
            "作为新叶子插入"
          ],
          [
            "7",
            "19左→18左",
            "3",
            "作为新叶子插入"
          ],
          [
            "31",
            "19右→60左→40左",
            "4",
            "作为新叶子插入"
          ],
          [
            "72",
            "19右→60右",
            "3",
            "作为新叶子插入"
          ],
          [
            "65",
            "19右→60右→72左",
            "4",
            "作为新叶子插入"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-bst-inorder-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-bst-inorder",
    "variant": 2,
    "title": "将互异关键字 [10, 18, 3, 6, 12, 2, 4] 依次插入空 BST（不做平衡旋转）。",
    "type": "fields",
    "points": 5,
    "difficulty": "考试标准",
    "sourcePages": [
      8,
      33,
      40
    ],
    "origin": "同类考法新题",
    "topic": "r5-7",
    "hint": "",
    "explain": "10:左=3,右=18\n3:左=2,右=6\n2:左=空,右=空\n6:左=4,右=空\n4:左=空,右=空\n18:左=12,右=空\n12:左=空,右=空\n中序为 [2, 3, 4, 6, 10, 12, 18]。\n各结点层数和=18，ASL=18/7。",
    "solution": [
      "10:左=3,右=18",
      "3:左=2,右=6",
      "2:左=空,右=空",
      "6:左=4,右=空",
      "4:左=空,右=空",
      "18:左=12,右=空",
      "12:左=空,右=空",
      "中序为 [2, 3, 4, 6, 10, 12, 18]。",
      "各结点层数和=18，ASL=18/7。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "中序序列",
        "answer": "2,3,4,6,10,12,18",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "树高",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "成功等概率 ASL",
        "answer": "18/7",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "按题给次序插入，而不是先排序再构树。",
      "plan": [
        "从根比较，小左大右，到空位接新叶子，并记录每个键最终层数。",
        "中序应递增；成功等概率ASL为全部层数和除记录数，根计1。"
      ],
      "format": "画图可用逐点左右孩子替代；层数不是边数。"
    },
    "worked": [
      {
        "caption": "只按给定插入次序走链接，层数从根1开始",
        "heads": [
          "插入键",
          "走过的方向",
          "最终层数",
          "动作"
        ],
        "rows": [
          [
            "10",
            "空树",
            "1",
            "根"
          ],
          [
            "18",
            "10右",
            "2",
            "作为新叶子插入"
          ],
          [
            "3",
            "10左",
            "2",
            "作为新叶子插入"
          ],
          [
            "6",
            "10左→3右",
            "3",
            "作为新叶子插入"
          ],
          [
            "12",
            "10右→18左",
            "3",
            "作为新叶子插入"
          ],
          [
            "2",
            "10左→3左",
            "3",
            "作为新叶子插入"
          ],
          [
            "4",
            "10左→3右→6左",
            "4",
            "作为新叶子插入"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-bst-inorder-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-bst-inorder",
    "variant": 3,
    "title": "将互异关键字 [8, 3, 10, 1, 6, 14, 4, 7, 13] 依次插入空 BST（不做平衡旋转）。",
    "type": "fields",
    "points": 5,
    "difficulty": "考试标准",
    "sourcePages": [
      8,
      33,
      40
    ],
    "origin": "同类考法新题",
    "topic": "r5-7",
    "hint": "",
    "explain": "8:左=3,右=10\n3:左=1,右=6\n1:左=空,右=空\n6:左=4,右=7\n4:左=空,右=空\n7:左=空,右=空\n10:左=空,右=14\n14:左=13,右=空\n13:左=空,右=空\n中序为 [1, 3, 4, 6, 7, 8, 10, 13, 14]。\n各结点层数和=26，ASL=26/9。",
    "solution": [
      "8:左=3,右=10",
      "3:左=1,右=6",
      "1:左=空,右=空",
      "6:左=4,右=7",
      "4:左=空,右=空",
      "7:左=空,右=空",
      "10:左=空,右=14",
      "14:左=13,右=空",
      "13:左=空,右=空",
      "中序为 [1, 3, 4, 6, 7, 8, 10, 13, 14]。",
      "各结点层数和=26，ASL=26/9。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "中序序列",
        "answer": "1,3,4,6,7,8,10,13,14",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "树高",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "成功等概率 ASL",
        "answer": "26/9",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "按题给次序插入，而不是先排序再构树。",
      "plan": [
        "从根比较，小左大右，到空位接新叶子，并记录每个键最终层数。",
        "中序应递增；成功等概率ASL为全部层数和除记录数，根计1。"
      ],
      "format": "画图可用逐点左右孩子替代；层数不是边数。"
    },
    "worked": [
      {
        "caption": "只按给定插入次序走链接，层数从根1开始",
        "heads": [
          "插入键",
          "走过的方向",
          "最终层数",
          "动作"
        ],
        "rows": [
          [
            "8",
            "空树",
            "1",
            "根"
          ],
          [
            "3",
            "8左",
            "2",
            "作为新叶子插入"
          ],
          [
            "10",
            "8右",
            "2",
            "作为新叶子插入"
          ],
          [
            "1",
            "8左→3左",
            "3",
            "作为新叶子插入"
          ],
          [
            "6",
            "8左→3右",
            "3",
            "作为新叶子插入"
          ],
          [
            "14",
            "8右→10右",
            "3",
            "作为新叶子插入"
          ],
          [
            "4",
            "8左→3右→6左",
            "4",
            "作为新叶子插入"
          ],
          [
            "7",
            "8左→3右→6右",
            "4",
            "作为新叶子插入"
          ],
          [
            "13",
            "8右→10右→14左",
            "4",
            "作为新叶子插入"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-traversal-logic-v1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-traversal-logic",
    "variant": 1,
    "title": "二叉树由以下链接给出：['A:左=B,右=C', 'B:左=空,右=D', 'D:左=G,右=空', 'G:左=空,右=空', 'C:左=F,右=E', 'F:左=H,右=空', 'H:左=空,右=空', 'E:左=空,右=K', 'K:左=空,右=空']。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      34,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "前序 DLR、中序 LDR、后序 LRD，左右子树始终按左先右后。\n结果分别为 ['A', 'B', 'D', 'G', 'C', 'F', 'H', 'E', 'K']、['B', 'G', 'D', 'A', 'H', 'F', 'C', 'E', 'K']、['G', 'D', 'B', 'H', 'F', 'K', 'E', 'C', 'A']。",
    "solution": [
      "前序 DLR、中序 LDR、后序 LRD，左右子树始终按左先右后。",
      "结果分别为 ['A', 'B', 'D', 'G', 'C', 'F', 'H', 'E', 'K']、['B', 'G', 'D', 'A', 'H', 'F', 'C', 'E', 'K']、['G', 'D', 'B', 'H', 'F', 'K', 'E', 'C', 'A']。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "前序",
        "answer": "ABDGCFHEK",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "中序",
        "answer": "BGDAHFCEK",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "后序",
        "answer": "GDBHFKECA",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先还原逻辑链接，不按表行顺序输出。",
      "plan": [
        "从根指针T开始，左、右字段是目标结点编号，0为空。",
        "按DLR、LDR、LRD输出数据值；表中物理编号不等于按层位置号。"
      ],
      "format": "遍历写值序列，不写物理编号；每个结点恰一次。"
    },
    "walkthrough": [
      "先还原逻辑链接，不按表行顺序输出。",
      "从根指针T开始，左、右字段是目标结点编号，0为空。",
      "按DLR、LDR、LRD输出数据值；表中物理编号不等于按层位置号。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-traversal-logic-v2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-traversal-logic",
    "variant": 2,
    "title": "二叉树由以下链接给出：['A:左=B,右=C', 'B:左=D,右=E', 'D:左=空,右=空', 'E:左=空,右=空', 'C:左=F,右=G', 'F:左=空,右=空', 'G:左=空,右=空']。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      34,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "前序 DLR、中序 LDR、后序 LRD，左右子树始终按左先右后。\n结果分别为 ['A', 'B', 'D', 'E', 'C', 'F', 'G']、['D', 'B', 'E', 'A', 'F', 'C', 'G']、['D', 'E', 'B', 'F', 'G', 'C', 'A']。",
    "solution": [
      "前序 DLR、中序 LDR、后序 LRD，左右子树始终按左先右后。",
      "结果分别为 ['A', 'B', 'D', 'E', 'C', 'F', 'G']、['D', 'B', 'E', 'A', 'F', 'C', 'G']、['D', 'E', 'B', 'F', 'G', 'C', 'A']。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "前序",
        "answer": "ABDECFG",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "中序",
        "answer": "DBEAFCG",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "后序",
        "answer": "DEBFGCA",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先还原逻辑链接，不按表行顺序输出。",
      "plan": [
        "从根指针T开始，左、右字段是目标结点编号，0为空。",
        "按DLR、LDR、LRD输出数据值；表中物理编号不等于按层位置号。"
      ],
      "format": "遍历写值序列，不写物理编号；每个结点恰一次。"
    },
    "walkthrough": [
      "先还原逻辑链接，不按表行顺序输出。",
      "从根指针T开始，左、右字段是目标结点编号，0为空。",
      "按DLR、LDR、LRD输出数据值；表中物理编号不等于按层位置号。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R5-traversal-logic-v3",
    "chapter": 5,
    "mode": "review",
    "family": "R5-traversal-logic",
    "variant": 3,
    "title": "二叉树由以下链接给出：['M:左=F,右=R', 'F:左=G,右=H', 'G:左=空,右=空', 'H:左=空,右=空', 'R:左=空,右=T', 'T:左=空,右=V', 'V:左=空,右=空']。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      34,
      36
    ],
    "origin": "同类考法新题",
    "topic": "r5-3",
    "hint": "",
    "explain": "前序 DLR、中序 LDR、后序 LRD，左右子树始终按左先右后。\n结果分别为 ['M', 'F', 'G', 'H', 'R', 'T', 'V']、['G', 'F', 'H', 'M', 'R', 'T', 'V']、['G', 'H', 'F', 'V', 'T', 'R', 'M']。",
    "solution": [
      "前序 DLR、中序 LDR、后序 LRD，左右子树始终按左先右后。",
      "结果分别为 ['M', 'F', 'G', 'H', 'R', 'T', 'V']、['G', 'F', 'H', 'M', 'R', 'T', 'V']、['G', 'H', 'F', 'V', 'T', 'R', 'M']。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "前序",
        "answer": "MFGHRTV",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "中序",
        "answer": "GFHMRTV",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "后序",
        "answer": "GHFVTRM",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先还原逻辑链接，不按表行顺序输出。",
      "plan": [
        "从根指针T开始，左、右字段是目标结点编号，0为空。",
        "按DLR、LDR、LRD输出数据值；表中物理编号不等于按层位置号。"
      ],
      "format": "遍历写值序列，不写物理编号；每个结点恰一次。"
    },
    "walkthrough": [
      "先还原逻辑链接，不按表行顺序输出。",
      "从根指针T开始，左、右字段是目标结点编号，0为空。",
      "按DLR、LDR、LRD输出数据值；表中物理编号不等于按层位置号。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-storage-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-storage",
    "variant": 1,
    "title": "按下图写出邻接表，再从顶点1出发进行 DFS 和 BFS。顶点按1起编号，邻居按编号升序访问；只遍历起点可达部分。箭头表示有向边，无箭头表示无向边。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      5,
      16,
      45,
      46
    ],
    "origin": "同类考法新题",
    "topic": "r6-1",
    "hint": "",
    "explain": "邻接表：{1: [2, 3], 2: [1, 4, 6], 3: [1], 4: [2, 5, 7], 5: [4, 6], 6: [2, 5], 7: [4]}\n矩阵每行：[[0, 1, 1, 0, 0, 0, 0], [1, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0]]\nDFS=[1, 2, 4, 5, 6, 7, 3]；BFS=[1, 2, 3, 4, 6, 5, 7]。\n边结点数为 14，存储为 O(V+E)。",
    "solution": [
      "邻接表：{1: [2, 3], 2: [1, 4, 6], 3: [1], 4: [2, 5, 7], 5: [4, 6], 6: [2, 5], 7: [4]}",
      "矩阵每行：[[0, 1, 1, 0, 0, 0, 0], [1, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0]]",
      "DFS=[1, 2, 4, 5, 6, 7, 3]；BFS=[1, 2, 3, 4, 6, 5, 7]。",
      "边结点数为 14，存储为 O(V+E)。"
    ],
    "rubric": [
      {
        "label": "逐顶点列邻接表，方向和升序正确",
        "points": 2
      },
      {
        "label": "从1出发的DFS及回退次序正确",
        "points": 3
      },
      {
        "label": "BFS队列次序正确，不漏/重复访问",
        "points": 3
      }
    ],
    "given": {
      "kind": "graph",
      "caption": "题目给定：无向图",
      "n": 7,
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          6
        ],
        [
          4,
          5
        ],
        [
          4,
          7
        ],
        [
          5,
          6
        ]
      ],
      "directed": false
    },
    "support": {
      "ask": "先确认箭头、起点和邻居升序，才有确定遍历答案。",
      "plan": [
        "DFS深入并回退；BFS入队即标记，按队头次序输出。",
        "只遍历起点可达部分，不擅自补上其他未访问点。"
      ],
      "format": "顶点编号从1起，序列逗号分隔；存储题还需逐点列邻接表。"
    },
    "worked": [
      {
        "caption": "BFS发现即标记，队列前→后；只从顶点1启动",
        "heads": [
          "本次出队",
          "新发现并入队",
          "剩余队列",
          "输出序列"
        ],
        "rows": [
          [
            "1",
            "2，3",
            "2，3",
            "1"
          ],
          [
            "2",
            "4，6",
            "3，4，6",
            "1，2"
          ],
          [
            "3",
            "空",
            "4，6",
            "1，2，3"
          ],
          [
            "4",
            "5，7",
            "6，5，7",
            "1，2，3，4"
          ],
          [
            "6",
            "空",
            "5，7",
            "1，2，3，4，6"
          ],
          [
            "5",
            "空",
            "7",
            "1，2，3，4，6，5"
          ],
          [
            "7",
            "空",
            "空",
            "1，2，3，4，6，5，7"
          ]
        ]
      },
      {
        "caption": "DFS将进入与回退分开；回退不重新输出",
        "heads": [
          "动作",
          "顶点",
          "原因"
        ],
        "rows": [
          [
            "首次进入",
            "1",
            "输出该点"
          ],
          [
            "首次进入",
            "2",
            "输出该点"
          ],
          [
            "首次进入",
            "4",
            "输出该点"
          ],
          [
            "首次进入",
            "5",
            "输出该点"
          ],
          [
            "首次进入",
            "6",
            "输出该点"
          ],
          [
            "回到",
            "5",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "4",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "7",
            "输出该点"
          ],
          [
            "回到",
            "4",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "2",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "3",
            "输出该点"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R6-storage-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-storage",
    "variant": 2,
    "title": "按下图写出邻接表，再从顶点1出发进行 DFS 和 BFS。顶点按1起编号，邻居按编号升序访问；只遍历起点可达部分。箭头表示有向边，无箭头表示无向边。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      5,
      16,
      45,
      46
    ],
    "origin": "同类考法新题",
    "topic": "r6-1",
    "hint": "",
    "explain": "邻接表：{1: [2, 3, 4], 2: [3], 3: [5], 4: [5], 5: [], 6: [4, 5]}\n矩阵每行：[[0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0]]\nDFS=[1, 2, 3, 5, 4]；BFS=[1, 2, 3, 4, 5]。\n边结点数为 8，存储为 O(V+E)。",
    "solution": [
      "邻接表：{1: [2, 3, 4], 2: [3], 3: [5], 4: [5], 5: [], 6: [4, 5]}",
      "矩阵每行：[[0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0]]",
      "DFS=[1, 2, 3, 5, 4]；BFS=[1, 2, 3, 4, 5]。",
      "边结点数为 8，存储为 O(V+E)。"
    ],
    "rubric": [
      {
        "label": "逐顶点列邻接表，方向和升序正确",
        "points": 2
      },
      {
        "label": "从1出发的DFS及回退次序正确",
        "points": 3
      },
      {
        "label": "BFS队列次序正确，不漏/重复访问",
        "points": 3
      }
    ],
    "given": {
      "kind": "graph",
      "caption": "题目给定：有向图",
      "n": 6,
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ]
      ],
      "directed": true
    },
    "support": {
      "ask": "先确认箭头、起点和邻居升序，才有确定遍历答案。",
      "plan": [
        "DFS深入并回退；BFS入队即标记，按队头次序输出。",
        "只遍历起点可达部分，不擅自补上其他未访问点。"
      ],
      "format": "顶点编号从1起，序列逗号分隔；存储题还需逐点列邻接表。"
    },
    "worked": [
      {
        "caption": "BFS发现即标记，队列前→后；只从顶点1启动",
        "heads": [
          "本次出队",
          "新发现并入队",
          "剩余队列",
          "输出序列"
        ],
        "rows": [
          [
            "1",
            "2，3，4",
            "2，3，4",
            "1"
          ],
          [
            "2",
            "空",
            "3，4",
            "1，2"
          ],
          [
            "3",
            "5",
            "4，5",
            "1，2，3"
          ],
          [
            "4",
            "空",
            "5",
            "1，2，3，4"
          ],
          [
            "5",
            "空",
            "空",
            "1，2，3，4，5"
          ]
        ]
      },
      {
        "caption": "DFS将进入与回退分开；回退不重新输出",
        "heads": [
          "动作",
          "顶点",
          "原因"
        ],
        "rows": [
          [
            "首次进入",
            "1",
            "输出该点"
          ],
          [
            "首次进入",
            "2",
            "输出该点"
          ],
          [
            "首次进入",
            "3",
            "输出该点"
          ],
          [
            "首次进入",
            "5",
            "输出该点"
          ],
          [
            "回到",
            "3",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "2",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "4",
            "输出该点"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R6-storage-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-storage",
    "variant": 3,
    "title": "按下图写出邻接表，再从顶点1出发进行 DFS 和 BFS。顶点按1起编号，邻居按编号升序访问；只遍历起点可达部分。箭头表示有向边，无箭头表示无向边。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      5,
      16,
      45,
      46
    ],
    "origin": "同类考法新题",
    "topic": "r6-1",
    "hint": "",
    "explain": "邻接表：{1: [2, 3], 2: [1, 4, 5], 3: [1, 5], 4: [2], 5: [2, 3, 6], 6: [5]}\n矩阵每行：[[0, 1, 1, 0, 0, 0], [1, 0, 0, 1, 1, 0], [1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1], [0, 0, 0, 0, 1, 0]]\nDFS=[1, 2, 4, 5, 3, 6]；BFS=[1, 2, 3, 4, 5, 6]。\n边结点数为 12，存储为 O(V+E)。",
    "solution": [
      "邻接表：{1: [2, 3], 2: [1, 4, 5], 3: [1, 5], 4: [2], 5: [2, 3, 6], 6: [5]}",
      "矩阵每行：[[0, 1, 1, 0, 0, 0], [1, 0, 0, 1, 1, 0], [1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1], [0, 0, 0, 0, 1, 0]]",
      "DFS=[1, 2, 4, 5, 3, 6]；BFS=[1, 2, 3, 4, 5, 6]。",
      "边结点数为 12，存储为 O(V+E)。"
    ],
    "rubric": [
      {
        "label": "逐顶点列邻接表，方向和升序正确",
        "points": 2
      },
      {
        "label": "从1出发的DFS及回退次序正确",
        "points": 3
      },
      {
        "label": "BFS队列次序正确，不漏/重复访问",
        "points": 3
      }
    ],
    "given": {
      "kind": "graph",
      "caption": "题目给定：无向图",
      "n": 6,
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          5,
          6
        ]
      ],
      "directed": false
    },
    "support": {
      "ask": "先确认箭头、起点和邻居升序，才有确定遍历答案。",
      "plan": [
        "DFS深入并回退；BFS入队即标记，按队头次序输出。",
        "只遍历起点可达部分，不擅自补上其他未访问点。"
      ],
      "format": "顶点编号从1起，序列逗号分隔；存储题还需逐点列邻接表。"
    },
    "worked": [
      {
        "caption": "BFS发现即标记，队列前→后；只从顶点1启动",
        "heads": [
          "本次出队",
          "新发现并入队",
          "剩余队列",
          "输出序列"
        ],
        "rows": [
          [
            "1",
            "2，3",
            "2，3",
            "1"
          ],
          [
            "2",
            "4，5",
            "3，4，5",
            "1，2"
          ],
          [
            "3",
            "空",
            "4，5",
            "1，2，3"
          ],
          [
            "4",
            "空",
            "5",
            "1，2，3，4"
          ],
          [
            "5",
            "6",
            "6",
            "1，2，3，4，5"
          ],
          [
            "6",
            "空",
            "空",
            "1，2，3，4，5，6"
          ]
        ]
      },
      {
        "caption": "DFS将进入与回退分开；回退不重新输出",
        "heads": [
          "动作",
          "顶点",
          "原因"
        ],
        "rows": [
          [
            "首次进入",
            "1",
            "输出该点"
          ],
          [
            "首次进入",
            "2",
            "输出该点"
          ],
          [
            "首次进入",
            "4",
            "输出该点"
          ],
          [
            "回到",
            "2",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "5",
            "输出该点"
          ],
          [
            "首次进入",
            "3",
            "输出该点"
          ],
          [
            "回到",
            "5",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "6",
            "输出该点"
          ],
          [
            "回到",
            "5",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "2",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R6-storage-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-storage",
    "variant": 4,
    "title": "按下图写出邻接表，再从顶点1出发进行 DFS 和 BFS。顶点按1起编号，邻居按编号升序访问；只遍历起点可达部分。箭头表示有向边，无箭头表示无向边。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      5,
      16,
      45,
      46
    ],
    "origin": "同类考法新题",
    "topic": "r6-1",
    "hint": "",
    "explain": "邻接表：{1: [2, 3], 2: [4], 3: [4], 4: [5], 5: []}\n矩阵每行：[[0, 1, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]]\nDFS=[1, 2, 4, 5, 3]；BFS=[1, 2, 3, 4, 5]。\n边结点数为 5，存储为 O(V+E)。",
    "solution": [
      "邻接表：{1: [2, 3], 2: [4], 3: [4], 4: [5], 5: []}",
      "矩阵每行：[[0, 1, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]]",
      "DFS=[1, 2, 4, 5, 3]；BFS=[1, 2, 3, 4, 5]。",
      "边结点数为 5，存储为 O(V+E)。"
    ],
    "rubric": [
      {
        "label": "逐顶点列邻接表，方向和升序正确",
        "points": 2
      },
      {
        "label": "从1出发的DFS及回退次序正确",
        "points": 3
      },
      {
        "label": "BFS队列次序正确，不漏/重复访问",
        "points": 3
      }
    ],
    "given": {
      "kind": "graph",
      "caption": "题目给定：有向图",
      "n": 5,
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ]
      ],
      "directed": true
    },
    "support": {
      "ask": "先确认箭头、起点和邻居升序，才有确定遍历答案。",
      "plan": [
        "DFS深入并回退；BFS入队即标记，按队头次序输出。",
        "只遍历起点可达部分，不擅自补上其他未访问点。"
      ],
      "format": "顶点编号从1起，序列逗号分隔；存储题还需逐点列邻接表。"
    },
    "worked": [
      {
        "caption": "BFS发现即标记，队列前→后；只从顶点1启动",
        "heads": [
          "本次出队",
          "新发现并入队",
          "剩余队列",
          "输出序列"
        ],
        "rows": [
          [
            "1",
            "2，3",
            "2，3",
            "1"
          ],
          [
            "2",
            "4",
            "3，4",
            "1，2"
          ],
          [
            "3",
            "空",
            "4",
            "1，2，3"
          ],
          [
            "4",
            "5",
            "5",
            "1，2，3，4"
          ],
          [
            "5",
            "空",
            "空",
            "1，2，3，4，5"
          ]
        ]
      },
      {
        "caption": "DFS将进入与回退分开；回退不重新输出",
        "heads": [
          "动作",
          "顶点",
          "原因"
        ],
        "rows": [
          [
            "首次进入",
            "1",
            "输出该点"
          ],
          [
            "首次进入",
            "2",
            "输出该点"
          ],
          [
            "首次进入",
            "4",
            "输出该点"
          ],
          [
            "首次进入",
            "5",
            "输出该点"
          ],
          [
            "回到",
            "4",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "2",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "3",
            "输出该点"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R6-traversal-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-traversal",
    "variant": 1,
    "title": "按下图从顶点1出发，分别写出 DFS 和 BFS 序列。顶点按1起编号，邻居按编号升序访问；只遍历起点可达部分。箭头表示有向边，无箭头表示无向边。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      5,
      16,
      20,
      47
    ],
    "origin": "同类考法新题",
    "topic": "r6-2",
    "hint": "",
    "explain": "DFS=[1, 2, 4, 5, 6, 7, 3]；递归深入到无路可走才回退。\nBFS=[1, 2, 3, 4, 6, 5, 7]；发现时标记并入队。\n该答案依赖题设升序邻居约定；有向边不能反向走。",
    "solution": [
      "DFS=[1, 2, 4, 5, 6, 7, 3]；递归深入到无路可走才回退。",
      "BFS=[1, 2, 3, 4, 6, 5, 7]；发现时标记并入队。",
      "该答案依赖题设升序邻居约定；有向边不能反向走。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "DFS 序列",
        "answer": "1,2,4,5,6,7,3",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "BFS 序列",
        "answer": "1,2,3,4,6,5,7",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "given": {
      "kind": "graph",
      "caption": "题目给定：无向图",
      "n": 7,
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          6
        ],
        [
          4,
          5
        ],
        [
          4,
          7
        ],
        [
          5,
          6
        ]
      ],
      "directed": false
    },
    "support": {
      "ask": "先确认箭头、起点和邻居升序，才有确定遍历答案。",
      "plan": [
        "DFS深入并回退；BFS入队即标记，按队头次序输出。",
        "只遍历起点可达部分，不擅自补上其他未访问点。"
      ],
      "format": "顶点编号从1起，序列逗号分隔；存储题还需逐点列邻接表。"
    },
    "worked": [
      {
        "caption": "BFS发现即标记，队列前→后；只从顶点1启动",
        "heads": [
          "本次出队",
          "新发现并入队",
          "剩余队列",
          "输出序列"
        ],
        "rows": [
          [
            "1",
            "2，3",
            "2，3",
            "1"
          ],
          [
            "2",
            "4，6",
            "3，4，6",
            "1，2"
          ],
          [
            "3",
            "空",
            "4，6",
            "1，2，3"
          ],
          [
            "4",
            "5，7",
            "6，5，7",
            "1，2，3，4"
          ],
          [
            "6",
            "空",
            "5，7",
            "1，2，3，4，6"
          ],
          [
            "5",
            "空",
            "7",
            "1，2，3，4，6，5"
          ],
          [
            "7",
            "空",
            "空",
            "1，2，3，4，6，5，7"
          ]
        ]
      },
      {
        "caption": "DFS将进入与回退分开；回退不重新输出",
        "heads": [
          "动作",
          "顶点",
          "原因"
        ],
        "rows": [
          [
            "首次进入",
            "1",
            "输出该点"
          ],
          [
            "首次进入",
            "2",
            "输出该点"
          ],
          [
            "首次进入",
            "4",
            "输出该点"
          ],
          [
            "首次进入",
            "5",
            "输出该点"
          ],
          [
            "首次进入",
            "6",
            "输出该点"
          ],
          [
            "回到",
            "5",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "4",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "7",
            "输出该点"
          ],
          [
            "回到",
            "4",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "2",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "3",
            "输出该点"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-traversal-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-traversal",
    "variant": 2,
    "title": "按下图从顶点1出发，分别写出 DFS 和 BFS 序列。顶点按1起编号，邻居按编号升序访问；只遍历起点可达部分。箭头表示有向边，无箭头表示无向边。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      5,
      16,
      20,
      47
    ],
    "origin": "同类考法新题",
    "topic": "r6-2",
    "hint": "",
    "explain": "DFS=[1, 2, 3, 5, 4]；递归深入到无路可走才回退。\nBFS=[1, 2, 3, 4, 5]；发现时标记并入队。\n该答案依赖题设升序邻居约定；有向边不能反向走。",
    "solution": [
      "DFS=[1, 2, 3, 5, 4]；递归深入到无路可走才回退。",
      "BFS=[1, 2, 3, 4, 5]；发现时标记并入队。",
      "该答案依赖题设升序邻居约定；有向边不能反向走。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "DFS 序列",
        "answer": "1,2,3,5,4",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "BFS 序列",
        "answer": "1,2,3,4,5",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "given": {
      "kind": "graph",
      "caption": "题目给定：有向图",
      "n": 6,
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ]
      ],
      "directed": true
    },
    "support": {
      "ask": "先确认箭头、起点和邻居升序，才有确定遍历答案。",
      "plan": [
        "DFS深入并回退；BFS入队即标记，按队头次序输出。",
        "只遍历起点可达部分，不擅自补上其他未访问点。"
      ],
      "format": "顶点编号从1起，序列逗号分隔；存储题还需逐点列邻接表。"
    },
    "worked": [
      {
        "caption": "BFS发现即标记，队列前→后；只从顶点1启动",
        "heads": [
          "本次出队",
          "新发现并入队",
          "剩余队列",
          "输出序列"
        ],
        "rows": [
          [
            "1",
            "2，3，4",
            "2，3，4",
            "1"
          ],
          [
            "2",
            "空",
            "3，4",
            "1，2"
          ],
          [
            "3",
            "5",
            "4，5",
            "1，2，3"
          ],
          [
            "4",
            "空",
            "5",
            "1，2，3，4"
          ],
          [
            "5",
            "空",
            "空",
            "1，2，3，4，5"
          ]
        ]
      },
      {
        "caption": "DFS将进入与回退分开；回退不重新输出",
        "heads": [
          "动作",
          "顶点",
          "原因"
        ],
        "rows": [
          [
            "首次进入",
            "1",
            "输出该点"
          ],
          [
            "首次进入",
            "2",
            "输出该点"
          ],
          [
            "首次进入",
            "3",
            "输出该点"
          ],
          [
            "首次进入",
            "5",
            "输出该点"
          ],
          [
            "回到",
            "3",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "2",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "4",
            "输出该点"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-traversal-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-traversal",
    "variant": 3,
    "title": "按下图从顶点1出发，分别写出 DFS 和 BFS 序列。顶点按1起编号，邻居按编号升序访问；只遍历起点可达部分。箭头表示有向边，无箭头表示无向边。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      5,
      16,
      20,
      47
    ],
    "origin": "同类考法新题",
    "topic": "r6-2",
    "hint": "",
    "explain": "DFS=[1, 2, 4, 5, 3, 6]；递归深入到无路可走才回退。\nBFS=[1, 2, 3, 4, 5, 6]；发现时标记并入队。\n该答案依赖题设升序邻居约定；有向边不能反向走。",
    "solution": [
      "DFS=[1, 2, 4, 5, 3, 6]；递归深入到无路可走才回退。",
      "BFS=[1, 2, 3, 4, 5, 6]；发现时标记并入队。",
      "该答案依赖题设升序邻居约定；有向边不能反向走。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "DFS 序列",
        "answer": "1,2,4,5,3,6",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "BFS 序列",
        "answer": "1,2,3,4,5,6",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "given": {
      "kind": "graph",
      "caption": "题目给定：无向图",
      "n": 6,
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          5,
          6
        ]
      ],
      "directed": false
    },
    "support": {
      "ask": "先确认箭头、起点和邻居升序，才有确定遍历答案。",
      "plan": [
        "DFS深入并回退；BFS入队即标记，按队头次序输出。",
        "只遍历起点可达部分，不擅自补上其他未访问点。"
      ],
      "format": "顶点编号从1起，序列逗号分隔；存储题还需逐点列邻接表。"
    },
    "worked": [
      {
        "caption": "BFS发现即标记，队列前→后；只从顶点1启动",
        "heads": [
          "本次出队",
          "新发现并入队",
          "剩余队列",
          "输出序列"
        ],
        "rows": [
          [
            "1",
            "2，3",
            "2，3",
            "1"
          ],
          [
            "2",
            "4，5",
            "3，4，5",
            "1，2"
          ],
          [
            "3",
            "空",
            "4，5",
            "1，2，3"
          ],
          [
            "4",
            "空",
            "5",
            "1，2，3，4"
          ],
          [
            "5",
            "6",
            "6",
            "1，2，3，4，5"
          ],
          [
            "6",
            "空",
            "空",
            "1，2，3，4，5，6"
          ]
        ]
      },
      {
        "caption": "DFS将进入与回退分开；回退不重新输出",
        "heads": [
          "动作",
          "顶点",
          "原因"
        ],
        "rows": [
          [
            "首次进入",
            "1",
            "输出该点"
          ],
          [
            "首次进入",
            "2",
            "输出该点"
          ],
          [
            "首次进入",
            "4",
            "输出该点"
          ],
          [
            "回到",
            "2",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "5",
            "输出该点"
          ],
          [
            "首次进入",
            "3",
            "输出该点"
          ],
          [
            "回到",
            "5",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "6",
            "输出该点"
          ],
          [
            "回到",
            "5",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "2",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-traversal-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-traversal",
    "variant": 4,
    "title": "按下图从顶点1出发，分别写出 DFS 和 BFS 序列。顶点按1起编号，邻居按编号升序访问；只遍历起点可达部分。箭头表示有向边，无箭头表示无向边。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      5,
      16,
      20,
      47
    ],
    "origin": "同类考法新题",
    "topic": "r6-2",
    "hint": "",
    "explain": "DFS=[1, 2, 4, 5, 3]；递归深入到无路可走才回退。\nBFS=[1, 2, 3, 4, 5]；发现时标记并入队。\n该答案依赖题设升序邻居约定；有向边不能反向走。",
    "solution": [
      "DFS=[1, 2, 4, 5, 3]；递归深入到无路可走才回退。",
      "BFS=[1, 2, 3, 4, 5]；发现时标记并入队。",
      "该答案依赖题设升序邻居约定；有向边不能反向走。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "DFS 序列",
        "answer": "1,2,4,5,3",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "BFS 序列",
        "answer": "1,2,3,4,5",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "given": {
      "kind": "graph",
      "caption": "题目给定：有向图",
      "n": 5,
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ]
      ],
      "directed": true
    },
    "support": {
      "ask": "先确认箭头、起点和邻居升序，才有确定遍历答案。",
      "plan": [
        "DFS深入并回退；BFS入队即标记，按队头次序输出。",
        "只遍历起点可达部分，不擅自补上其他未访问点。"
      ],
      "format": "顶点编号从1起，序列逗号分隔；存储题还需逐点列邻接表。"
    },
    "worked": [
      {
        "caption": "BFS发现即标记，队列前→后；只从顶点1启动",
        "heads": [
          "本次出队",
          "新发现并入队",
          "剩余队列",
          "输出序列"
        ],
        "rows": [
          [
            "1",
            "2，3",
            "2，3",
            "1"
          ],
          [
            "2",
            "4",
            "3，4",
            "1，2"
          ],
          [
            "3",
            "空",
            "4",
            "1，2，3"
          ],
          [
            "4",
            "5",
            "5",
            "1，2，3，4"
          ],
          [
            "5",
            "空",
            "空",
            "1，2，3，4，5"
          ]
        ]
      },
      {
        "caption": "DFS将进入与回退分开；回退不重新输出",
        "heads": [
          "动作",
          "顶点",
          "原因"
        ],
        "rows": [
          [
            "首次进入",
            "1",
            "输出该点"
          ],
          [
            "首次进入",
            "2",
            "输出该点"
          ],
          [
            "首次进入",
            "4",
            "输出该点"
          ],
          [
            "首次进入",
            "5",
            "输出该点"
          ],
          [
            "回到",
            "4",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "2",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ],
          [
            "首次进入",
            "3",
            "输出该点"
          ],
          [
            "回到",
            "1",
            "继续找下一个未访问邻居，不重复输出"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-topo-order-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-topo-order",
    "variant": 1,
    "title": "AOV 网顶点 1..6，弧 [(1, 3), (2, 3), (2, 4), (3, 5), (4, 5), (5, 6)]。零入度初始按编号升序入队，使用 FIFO，处理每个顶点出邻居也按升序；求此确定规则下的拓扑序。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      20,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r6-3",
    "hint": "",
    "explain": "拓扑序一般不唯一，但这里固定了队列与访问规则。\n本规则输出 [1, 2, 3, 4, 5, 6]。\n若输出不到 V 个结点则有环。",
    "solution": [
      "拓扑序一般不唯一，但这里固定了队列与访问规则。",
      "本规则输出 [1, 2, 3, 4, 5, 6]。",
      "若输出不到 V 个结点则有环。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "拓扑序",
        "answer": "1,2,3,4,5,6",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每条弧都要求起点出现在终点之前。",
      "plan": [
        "列初始入度，把零入度点按规定放入FIFO队列。",
        "输出一个点后删除出边并更新入度；检查新零入度点的入队先后。"
      ],
      "format": "按题设的容器规则写序列，不单按最终字母或编号排序。"
    },
    "worked": [
      {
        "caption": "FIFO从队头取，新零入度点放到队尾",
        "heads": [
          "输出顶点",
          "新零入度",
          "剩余队列",
          "更新后各点入度"
        ],
        "rows": [
          [
            "初始",
            "无",
            "1，2",
            "0，0，2，1，2，1"
          ],
          [
            "1",
            "空",
            "2",
            "0，0，1，1，2，1"
          ],
          [
            "2",
            "3，4",
            "3，4",
            "0，0，0，0，2，1"
          ],
          [
            "3",
            "空",
            "4",
            "0，0，0，0，1，1"
          ],
          [
            "4",
            "5",
            "5",
            "0，0，0，0，0，1"
          ],
          [
            "5",
            "6",
            "6",
            "0，0，0，0，0，0"
          ],
          [
            "6",
            "空",
            "空",
            "0，0，0，0，0，0"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-topo-order-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-topo-order",
    "variant": 2,
    "title": "AOV 网顶点 1..5，弧 [(1, 3), (2, 3), (3, 4), (3, 5)]。零入度初始按编号升序入队，使用 FIFO，处理每个顶点出邻居也按升序；求此确定规则下的拓扑序。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      20,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r6-3",
    "hint": "",
    "explain": "拓扑序一般不唯一，但这里固定了队列与访问规则。\n本规则输出 [1, 2, 3, 4, 5]。\n若输出不到 V 个结点则有环。",
    "solution": [
      "拓扑序一般不唯一，但这里固定了队列与访问规则。",
      "本规则输出 [1, 2, 3, 4, 5]。",
      "若输出不到 V 个结点则有环。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "拓扑序",
        "answer": "1,2,3,4,5",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每条弧都要求起点出现在终点之前。",
      "plan": [
        "列初始入度，把零入度点按规定放入FIFO队列。",
        "输出一个点后删除出边并更新入度；检查新零入度点的入队先后。"
      ],
      "format": "按题设的容器规则写序列，不单按最终字母或编号排序。"
    },
    "worked": [
      {
        "caption": "FIFO从队头取，新零入度点放到队尾",
        "heads": [
          "输出顶点",
          "新零入度",
          "剩余队列",
          "更新后各点入度"
        ],
        "rows": [
          [
            "初始",
            "无",
            "1，2",
            "0，0，2，1，1"
          ],
          [
            "1",
            "空",
            "2",
            "0，0，1，1，1"
          ],
          [
            "2",
            "3",
            "3",
            "0，0，0，1，1"
          ],
          [
            "3",
            "4，5",
            "4，5",
            "0，0，0，0，0"
          ],
          [
            "4",
            "空",
            "5",
            "0，0，0，0，0"
          ],
          [
            "5",
            "空",
            "空",
            "0，0，0，0，0"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-topo-order-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-topo-order",
    "variant": 3,
    "title": "AOV 网顶点 1..6，弧 [(1, 2), (1, 4), (2, 3), (4, 3), (3, 5), (5, 6)]。零入度初始按编号升序入队，使用 FIFO，处理每个顶点出邻居也按升序；求此确定规则下的拓扑序。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      20,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r6-3",
    "hint": "",
    "explain": "拓扑序一般不唯一，但这里固定了队列与访问规则。\n本规则输出 [1, 2, 4, 3, 5, 6]。\n若输出不到 V 个结点则有环。",
    "solution": [
      "拓扑序一般不唯一，但这里固定了队列与访问规则。",
      "本规则输出 [1, 2, 4, 3, 5, 6]。",
      "若输出不到 V 个结点则有环。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "拓扑序",
        "answer": "1,2,4,3,5,6",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每条弧都要求起点出现在终点之前。",
      "plan": [
        "列初始入度，把零入度点按规定放入FIFO队列。",
        "输出一个点后删除出边并更新入度；检查新零入度点的入队先后。"
      ],
      "format": "按题设的容器规则写序列，不单按最终字母或编号排序。"
    },
    "worked": [
      {
        "caption": "FIFO从队头取，新零入度点放到队尾",
        "heads": [
          "输出顶点",
          "新零入度",
          "剩余队列",
          "更新后各点入度"
        ],
        "rows": [
          [
            "初始",
            "无",
            "1",
            "0，1，2，1，1，1"
          ],
          [
            "1",
            "2，4",
            "2，4",
            "0，0，2，0，1，1"
          ],
          [
            "2",
            "空",
            "4",
            "0，0，1，0，1，1"
          ],
          [
            "4",
            "3",
            "3",
            "0，0，0，0，1，1"
          ],
          [
            "3",
            "5",
            "5",
            "0，0，0，0，0，1"
          ],
          [
            "5",
            "6",
            "6",
            "0，0，0，0，0，0"
          ],
          [
            "6",
            "空",
            "空",
            "0，0，0，0，0，0"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-topo-order-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-topo-order",
    "variant": 4,
    "title": "AOV 网顶点 1..6，弧 [(1, 2), (1, 4), (1, 3), (2, 3), (3, 5), (4, 5), (6, 4), (6, 5)]。零入度初始按编号升序入队，使用 FIFO，处理每个顶点出邻居也按升序；求此确定规则下的拓扑序。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      20,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r6-3",
    "hint": "",
    "explain": "拓扑序一般不唯一，但这里固定了队列与访问规则。\n本规则输出 [1, 6, 2, 4, 3, 5]。\n若输出不到 V 个结点则有环。",
    "solution": [
      "拓扑序一般不唯一，但这里固定了队列与访问规则。",
      "本规则输出 [1, 6, 2, 4, 3, 5]。",
      "若输出不到 V 个结点则有环。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "拓扑序",
        "answer": "1,6,2,4,3,5",
        "points": 4,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每条弧都要求起点出现在终点之前。",
      "plan": [
        "列初始入度，把零入度点按规定放入FIFO队列。",
        "输出一个点后删除出边并更新入度；检查新零入度点的入队先后。"
      ],
      "format": "按题设的容器规则写序列，不单按最终字母或编号排序。"
    },
    "worked": [
      {
        "caption": "FIFO从队头取，新零入度点放到队尾",
        "heads": [
          "输出顶点",
          "新零入度",
          "剩余队列",
          "更新后各点入度"
        ],
        "rows": [
          [
            "初始",
            "无",
            "1，6",
            "0，1，2，2，3，0"
          ],
          [
            "1",
            "2",
            "6，2",
            "0，0，1，1，3，0"
          ],
          [
            "6",
            "4",
            "2，4",
            "0，0，1，0，2，0"
          ],
          [
            "2",
            "3",
            "4，3",
            "0，0，0，0，2，0"
          ],
          [
            "4",
            "空",
            "3",
            "0，0，0，0，1，0"
          ],
          [
            "3",
            "5",
            "5",
            "0，0，0，0，0，0"
          ],
          [
            "5",
            "空",
            "空",
            "0，0，0，0，0，0"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-topo-check-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-topo-check",
    "variant": 1,
    "title": "弧集 [(1, 3), (2, 3), (2, 4), (3, 5), (4, 5), (5, 6)] 中，下列哪个序列满足所有先后约束？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      20,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r6-3",
    "hint": "",
    "explain": "逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。",
    "solution": [
      "逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。"
    ],
    "rubric": [],
    "options": [
      "6,5,4,3,2,1",
      "每个有向图都有拓扑序",
      "只能从编号最大的点开始",
      "1,2,3,4,5,6"
    ],
    "answer": 3,
    "support": {
      "ask": "每条弧都要求起点出现在终点之前。",
      "plan": [
        "列初始入度，把零入度点按规定放入FIFO队列。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "FIFO从队头取，新零入度点放到队尾",
        "heads": [
          "输出顶点",
          "新零入度",
          "剩余队列",
          "更新后各点入度"
        ],
        "rows": [
          [
            "初始",
            "无",
            "1，2",
            "0，0，2，1，2，1"
          ],
          [
            "1",
            "空",
            "2",
            "0，0，1，1，2，1"
          ],
          [
            "2",
            "3，4",
            "3，4",
            "0，0，0，0，2，1"
          ],
          [
            "3",
            "空",
            "4",
            "0，0，0，0，1，1"
          ],
          [
            "4",
            "5",
            "5",
            "0，0，0，0，0，1"
          ],
          [
            "5",
            "6",
            "6",
            "0，0，0，0，0，0"
          ],
          [
            "6",
            "空",
            "空",
            "0，0，0，0，0，0"
          ]
        ]
      }
    ],
    "optionReasons": [
      "核对条件：弧1→3要求1在前，但本序列相反。",
      "核对条件：拓扑序必须满足每条有向边的先后，任意有向图并不都无环，也不按编号大小开始。",
      "核对条件：拓扑序必须满足每条有向边的先后，任意有向图并不都无环，也不按编号大小开始。",
      "符合：逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R6-topo-check-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-topo-check",
    "variant": 2,
    "title": "弧集 [(1, 3), (2, 3), (3, 4), (3, 5)] 中，下列哪个序列满足所有先后约束？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      20,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r6-3",
    "hint": "",
    "explain": "逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。",
    "solution": [
      "逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。"
    ],
    "rubric": [],
    "options": [
      "每个有向图都有拓扑序",
      "只能从编号最大的点开始",
      "1,2,3,4,5",
      "5,4,3,2,1"
    ],
    "answer": 2,
    "support": {
      "ask": "每条弧都要求起点出现在终点之前。",
      "plan": [
        "列初始入度，把零入度点按规定放入FIFO队列。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "FIFO从队头取，新零入度点放到队尾",
        "heads": [
          "输出顶点",
          "新零入度",
          "剩余队列",
          "更新后各点入度"
        ],
        "rows": [
          [
            "初始",
            "无",
            "1，2",
            "0，0，2，1，1"
          ],
          [
            "1",
            "空",
            "2",
            "0，0，1，1，1"
          ],
          [
            "2",
            "3",
            "3",
            "0，0，0，1，1"
          ],
          [
            "3",
            "4，5",
            "4，5",
            "0，0，0，0，0"
          ],
          [
            "4",
            "空",
            "5",
            "0，0，0，0，0"
          ],
          [
            "5",
            "空",
            "空",
            "0，0，0，0，0"
          ]
        ]
      }
    ],
    "optionReasons": [
      "核对条件：拓扑序必须满足每条有向边的先后，任意有向图并不都无环，也不按编号大小开始。",
      "核对条件：拓扑序必须满足每条有向边的先后，任意有向图并不都无环，也不按编号大小开始。",
      "符合：逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。",
      "核对条件：弧1→3要求1在前，但本序列相反。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R6-topo-check-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-topo-check",
    "variant": 3,
    "title": "弧集 [(1, 2), (1, 4), (2, 3), (4, 3), (3, 5), (5, 6)] 中，下列哪个序列满足所有先后约束？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      20,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r6-3",
    "hint": "",
    "explain": "逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。",
    "solution": [
      "逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。"
    ],
    "rubric": [],
    "options": [
      "只能从编号最大的点开始",
      "1,2,4,3,5,6",
      "6,5,3,4,2,1",
      "每个有向图都有拓扑序"
    ],
    "answer": 1,
    "support": {
      "ask": "每条弧都要求起点出现在终点之前。",
      "plan": [
        "列初始入度，把零入度点按规定放入FIFO队列。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "FIFO从队头取，新零入度点放到队尾",
        "heads": [
          "输出顶点",
          "新零入度",
          "剩余队列",
          "更新后各点入度"
        ],
        "rows": [
          [
            "初始",
            "无",
            "1",
            "0，1，2，1，1，1"
          ],
          [
            "1",
            "2，4",
            "2，4",
            "0，0，2，0，1，1"
          ],
          [
            "2",
            "空",
            "4",
            "0，0，1，0，1，1"
          ],
          [
            "4",
            "3",
            "3",
            "0，0，0，0，1，1"
          ],
          [
            "3",
            "5",
            "5",
            "0，0，0，0，0，1"
          ],
          [
            "5",
            "6",
            "6",
            "0，0，0，0，0，0"
          ],
          [
            "6",
            "空",
            "空",
            "0，0，0，0，0，0"
          ]
        ]
      }
    ],
    "optionReasons": [
      "核对条件：拓扑序必须满足每条有向边的先后，任意有向图并不都无环，也不按编号大小开始。",
      "符合：逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。",
      "核对条件：弧1→2要求1在前，但本序列相反。",
      "核对条件：拓扑序必须满足每条有向边的先后，任意有向图并不都无环，也不按编号大小开始。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R6-topo-check-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-topo-check",
    "variant": 4,
    "title": "弧集 [(1, 2), (1, 4), (1, 3), (2, 3), (3, 5), (4, 5), (6, 4), (6, 5)] 中，下列哪个序列满足所有先后约束？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      20,
      27
    ],
    "origin": "同类考法新题",
    "topic": "r6-3",
    "hint": "",
    "explain": "逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。",
    "solution": [
      "逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。"
    ],
    "rubric": [],
    "options": [
      "1,6,2,4,3,5",
      "5,3,4,2,6,1",
      "每个有向图都有拓扑序",
      "只能从编号最大的点开始"
    ],
    "answer": 0,
    "support": {
      "ask": "每条弧都要求起点出现在终点之前。",
      "plan": [
        "列初始入度，把零入度点按规定放入FIFO队列。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "worked": [
      {
        "caption": "FIFO从队头取，新零入度点放到队尾",
        "heads": [
          "输出顶点",
          "新零入度",
          "剩余队列",
          "更新后各点入度"
        ],
        "rows": [
          [
            "初始",
            "无",
            "1，6",
            "0，1，2，2，3，0"
          ],
          [
            "1",
            "2",
            "6，2",
            "0，0，1，1，3，0"
          ],
          [
            "6",
            "4",
            "2，4",
            "0，0，1，0，2，0"
          ],
          [
            "2",
            "3",
            "4，3",
            "0，0，0，0，2，0"
          ],
          [
            "4",
            "空",
            "3",
            "0，0，0，0，1，0"
          ],
          [
            "3",
            "5",
            "5",
            "0，0，0，0，0，0"
          ],
          [
            "5",
            "空",
            "空",
            "0，0，0，0，0，0"
          ]
        ]
      }
    ],
    "optionReasons": [
      "符合：逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。",
      "核对条件：弧1→2要求1在前，但本序列相反。",
      "核对条件：拓扑序必须满足每条有向边的先后，任意有向图并不都无环，也不按编号大小开始。",
      "核对条件：拓扑序必须满足每条有向边的先后，任意有向图并不都无环，也不按编号大小开始。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R6-aoe-full-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-full",
    "variant": 1,
    "title": "AOE 网事件 1..8，以下三元组按活动 a1..a10 的顺序给出 (起点,终点,工期)：[(1, 2, 1), (1, 3, 3), (2, 4, 4), (2, 5, 10), (3, 5, 3), (4, 6, 6), (5, 7, 6), (5, 8, 7), (6, 8, 5), (7, 8, 6)]。求所有 ve、vl、活动 e、l，关键活动及总工期。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      7
    ],
    "origin": "历年题改编",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve（按顶点序）=[0, 1, 3, 5, 11, 11, 17, 23]；vl=[0, 1, 8, 12, 11, 18, 17, 23]。\ne（按活动序）=[0, 0, 1, 1, 3, 5, 11, 11, 11, 17]；l=[0, 5, 8, 1, 8, 12, 11, 16, 18, 17]。\n关键活动编号=[1, 4, 7, 10]，最短总工期=23。\n按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。",
    "solution": [
      "ve（按顶点序）=[0, 1, 3, 5, 11, 11, 17, 23]；vl=[0, 1, 8, 12, 11, 18, 17, 23]。",
      "e（按活动序）=[0, 0, 1, 1, 3, 5, 11, 11, 11, 17]；l=[0, 5, 8, 1, 8, 12, 11, 16, 18, 17]。",
      "关键活动编号=[1, 4, 7, 10]，最短总工期=23。",
      "按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。"
    ],
    "rubric": [
      {
        "label": "还原弧方向与拓扑依赖正确",
        "points": 1
      },
      {
        "label": "ve 与 vl 全表正确",
        "points": 3
      },
      {
        "label": "活动 e 与 l 全表正确",
        "points": 3
      },
      {
        "label": "所有关键活动及工期正确",
        "points": 1
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+1=1",
            "1"
          ],
          [
            "3",
            "0+3=3",
            "3"
          ],
          [
            "4",
            "1+4=5",
            "5"
          ],
          [
            "5",
            "1+10=11；3+3=6",
            "11"
          ],
          [
            "6",
            "5+6=11",
            "11"
          ],
          [
            "7",
            "11+6=17",
            "17"
          ],
          [
            "8",
            "11+7=18；11+5=16；17+6=23",
            "23"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "8",
            "汇事件置工期23",
            "23"
          ],
          [
            "7",
            "23−6=17",
            "17"
          ],
          [
            "6",
            "23−5=18",
            "18"
          ],
          [
            "5",
            "17−6=11；23−7=16",
            "11"
          ],
          [
            "4",
            "18−6=12",
            "12"
          ],
          [
            "3",
            "11−3=8",
            "8"
          ],
          [
            "2",
            "12−4=8；11−10=1",
            "1"
          ],
          [
            "1",
            "1−1=0；8−3=5",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，1",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，3",
            "0",
            "5",
            "5",
            "否"
          ],
          [
            "3",
            "2→4，4",
            "1",
            "8",
            "7",
            "否"
          ],
          [
            "4",
            "2→5，10",
            "1",
            "1",
            "0",
            "是"
          ],
          [
            "5",
            "3→5，3",
            "3",
            "8",
            "5",
            "否"
          ],
          [
            "6",
            "4→6，6",
            "5",
            "12",
            "7",
            "否"
          ],
          [
            "7",
            "5→7，6",
            "11",
            "11",
            "0",
            "是"
          ],
          [
            "8",
            "5→8，7",
            "11",
            "16",
            "5",
            "否"
          ],
          [
            "9",
            "6→8，5",
            "11",
            "18",
            "7",
            "否"
          ],
          [
            "10",
            "7→8，6",
            "17",
            "17",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R6-aoe-full-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-full",
    "variant": 2,
    "title": "AOE 网事件 1..6，以下三元组按活动 a1..a8 的顺序给出 (起点,终点,工期)：[(1, 2, 3), (1, 3, 2), (2, 4, 5), (2, 5, 3), (3, 4, 4), (3, 6, 3), (4, 6, 2), (5, 6, 1)]。求所有 ve、vl、活动 e、l，关键活动及总工期。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      49,
      50
    ],
    "origin": "历年题改编",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve（按顶点序）=[0, 3, 2, 8, 6, 10]；vl=[0, 3, 4, 8, 9, 10]。\ne（按活动序）=[0, 0, 3, 3, 2, 2, 8, 6]；l=[0, 2, 3, 6, 4, 7, 8, 9]。\n关键活动编号=[1, 3, 7]，最短总工期=10。\n按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。",
    "solution": [
      "ve（按顶点序）=[0, 3, 2, 8, 6, 10]；vl=[0, 3, 4, 8, 9, 10]。",
      "e（按活动序）=[0, 0, 3, 3, 2, 2, 8, 6]；l=[0, 2, 3, 6, 4, 7, 8, 9]。",
      "关键活动编号=[1, 3, 7]，最短总工期=10。",
      "按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。"
    ],
    "rubric": [
      {
        "label": "还原弧方向与拓扑依赖正确",
        "points": 1
      },
      {
        "label": "ve 与 vl 全表正确",
        "points": 3
      },
      {
        "label": "活动 e 与 l 全表正确",
        "points": 3
      },
      {
        "label": "所有关键活动及工期正确",
        "points": 1
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+3=3",
            "3"
          ],
          [
            "3",
            "0+2=2",
            "2"
          ],
          [
            "5",
            "3+3=6",
            "6"
          ],
          [
            "4",
            "3+5=8；2+4=6",
            "8"
          ],
          [
            "6",
            "2+3=5；8+2=10；6+1=7",
            "10"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "6",
            "汇事件置工期10",
            "10"
          ],
          [
            "4",
            "10−2=8",
            "8"
          ],
          [
            "5",
            "10−1=9",
            "9"
          ],
          [
            "3",
            "8−4=4；10−3=7",
            "4"
          ],
          [
            "2",
            "8−5=3；9−3=6",
            "3"
          ],
          [
            "1",
            "3−3=0；4−2=2",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，3",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，2",
            "0",
            "2",
            "2",
            "否"
          ],
          [
            "3",
            "2→4，5",
            "3",
            "3",
            "0",
            "是"
          ],
          [
            "4",
            "2→5，3",
            "3",
            "6",
            "3",
            "否"
          ],
          [
            "5",
            "3→4，4",
            "2",
            "4",
            "2",
            "否"
          ],
          [
            "6",
            "3→6，3",
            "2",
            "7",
            "5",
            "否"
          ],
          [
            "7",
            "4→6，2",
            "8",
            "8",
            "0",
            "是"
          ],
          [
            "8",
            "5→6，1",
            "6",
            "9",
            "3",
            "否"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R6-aoe-full-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-full",
    "variant": 3,
    "title": "AOE 网事件 1..9，以下三元组按活动 a1..a12 的顺序给出 (起点,终点,工期)：[(1, 2, 6), (1, 3, 4), (1, 4, 5), (2, 5, 1), (3, 5, 1), (4, 5, 6), (4, 6, 2), (5, 7, 9), (5, 8, 7), (6, 8, 4), (7, 9, 2), (8, 9, 4)]。求所有 ve、vl、活动 e、l，关键活动及总工期。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      51,
      52
    ],
    "origin": "历年题改编",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve（按顶点序）=[0, 6, 4, 5, 11, 7, 20, 18, 22]；vl=[0, 10, 10, 5, 11, 14, 20, 18, 22]。\ne（按活动序）=[0, 0, 0, 6, 4, 5, 5, 11, 11, 7, 20, 18]；l=[4, 6, 0, 10, 10, 5, 12, 11, 11, 14, 20, 18]。\n关键活动编号=[3, 6, 8, 9, 11, 12]，最短总工期=22。\n按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。",
    "solution": [
      "ve（按顶点序）=[0, 6, 4, 5, 11, 7, 20, 18, 22]；vl=[0, 10, 10, 5, 11, 14, 20, 18, 22]。",
      "e（按活动序）=[0, 0, 0, 6, 4, 5, 5, 11, 11, 7, 20, 18]；l=[4, 6, 0, 10, 10, 5, 12, 11, 11, 14, 20, 18]。",
      "关键活动编号=[3, 6, 8, 9, 11, 12]，最短总工期=22。",
      "按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。"
    ],
    "rubric": [
      {
        "label": "还原弧方向与拓扑依赖正确",
        "points": 1
      },
      {
        "label": "ve 与 vl 全表正确",
        "points": 3
      },
      {
        "label": "活动 e 与 l 全表正确",
        "points": 3
      },
      {
        "label": "所有关键活动及工期正确",
        "points": 1
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+6=6",
            "6"
          ],
          [
            "3",
            "0+4=4",
            "4"
          ],
          [
            "4",
            "0+5=5",
            "5"
          ],
          [
            "5",
            "6+1=7；4+1=5；5+6=11",
            "11"
          ],
          [
            "6",
            "5+2=7",
            "7"
          ],
          [
            "7",
            "11+9=20",
            "20"
          ],
          [
            "8",
            "11+7=18；7+4=11",
            "18"
          ],
          [
            "9",
            "20+2=22；18+4=22",
            "22"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "9",
            "汇事件置工期22",
            "22"
          ],
          [
            "8",
            "22−4=18",
            "18"
          ],
          [
            "7",
            "22−2=20",
            "20"
          ],
          [
            "6",
            "18−4=14",
            "14"
          ],
          [
            "5",
            "20−9=11；18−7=11",
            "11"
          ],
          [
            "4",
            "11−6=5；14−2=12",
            "5"
          ],
          [
            "3",
            "11−1=10",
            "10"
          ],
          [
            "2",
            "11−1=10",
            "10"
          ],
          [
            "1",
            "10−6=4；10−4=6；5−5=0",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，6",
            "0",
            "4",
            "4",
            "否"
          ],
          [
            "2",
            "1→3，4",
            "0",
            "6",
            "6",
            "否"
          ],
          [
            "3",
            "1→4，5",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "4",
            "2→5，1",
            "6",
            "10",
            "4",
            "否"
          ],
          [
            "5",
            "3→5，1",
            "4",
            "10",
            "6",
            "否"
          ],
          [
            "6",
            "4→5，6",
            "5",
            "5",
            "0",
            "是"
          ],
          [
            "7",
            "4→6，2",
            "5",
            "12",
            "7",
            "否"
          ],
          [
            "8",
            "5→7，9",
            "11",
            "11",
            "0",
            "是"
          ],
          [
            "9",
            "5→8，7",
            "11",
            "11",
            "0",
            "是"
          ],
          [
            "10",
            "6→8，4",
            "7",
            "14",
            "7",
            "否"
          ],
          [
            "11",
            "7→9，2",
            "20",
            "20",
            "0",
            "是"
          ],
          [
            "12",
            "8→9，4",
            "18",
            "18",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R6-aoe-full-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-full",
    "variant": 4,
    "title": "AOE 网事件 1..5，以下三元组按活动 a1..a5 的顺序给出 (起点,终点,工期)：[(1, 2, 3), (1, 3, 3), (2, 4, 2), (3, 4, 2), (4, 5, 4)]。求所有 ve、vl、活动 e、l，关键活动及总工期。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      7,
      49
    ],
    "origin": "同类考法新题",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve（按顶点序）=[0, 3, 3, 5, 9]；vl=[0, 3, 3, 5, 9]。\ne（按活动序）=[0, 0, 3, 3, 5]；l=[0, 0, 3, 3, 5]。\n关键活动编号=[1, 2, 3, 4, 5]，最短总工期=9。\n按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。",
    "solution": [
      "ve（按顶点序）=[0, 3, 3, 5, 9]；vl=[0, 3, 3, 5, 9]。",
      "e（按活动序）=[0, 0, 3, 3, 5]；l=[0, 0, 3, 3, 5]。",
      "关键活动编号=[1, 2, 3, 4, 5]，最短总工期=9。",
      "按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。"
    ],
    "rubric": [
      {
        "label": "还原弧方向与拓扑依赖正确",
        "points": 1
      },
      {
        "label": "ve 与 vl 全表正确",
        "points": 3
      },
      {
        "label": "活动 e 与 l 全表正确",
        "points": 3
      },
      {
        "label": "所有关键活动及工期正确",
        "points": 1
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+3=3",
            "3"
          ],
          [
            "3",
            "0+3=3",
            "3"
          ],
          [
            "4",
            "3+2=5；3+2=5",
            "5"
          ],
          [
            "5",
            "5+4=9",
            "9"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "5",
            "汇事件置工期9",
            "9"
          ],
          [
            "4",
            "9−4=5",
            "5"
          ],
          [
            "3",
            "5−2=3",
            "3"
          ],
          [
            "2",
            "5−2=3",
            "3"
          ],
          [
            "1",
            "3−3=0；3−3=0",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，3",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，3",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "3",
            "2→4，2",
            "3",
            "3",
            "0",
            "是"
          ],
          [
            "4",
            "3→4，2",
            "3",
            "3",
            "0",
            "是"
          ],
          [
            "5",
            "4→5，4",
            "5",
            "5",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R6-aoe-full-v5",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-full",
    "variant": 5,
    "title": "AOE 网事件 1..6，以下三元组按活动 a1..a7 的顺序给出 (起点,终点,工期)：[(1, 2, 2), (1, 3, 5), (2, 4, 5), (3, 4, 2), (2, 5, 3), (4, 6, 4), (5, 6, 7)]。求所有 ve、vl、活动 e、l，关键活动及总工期。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      7,
      49
    ],
    "origin": "同类考法新题",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve（按顶点序）=[0, 2, 5, 7, 5, 12]；vl=[0, 2, 6, 8, 5, 12]。\ne（按活动序）=[0, 0, 2, 5, 2, 7, 5]；l=[0, 1, 3, 6, 2, 8, 5]。\n关键活动编号=[1, 5, 7]，最短总工期=12。\n按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。",
    "solution": [
      "ve（按顶点序）=[0, 2, 5, 7, 5, 12]；vl=[0, 2, 6, 8, 5, 12]。",
      "e（按活动序）=[0, 0, 2, 5, 2, 7, 5]；l=[0, 1, 3, 6, 2, 8, 5]。",
      "关键活动编号=[1, 5, 7]，最短总工期=12。",
      "按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。"
    ],
    "rubric": [
      {
        "label": "还原弧方向与拓扑依赖正确",
        "points": 1
      },
      {
        "label": "ve 与 vl 全表正确",
        "points": 3
      },
      {
        "label": "活动 e 与 l 全表正确",
        "points": 3
      },
      {
        "label": "所有关键活动及工期正确",
        "points": 1
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+2=2",
            "2"
          ],
          [
            "3",
            "0+5=5",
            "5"
          ],
          [
            "5",
            "2+3=5",
            "5"
          ],
          [
            "4",
            "2+5=7；5+2=7",
            "7"
          ],
          [
            "6",
            "7+4=11；5+7=12",
            "12"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "6",
            "汇事件置工期12",
            "12"
          ],
          [
            "4",
            "12−4=8",
            "8"
          ],
          [
            "5",
            "12−7=5",
            "5"
          ],
          [
            "3",
            "8−2=6",
            "6"
          ],
          [
            "2",
            "8−5=3；5−3=2",
            "2"
          ],
          [
            "1",
            "2−2=0；6−5=1",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，2",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，5",
            "0",
            "1",
            "1",
            "否"
          ],
          [
            "3",
            "2→4，5",
            "2",
            "3",
            "1",
            "否"
          ],
          [
            "4",
            "3→4，2",
            "5",
            "6",
            "1",
            "否"
          ],
          [
            "5",
            "2→5，3",
            "2",
            "2",
            "0",
            "是"
          ],
          [
            "6",
            "4→6，4",
            "7",
            "8",
            "1",
            "否"
          ],
          [
            "7",
            "5→6，7",
            "5",
            "5",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R6-aoe-full-v6",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-full",
    "variant": 6,
    "title": "AOE 网事件 1..7，以下三元组按活动 a1..a8 的顺序给出 (起点,终点,工期)：[(1, 2, 4), (1, 3, 2), (2, 4, 3), (3, 4, 5), (3, 5, 4), (4, 6, 2), (5, 6, 3), (6, 7, 1)]。求所有 ve、vl、活动 e、l，关键活动及总工期。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      7,
      49
    ],
    "origin": "同类考法新题",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve（按顶点序）=[0, 4, 2, 7, 6, 9, 10]；vl=[0, 4, 2, 7, 6, 9, 10]。\ne（按活动序）=[0, 0, 4, 2, 2, 7, 6, 9]；l=[0, 0, 4, 2, 2, 7, 6, 9]。\n关键活动编号=[1, 2, 3, 4, 5, 6, 7, 8]，最短总工期=10。\n按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。",
    "solution": [
      "ve（按顶点序）=[0, 4, 2, 7, 6, 9, 10]；vl=[0, 4, 2, 7, 6, 9, 10]。",
      "e（按活动序）=[0, 0, 4, 2, 2, 7, 6, 9]；l=[0, 0, 4, 2, 2, 7, 6, 9]。",
      "关键活动编号=[1, 2, 3, 4, 5, 6, 7, 8]，最短总工期=10。",
      "按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。"
    ],
    "rubric": [
      {
        "label": "还原弧方向与拓扑依赖正确",
        "points": 1
      },
      {
        "label": "ve 与 vl 全表正确",
        "points": 3
      },
      {
        "label": "活动 e 与 l 全表正确",
        "points": 3
      },
      {
        "label": "所有关键活动及工期正确",
        "points": 1
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+4=4",
            "4"
          ],
          [
            "3",
            "0+2=2",
            "2"
          ],
          [
            "4",
            "4+3=7；2+5=7",
            "7"
          ],
          [
            "5",
            "2+4=6",
            "6"
          ],
          [
            "6",
            "7+2=9；6+3=9",
            "9"
          ],
          [
            "7",
            "9+1=10",
            "10"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "7",
            "汇事件置工期10",
            "10"
          ],
          [
            "6",
            "10−1=9",
            "9"
          ],
          [
            "5",
            "9−3=6",
            "6"
          ],
          [
            "4",
            "9−2=7",
            "7"
          ],
          [
            "3",
            "7−5=2；6−4=2",
            "2"
          ],
          [
            "2",
            "7−3=4",
            "4"
          ],
          [
            "1",
            "4−4=0；2−2=0",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，4",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，2",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "3",
            "2→4，3",
            "4",
            "4",
            "0",
            "是"
          ],
          [
            "4",
            "3→4，5",
            "2",
            "2",
            "0",
            "是"
          ],
          [
            "5",
            "3→5，4",
            "2",
            "2",
            "0",
            "是"
          ],
          [
            "6",
            "4→6，2",
            "7",
            "7",
            "0",
            "是"
          ],
          [
            "7",
            "5→6，3",
            "6",
            "6",
            "0",
            "是"
          ],
          [
            "8",
            "6→7，1",
            "9",
            "9",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R6-aoe-tables-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-tables",
    "variant": 1,
    "title": "AOE 网三元组 [(1, 2, 1), (1, 3, 3), (2, 4, 4), (2, 5, 10), (3, 5, 3), (4, 6, 6), (5, 7, 6), (5, 8, 7), (6, 8, 5), (7, 8, 6)]，顶点 1..8，按列出的活动顺序计算。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      18,
      49,
      51
    ],
    "origin": "同类考法新题",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve=[0, 1, 3, 5, 11, 11, 17, 23]，vl=[0, 1, 8, 12, 11, 18, 17, 23]。\n活动 e=[0, 0, 1, 1, 3, 5, 11, 11, 11, 17]，l=[0, 5, 8, 1, 8, 12, 11, 16, 18, 17]。\ne=l 的活动为 [1, 4, 7, 10]，工期 23。",
    "solution": [
      "ve=[0, 1, 3, 5, 11, 11, 17, 23]，vl=[0, 1, 8, 12, 11, 18, 17, 23]。",
      "活动 e=[0, 0, 1, 1, 3, 5, 11, 11, 11, 17]，l=[0, 5, 8, 1, 8, 12, 11, 16, 18, 17]。",
      "e=l 的活动为 [1, 4, 7, 10]，工期 23。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "所有事件 ve",
        "answer": "0,1,3,5,11,11,17,23",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "所有事件 vl",
        "answer": "0,1,8,12,11,18,17,23",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "关键活动编号（升序）",
        "answer": "1,4,7,10",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "工期",
        "answer": "23",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+1=1",
            "1"
          ],
          [
            "3",
            "0+3=3",
            "3"
          ],
          [
            "4",
            "1+4=5",
            "5"
          ],
          [
            "5",
            "1+10=11；3+3=6",
            "11"
          ],
          [
            "6",
            "5+6=11",
            "11"
          ],
          [
            "7",
            "11+6=17",
            "17"
          ],
          [
            "8",
            "11+7=18；11+5=16；17+6=23",
            "23"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "8",
            "汇事件置工期23",
            "23"
          ],
          [
            "7",
            "23−6=17",
            "17"
          ],
          [
            "6",
            "23−5=18",
            "18"
          ],
          [
            "5",
            "17−6=11；23−7=16",
            "11"
          ],
          [
            "4",
            "18−6=12",
            "12"
          ],
          [
            "3",
            "11−3=8",
            "8"
          ],
          [
            "2",
            "12−4=8；11−10=1",
            "1"
          ],
          [
            "1",
            "1−1=0；8−3=5",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，1",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，3",
            "0",
            "5",
            "5",
            "否"
          ],
          [
            "3",
            "2→4，4",
            "1",
            "8",
            "7",
            "否"
          ],
          [
            "4",
            "2→5，10",
            "1",
            "1",
            "0",
            "是"
          ],
          [
            "5",
            "3→5，3",
            "3",
            "8",
            "5",
            "否"
          ],
          [
            "6",
            "4→6，6",
            "5",
            "12",
            "7",
            "否"
          ],
          [
            "7",
            "5→7，6",
            "11",
            "11",
            "0",
            "是"
          ],
          [
            "8",
            "5→8，7",
            "11",
            "16",
            "5",
            "否"
          ],
          [
            "9",
            "6→8，5",
            "11",
            "18",
            "7",
            "否"
          ],
          [
            "10",
            "7→8，6",
            "17",
            "17",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-aoe-tables-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-tables",
    "variant": 2,
    "title": "AOE 网三元组 [(1, 2, 3), (1, 3, 2), (2, 4, 5), (2, 5, 3), (3, 4, 4), (3, 6, 3), (4, 6, 2), (5, 6, 1)]，顶点 1..6，按列出的活动顺序计算。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      18,
      49,
      51
    ],
    "origin": "同类考法新题",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve=[0, 3, 2, 8, 6, 10]，vl=[0, 3, 4, 8, 9, 10]。\n活动 e=[0, 0, 3, 3, 2, 2, 8, 6]，l=[0, 2, 3, 6, 4, 7, 8, 9]。\ne=l 的活动为 [1, 3, 7]，工期 10。",
    "solution": [
      "ve=[0, 3, 2, 8, 6, 10]，vl=[0, 3, 4, 8, 9, 10]。",
      "活动 e=[0, 0, 3, 3, 2, 2, 8, 6]，l=[0, 2, 3, 6, 4, 7, 8, 9]。",
      "e=l 的活动为 [1, 3, 7]，工期 10。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "所有事件 ve",
        "answer": "0,3,2,8,6,10",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "所有事件 vl",
        "answer": "0,3,4,8,9,10",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "关键活动编号（升序）",
        "answer": "1,3,7",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "工期",
        "answer": "10",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+3=3",
            "3"
          ],
          [
            "3",
            "0+2=2",
            "2"
          ],
          [
            "5",
            "3+3=6",
            "6"
          ],
          [
            "4",
            "3+5=8；2+4=6",
            "8"
          ],
          [
            "6",
            "2+3=5；8+2=10；6+1=7",
            "10"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "6",
            "汇事件置工期10",
            "10"
          ],
          [
            "4",
            "10−2=8",
            "8"
          ],
          [
            "5",
            "10−1=9",
            "9"
          ],
          [
            "3",
            "8−4=4；10−3=7",
            "4"
          ],
          [
            "2",
            "8−5=3；9−3=6",
            "3"
          ],
          [
            "1",
            "3−3=0；4−2=2",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，3",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，2",
            "0",
            "2",
            "2",
            "否"
          ],
          [
            "3",
            "2→4，5",
            "3",
            "3",
            "0",
            "是"
          ],
          [
            "4",
            "2→5，3",
            "3",
            "6",
            "3",
            "否"
          ],
          [
            "5",
            "3→4，4",
            "2",
            "4",
            "2",
            "否"
          ],
          [
            "6",
            "3→6，3",
            "2",
            "7",
            "5",
            "否"
          ],
          [
            "7",
            "4→6，2",
            "8",
            "8",
            "0",
            "是"
          ],
          [
            "8",
            "5→6，1",
            "6",
            "9",
            "3",
            "否"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-aoe-tables-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-tables",
    "variant": 3,
    "title": "AOE 网三元组 [(1, 2, 6), (1, 3, 4), (1, 4, 5), (2, 5, 1), (3, 5, 1), (4, 5, 6), (4, 6, 2), (5, 7, 9), (5, 8, 7), (6, 8, 4), (7, 9, 2), (8, 9, 4)]，顶点 1..9，按列出的活动顺序计算。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      18,
      49,
      51
    ],
    "origin": "同类考法新题",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve=[0, 6, 4, 5, 11, 7, 20, 18, 22]，vl=[0, 10, 10, 5, 11, 14, 20, 18, 22]。\n活动 e=[0, 0, 0, 6, 4, 5, 5, 11, 11, 7, 20, 18]，l=[4, 6, 0, 10, 10, 5, 12, 11, 11, 14, 20, 18]。\ne=l 的活动为 [3, 6, 8, 9, 11, 12]，工期 22。",
    "solution": [
      "ve=[0, 6, 4, 5, 11, 7, 20, 18, 22]，vl=[0, 10, 10, 5, 11, 14, 20, 18, 22]。",
      "活动 e=[0, 0, 0, 6, 4, 5, 5, 11, 11, 7, 20, 18]，l=[4, 6, 0, 10, 10, 5, 12, 11, 11, 14, 20, 18]。",
      "e=l 的活动为 [3, 6, 8, 9, 11, 12]，工期 22。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "所有事件 ve",
        "answer": "0,6,4,5,11,7,20,18,22",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "所有事件 vl",
        "answer": "0,10,10,5,11,14,20,18,22",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "关键活动编号（升序）",
        "answer": "3,6,8,9,11,12",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "工期",
        "answer": "22",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+6=6",
            "6"
          ],
          [
            "3",
            "0+4=4",
            "4"
          ],
          [
            "4",
            "0+5=5",
            "5"
          ],
          [
            "5",
            "6+1=7；4+1=5；5+6=11",
            "11"
          ],
          [
            "6",
            "5+2=7",
            "7"
          ],
          [
            "7",
            "11+9=20",
            "20"
          ],
          [
            "8",
            "11+7=18；7+4=11",
            "18"
          ],
          [
            "9",
            "20+2=22；18+4=22",
            "22"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "9",
            "汇事件置工期22",
            "22"
          ],
          [
            "8",
            "22−4=18",
            "18"
          ],
          [
            "7",
            "22−2=20",
            "20"
          ],
          [
            "6",
            "18−4=14",
            "14"
          ],
          [
            "5",
            "20−9=11；18−7=11",
            "11"
          ],
          [
            "4",
            "11−6=5；14−2=12",
            "5"
          ],
          [
            "3",
            "11−1=10",
            "10"
          ],
          [
            "2",
            "11−1=10",
            "10"
          ],
          [
            "1",
            "10−6=4；10−4=6；5−5=0",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，6",
            "0",
            "4",
            "4",
            "否"
          ],
          [
            "2",
            "1→3，4",
            "0",
            "6",
            "6",
            "否"
          ],
          [
            "3",
            "1→4，5",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "4",
            "2→5，1",
            "6",
            "10",
            "4",
            "否"
          ],
          [
            "5",
            "3→5，1",
            "4",
            "10",
            "6",
            "否"
          ],
          [
            "6",
            "4→5，6",
            "5",
            "5",
            "0",
            "是"
          ],
          [
            "7",
            "4→6，2",
            "5",
            "12",
            "7",
            "否"
          ],
          [
            "8",
            "5→7，9",
            "11",
            "11",
            "0",
            "是"
          ],
          [
            "9",
            "5→8，7",
            "11",
            "11",
            "0",
            "是"
          ],
          [
            "10",
            "6→8，4",
            "7",
            "14",
            "7",
            "否"
          ],
          [
            "11",
            "7→9，2",
            "20",
            "20",
            "0",
            "是"
          ],
          [
            "12",
            "8→9，4",
            "18",
            "18",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-aoe-tables-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-tables",
    "variant": 4,
    "title": "AOE 网三元组 [(1, 2, 3), (1, 3, 3), (2, 4, 2), (3, 4, 2), (4, 5, 4)]，顶点 1..5，按列出的活动顺序计算。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      18,
      49,
      51
    ],
    "origin": "同类考法新题",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve=[0, 3, 3, 5, 9]，vl=[0, 3, 3, 5, 9]。\n活动 e=[0, 0, 3, 3, 5]，l=[0, 0, 3, 3, 5]。\ne=l 的活动为 [1, 2, 3, 4, 5]，工期 9。",
    "solution": [
      "ve=[0, 3, 3, 5, 9]，vl=[0, 3, 3, 5, 9]。",
      "活动 e=[0, 0, 3, 3, 5]，l=[0, 0, 3, 3, 5]。",
      "e=l 的活动为 [1, 2, 3, 4, 5]，工期 9。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "所有事件 ve",
        "answer": "0,3,3,5,9",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "所有事件 vl",
        "answer": "0,3,3,5,9",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "关键活动编号（升序）",
        "answer": "1,2,3,4,5",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "工期",
        "answer": "9",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+3=3",
            "3"
          ],
          [
            "3",
            "0+3=3",
            "3"
          ],
          [
            "4",
            "3+2=5；3+2=5",
            "5"
          ],
          [
            "5",
            "5+4=9",
            "9"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "5",
            "汇事件置工期9",
            "9"
          ],
          [
            "4",
            "9−4=5",
            "5"
          ],
          [
            "3",
            "5−2=3",
            "3"
          ],
          [
            "2",
            "5−2=3",
            "3"
          ],
          [
            "1",
            "3−3=0；3−3=0",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，3",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，3",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "3",
            "2→4，2",
            "3",
            "3",
            "0",
            "是"
          ],
          [
            "4",
            "3→4，2",
            "3",
            "3",
            "0",
            "是"
          ],
          [
            "5",
            "4→5，4",
            "5",
            "5",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-aoe-tables-v5",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-tables",
    "variant": 5,
    "title": "AOE 网三元组 [(1, 2, 2), (1, 3, 5), (2, 4, 5), (3, 4, 2), (2, 5, 3), (4, 6, 4), (5, 6, 7)]，顶点 1..6，按列出的活动顺序计算。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      18,
      49,
      51
    ],
    "origin": "同类考法新题",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve=[0, 2, 5, 7, 5, 12]，vl=[0, 2, 6, 8, 5, 12]。\n活动 e=[0, 0, 2, 5, 2, 7, 5]，l=[0, 1, 3, 6, 2, 8, 5]。\ne=l 的活动为 [1, 5, 7]，工期 12。",
    "solution": [
      "ve=[0, 2, 5, 7, 5, 12]，vl=[0, 2, 6, 8, 5, 12]。",
      "活动 e=[0, 0, 2, 5, 2, 7, 5]，l=[0, 1, 3, 6, 2, 8, 5]。",
      "e=l 的活动为 [1, 5, 7]，工期 12。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "所有事件 ve",
        "answer": "0,2,5,7,5,12",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "所有事件 vl",
        "answer": "0,2,6,8,5,12",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "关键活动编号（升序）",
        "answer": "1,5,7",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "工期",
        "answer": "12",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+2=2",
            "2"
          ],
          [
            "3",
            "0+5=5",
            "5"
          ],
          [
            "5",
            "2+3=5",
            "5"
          ],
          [
            "4",
            "2+5=7；5+2=7",
            "7"
          ],
          [
            "6",
            "7+4=11；5+7=12",
            "12"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "6",
            "汇事件置工期12",
            "12"
          ],
          [
            "4",
            "12−4=8",
            "8"
          ],
          [
            "5",
            "12−7=5",
            "5"
          ],
          [
            "3",
            "8−2=6",
            "6"
          ],
          [
            "2",
            "8−5=3；5−3=2",
            "2"
          ],
          [
            "1",
            "2−2=0；6−5=1",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，2",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，5",
            "0",
            "1",
            "1",
            "否"
          ],
          [
            "3",
            "2→4，5",
            "2",
            "3",
            "1",
            "否"
          ],
          [
            "4",
            "3→4，2",
            "5",
            "6",
            "1",
            "否"
          ],
          [
            "5",
            "2→5，3",
            "2",
            "2",
            "0",
            "是"
          ],
          [
            "6",
            "4→6，4",
            "7",
            "8",
            "1",
            "否"
          ],
          [
            "7",
            "5→6，7",
            "5",
            "5",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-aoe-tables-v6",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-tables",
    "variant": 6,
    "title": "AOE 网三元组 [(1, 2, 4), (1, 3, 2), (2, 4, 3), (3, 4, 5), (3, 5, 4), (4, 6, 2), (5, 6, 3), (6, 7, 1)]，顶点 1..7，按列出的活动顺序计算。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      18,
      49,
      51
    ],
    "origin": "同类考法新题",
    "topic": "r6-4",
    "hint": "",
    "explain": "ve=[0, 4, 2, 7, 6, 9, 10]，vl=[0, 4, 2, 7, 6, 9, 10]。\n活动 e=[0, 0, 4, 2, 2, 7, 6, 9]，l=[0, 0, 4, 2, 2, 7, 6, 9]。\ne=l 的活动为 [1, 2, 3, 4, 5, 6, 7, 8]，工期 10。",
    "solution": [
      "ve=[0, 4, 2, 7, 6, 9, 10]，vl=[0, 4, 2, 7, 6, 9, 10]。",
      "活动 e=[0, 0, 4, 2, 2, 7, 6, 9]，l=[0, 0, 4, 2, 2, 7, 6, 9]。",
      "e=l 的活动为 [1, 2, 3, 4, 5, 6, 7, 8]，工期 10。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "所有事件 ve",
        "answer": "0,4,2,7,6,9,10",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "所有事件 vl",
        "answer": "0,4,2,7,6,9,10",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "关键活动编号（升序）",
        "answer": "1,2,3,4,5,6,7,8",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "工期",
        "answer": "10",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+4=4",
            "4"
          ],
          [
            "3",
            "0+2=2",
            "2"
          ],
          [
            "4",
            "4+3=7；2+5=7",
            "7"
          ],
          [
            "5",
            "2+4=6",
            "6"
          ],
          [
            "6",
            "7+2=9；6+3=9",
            "9"
          ],
          [
            "7",
            "9+1=10",
            "10"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "7",
            "汇事件置工期10",
            "10"
          ],
          [
            "6",
            "10−1=9",
            "9"
          ],
          [
            "5",
            "9−3=6",
            "6"
          ],
          [
            "4",
            "9−2=7",
            "7"
          ],
          [
            "3",
            "7−5=2；6−4=2",
            "2"
          ],
          [
            "2",
            "7−3=4",
            "4"
          ],
          [
            "1",
            "4−4=0；2−2=0",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，4",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，2",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "3",
            "2→4，3",
            "4",
            "4",
            "0",
            "是"
          ],
          [
            "4",
            "3→4，5",
            "2",
            "2",
            "0",
            "是"
          ],
          [
            "5",
            "3→5，4",
            "2",
            "2",
            "0",
            "是"
          ],
          [
            "6",
            "4→6，2",
            "7",
            "7",
            "0",
            "是"
          ],
          [
            "7",
            "5→6，3",
            "6",
            "6",
            "0",
            "是"
          ],
          [
            "8",
            "6→7，1",
            "9",
            "9",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-activity-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-activity",
    "variant": 1,
    "title": "AOE 网 [(1, 2, 1), (1, 3, 3), (2, 4, 4), (2, 5, 10), (3, 5, 3), (4, 6, 6), (5, 7, 6), (5, 8, 7), (6, 8, 5), (7, 8, 6)]，活动按给出顺序编号。求 a6（(4, 6, 6)）的最早、最晚开始及可拖延时长。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      49,
      50
    ],
    "origin": "同类考法新题",
    "topic": "r6-5",
    "hint": "",
    "explain": "事件 ve=[0, 1, 3, 5, 11, 11, 17, 23]，vl=[0, 1, 8, 12, 11, 18, 17, 23]。\na6 的 e=5，l=12，余量=7。",
    "solution": [
      "事件 ve=[0, 1, 3, 5, 11, 11, 17, 23]，vl=[0, 1, 8, 12, 11, 18, 17, 23]。",
      "a6 的 e=5，l=12，余量=7。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最早开始 e",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最晚开始 l",
        "answer": "12",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间余量 l-e",
        "answer": "7",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "工期",
        "answer": "23",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+1=1",
            "1"
          ],
          [
            "3",
            "0+3=3",
            "3"
          ],
          [
            "4",
            "1+4=5",
            "5"
          ],
          [
            "5",
            "1+10=11；3+3=6",
            "11"
          ],
          [
            "6",
            "5+6=11",
            "11"
          ],
          [
            "7",
            "11+6=17",
            "17"
          ],
          [
            "8",
            "11+7=18；11+5=16；17+6=23",
            "23"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "8",
            "汇事件置工期23",
            "23"
          ],
          [
            "7",
            "23−6=17",
            "17"
          ],
          [
            "6",
            "23−5=18",
            "18"
          ],
          [
            "5",
            "17−6=11；23−7=16",
            "11"
          ],
          [
            "4",
            "18−6=12",
            "12"
          ],
          [
            "3",
            "11−3=8",
            "8"
          ],
          [
            "2",
            "12−4=8；11−10=1",
            "1"
          ],
          [
            "1",
            "1−1=0；8−3=5",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，1",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，3",
            "0",
            "5",
            "5",
            "否"
          ],
          [
            "3",
            "2→4，4",
            "1",
            "8",
            "7",
            "否"
          ],
          [
            "4",
            "2→5，10",
            "1",
            "1",
            "0",
            "是"
          ],
          [
            "5",
            "3→5，3",
            "3",
            "8",
            "5",
            "否"
          ],
          [
            "6",
            "4→6，6",
            "5",
            "12",
            "7",
            "否"
          ],
          [
            "7",
            "5→7，6",
            "11",
            "11",
            "0",
            "是"
          ],
          [
            "8",
            "5→8，7",
            "11",
            "16",
            "5",
            "否"
          ],
          [
            "9",
            "6→8，5",
            "11",
            "18",
            "7",
            "否"
          ],
          [
            "10",
            "7→8，6",
            "17",
            "17",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-activity-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-activity",
    "variant": 2,
    "title": "AOE 网 [(1, 2, 3), (1, 3, 2), (2, 4, 5), (2, 5, 3), (3, 4, 4), (3, 6, 3), (4, 6, 2), (5, 6, 1)]，活动按给出顺序编号。求 a5（(3, 4, 4)）的最早、最晚开始及可拖延时长。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      49,
      50
    ],
    "origin": "同类考法新题",
    "topic": "r6-5",
    "hint": "",
    "explain": "事件 ve=[0, 3, 2, 8, 6, 10]，vl=[0, 3, 4, 8, 9, 10]。\na5 的 e=2，l=4，余量=2。",
    "solution": [
      "事件 ve=[0, 3, 2, 8, 6, 10]，vl=[0, 3, 4, 8, 9, 10]。",
      "a5 的 e=2，l=4，余量=2。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最早开始 e",
        "answer": "2",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最晚开始 l",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间余量 l-e",
        "answer": "2",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "工期",
        "answer": "10",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+3=3",
            "3"
          ],
          [
            "3",
            "0+2=2",
            "2"
          ],
          [
            "5",
            "3+3=6",
            "6"
          ],
          [
            "4",
            "3+5=8；2+4=6",
            "8"
          ],
          [
            "6",
            "2+3=5；8+2=10；6+1=7",
            "10"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "6",
            "汇事件置工期10",
            "10"
          ],
          [
            "4",
            "10−2=8",
            "8"
          ],
          [
            "5",
            "10−1=9",
            "9"
          ],
          [
            "3",
            "8−4=4；10−3=7",
            "4"
          ],
          [
            "2",
            "8−5=3；9−3=6",
            "3"
          ],
          [
            "1",
            "3−3=0；4−2=2",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，3",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，2",
            "0",
            "2",
            "2",
            "否"
          ],
          [
            "3",
            "2→4，5",
            "3",
            "3",
            "0",
            "是"
          ],
          [
            "4",
            "2→5，3",
            "3",
            "6",
            "3",
            "否"
          ],
          [
            "5",
            "3→4，4",
            "2",
            "4",
            "2",
            "否"
          ],
          [
            "6",
            "3→6，3",
            "2",
            "7",
            "5",
            "否"
          ],
          [
            "7",
            "4→6，2",
            "8",
            "8",
            "0",
            "是"
          ],
          [
            "8",
            "5→6，1",
            "6",
            "9",
            "3",
            "否"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-activity-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-activity",
    "variant": 3,
    "title": "AOE 网 [(1, 2, 6), (1, 3, 4), (1, 4, 5), (2, 5, 1), (3, 5, 1), (4, 5, 6), (4, 6, 2), (5, 7, 9), (5, 8, 7), (6, 8, 4), (7, 9, 2), (8, 9, 4)]，活动按给出顺序编号。求 a7（(4, 6, 2)）的最早、最晚开始及可拖延时长。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      49,
      50
    ],
    "origin": "同类考法新题",
    "topic": "r6-5",
    "hint": "",
    "explain": "事件 ve=[0, 6, 4, 5, 11, 7, 20, 18, 22]，vl=[0, 10, 10, 5, 11, 14, 20, 18, 22]。\na7 的 e=5，l=12，余量=7。",
    "solution": [
      "事件 ve=[0, 6, 4, 5, 11, 7, 20, 18, 22]，vl=[0, 10, 10, 5, 11, 14, 20, 18, 22]。",
      "a7 的 e=5，l=12，余量=7。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最早开始 e",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最晚开始 l",
        "answer": "12",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间余量 l-e",
        "answer": "7",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "工期",
        "answer": "22",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+6=6",
            "6"
          ],
          [
            "3",
            "0+4=4",
            "4"
          ],
          [
            "4",
            "0+5=5",
            "5"
          ],
          [
            "5",
            "6+1=7；4+1=5；5+6=11",
            "11"
          ],
          [
            "6",
            "5+2=7",
            "7"
          ],
          [
            "7",
            "11+9=20",
            "20"
          ],
          [
            "8",
            "11+7=18；7+4=11",
            "18"
          ],
          [
            "9",
            "20+2=22；18+4=22",
            "22"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "9",
            "汇事件置工期22",
            "22"
          ],
          [
            "8",
            "22−4=18",
            "18"
          ],
          [
            "7",
            "22−2=20",
            "20"
          ],
          [
            "6",
            "18−4=14",
            "14"
          ],
          [
            "5",
            "20−9=11；18−7=11",
            "11"
          ],
          [
            "4",
            "11−6=5；14−2=12",
            "5"
          ],
          [
            "3",
            "11−1=10",
            "10"
          ],
          [
            "2",
            "11−1=10",
            "10"
          ],
          [
            "1",
            "10−6=4；10−4=6；5−5=0",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，6",
            "0",
            "4",
            "4",
            "否"
          ],
          [
            "2",
            "1→3，4",
            "0",
            "6",
            "6",
            "否"
          ],
          [
            "3",
            "1→4，5",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "4",
            "2→5，1",
            "6",
            "10",
            "4",
            "否"
          ],
          [
            "5",
            "3→5，1",
            "4",
            "10",
            "6",
            "否"
          ],
          [
            "6",
            "4→5，6",
            "5",
            "5",
            "0",
            "是"
          ],
          [
            "7",
            "4→6，2",
            "5",
            "12",
            "7",
            "否"
          ],
          [
            "8",
            "5→7，9",
            "11",
            "11",
            "0",
            "是"
          ],
          [
            "9",
            "5→8，7",
            "11",
            "11",
            "0",
            "是"
          ],
          [
            "10",
            "6→8，4",
            "7",
            "14",
            "7",
            "否"
          ],
          [
            "11",
            "7→9，2",
            "20",
            "20",
            "0",
            "是"
          ],
          [
            "12",
            "8→9，4",
            "18",
            "18",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-activity-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-activity",
    "variant": 4,
    "title": "AOE 网 [(1, 2, 3), (1, 3, 3), (2, 4, 2), (3, 4, 2), (4, 5, 4)]，活动按给出顺序编号。求 a3（(2, 4, 2)）的最早、最晚开始及可拖延时长。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      49,
      50
    ],
    "origin": "同类考法新题",
    "topic": "r6-5",
    "hint": "",
    "explain": "事件 ve=[0, 3, 3, 5, 9]，vl=[0, 3, 3, 5, 9]。\na3 的 e=3，l=3，余量=0。",
    "solution": [
      "事件 ve=[0, 3, 3, 5, 9]，vl=[0, 3, 3, 5, 9]。",
      "a3 的 e=3，l=3，余量=0。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最早开始 e",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最晚开始 l",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间余量 l-e",
        "answer": "0",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "工期",
        "answer": "9",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。",
        "活动u→v的e取ve[u]，l取vl[v]减工期，零余量才关键。"
      ],
      "format": "事件按顶点序，活动按给定编号序，关键活动写全部。"
    },
    "worked": [
      {
        "caption": "按拓扑序向前，等所有前驱，候选中取最大",
        "heads": [
          "事件",
          "各入边候选到达时间",
          "ve"
        ],
        "rows": [
          [
            "1",
            "源事件置0",
            "0"
          ],
          [
            "2",
            "0+3=3",
            "3"
          ],
          [
            "3",
            "0+3=3",
            "3"
          ],
          [
            "4",
            "3+2=5；3+2=5",
            "5"
          ],
          [
            "5",
            "5+4=9",
            "9"
          ]
        ]
      },
      {
        "caption": "按逆拓扑向后，满足全部后续限制，候选取最小",
        "heads": [
          "事件",
          "各出边候选最晚时间",
          "vl"
        ],
        "rows": [
          [
            "5",
            "汇事件置工期9",
            "9"
          ],
          [
            "4",
            "9−4=5",
            "5"
          ],
          [
            "3",
            "5−2=3",
            "3"
          ],
          [
            "2",
            "5−2=3",
            "3"
          ],
          [
            "1",
            "3−3=0；3−3=0",
            "0"
          ]
        ]
      },
      {
        "caption": "活动最早看起点ve，最晚看终点vl再减持续时间",
        "heads": [
          "活动",
          "u→v，时长",
          "e",
          "l",
          "余量",
          "关键吗"
        ],
        "rows": [
          [
            "1",
            "1→2，3",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "2",
            "1→3，3",
            "0",
            "0",
            "0",
            "是"
          ],
          [
            "3",
            "2→4，2",
            "3",
            "3",
            "0",
            "是"
          ],
          [
            "4",
            "3→4，2",
            "3",
            "3",
            "0",
            "是"
          ],
          [
            "5",
            "4→5，4",
            "5",
            "5",
            "0",
            "是"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-aoe-pitfall-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-pitfall",
    "variant": 1,
    "title": "有两条等长关键路径，缩短仅属于其中一条的活动，工期一定减少吗？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      18,
      49,
      50,
      52
    ],
    "origin": "同类考法新题",
    "topic": "r6-5",
    "hint": "",
    "explain": "必须同时解除所有仍然达到最长长度的路径约束。",
    "solution": [
      "必须同时解除所有仍然达到最长长度的路径约束。"
    ],
    "rubric": [],
    "options": [
      "不一定，另一条可能仍限制工期",
      "一定增加",
      "变成最短路问题",
      "一定"
    ],
    "answer": 0,
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "符合：必须同时解除所有仍然达到最长长度的路径约束。",
      "核对条件：缩短活动不会必然增加工期；另一条关键链可能让工期保持。",
      "核对条件：仍是多支线先后依赖的最长链问题，不会变成最短路。",
      "核对条件：另一条等长关键路径若未缩短，仍限制原工期，所以不一定减少。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R6-aoe-pitfall-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-pitfall",
    "variant": 2,
    "title": "AOE 求事件最早时间 ve 时，对多条入弧应取？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      18,
      49,
      50,
      52
    ],
    "origin": "同类考法新题",
    "topic": "r6-5",
    "hint": "",
    "explain": "事件必须等待所有前驱活动完成，取最大到达时间。",
    "solution": [
      "事件必须等待所有前驱活动完成，取最大到达时间。"
    ],
    "rubric": [],
    "options": [
      "平均值",
      "任选",
      "最小值",
      "最大值"
    ],
    "answer": 3,
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：平均值可能早于最慢前驱完成，事件尚不能发生。",
      "核对条件：任选一条可能忽略更慢的前驱，无法满足全部依赖。",
      "核对条件：最小值只等最快一支，剩余前驱可能还未完成。",
      "符合：事件必须等待所有前驱活动完成，取最大到达时间。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R6-aoe-pitfall-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-aoe-pitfall",
    "variant": 3,
    "title": "AOE 求事件最迟时间 vl 时，对多条出弧应取？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      7,
      18,
      49,
      50,
      52
    ],
    "origin": "同类考法新题",
    "topic": "r6-5",
    "hint": "",
    "explain": "要满足所有后续工期限制，因此取最紧的最小上界。",
    "solution": [
      "要满足所有后续工期限制，因此取最紧的最小上界。"
    ],
    "rubric": [],
    "options": [
      "取0",
      "最大值",
      "最小值",
      "求和"
    ],
    "answer": 2,
    "support": {
      "ask": "事件时间ve/vl与活动开始e/l要分别建表。",
      "plan": [
        "先按拓扑序向前取max求ve，确定总工期；再逆序向后取min求vl。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：任取0没有使用后续活动的时间限制。",
      "核对条件：取最大可能违反更紧的某条出边截止时间。",
      "符合：要满足所有后续工期限制，因此取最紧的最小上界。",
      "核对条件：各限制是同时必须满足的上界，不应相加。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R6-dijkstra-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-dijkstra",
    "variant": 1,
    "title": "非负权有向图，顶点 1..6，边 (起点,终点,权) 为 [(1, 2, 50), (1, 3, 10), (1, 5, 45), (2, 3, 15), (2, 4, 50), (2, 5, 10), (3, 1, 20), (3, 4, 15), (4, 2, 20), (4, 5, 5), (4, 6, 30), (5, 4, 30)]。从 1 用 Dijkstra 求距离；同距离优先较小编号。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      47,
      48
    ],
    "origin": "历年题改编",
    "topic": "r6-6",
    "hint": "",
    "explain": "最终距离 [0, 45, 10, 25, 30, 55]；确定顺序 [1, 3, 4, 5, 2, 6]。\n每次选未确定点中的最小 dist，再松弛出边。\n前驱（0 表示无）=[0, 4, 1, 3, 4, 4]。",
    "solution": [
      "最终距离 [0, 45, 10, 25, 30, 55]；确定顺序 [1, 3, 4, 5, 2, 6]。",
      "每次选未确定点中的最小 dist，再松弛出边。",
      "前驱（0 表示无）=[0, 4, 1, 3, 4, 4]。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按顶点编号的距离序列",
        "answer": "0,45,10,25,30,55",
        "points": 5,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "确定顶点的先后序列",
        "answer": "1,3,4,5,2,6",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "距离从同一源点累计，不是只取最后一条边。",
      "plan": [
        "每轮选未确定总距离最小点，沿它的出边试算新路程。",
        "改善距离时同步记前驱；最后沿前驱倒推后反转得到路径。"
      ],
      "format": "不可达用题设符号；同距离按较小编号，不能反向走弧。"
    },
    "worked": [
      {
        "caption": "每轮选未确定总距离最小点，表中均从源点1累计",
        "heads": [
          "本轮确定",
          "确定距离",
          "本轮松弛改善",
          "各顶点当前dist"
        ],
        "rows": [
          [
            "1",
            "0",
            "2: ∞→50；3: ∞→10；5: ∞→45",
            "0，50，10，∞，45，∞"
          ],
          [
            "3",
            "10",
            "4: ∞→25",
            "0，50，10，25，45，∞"
          ],
          [
            "4",
            "25",
            "2: 50→45；5: 45→30；6: ∞→55",
            "0，45，10，25，30，55"
          ],
          [
            "5",
            "30",
            "无改善",
            "0，45，10，25，30，55"
          ],
          [
            "2",
            "45",
            "无改善",
            "0，45，10，25，30，55"
          ],
          [
            "6",
            "55",
            "无改善",
            "0，45，10，25，30，55"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-dijkstra-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-dijkstra",
    "variant": 2,
    "title": "非负权有向图，顶点 1..5，边 (起点,终点,权) 为 [(1, 2, 6), (1, 3, 2), (3, 2, 1), (2, 4, 2), (3, 4, 8), (4, 5, 3)]。从 1 用 Dijkstra 求距离；同距离优先较小编号。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      47,
      48
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "最终距离 [0, 3, 2, 5, 8]；确定顺序 [1, 3, 2, 4, 5]。\n每次选未确定点中的最小 dist，再松弛出边。\n前驱（0 表示无）=[0, 3, 1, 2, 4]。",
    "solution": [
      "最终距离 [0, 3, 2, 5, 8]；确定顺序 [1, 3, 2, 4, 5]。",
      "每次选未确定点中的最小 dist，再松弛出边。",
      "前驱（0 表示无）=[0, 3, 1, 2, 4]。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按顶点编号的距离序列",
        "answer": "0,3,2,5,8",
        "points": 5,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "确定顶点的先后序列",
        "answer": "1,3,2,4,5",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "距离从同一源点累计，不是只取最后一条边。",
      "plan": [
        "每轮选未确定总距离最小点，沿它的出边试算新路程。",
        "改善距离时同步记前驱；最后沿前驱倒推后反转得到路径。"
      ],
      "format": "不可达用题设符号；同距离按较小编号，不能反向走弧。"
    },
    "worked": [
      {
        "caption": "每轮选未确定总距离最小点，表中均从源点1累计",
        "heads": [
          "本轮确定",
          "确定距离",
          "本轮松弛改善",
          "各顶点当前dist"
        ],
        "rows": [
          [
            "1",
            "0",
            "2: ∞→6；3: ∞→2",
            "0，6，2，∞，∞"
          ],
          [
            "3",
            "2",
            "2: 6→3；4: ∞→10",
            "0，3，2，10，∞"
          ],
          [
            "2",
            "3",
            "4: 10→5",
            "0，3，2，5，∞"
          ],
          [
            "4",
            "5",
            "5: ∞→8",
            "0，3，2，5，8"
          ],
          [
            "5",
            "8",
            "无改善",
            "0，3，2，5，8"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-dijkstra-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-dijkstra",
    "variant": 3,
    "title": "非负权有向图，顶点 1..5，边 (起点,终点,权) 为 [(1, 2, 4), (1, 3, 1), (3, 2, 2), (2, 4, 1), (3, 4, 6), (4, 5, 2)]。从 1 用 Dijkstra 求距离；同距离优先较小编号。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      47,
      48
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "最终距离 [0, 3, 1, 4, 6]；确定顺序 [1, 3, 2, 4, 5]。\n每次选未确定点中的最小 dist，再松弛出边。\n前驱（0 表示无）=[0, 3, 1, 2, 4]。",
    "solution": [
      "最终距离 [0, 3, 1, 4, 6]；确定顺序 [1, 3, 2, 4, 5]。",
      "每次选未确定点中的最小 dist，再松弛出边。",
      "前驱（0 表示无）=[0, 3, 1, 2, 4]。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按顶点编号的距离序列",
        "answer": "0,3,1,4,6",
        "points": 5,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "确定顶点的先后序列",
        "answer": "1,3,2,4,5",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "距离从同一源点累计，不是只取最后一条边。",
      "plan": [
        "每轮选未确定总距离最小点，沿它的出边试算新路程。",
        "改善距离时同步记前驱；最后沿前驱倒推后反转得到路径。"
      ],
      "format": "不可达用题设符号；同距离按较小编号，不能反向走弧。"
    },
    "worked": [
      {
        "caption": "每轮选未确定总距离最小点，表中均从源点1累计",
        "heads": [
          "本轮确定",
          "确定距离",
          "本轮松弛改善",
          "各顶点当前dist"
        ],
        "rows": [
          [
            "1",
            "0",
            "2: ∞→4；3: ∞→1",
            "0，4，1，∞，∞"
          ],
          [
            "3",
            "1",
            "2: 4→3；4: ∞→7",
            "0，3，1，7，∞"
          ],
          [
            "2",
            "3",
            "4: 7→4",
            "0，3，1，4，∞"
          ],
          [
            "4",
            "4",
            "5: ∞→6",
            "0，3，1，4，6"
          ],
          [
            "5",
            "6",
            "无改善",
            "0，3，1，4，6"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-dijkstra-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-dijkstra",
    "variant": 4,
    "title": "非负权有向图，顶点 1..6，边 (起点,终点,权) 为 [(1, 2, 2), (1, 3, 5), (2, 4, 3), (2, 5, 4), (3, 5, 1), (3, 6, 7), (4, 5, 2), (5, 6, 3)]。从 1 用 Dijkstra 求距离；同距离优先较小编号。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      47,
      48
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "最终距离 [0, 2, 5, 5, 6, 9]；确定顺序 [1, 2, 3, 4, 5, 6]。\n每次选未确定点中的最小 dist，再松弛出边。\n前驱（0 表示无）=[0, 1, 1, 2, 2, 5]。",
    "solution": [
      "最终距离 [0, 2, 5, 5, 6, 9]；确定顺序 [1, 2, 3, 4, 5, 6]。",
      "每次选未确定点中的最小 dist，再松弛出边。",
      "前驱（0 表示无）=[0, 1, 1, 2, 2, 5]。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按顶点编号的距离序列",
        "answer": "0,2,5,5,6,9",
        "points": 5,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "确定顶点的先后序列",
        "answer": "1,2,3,4,5,6",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "距离从同一源点累计，不是只取最后一条边。",
      "plan": [
        "每轮选未确定总距离最小点，沿它的出边试算新路程。",
        "改善距离时同步记前驱；最后沿前驱倒推后反转得到路径。"
      ],
      "format": "不可达用题设符号；同距离按较小编号，不能反向走弧。"
    },
    "worked": [
      {
        "caption": "每轮选未确定总距离最小点，表中均从源点1累计",
        "heads": [
          "本轮确定",
          "确定距离",
          "本轮松弛改善",
          "各顶点当前dist"
        ],
        "rows": [
          [
            "1",
            "0",
            "2: ∞→2；3: ∞→5",
            "0，2，5，∞，∞，∞"
          ],
          [
            "2",
            "2",
            "4: ∞→5；5: ∞→6",
            "0，2，5，5，6，∞"
          ],
          [
            "3",
            "5",
            "6: ∞→12",
            "0，2，5，5，6，12"
          ],
          [
            "4",
            "5",
            "无改善",
            "0，2，5，5，6，12"
          ],
          [
            "5",
            "6",
            "6: 12→9",
            "0，2，5，5，6，9"
          ],
          [
            "6",
            "9",
            "无改善",
            "0，2，5，5，6，9"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-shortestpath-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-shortestpath",
    "variant": 1,
    "title": "同类最短路：顶点 1..6，有向边 [(1, 2, 50), (1, 3, 10), (1, 5, 45), (2, 3, 15), (2, 4, 50), (2, 5, 10), (3, 1, 20), (3, 4, 15), (4, 2, 20), (4, 5, 5), (4, 6, 30), (5, 4, 30)]。求从 1 到 6 的最短路径及长度，路径按结点序输入。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      47,
      48
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "距离=[0, 45, 10, 25, 30, 55]；根据前驱反向回溯后反转，得到 [1, 3, 4, 6]，长度 55。",
    "solution": [
      "距离=[0, 45, 10, 25, 30, 55]；根据前驱反向回溯后反转，得到 [1, 3, 4, 6]，长度 55。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "路径",
        "answer": "1,3,4,6",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "长度",
        "answer": "55",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "距离从同一源点累计，不是只取最后一条边。",
      "plan": [
        "每轮选未确定总距离最小点，沿它的出边试算新路程。",
        "改善距离时同步记前驱；最后沿前驱倒推后反转得到路径。"
      ],
      "format": "路径按源到终点的结点次序，可用逗号或箭头分隔；等长合法最短路均接受。"
    },
    "worked": [
      {
        "caption": "每轮选未确定总距离最小点，表中均从源点1累计",
        "heads": [
          "本轮确定",
          "确定距离",
          "本轮松弛改善",
          "各顶点当前dist"
        ],
        "rows": [
          [
            "1",
            "0",
            "2: ∞→50；3: ∞→10；5: ∞→45",
            "0，50，10，∞，45，∞"
          ],
          [
            "3",
            "10",
            "4: ∞→25",
            "0，50，10，25，45，∞"
          ],
          [
            "4",
            "25",
            "2: 50→45；5: 45→30；6: ∞→55",
            "0，45，10，25，30，55"
          ],
          [
            "5",
            "30",
            "无改善",
            "0，45，10，25，30，55"
          ],
          [
            "2",
            "45",
            "无改善",
            "0，45，10，25，30，55"
          ],
          [
            "6",
            "55",
            "无改善",
            "0，45，10，25，30，55"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-shortestpath-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-shortestpath",
    "variant": 2,
    "title": "同类最短路：顶点 1..5，有向边 [(1, 2, 6), (1, 3, 2), (3, 2, 1), (2, 4, 2), (3, 4, 8), (4, 5, 3)]。求从 1 到 5 的最短路径及长度，路径按结点序输入。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      47,
      48
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "距离=[0, 3, 2, 5, 8]；根据前驱反向回溯后反转，得到 [1, 3, 2, 4, 5]，长度 8。",
    "solution": [
      "距离=[0, 3, 2, 5, 8]；根据前驱反向回溯后反转，得到 [1, 3, 2, 4, 5]，长度 8。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "路径",
        "answer": "1,3,2,4,5",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "长度",
        "answer": "8",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "距离从同一源点累计，不是只取最后一条边。",
      "plan": [
        "每轮选未确定总距离最小点，沿它的出边试算新路程。",
        "改善距离时同步记前驱；最后沿前驱倒推后反转得到路径。"
      ],
      "format": "路径按源到终点的结点次序，可用逗号或箭头分隔；等长合法最短路均接受。"
    },
    "worked": [
      {
        "caption": "每轮选未确定总距离最小点，表中均从源点1累计",
        "heads": [
          "本轮确定",
          "确定距离",
          "本轮松弛改善",
          "各顶点当前dist"
        ],
        "rows": [
          [
            "1",
            "0",
            "2: ∞→6；3: ∞→2",
            "0，6，2，∞，∞"
          ],
          [
            "3",
            "2",
            "2: 6→3；4: ∞→10",
            "0，3，2，10，∞"
          ],
          [
            "2",
            "3",
            "4: 10→5",
            "0，3，2，5，∞"
          ],
          [
            "4",
            "5",
            "5: ∞→8",
            "0，3，2，5，8"
          ],
          [
            "5",
            "8",
            "无改善",
            "0，3，2，5，8"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-shortestpath-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-shortestpath",
    "variant": 3,
    "title": "同类最短路：顶点 1..5，有向边 [(1, 2, 4), (1, 3, 1), (3, 2, 2), (2, 4, 1), (3, 4, 6), (4, 5, 2)]。求从 1 到 5 的最短路径及长度，路径按结点序输入。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      47,
      48
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "距离=[0, 3, 1, 4, 6]；根据前驱反向回溯后反转，得到 [1, 3, 2, 4, 5]，长度 6。",
    "solution": [
      "距离=[0, 3, 1, 4, 6]；根据前驱反向回溯后反转，得到 [1, 3, 2, 4, 5]，长度 6。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "路径",
        "answer": "1,3,2,4,5",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "长度",
        "answer": "6",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "距离从同一源点累计，不是只取最后一条边。",
      "plan": [
        "每轮选未确定总距离最小点，沿它的出边试算新路程。",
        "改善距离时同步记前驱；最后沿前驱倒推后反转得到路径。"
      ],
      "format": "路径按源到终点的结点次序，可用逗号或箭头分隔；等长合法最短路均接受。"
    },
    "worked": [
      {
        "caption": "每轮选未确定总距离最小点，表中均从源点1累计",
        "heads": [
          "本轮确定",
          "确定距离",
          "本轮松弛改善",
          "各顶点当前dist"
        ],
        "rows": [
          [
            "1",
            "0",
            "2: ∞→4；3: ∞→1",
            "0，4，1，∞，∞"
          ],
          [
            "3",
            "1",
            "2: 4→3；4: ∞→7",
            "0，3，1，7，∞"
          ],
          [
            "2",
            "3",
            "4: 7→4",
            "0，3，1，4，∞"
          ],
          [
            "4",
            "4",
            "5: ∞→6",
            "0，3，1，4，6"
          ],
          [
            "5",
            "6",
            "无改善",
            "0，3，1，4，6"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-shortestpath-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-shortestpath",
    "variant": 4,
    "title": "同类最短路：顶点 1..6，有向边 [(1, 2, 2), (1, 3, 5), (2, 4, 3), (2, 5, 4), (3, 5, 1), (3, 6, 7), (4, 5, 2), (5, 6, 3)]。求从 1 到 6 的最短路径及长度，路径按结点序输入。存在多条等长最短路时，任意一条最短简单路径均可。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      47,
      48
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "距离=[0, 2, 5, 5, 6, 9]；根据前驱反向回溯后反转，得到 [1, 2, 5, 6]，长度 9。 本题等长最短路径有：1→2→5→6；1→3→5→6，都应得分。",
    "solution": [
      "距离=[0, 2, 5, 5, 6, 9]；根据前驱反向回溯后反转，得到 [1, 2, 5, 6]，长度 9。",
      "本题等长最短路径有：1→2→5→6；1→3→5→6，都应得分。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "路径",
        "answer": "1,2,5,6",
        "points": 2,
        "kind": "sequence",
        "aliases": [
          "1,3,5,6"
        ]
      },
      {
        "label": "长度",
        "answer": "9",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "距离从同一源点累计，不是只取最后一条边。",
      "plan": [
        "每轮选未确定总距离最小点，沿它的出边试算新路程。",
        "改善距离时同步记前驱；最后沿前驱倒推后反转得到路径。"
      ],
      "format": "路径按源到终点的结点次序，可用逗号或箭头分隔；等长合法最短路均接受。"
    },
    "worked": [
      {
        "caption": "每轮选未确定总距离最小点，表中均从源点1累计",
        "heads": [
          "本轮确定",
          "确定距离",
          "本轮松弛改善",
          "各顶点当前dist"
        ],
        "rows": [
          [
            "1",
            "0",
            "2: ∞→2；3: ∞→5",
            "0，2，5，∞，∞，∞"
          ],
          [
            "2",
            "2",
            "4: ∞→5；5: ∞→6",
            "0，2，5，5，6，∞"
          ],
          [
            "3",
            "5",
            "6: ∞→12",
            "0，2，5，5，6，12"
          ],
          [
            "4",
            "5",
            "无改善",
            "0，2，5，5，6，12"
          ],
          [
            "5",
            "6",
            "6: 12→9",
            "0，2，5，5，6，9"
          ],
          [
            "6",
            "9",
            "无改善",
            "0，2，5，5，6，9"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-mst-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-mst",
    "variant": 1,
    "title": "课件补全训练：4 个顶点的连通无向图边 [(1, 2, 2), (1, 3, 5), (2, 3, 1), (2, 4, 4), (3, 4, 3)]。用 Kruskal 求最小生成树总权及边数。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [],
    "origin": "同类考法新题",
    "topic": "r6-7",
    "hint": "",
    "explain": "按权排序，避环选中 [(2, 3, 1), (1, 2, 2), (3, 4, 3)]；权和 6。\n该专题来自课件补全，不据此宣称在所给资料中高频。",
    "solution": [
      "按权排序，避环选中 [(2, 3, 1), (1, 2, 2), (3, 4, 3)]；权和 6。",
      "该专题来自课件补全，不据此宣称在所给资料中高频。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最小权值和",
        "answer": "6",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "边数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "要求所有顶点连通、无环，并使总边权最小。",
      "plan": [
        "边按权升序考虑，只有连接不同连通集合时才选。",
        "选够V−1条便完成，最后相加所选边权。"
      ],
      "format": "填写总权与边数，不能把最短源点距离相加当MST。"
    },
    "walkthrough": [
      "要求所有顶点连通、无环，并使总边权最小。",
      "边按权升序考虑，只有连接不同连通集合时才选。",
      "选够V−1条便完成，最后相加所选边权。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-mst-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-mst",
    "variant": 2,
    "title": "课件补全训练：4 个顶点的连通无向图边 [(1, 2, 4), (1, 3, 7), (2, 3, 2), (2, 4, 6), (3, 4, 5)]。用 Kruskal 求最小生成树总权及边数。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [],
    "origin": "同类考法新题",
    "topic": "r6-7",
    "hint": "",
    "explain": "按权排序，避环选中 [(2, 3, 2), (1, 2, 4), (3, 4, 5)]；权和 11。\n该专题来自课件补全，不据此宣称在所给资料中高频。",
    "solution": [
      "按权排序，避环选中 [(2, 3, 2), (1, 2, 4), (3, 4, 5)]；权和 11。",
      "该专题来自课件补全，不据此宣称在所给资料中高频。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最小权值和",
        "answer": "11",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "边数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "要求所有顶点连通、无环，并使总边权最小。",
      "plan": [
        "边按权升序考虑，只有连接不同连通集合时才选。",
        "选够V−1条便完成，最后相加所选边权。"
      ],
      "format": "填写总权与边数，不能把最短源点距离相加当MST。"
    },
    "walkthrough": [
      "要求所有顶点连通、无环，并使总边权最小。",
      "边按权升序考虑，只有连接不同连通集合时才选。",
      "选够V−1条便完成，最后相加所选边权。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-mst-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-mst",
    "variant": 3,
    "title": "课件补全训练：4 个顶点的连通无向图边 [(1, 2, 1), (1, 3, 8), (2, 3, 3), (2, 4, 2), (3, 4, 4)]。用 Kruskal 求最小生成树总权及边数。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [],
    "origin": "同类考法新题",
    "topic": "r6-7",
    "hint": "",
    "explain": "按权排序，避环选中 [(1, 2, 1), (2, 4, 2), (2, 3, 3)]；权和 6。\n该专题来自课件补全，不据此宣称在所给资料中高频。",
    "solution": [
      "按权排序，避环选中 [(1, 2, 1), (2, 4, 2), (2, 3, 3)]；权和 6。",
      "该专题来自课件补全，不据此宣称在所给资料中高频。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最小权值和",
        "answer": "6",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "边数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "要求所有顶点连通、无环，并使总边权最小。",
      "plan": [
        "边按权升序考虑，只有连接不同连通集合时才选。",
        "选够V−1条便完成，最后相加所选边权。"
      ],
      "format": "填写总权与边数，不能把最短源点距离相加当MST。"
    },
    "walkthrough": [
      "要求所有顶点连通、无环，并使总边权最小。",
      "边按权升序考虑，只有连接不同连通集合时才选。",
      "选够V−1条便完成，最后相加所选边权。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-degree-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-degree",
    "variant": 1,
    "title": "简单无向图各顶点度数为 [2, 3, 1, 2]。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      24,
      28
    ],
    "origin": "同类考法新题",
    "topic": "r6-1",
    "hint": "",
    "explain": "总度数=8，每边计两次，E=4。\n4 个顶点的树有 3 条边。",
    "solution": [
      "总度数=8，每边计两次，E=4。",
      "4 个顶点的树有 3 条边。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "边数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "若同样顶点数构成一棵树时所需边数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "无向边在度数总和中被两个端点各数一次。",
      "plan": [
        "总度数除2才是实际边数。",
        "若另问同顶点数的一棵树，边数是顶点数减1，不能混用这两个图。"
      ],
      "format": "注意“原图边数”和“另构成树所需边数”的不同。"
    },
    "walkthrough": [
      "无向边在度数总和中被两个端点各数一次。",
      "总度数除2才是实际边数。",
      "若另问同顶点数的一棵树，边数是顶点数减1，不能混用这两个图。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-degree-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-degree",
    "variant": 2,
    "title": "简单无向图各顶点度数为 [3, 3, 2, 2, 2]。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      24,
      28
    ],
    "origin": "同类考法新题",
    "topic": "r6-1",
    "hint": "",
    "explain": "总度数=12，每边计两次，E=6。\n5 个顶点的树有 4 条边。",
    "solution": [
      "总度数=12，每边计两次，E=6。",
      "5 个顶点的树有 4 条边。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "边数",
        "answer": "6",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "若同样顶点数构成一棵树时所需边数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "无向边在度数总和中被两个端点各数一次。",
      "plan": [
        "总度数除2才是实际边数。",
        "若另问同顶点数的一棵树，边数是顶点数减1，不能混用这两个图。"
      ],
      "format": "注意“原图边数”和“另构成树所需边数”的不同。"
    },
    "walkthrough": [
      "无向边在度数总和中被两个端点各数一次。",
      "总度数除2才是实际边数。",
      "若另问同顶点数的一棵树，边数是顶点数减1，不能混用这两个图。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-degree-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-degree",
    "variant": 3,
    "title": "简单无向图各顶点度数为 [4, 2, 2, 2, 2]。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      24,
      28
    ],
    "origin": "同类考法新题",
    "topic": "r6-1",
    "hint": "",
    "explain": "总度数=12，每边计两次，E=6。\n5 个顶点的树有 4 条边。",
    "solution": [
      "总度数=12，每边计两次，E=6。",
      "5 个顶点的树有 4 条边。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "边数",
        "answer": "6",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "若同样顶点数构成一棵树时所需边数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "无向边在度数总和中被两个端点各数一次。",
      "plan": [
        "总度数除2才是实际边数。",
        "若另问同顶点数的一棵树，边数是顶点数减1，不能混用这两个图。"
      ],
      "format": "注意“原图边数”和“另构成树所需边数”的不同。"
    },
    "walkthrough": [
      "无向边在度数总和中被两个端点各数一次。",
      "总度数除2才是实际边数。",
      "若另问同顶点数的一棵树，边数是顶点数减1，不能混用这两个图。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-degree-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-degree",
    "variant": 4,
    "title": "简单无向图各顶点度数为 [1, 1, 2, 2, 2]。",
    "type": "fields",
    "points": 2,
    "difficulty": "考试标准",
    "sourcePages": [
      2,
      24,
      28
    ],
    "origin": "同类考法新题",
    "topic": "r6-1",
    "hint": "",
    "explain": "总度数=8，每边计两次，E=4。\n5 个顶点的树有 4 条边。",
    "solution": [
      "总度数=8，每边计两次，E=4。",
      "5 个顶点的树有 4 条边。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "边数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "若同样顶点数构成一棵树时所需边数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "无向边在度数总和中被两个端点各数一次。",
      "plan": [
        "总度数除2才是实际边数。",
        "若另问同顶点数的一棵树，边数是顶点数减1，不能混用这两个图。"
      ],
      "format": "注意“原图边数”和“另构成树所需边数”的不同。"
    },
    "walkthrough": [
      "无向边在度数总和中被两个端点各数一次。",
      "总度数除2才是实际边数。",
      "若另问同顶点数的一棵树，边数是顶点数减1，不能混用这两个图。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R6-algorithm-boundary-v1",
    "chapter": 6,
    "mode": "review",
    "family": "R6-algorithm-boundary",
    "variant": 1,
    "title": "Dijkstra 已确定的最小距离为何需要非负权？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      16,
      47
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "负权可能让稍后路径缩短已确定距离，破坏贪心不变式。",
    "solution": [
      "负权可能让稍后路径缩短已确定距离，破坏贪心不变式。"
    ],
    "rubric": [],
    "options": [
      "非负权保证未经过的边不会带来更小回头路",
      "方便输入",
      "图必须完全",
      "为保证 BFS 顺序"
    ],
    "answer": 0,
    "support": {
      "ask": "先认算法的输入前提与目标，不凭名称猜。",
      "plan": [
        "Dijkstra看非负权；邻接矩阵遍历成本按扫描V行估算。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "符合：负权可能让稍后路径缩短已确定距离，破坏贪心不变式。",
      "核对条件：这是保证贪心确定正确的数学条件，不是输入方便。",
      "核对条件：完全图与否不能消除负边缩短已确定路径的风险。",
      "核对条件：Dijkstra按暂定总距离确定，BFS按层次，二者规则不同。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R6-algorithm-boundary-v2",
    "chapter": 6,
    "mode": "review",
    "family": "R6-algorithm-boundary",
    "variant": 2,
    "title": "用邻接矩阵实现 BFS，最坏时间通常是？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      16,
      47
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "每个访问顶点需要扫描整行 V 个位置，最多 V 行。",
    "solution": [
      "每个访问顶点需要扫描整行 V 个位置，最多 V 行。"
    ],
    "rubric": [],
    "options": [
      "O(V²)",
      "O(log V)",
      "O(E²)",
      "O(V+E)"
    ],
    "answer": 0,
    "support": {
      "ask": "先认算法的输入前提与目标，不凭名称猜。",
      "plan": [
        "Dijkstra看非负权；邻接矩阵遍历成本按扫描V行估算。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "符合：每个访问顶点需要扫描整行 V 个位置，最多 V 行。",
      "核对条件：遍历不能通过折半跳过所有其他邻接位置。",
      "核对条件：矩阵扫描按V行每行V项计算，不让边与所有边配对。",
      "核对条件：O(V+E)是邻接表常见成本，不能直接套矩阵扫描。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R6-algorithm-boundary-v3",
    "chapter": 6,
    "mode": "review",
    "family": "R6-algorithm-boundary",
    "variant": 3,
    "title": "对非连通无向图，只从顶点 1 启动一次 BFS，能保证遍历全图吗？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      16,
      47
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "一次只覆盖起点所在连通分量。",
    "solution": [
      "一次只覆盖起点所在连通分量。"
    ],
    "rubric": [],
    "options": [
      "只能访问全部边",
      "取决于标签",
      "能",
      "不能，需要从其他未访问点再启动"
    ],
    "answer": 3,
    "support": {
      "ask": "先认算法的输入前提与目标，不凭名称猜。",
      "plan": [
        "Dijkstra看非负权；邻接矩阵遍历成本按扫描V行估算。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：跨其他连通分量的边也不会从起点1访问到。",
      "核对条件：标签不改变连通性，不能决定覆盖范围。",
      "核对条件：单次BFS只覆盖1所在分量，其他分量必须再启动。",
      "符合：一次只覆盖起点所在连通分量。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R6-algorithm-boundary-v4",
    "chapter": 6,
    "mode": "review",
    "family": "R6-algorithm-boundary",
    "variant": 4,
    "title": "最小生成树与单源最短路径树的目标是否相同？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      16,
      47
    ],
    "origin": "同类考法新题",
    "topic": "r6-6",
    "hint": "",
    "explain": "这两种贪心算法解决不同的优化目标。",
    "solution": [
      "这两种贪心算法解决不同的优化目标。"
    ],
    "rubric": [],
    "options": [
      "都不考虑权",
      "相同",
      "不同，前者最小化整树总权，后者最小化源点距离",
      "都只数边"
    ],
    "answer": 2,
    "support": {
      "ask": "先认算法的输入前提与目标，不凭名称猜。",
      "plan": [
        "Dijkstra看非负权；邻接矩阵遍历成本按扫描V行估算。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：两者都使用边权，只是优化的量不同。",
      "核对条件：总树权最小不等于每条源点距离最短。",
      "符合：这两种贪心算法解决不同的优化目标。",
      "核对条件：在带权条件下不能只数边，路径长度需累计权。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R7-binary-path-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-path",
    "variant": 1,
    "title": "有序数组 [6, 15, 30, 37, 65, 78, 89, 90, 97]，从 0 下标闭区间开始，mid 向下取整，折半查找 89。只计与中点关键字的比较。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11,
      22,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "比较序列 [65, 89]，共 2 次。\n最终下标=6。\n每次边界应排除已比较中点；闭区间循环到 low>high 才失败。",
    "solution": [
      "比较序列 [65, 89]，共 2 次。",
      "最终下标=6。",
      "每次边界应排除已比较中点；闭区间循环到 low>high 才失败。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "比较到的关键字序列",
        "answer": "65,89",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "比较次数",
        "answer": "2",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终下标（不存在填 -1）",
        "answer": "6",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "记录每轮实际读到的中点关键字。",
      "plan": [
        "闭区间从low到high都含在内，中点向下取整。",
        "比较后排除已看中点，直到命中或low>high；空区间检查不是关键字比较。"
      ],
      "format": "序列写关键字值，不写下标；最后下标不存在填−1。"
    },
    "worked": [
      {
        "caption": "每轮只把与中点关键字比较计一次",
        "heads": [
          "low",
          "high",
          "mid下标",
          "中点值",
          "下一步"
        ],
        "rows": [
          [
            "0",
            "8",
            "4",
            "65",
            "目标较大，low=5"
          ],
          [
            "5",
            "8",
            "6",
            "89",
            "相等，命中"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-path-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-path",
    "variant": 2,
    "title": "有序数组 [6, 15, 30, 37, 65, 68, 70, 72, 89, 99]，从 0 下标闭区间开始，mid 向下取整，折半查找 59。只计与中点关键字的比较。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11,
      22,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "比较序列 [65, 15, 30, 37]，共 4 次。\n最终下标=-1。\n每次边界应排除已比较中点；闭区间循环到 low>high 才失败。",
    "solution": [
      "比较序列 [65, 15, 30, 37]，共 4 次。",
      "最终下标=-1。",
      "每次边界应排除已比较中点；闭区间循环到 low>high 才失败。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "比较到的关键字序列",
        "answer": "65,15,30,37",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "比较次数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终下标（不存在填 -1）",
        "answer": "-1",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "记录每轮实际读到的中点关键字。",
      "plan": [
        "闭区间从low到high都含在内，中点向下取整。",
        "比较后排除已看中点，直到命中或low>high；空区间检查不是关键字比较。"
      ],
      "format": "序列写关键字值，不写下标；最后下标不存在填−1。"
    },
    "worked": [
      {
        "caption": "每轮只把与中点关键字比较计一次",
        "heads": [
          "low",
          "high",
          "mid下标",
          "中点值",
          "下一步"
        ],
        "rows": [
          [
            "0",
            "9",
            "4",
            "65",
            "目标较小，high=3"
          ],
          [
            "0",
            "3",
            "1",
            "15",
            "目标较大，low=2"
          ],
          [
            "2",
            "3",
            "2",
            "30",
            "目标较大，low=3"
          ],
          [
            "3",
            "3",
            "3",
            "37",
            "目标较大，low=4"
          ],
          [
            "4",
            "3",
            "不再取中点",
            "无比较",
            "区间为空，失败"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-path-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-path",
    "variant": 3,
    "title": "有序数组 [1, 3, 9, 12, 32, 41, 45, 62, 75, 77]，从 0 下标闭区间开始，mid 向下取整，折半查找 62。只计与中点关键字的比较。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11,
      22,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "比较序列 [32, 62]，共 2 次。\n最终下标=7。\n每次边界应排除已比较中点；闭区间循环到 low>high 才失败。",
    "solution": [
      "比较序列 [32, 62]，共 2 次。",
      "最终下标=7。",
      "每次边界应排除已比较中点；闭区间循环到 low>high 才失败。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "比较到的关键字序列",
        "answer": "32,62",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "比较次数",
        "answer": "2",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终下标（不存在填 -1）",
        "answer": "7",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "记录每轮实际读到的中点关键字。",
      "plan": [
        "闭区间从low到high都含在内，中点向下取整。",
        "比较后排除已看中点，直到命中或low>high；空区间检查不是关键字比较。"
      ],
      "format": "序列写关键字值，不写下标；最后下标不存在填−1。"
    },
    "worked": [
      {
        "caption": "每轮只把与中点关键字比较计一次",
        "heads": [
          "low",
          "high",
          "mid下标",
          "中点值",
          "下一步"
        ],
        "rows": [
          [
            "0",
            "9",
            "4",
            "32",
            "目标较大，low=5"
          ],
          [
            "5",
            "9",
            "7",
            "62",
            "相等，命中"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-path-v4",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-path",
    "variant": 4,
    "title": "有序数组 [11, 16, 22, 34, 45, 50, 56, 62, 69]，从 0 下标闭区间开始，mid 向下取整，折半查找 62。只计与中点关键字的比较。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11,
      22,
      23
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "比较序列 [45, 56, 62]，共 3 次。\n最终下标=7。\n每次边界应排除已比较中点；闭区间循环到 low>high 才失败。",
    "solution": [
      "比较序列 [45, 56, 62]，共 3 次。",
      "最终下标=7。",
      "每次边界应排除已比较中点；闭区间循环到 low>high 才失败。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "比较到的关键字序列",
        "answer": "45,56,62",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "比较次数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最终下标（不存在填 -1）",
        "answer": "7",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "记录每轮实际读到的中点关键字。",
      "plan": [
        "闭区间从low到high都含在内，中点向下取整。",
        "比较后排除已看中点，直到命中或low>high；空区间检查不是关键字比较。"
      ],
      "format": "序列写关键字值，不写下标；最后下标不存在填−1。"
    },
    "worked": [
      {
        "caption": "每轮只把与中点关键字比较计一次",
        "heads": [
          "low",
          "high",
          "mid下标",
          "中点值",
          "下一步"
        ],
        "rows": [
          [
            "0",
            "8",
            "4",
            "45",
            "目标较大，low=5"
          ],
          [
            "5",
            "8",
            "6",
            "56",
            "目标较大，low=7"
          ],
          [
            "7",
            "8",
            "7",
            "62",
            "相等，命中"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-fail-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-fail",
    "variant": 1,
    "title": "数组 [2, 4, 6, 8, 10, 12, 14, 16] 中用闭区间折半查找不存在的值 11，mid 向下取整。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      37,
      38
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "依次比较 [8, 12, 10]，最后区间为空，比较 3 次。\n不把最后一次空区间判断计为一次关键字比较。",
    "solution": [
      "依次比较 [8, 12, 10]，最后区间为空，比较 3 次。",
      "不把最后一次空区间判断计为一次关键字比较。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "实际比较次数",
        "answer": "3",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "比较关键字序列",
        "answer": "8,12,10",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "记录每轮实际读到的中点关键字。",
      "plan": [
        "闭区间从low到high都含在内，中点向下取整。",
        "比较后排除已看中点，直到命中或low>high；空区间检查不是关键字比较。"
      ],
      "format": "序列写关键字值，不写下标；最后下标不存在填−1。"
    },
    "worked": [
      {
        "caption": "每轮只把与中点关键字比较计一次",
        "heads": [
          "low",
          "high",
          "mid下标",
          "中点值",
          "下一步"
        ],
        "rows": [
          [
            "0",
            "7",
            "3",
            "8",
            "目标较大，low=4"
          ],
          [
            "4",
            "7",
            "5",
            "12",
            "目标较小，high=4"
          ],
          [
            "4",
            "4",
            "4",
            "10",
            "目标较大，low=5"
          ],
          [
            "5",
            "4",
            "不再取中点",
            "无比较",
            "区间为空，失败"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-fail-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-fail",
    "variant": 2,
    "title": "数组 [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] 中用闭区间折半查找不存在的值 13，mid 向下取整。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      37,
      38
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "依次比较 [10, 16, 12, 14]，最后区间为空，比较 4 次。\n不把最后一次空区间判断计为一次关键字比较。",
    "solution": [
      "依次比较 [10, 16, 12, 14]，最后区间为空，比较 4 次。",
      "不把最后一次空区间判断计为一次关键字比较。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "实际比较次数",
        "answer": "4",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "比较关键字序列",
        "answer": "10,16,12,14",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "记录每轮实际读到的中点关键字。",
      "plan": [
        "闭区间从low到high都含在内，中点向下取整。",
        "比较后排除已看中点，直到命中或low>high；空区间检查不是关键字比较。"
      ],
      "format": "序列写关键字值，不写下标；最后下标不存在填−1。"
    },
    "worked": [
      {
        "caption": "每轮只把与中点关键字比较计一次",
        "heads": [
          "low",
          "high",
          "mid下标",
          "中点值",
          "下一步"
        ],
        "rows": [
          [
            "0",
            "9",
            "4",
            "10",
            "目标较大，low=5"
          ],
          [
            "5",
            "9",
            "7",
            "16",
            "目标较小，high=6"
          ],
          [
            "5",
            "6",
            "5",
            "12",
            "目标较大，low=6"
          ],
          [
            "6",
            "6",
            "6",
            "14",
            "目标较小，high=5"
          ],
          [
            "6",
            "5",
            "不再取中点",
            "无比较",
            "区间为空，失败"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-fail-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-fail",
    "variant": 3,
    "title": "数组 [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32] 中用闭区间折半查找不存在的值 19，mid 向下取整。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      37,
      38
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "依次比较 [16, 24, 20, 18]，最后区间为空，比较 4 次。\n不把最后一次空区间判断计为一次关键字比较。",
    "solution": [
      "依次比较 [16, 24, 20, 18]，最后区间为空，比较 4 次。",
      "不把最后一次空区间判断计为一次关键字比较。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "实际比较次数",
        "answer": "4",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "比较关键字序列",
        "answer": "16,24,20,18",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "记录每轮实际读到的中点关键字。",
      "plan": [
        "闭区间从low到high都含在内，中点向下取整。",
        "比较后排除已看中点，直到命中或low>high；空区间检查不是关键字比较。"
      ],
      "format": "序列写关键字值，不写下标；最后下标不存在填−1。"
    },
    "worked": [
      {
        "caption": "每轮只把与中点关键字比较计一次",
        "heads": [
          "low",
          "high",
          "mid下标",
          "中点值",
          "下一步"
        ],
        "rows": [
          [
            "0",
            "15",
            "7",
            "16",
            "目标较大，low=8"
          ],
          [
            "8",
            "15",
            "11",
            "24",
            "目标较小，high=10"
          ],
          [
            "8",
            "10",
            "9",
            "20",
            "目标较小，high=8"
          ],
          [
            "8",
            "8",
            "8",
            "18",
            "目标较大，low=9"
          ],
          [
            "9",
            "8",
            "不再取中点",
            "无比较",
            "区间为空，失败"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-fail-v4",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-fail",
    "variant": 4,
    "title": "数组 [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40] 中用闭区间折半查找不存在的值 23，mid 向下取整。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      11,
      37,
      38
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "依次比较 [20, 30, 24, 22]，最后区间为空，比较 4 次。\n不把最后一次空区间判断计为一次关键字比较。",
    "solution": [
      "依次比较 [20, 30, 24, 22]，最后区间为空，比较 4 次。",
      "不把最后一次空区间判断计为一次关键字比较。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "实际比较次数",
        "answer": "4",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "比较关键字序列",
        "answer": "20,30,24,22",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "记录每轮实际读到的中点关键字。",
      "plan": [
        "闭区间从low到high都含在内，中点向下取整。",
        "比较后排除已看中点，直到命中或low>high；空区间检查不是关键字比较。"
      ],
      "format": "序列写关键字值，不写下标；最后下标不存在填−1。"
    },
    "worked": [
      {
        "caption": "每轮只把与中点关键字比较计一次",
        "heads": [
          "low",
          "high",
          "mid下标",
          "中点值",
          "下一步"
        ],
        "rows": [
          [
            "0",
            "19",
            "9",
            "20",
            "目标较大，low=10"
          ],
          [
            "10",
            "19",
            "14",
            "30",
            "目标较小，high=13"
          ],
          [
            "10",
            "13",
            "11",
            "24",
            "目标较小，high=10"
          ],
          [
            "10",
            "10",
            "10",
            "22",
            "目标较大，low=11"
          ],
          [
            "11",
            "10",
            "不再取中点",
            "无比较",
            "区间为空，失败"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-asl-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-asl",
    "variant": 1,
    "title": "长度 7 的有序数组，闭区间折半且 mid 向下取整，每个关键字成功概率相同。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      37,
      38
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "按每个关键字分别查找，比较次数=[3, 2, 3, 1, 3, 2, 3]。\nASL=17/7；最多 3 次。\nn 不是满判定树结点数时，不能直接当成每层都满。",
    "solution": [
      "按每个关键字分别查找，比较次数=[3, 2, 3, 1, 3, 2, 3]。",
      "ASL=17/7；最多 3 次。",
      "n 不是满判定树结点数时，不能直接当成每层都满。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "成功 ASL",
        "answer": "17/7",
        "points": 3,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "成功最多比较次数",
        "answer": "3",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每个关键字成功机会相同，需平均各自的查找比较次数。",
      "plan": [
        "对每个键走一遍判定路径，或按判定树层数统计。",
        "把比较次数求和再除n；不是所有键都花相同的log n次。"
      ],
      "format": "ASL可填分数；最大次数另取各项最大值。"
    },
    "worked": [
      {
        "caption": "每个键各自成功一次，再对比较次数取平均",
        "heads": [
          "目标键",
          "依次比较到的键",
          "比较次数"
        ],
        "rows": [
          [
            "1",
            "4，2，1",
            "3"
          ],
          [
            "2",
            "4，2",
            "2"
          ],
          [
            "3",
            "4，2，3",
            "3"
          ],
          [
            "4",
            "4",
            "1"
          ],
          [
            "5",
            "4，6，5",
            "3"
          ],
          [
            "6",
            "4，6",
            "2"
          ],
          [
            "7",
            "4，6，7",
            "3"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-asl-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-asl",
    "variant": 2,
    "title": "长度 8 的有序数组，闭区间折半且 mid 向下取整，每个关键字成功概率相同。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      37,
      38
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "按每个关键字分别查找，比较次数=[3, 2, 3, 1, 3, 2, 3, 4]。\nASL=21/8；最多 4 次。\nn 不是满判定树结点数时，不能直接当成每层都满。",
    "solution": [
      "按每个关键字分别查找，比较次数=[3, 2, 3, 1, 3, 2, 3, 4]。",
      "ASL=21/8；最多 4 次。",
      "n 不是满判定树结点数时，不能直接当成每层都满。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "成功 ASL",
        "answer": "21/8",
        "points": 3,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "成功最多比较次数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每个关键字成功机会相同，需平均各自的查找比较次数。",
      "plan": [
        "对每个键走一遍判定路径，或按判定树层数统计。",
        "把比较次数求和再除n；不是所有键都花相同的log n次。"
      ],
      "format": "ASL可填分数；最大次数另取各项最大值。"
    },
    "worked": [
      {
        "caption": "每个键各自成功一次，再对比较次数取平均",
        "heads": [
          "目标键",
          "依次比较到的键",
          "比较次数"
        ],
        "rows": [
          [
            "1",
            "4，2，1",
            "3"
          ],
          [
            "2",
            "4，2",
            "2"
          ],
          [
            "3",
            "4，2，3",
            "3"
          ],
          [
            "4",
            "4",
            "1"
          ],
          [
            "5",
            "4，6，5",
            "3"
          ],
          [
            "6",
            "4，6",
            "2"
          ],
          [
            "7",
            "4，6，7",
            "3"
          ],
          [
            "8",
            "4，6，7，8",
            "4"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-asl-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-asl",
    "variant": 3,
    "title": "长度 15 的有序数组，闭区间折半且 mid 向下取整，每个关键字成功概率相同。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      37,
      38
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "按每个关键字分别查找，比较次数=[4, 3, 4, 2, 4, 3, 4, 1, 4, 3, 4, 2, 4, 3, 4]。\nASL=49/15；最多 4 次。\nn 不是满判定树结点数时，不能直接当成每层都满。",
    "solution": [
      "按每个关键字分别查找，比较次数=[4, 3, 4, 2, 4, 3, 4, 1, 4, 3, 4, 2, 4, 3, 4]。",
      "ASL=49/15；最多 4 次。",
      "n 不是满判定树结点数时，不能直接当成每层都满。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "成功 ASL",
        "answer": "49/15",
        "points": 3,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "成功最多比较次数",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每个关键字成功机会相同，需平均各自的查找比较次数。",
      "plan": [
        "对每个键走一遍判定路径，或按判定树层数统计。",
        "把比较次数求和再除n；不是所有键都花相同的log n次。"
      ],
      "format": "ASL可填分数；最大次数另取各项最大值。"
    },
    "worked": [
      {
        "caption": "每个键各自成功一次，再对比较次数取平均",
        "heads": [
          "目标键",
          "依次比较到的键",
          "比较次数"
        ],
        "rows": [
          [
            "1",
            "8，4，2，1",
            "4"
          ],
          [
            "2",
            "8，4，2",
            "3"
          ],
          [
            "3",
            "8，4，2，3",
            "4"
          ],
          [
            "4",
            "8，4",
            "2"
          ],
          [
            "5",
            "8，4，6，5",
            "4"
          ],
          [
            "6",
            "8，4，6",
            "3"
          ],
          [
            "7",
            "8，4，6，7",
            "4"
          ],
          [
            "8",
            "8",
            "1"
          ],
          [
            "9",
            "8，12，10，9",
            "4"
          ],
          [
            "10",
            "8，12，10",
            "3"
          ],
          [
            "11",
            "8，12，10，11",
            "4"
          ],
          [
            "12",
            "8，12",
            "2"
          ],
          [
            "13",
            "8，12，14，13",
            "4"
          ],
          [
            "14",
            "8，12，14",
            "3"
          ],
          [
            "15",
            "8，12，14，15",
            "4"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-binary-asl-v4",
    "chapter": 7,
    "mode": "review",
    "family": "R7-binary-asl",
    "variant": 4,
    "title": "长度 16 的有序数组，闭区间折半且 mid 向下取整，每个关键字成功概率相同。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      37,
      38
    ],
    "origin": "同类考法新题",
    "topic": "r7-1",
    "hint": "",
    "explain": "按每个关键字分别查找，比较次数=[4, 3, 4, 2, 4, 3, 4, 1, 4, 3, 4, 2, 4, 3, 4, 5]。\nASL=54/16；最多 5 次。\nn 不是满判定树结点数时，不能直接当成每层都满。",
    "solution": [
      "按每个关键字分别查找，比较次数=[4, 3, 4, 2, 4, 3, 4, 1, 4, 3, 4, 2, 4, 3, 4, 5]。",
      "ASL=54/16；最多 5 次。",
      "n 不是满判定树结点数时，不能直接当成每层都满。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "成功 ASL",
        "answer": "27/8",
        "points": 3,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "成功最多比较次数",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "每个关键字成功机会相同，需平均各自的查找比较次数。",
      "plan": [
        "对每个键走一遍判定路径，或按判定树层数统计。",
        "把比较次数求和再除n；不是所有键都花相同的log n次。"
      ],
      "format": "ASL可填分数；最大次数另取各项最大值。"
    },
    "worked": [
      {
        "caption": "每个键各自成功一次，再对比较次数取平均",
        "heads": [
          "目标键",
          "依次比较到的键",
          "比较次数"
        ],
        "rows": [
          [
            "1",
            "8，4，2，1",
            "4"
          ],
          [
            "2",
            "8，4，2",
            "3"
          ],
          [
            "3",
            "8，4，2，3",
            "4"
          ],
          [
            "4",
            "8，4",
            "2"
          ],
          [
            "5",
            "8，4，6，5",
            "4"
          ],
          [
            "6",
            "8，4，6",
            "3"
          ],
          [
            "7",
            "8，4，6，7",
            "4"
          ],
          [
            "8",
            "8",
            "1"
          ],
          [
            "9",
            "8，12，10，9",
            "4"
          ],
          [
            "10",
            "8，12，10",
            "3"
          ],
          [
            "11",
            "8，12，10，11",
            "4"
          ],
          [
            "12",
            "8，12",
            "2"
          ],
          [
            "13",
            "8，12，14，13",
            "4"
          ],
          [
            "14",
            "8，12，14",
            "3"
          ],
          [
            "15",
            "8，12，14，15",
            "4"
          ],
          [
            "16",
            "8，12，14，15，16",
            "5"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-bst-full-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-bst-full",
    "variant": 1,
    "title": "将 [19, 18, 60, 40, 7, 31, 72, 65] 依次插入空 BST，不平衡旋转。画树（或写每个结点的左右孩子），并求等概率成功 ASL。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      8,
      33,
      40
    ],
    "origin": "同类考法新题",
    "topic": "r7-2",
    "hint": "",
    "explain": "19:左=18,右=60\n18:左=7,右=空\n7:左=空,右=空\n60:左=40,右=72\n40:左=31,右=空\n31:左=空,右=空\n72:左=65,右=空\n65:左=空,右=空\n层数和=22，ASL=11/4≈2.750000。\n根比较也计一次；相同键集合的插入次序可能改变 ASL。",
    "solution": [
      "19:左=18,右=60",
      "18:左=7,右=空",
      "7:左=空,右=空",
      "60:左=40,右=72",
      "40:左=31,右=空",
      "31:左=空,右=空",
      "72:左=65,右=空",
      "65:左=空,右=空",
      "层数和=22，ASL=11/4≈2.750000。",
      "根比较也计一次；相同键集合的插入次序可能改变 ASL。"
    ],
    "rubric": [
      {
        "label": "根及全部左右大小关系正确",
        "points": 4
      },
      {
        "label": "层数/比较次数逐点计数正确",
        "points": 2
      },
      {
        "label": "ASL 使用正确分母并求值",
        "points": 2
      }
    ],
    "support": {
      "ask": "按题给次序插入，而不是先排序再构树。",
      "plan": [
        "从根比较，小左大右，到空位接新叶子，并记录每个键最终层数。",
        "中序应递增；成功等概率ASL为全部层数和除记录数，根计1。"
      ],
      "format": "画图可用逐点左右孩子替代；层数不是边数。"
    },
    "worked": [
      {
        "caption": "只按给定插入次序走链接，层数从根1开始",
        "heads": [
          "插入键",
          "走过的方向",
          "最终层数",
          "动作"
        ],
        "rows": [
          [
            "19",
            "空树",
            "1",
            "根"
          ],
          [
            "18",
            "19左",
            "2",
            "作为新叶子插入"
          ],
          [
            "60",
            "19右",
            "2",
            "作为新叶子插入"
          ],
          [
            "40",
            "19右→60左",
            "3",
            "作为新叶子插入"
          ],
          [
            "7",
            "19左→18左",
            "3",
            "作为新叶子插入"
          ],
          [
            "31",
            "19右→60左→40左",
            "4",
            "作为新叶子插入"
          ],
          [
            "72",
            "19右→60右",
            "3",
            "作为新叶子插入"
          ],
          [
            "65",
            "19右→60右→72左",
            "4",
            "作为新叶子插入"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R7-bst-full-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-bst-full",
    "variant": 2,
    "title": "将 [10, 18, 4, 13, 16, 5, 8, 2] 依次插入空 BST，不平衡旋转。画树（或写每个结点的左右孩子），并求等概率成功 ASL。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      8,
      33,
      40
    ],
    "origin": "同类考法新题",
    "topic": "r7-2",
    "hint": "",
    "explain": "10:左=4,右=18\n4:左=2,右=5\n2:左=空,右=空\n5:左=空,右=8\n8:左=空,右=空\n18:左=13,右=空\n13:左=空,右=16\n16:左=空,右=空\n层数和=22，ASL=11/4≈2.750000。\n根比较也计一次；相同键集合的插入次序可能改变 ASL。",
    "solution": [
      "10:左=4,右=18",
      "4:左=2,右=5",
      "2:左=空,右=空",
      "5:左=空,右=8",
      "8:左=空,右=空",
      "18:左=13,右=空",
      "13:左=空,右=16",
      "16:左=空,右=空",
      "层数和=22，ASL=11/4≈2.750000。",
      "根比较也计一次；相同键集合的插入次序可能改变 ASL。"
    ],
    "rubric": [
      {
        "label": "根及全部左右大小关系正确",
        "points": 4
      },
      {
        "label": "层数/比较次数逐点计数正确",
        "points": 2
      },
      {
        "label": "ASL 使用正确分母并求值",
        "points": 2
      }
    ],
    "support": {
      "ask": "按题给次序插入，而不是先排序再构树。",
      "plan": [
        "从根比较，小左大右，到空位接新叶子，并记录每个键最终层数。",
        "中序应递增；成功等概率ASL为全部层数和除记录数，根计1。"
      ],
      "format": "画图可用逐点左右孩子替代；层数不是边数。"
    },
    "worked": [
      {
        "caption": "只按给定插入次序走链接，层数从根1开始",
        "heads": [
          "插入键",
          "走过的方向",
          "最终层数",
          "动作"
        ],
        "rows": [
          [
            "10",
            "空树",
            "1",
            "根"
          ],
          [
            "18",
            "10右",
            "2",
            "作为新叶子插入"
          ],
          [
            "4",
            "10左",
            "2",
            "作为新叶子插入"
          ],
          [
            "13",
            "10右→18左",
            "3",
            "作为新叶子插入"
          ],
          [
            "16",
            "10右→18左→13右",
            "4",
            "作为新叶子插入"
          ],
          [
            "5",
            "10左→4右",
            "3",
            "作为新叶子插入"
          ],
          [
            "8",
            "10左→4右→5右",
            "4",
            "作为新叶子插入"
          ],
          [
            "2",
            "10左→4左",
            "3",
            "作为新叶子插入"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R7-bst-full-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-bst-full",
    "variant": 3,
    "title": "将 [30, 20, 40, 10, 25, 35, 50] 依次插入空 BST，不平衡旋转。画树（或写每个结点的左右孩子），并求等概率成功 ASL。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      8,
      33,
      40
    ],
    "origin": "同类考法新题",
    "topic": "r7-2",
    "hint": "",
    "explain": "30:左=20,右=40\n20:左=10,右=25\n10:左=空,右=空\n25:左=空,右=空\n40:左=35,右=50\n35:左=空,右=空\n50:左=空,右=空\n层数和=17，ASL=17/7≈2.428571。\n根比较也计一次；相同键集合的插入次序可能改变 ASL。",
    "solution": [
      "30:左=20,右=40",
      "20:左=10,右=25",
      "10:左=空,右=空",
      "25:左=空,右=空",
      "40:左=35,右=50",
      "35:左=空,右=空",
      "50:左=空,右=空",
      "层数和=17，ASL=17/7≈2.428571。",
      "根比较也计一次；相同键集合的插入次序可能改变 ASL。"
    ],
    "rubric": [
      {
        "label": "根及全部左右大小关系正确",
        "points": 4
      },
      {
        "label": "层数/比较次数逐点计数正确",
        "points": 2
      },
      {
        "label": "ASL 使用正确分母并求值",
        "points": 2
      }
    ],
    "support": {
      "ask": "按题给次序插入，而不是先排序再构树。",
      "plan": [
        "从根比较，小左大右，到空位接新叶子，并记录每个键最终层数。",
        "中序应递增；成功等概率ASL为全部层数和除记录数，根计1。"
      ],
      "format": "画图可用逐点左右孩子替代；层数不是边数。"
    },
    "worked": [
      {
        "caption": "只按给定插入次序走链接，层数从根1开始",
        "heads": [
          "插入键",
          "走过的方向",
          "最终层数",
          "动作"
        ],
        "rows": [
          [
            "30",
            "空树",
            "1",
            "根"
          ],
          [
            "20",
            "30左",
            "2",
            "作为新叶子插入"
          ],
          [
            "40",
            "30右",
            "2",
            "作为新叶子插入"
          ],
          [
            "10",
            "30左→20左",
            "3",
            "作为新叶子插入"
          ],
          [
            "25",
            "30左→20右",
            "3",
            "作为新叶子插入"
          ],
          [
            "35",
            "30右→40左",
            "3",
            "作为新叶子插入"
          ],
          [
            "50",
            "30右→40右",
            "3",
            "作为新叶子插入"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R7-bst-full-v4",
    "chapter": 7,
    "mode": "review",
    "family": "R7-bst-full",
    "variant": 4,
    "title": "将 [12, 5, 18, 3, 8, 15, 20, 7] 依次插入空 BST，不平衡旋转。画树（或写每个结点的左右孩子），并求等概率成功 ASL。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      8,
      33,
      40
    ],
    "origin": "同类考法新题",
    "topic": "r7-2",
    "hint": "",
    "explain": "12:左=5,右=18\n5:左=3,右=8\n3:左=空,右=空\n8:左=7,右=空\n7:左=空,右=空\n18:左=15,右=20\n15:左=空,右=空\n20:左=空,右=空\n层数和=21，ASL=21/8≈2.625000。\n根比较也计一次；相同键集合的插入次序可能改变 ASL。",
    "solution": [
      "12:左=5,右=18",
      "5:左=3,右=8",
      "3:左=空,右=空",
      "8:左=7,右=空",
      "7:左=空,右=空",
      "18:左=15,右=20",
      "15:左=空,右=空",
      "20:左=空,右=空",
      "层数和=21，ASL=21/8≈2.625000。",
      "根比较也计一次；相同键集合的插入次序可能改变 ASL。"
    ],
    "rubric": [
      {
        "label": "根及全部左右大小关系正确",
        "points": 4
      },
      {
        "label": "层数/比较次数逐点计数正确",
        "points": 2
      },
      {
        "label": "ASL 使用正确分母并求值",
        "points": 2
      }
    ],
    "support": {
      "ask": "按题给次序插入，而不是先排序再构树。",
      "plan": [
        "从根比较，小左大右，到空位接新叶子，并记录每个键最终层数。",
        "中序应递增；成功等概率ASL为全部层数和除记录数，根计1。"
      ],
      "format": "画图可用逐点左右孩子替代；层数不是边数。"
    },
    "worked": [
      {
        "caption": "只按给定插入次序走链接，层数从根1开始",
        "heads": [
          "插入键",
          "走过的方向",
          "最终层数",
          "动作"
        ],
        "rows": [
          [
            "12",
            "空树",
            "1",
            "根"
          ],
          [
            "5",
            "12左",
            "2",
            "作为新叶子插入"
          ],
          [
            "18",
            "12右",
            "2",
            "作为新叶子插入"
          ],
          [
            "3",
            "12左→5左",
            "3",
            "作为新叶子插入"
          ],
          [
            "8",
            "12左→5右",
            "3",
            "作为新叶子插入"
          ],
          [
            "15",
            "12右→18左",
            "3",
            "作为新叶子插入"
          ],
          [
            "20",
            "12右→18右",
            "3",
            "作为新叶子插入"
          ],
          [
            "7",
            "12左→5右→8左",
            "4",
            "作为新叶子插入"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R7-bst-delete-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-bst-delete",
    "variant": 1,
    "title": "BST 由 [20, 10, 30, 5, 15, 25, 35] 插入得到，删除 20。若待删结点有两孩子，统一使用中序后继替代。写出最终链接或画图并解释。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      8,
      33,
      40
    ],
    "origin": "同类考法新题",
    "topic": "r7-2",
    "hint": "",
    "explain": "25:左=10,右=30\n10:左=5,右=15\n5:左=空,右=空\n15:左=空,右=空\n30:左=空,右=35\n35:左=空,右=空\n两孩子删除：先取右子树最小值替换，再删除右子树对应原结点；不是直接丢弃整棵子树。",
    "solution": [
      "25:左=10,右=30",
      "10:左=5,右=15",
      "5:左=空,右=空",
      "15:左=空,右=空",
      "30:左=空,右=35",
      "35:左=空,右=空",
      "两孩子删除：先取右子树最小值替换，再删除右子树对应原结点；不是直接丢弃整棵子树。"
    ],
    "rubric": [
      {
        "label": "准确定位待删结点与后继",
        "points": 2
      },
      {
        "label": "后继值替代后继续正确删除原后继",
        "points": 3
      },
      {
        "label": "所有剩余链接和 BST 次序正确",
        "points": 3
      }
    ],
    "support": {
      "ask": "两孩子结点统一用中序后继替代，不能随意换前驱。",
      "plan": [
        "后继是右子树最左结点，先用它的值替代被删值。",
        "再删除后继的原结点，把它可能的右孩子正确接回。"
      ],
      "format": "写最终每点左右孩子或画图，检查目标值消失且其他值不丢。"
    },
    "worked": [
      {
        "caption": "只按给定插入次序走链接，层数从根1开始",
        "heads": [
          "插入键",
          "走过的方向",
          "最终层数",
          "动作"
        ],
        "rows": [
          [
            "20",
            "空树",
            "1",
            "根"
          ],
          [
            "10",
            "20左",
            "2",
            "作为新叶子插入"
          ],
          [
            "30",
            "20右",
            "2",
            "作为新叶子插入"
          ],
          [
            "5",
            "20左→10左",
            "3",
            "作为新叶子插入"
          ],
          [
            "15",
            "20左→10右",
            "3",
            "作为新叶子插入"
          ],
          [
            "25",
            "20右→30左",
            "3",
            "作为新叶子插入"
          ],
          [
            "35",
            "20右→30右",
            "3",
            "作为新叶子插入"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R7-bst-delete-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-bst-delete",
    "variant": 2,
    "title": "BST 由 [8, 3, 12, 1, 6, 10, 14] 插入得到，删除 3。若待删结点有两孩子，统一使用中序后继替代。写出最终链接或画图并解释。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      8,
      33,
      40
    ],
    "origin": "同类考法新题",
    "topic": "r7-2",
    "hint": "",
    "explain": "8:左=6,右=12\n6:左=1,右=空\n1:左=空,右=空\n12:左=10,右=14\n10:左=空,右=空\n14:左=空,右=空\n两孩子删除：先取右子树最小值替换，再删除右子树对应原结点；不是直接丢弃整棵子树。",
    "solution": [
      "8:左=6,右=12",
      "6:左=1,右=空",
      "1:左=空,右=空",
      "12:左=10,右=14",
      "10:左=空,右=空",
      "14:左=空,右=空",
      "两孩子删除：先取右子树最小值替换，再删除右子树对应原结点；不是直接丢弃整棵子树。"
    ],
    "rubric": [
      {
        "label": "准确定位待删结点与后继",
        "points": 2
      },
      {
        "label": "后继值替代后继续正确删除原后继",
        "points": 3
      },
      {
        "label": "所有剩余链接和 BST 次序正确",
        "points": 3
      }
    ],
    "support": {
      "ask": "两孩子结点统一用中序后继替代，不能随意换前驱。",
      "plan": [
        "后继是右子树最左结点，先用它的值替代被删值。",
        "再删除后继的原结点，把它可能的右孩子正确接回。"
      ],
      "format": "写最终每点左右孩子或画图，检查目标值消失且其他值不丢。"
    },
    "worked": [
      {
        "caption": "只按给定插入次序走链接，层数从根1开始",
        "heads": [
          "插入键",
          "走过的方向",
          "最终层数",
          "动作"
        ],
        "rows": [
          [
            "8",
            "空树",
            "1",
            "根"
          ],
          [
            "3",
            "8左",
            "2",
            "作为新叶子插入"
          ],
          [
            "12",
            "8右",
            "2",
            "作为新叶子插入"
          ],
          [
            "1",
            "8左→3左",
            "3",
            "作为新叶子插入"
          ],
          [
            "6",
            "8左→3右",
            "3",
            "作为新叶子插入"
          ],
          [
            "10",
            "8右→12左",
            "3",
            "作为新叶子插入"
          ],
          [
            "14",
            "8右→12右",
            "3",
            "作为新叶子插入"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R7-bst-delete-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-bst-delete",
    "variant": 3,
    "title": "BST 由 [15, 7, 20, 3, 10, 18, 25] 插入得到，删除 15。若待删结点有两孩子，统一使用中序后继替代。写出最终链接或画图并解释。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      8,
      33,
      40
    ],
    "origin": "同类考法新题",
    "topic": "r7-2",
    "hint": "",
    "explain": "18:左=7,右=20\n7:左=3,右=10\n3:左=空,右=空\n10:左=空,右=空\n20:左=空,右=25\n25:左=空,右=空\n两孩子删除：先取右子树最小值替换，再删除右子树对应原结点；不是直接丢弃整棵子树。",
    "solution": [
      "18:左=7,右=20",
      "7:左=3,右=10",
      "3:左=空,右=空",
      "10:左=空,右=空",
      "20:左=空,右=25",
      "25:左=空,右=空",
      "两孩子删除：先取右子树最小值替换，再删除右子树对应原结点；不是直接丢弃整棵子树。"
    ],
    "rubric": [
      {
        "label": "准确定位待删结点与后继",
        "points": 2
      },
      {
        "label": "后继值替代后继续正确删除原后继",
        "points": 3
      },
      {
        "label": "所有剩余链接和 BST 次序正确",
        "points": 3
      }
    ],
    "support": {
      "ask": "两孩子结点统一用中序后继替代，不能随意换前驱。",
      "plan": [
        "后继是右子树最左结点，先用它的值替代被删值。",
        "再删除后继的原结点，把它可能的右孩子正确接回。"
      ],
      "format": "写最终每点左右孩子或画图，检查目标值消失且其他值不丢。"
    },
    "worked": [
      {
        "caption": "只按给定插入次序走链接，层数从根1开始",
        "heads": [
          "插入键",
          "走过的方向",
          "最终层数",
          "动作"
        ],
        "rows": [
          [
            "15",
            "空树",
            "1",
            "根"
          ],
          [
            "7",
            "15左",
            "2",
            "作为新叶子插入"
          ],
          [
            "20",
            "15右",
            "2",
            "作为新叶子插入"
          ],
          [
            "3",
            "15左→7左",
            "3",
            "作为新叶子插入"
          ],
          [
            "10",
            "15左→7右",
            "3",
            "作为新叶子插入"
          ],
          [
            "18",
            "15右→20左",
            "3",
            "作为新叶子插入"
          ],
          [
            "25",
            "15右→20右",
            "3",
            "作为新叶子插入"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R7-avl-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-avl",
    "variant": 1,
    "title": "将 [30, 20, 10] 插入空 AVL，平衡因子=左高−右高。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11
    ],
    "origin": "同类考法新题",
    "topic": "r7-3",
    "hint": "",
    "explain": "失衡在原根 30，采用右旋。\n最终根 20，左孩子 10，右孩子 30；中序保持 10,20,30。",
    "solution": [
      "失衡在原根 30，采用右旋。",
      "最终根 20，左孩子 10，右孩子 30；中序保持 10,20,30。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "失衡型",
        "answer": "LL",
        "points": 2,
        "kind": "text",
        "aliases": []
      },
      {
        "label": "调整后根值",
        "answer": "20",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "调整后中序",
        "answer": "10,20,30",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "高度差采用左高减右高，失衡型与旋转方向不要混淆。",
      "plan": [
        "从新结点向上找最近失衡祖先，看路径LL、RR、LR或RL。",
        "重接后验证中序不变，检查平衡因子落在−1、0、1。"
      ],
      "format": "失衡型用LL等字母；根值、中序分别填写。"
    },
    "walkthrough": [
      "高度差采用左高减右高，失衡型与旋转方向不要混淆。",
      "从新结点向上找最近失衡祖先，看路径LL、RR、LR或RL。",
      "重接后验证中序不变，检查平衡因子落在−1、0、1。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-avl-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-avl",
    "variant": 2,
    "title": "将 [10, 20, 30] 插入空 AVL，平衡因子=左高−右高。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11
    ],
    "origin": "同类考法新题",
    "topic": "r7-3",
    "hint": "",
    "explain": "失衡在原根 10，采用左旋。\n最终根 20，左孩子 10，右孩子 30；中序保持 10,20,30。",
    "solution": [
      "失衡在原根 10，采用左旋。",
      "最终根 20，左孩子 10，右孩子 30；中序保持 10,20,30。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "失衡型",
        "answer": "RR",
        "points": 2,
        "kind": "text",
        "aliases": []
      },
      {
        "label": "调整后根值",
        "answer": "20",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "调整后中序",
        "answer": "10,20,30",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "高度差采用左高减右高，失衡型与旋转方向不要混淆。",
      "plan": [
        "从新结点向上找最近失衡祖先，看路径LL、RR、LR或RL。",
        "重接后验证中序不变，检查平衡因子落在−1、0、1。"
      ],
      "format": "失衡型用LL等字母；根值、中序分别填写。"
    },
    "walkthrough": [
      "高度差采用左高减右高，失衡型与旋转方向不要混淆。",
      "从新结点向上找最近失衡祖先，看路径LL、RR、LR或RL。",
      "重接后验证中序不变，检查平衡因子落在−1、0、1。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-avl-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-avl",
    "variant": 3,
    "title": "将 [30, 10, 20] 插入空 AVL，平衡因子=左高−右高。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11
    ],
    "origin": "同类考法新题",
    "topic": "r7-3",
    "hint": "",
    "explain": "失衡在原根 30，采用先左后右。\n最终根 20，左孩子 10，右孩子 30；中序保持 10,20,30。",
    "solution": [
      "失衡在原根 30，采用先左后右。",
      "最终根 20，左孩子 10，右孩子 30；中序保持 10,20,30。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "失衡型",
        "answer": "LR",
        "points": 2,
        "kind": "text",
        "aliases": []
      },
      {
        "label": "调整后根值",
        "answer": "20",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "调整后中序",
        "answer": "10,20,30",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "高度差采用左高减右高，失衡型与旋转方向不要混淆。",
      "plan": [
        "从新结点向上找最近失衡祖先，看路径LL、RR、LR或RL。",
        "重接后验证中序不变，检查平衡因子落在−1、0、1。"
      ],
      "format": "失衡型用LL等字母；根值、中序分别填写。"
    },
    "walkthrough": [
      "高度差采用左高减右高，失衡型与旋转方向不要混淆。",
      "从新结点向上找最近失衡祖先，看路径LL、RR、LR或RL。",
      "重接后验证中序不变，检查平衡因子落在−1、0、1。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-avl-v4",
    "chapter": 7,
    "mode": "review",
    "family": "R7-avl",
    "variant": 4,
    "title": "将 [10, 30, 20] 插入空 AVL，平衡因子=左高−右高。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      11
    ],
    "origin": "同类考法新题",
    "topic": "r7-3",
    "hint": "",
    "explain": "失衡在原根 10，采用先右后左。\n最终根 20，左孩子 10，右孩子 30；中序保持 10,20,30。",
    "solution": [
      "失衡在原根 10，采用先右后左。",
      "最终根 20，左孩子 10，右孩子 30；中序保持 10,20,30。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "失衡型",
        "answer": "RL",
        "points": 2,
        "kind": "text",
        "aliases": []
      },
      {
        "label": "调整后根值",
        "answer": "20",
        "points": 1,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "调整后中序",
        "answer": "10,20,30",
        "points": 1,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "高度差采用左高减右高，失衡型与旋转方向不要混淆。",
      "plan": [
        "从新结点向上找最近失衡祖先，看路径LL、RR、LR或RL。",
        "重接后验证中序不变，检查平衡因子落在−1、0、1。"
      ],
      "format": "失衡型用LL等字母；根值、中序分别填写。"
    },
    "walkthrough": [
      "高度差采用左高减右高，失衡型与旋转方向不要混淆。",
      "从新结点向上找最近失衡祖先，看路径LL、RR、LR或RL。",
      "重接后验证中序不变，检查平衡因子落在−1、0、1。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-hash-full-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-full",
    "variant": 1,
    "title": "关键字依次 [22, 41, 53, 8, 16, 30, 1, 31, 55]；表长 m=15，H(key)=(1*key)%11；冲突线性探测 (H+j)%m，j=0,1,…。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      13,
      41,
      42
    ],
    "origin": "历年题改编",
    "topic": "r7-4",
    "hint": "",
    "explain": "最终表=[22, 1, 55, None, None, 16, None, None, 41, 53, 8, 30, 31, None, None]。\n按插入键顺序的成功比较次数=[1, 1, 1, 3, 1, 4, 1, 4, 3]。\nASL=19/9；初地址对 11 取模，探测对 15 取模。",
    "solution": [
      "最终表=[22, 1, 55, None, None, 16, None, None, 41, 53, 8, 30, 31, None, None]。",
      "按插入键顺序的成功比较次数=[1, 1, 1, 3, 1, 4, 1, 4, 3]。",
      "ASL=19/9；初地址对 11 取模，探测对 15 取模。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按地址 0..m-1 的表内容，空槽填 _",
        "answer": "22,1,55,_,_,16,_,_,41,53,8,30,31,_,_",
        "points": 5,
        "kind": "slots",
        "aliases": []
      },
      {
        "label": "成功等概率 ASL",
        "answer": "19/9",
        "points": 3,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "初地址的模数p和探测绕回表长m必须分开。",
      "plan": [
        "逐键算初地址，碰撞后每次加1并对m取余，记完整探测链。",
        "成功次数包含最后写入/命中槽，等概率ASL按关键字平均。"
      ],
      "format": "表按0..m−1逐槽写，空位写_；次数按插入键次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "22",
            "0",
            "0",
            "1"
          ],
          [
            "41",
            "8",
            "8",
            "1"
          ],
          [
            "53",
            "9",
            "9",
            "1"
          ],
          [
            "8",
            "8",
            "8，9，10",
            "3"
          ],
          [
            "16",
            "5",
            "5",
            "1"
          ],
          [
            "30",
            "8",
            "8，9，10，11",
            "4"
          ],
          [
            "1",
            "1",
            "1",
            "1"
          ],
          [
            "31",
            "9",
            "9，10，11，12",
            "4"
          ],
          [
            "55",
            "0",
            "0，1，2",
            "3"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "22"
          ],
          [
            "1",
            "1"
          ],
          [
            "2",
            "55"
          ],
          [
            "3",
            "_"
          ],
          [
            "4",
            "_"
          ],
          [
            "5",
            "16"
          ],
          [
            "6",
            "_"
          ],
          [
            "7",
            "_"
          ],
          [
            "8",
            "41"
          ],
          [
            "9",
            "53"
          ],
          [
            "10",
            "8"
          ],
          [
            "11",
            "30"
          ],
          [
            "12",
            "31"
          ],
          [
            "13",
            "_"
          ],
          [
            "14",
            "_"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-hash-full-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-full",
    "variant": 2,
    "title": "关键字依次 [22, 41, 53, 8, 46, 30, 1, 31, 66]；表长 m=11，H(key)=(3*key)%11；冲突线性探测 (H+j)%m，j=0,1,…。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      13,
      41,
      42
    ],
    "origin": "历年题改编",
    "topic": "r7-4",
    "hint": "",
    "explain": "最终表=[22, 66, 41, 8, 30, 53, 46, 1, 31, None, None]。\n按插入键顺序的成功比较次数=[1, 1, 1, 2, 1, 3, 5, 4, 2]。\nASL=20/9；初地址对 11 取模，探测对 11 取模。",
    "solution": [
      "最终表=[22, 66, 41, 8, 30, 53, 46, 1, 31, None, None]。",
      "按插入键顺序的成功比较次数=[1, 1, 1, 2, 1, 3, 5, 4, 2]。",
      "ASL=20/9；初地址对 11 取模，探测对 11 取模。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按地址 0..m-1 的表内容，空槽填 _",
        "answer": "22,66,41,8,30,53,46,1,31,_,_",
        "points": 5,
        "kind": "slots",
        "aliases": []
      },
      {
        "label": "成功等概率 ASL",
        "answer": "20/9",
        "points": 3,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "初地址的模数p和探测绕回表长m必须分开。",
      "plan": [
        "逐键算初地址，碰撞后每次加1并对m取余，记完整探测链。",
        "成功次数包含最后写入/命中槽，等概率ASL按关键字平均。"
      ],
      "format": "表按0..m−1逐槽写，空位写_；次数按插入键次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "22",
            "0",
            "0",
            "1"
          ],
          [
            "41",
            "2",
            "2",
            "1"
          ],
          [
            "53",
            "5",
            "5",
            "1"
          ],
          [
            "8",
            "2",
            "2，3",
            "2"
          ],
          [
            "46",
            "6",
            "6",
            "1"
          ],
          [
            "30",
            "2",
            "2，3，4",
            "3"
          ],
          [
            "1",
            "3",
            "3，4，5，6，7",
            "5"
          ],
          [
            "31",
            "5",
            "5，6，7，8",
            "4"
          ],
          [
            "66",
            "0",
            "0，1",
            "2"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "22"
          ],
          [
            "1",
            "66"
          ],
          [
            "2",
            "41"
          ],
          [
            "3",
            "8"
          ],
          [
            "4",
            "30"
          ],
          [
            "5",
            "53"
          ],
          [
            "6",
            "46"
          ],
          [
            "7",
            "1"
          ],
          [
            "8",
            "31"
          ],
          [
            "9",
            "_"
          ],
          [
            "10",
            "_"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-hash-full-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-full",
    "variant": 3,
    "title": "关键字依次 [32, 13, 49, 55, 22, 39, 20]；表长 m=8，H(key)=(1*key)%7；冲突线性探测 (H+j)%m，j=0,1,…。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      13,
      41,
      42
    ],
    "origin": "历年题改编",
    "topic": "r7-4",
    "hint": "",
    "explain": "最终表=[49, 22, 20, None, 32, 39, 13, 55]。\n按插入键顺序的成功比较次数=[1, 1, 1, 2, 1, 2, 5]。\nASL=13/7；初地址对 7 取模，探测对 8 取模。",
    "solution": [
      "最终表=[49, 22, 20, None, 32, 39, 13, 55]。",
      "按插入键顺序的成功比较次数=[1, 1, 1, 2, 1, 2, 5]。",
      "ASL=13/7；初地址对 7 取模，探测对 8 取模。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按地址 0..m-1 的表内容，空槽填 _",
        "answer": "49,22,20,_,32,39,13,55",
        "points": 5,
        "kind": "slots",
        "aliases": []
      },
      {
        "label": "成功等概率 ASL",
        "answer": "13/7",
        "points": 3,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "初地址的模数p和探测绕回表长m必须分开。",
      "plan": [
        "逐键算初地址，碰撞后每次加1并对m取余，记完整探测链。",
        "成功次数包含最后写入/命中槽，等概率ASL按关键字平均。"
      ],
      "format": "表按0..m−1逐槽写，空位写_；次数按插入键次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "32",
            "4",
            "4",
            "1"
          ],
          [
            "13",
            "6",
            "6",
            "1"
          ],
          [
            "49",
            "0",
            "0",
            "1"
          ],
          [
            "55",
            "6",
            "6，7",
            "2"
          ],
          [
            "22",
            "1",
            "1",
            "1"
          ],
          [
            "39",
            "4",
            "4，5",
            "2"
          ],
          [
            "20",
            "6",
            "6，7，0，1，2",
            "5"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "49"
          ],
          [
            "1",
            "22"
          ],
          [
            "2",
            "20"
          ],
          [
            "3",
            "_"
          ],
          [
            "4",
            "32"
          ],
          [
            "5",
            "39"
          ],
          [
            "6",
            "13"
          ],
          [
            "7",
            "55"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-hash-full-v4",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-full",
    "variant": 4,
    "title": "关键字依次 [13, 29, 1, 23, 44, 55, 20]；表长 m=10，H(key)=(1*key)%7；冲突线性探测 (H+j)%m，j=0,1,…。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      13,
      41,
      42
    ],
    "origin": "同类考法新题",
    "topic": "r7-4",
    "hint": "",
    "explain": "最终表=[None, 29, 1, 23, 44, None, 13, 55, 20, None]。\n按插入键顺序的成功比较次数=[1, 1, 2, 2, 3, 2, 3]。\nASL=14/7；初地址对 7 取模，探测对 10 取模。",
    "solution": [
      "最终表=[None, 29, 1, 23, 44, None, 13, 55, 20, None]。",
      "按插入键顺序的成功比较次数=[1, 1, 2, 2, 3, 2, 3]。",
      "ASL=14/7；初地址对 7 取模，探测对 10 取模。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按地址 0..m-1 的表内容，空槽填 _",
        "answer": "_,29,1,23,44,_,13,55,20,_",
        "points": 5,
        "kind": "slots",
        "aliases": []
      },
      {
        "label": "成功等概率 ASL",
        "answer": "2",
        "points": 3,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "初地址的模数p和探测绕回表长m必须分开。",
      "plan": [
        "逐键算初地址，碰撞后每次加1并对m取余，记完整探测链。",
        "成功次数包含最后写入/命中槽，等概率ASL按关键字平均。"
      ],
      "format": "表按0..m−1逐槽写，空位写_；次数按插入键次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "13",
            "6",
            "6",
            "1"
          ],
          [
            "29",
            "1",
            "1",
            "1"
          ],
          [
            "1",
            "1",
            "1，2",
            "2"
          ],
          [
            "23",
            "2",
            "2，3",
            "2"
          ],
          [
            "44",
            "2",
            "2，3，4",
            "3"
          ],
          [
            "55",
            "6",
            "6，7",
            "2"
          ],
          [
            "20",
            "6",
            "6，7，8",
            "3"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "_"
          ],
          [
            "1",
            "29"
          ],
          [
            "2",
            "1"
          ],
          [
            "3",
            "23"
          ],
          [
            "4",
            "44"
          ],
          [
            "5",
            "_"
          ],
          [
            "6",
            "13"
          ],
          [
            "7",
            "55"
          ],
          [
            "8",
            "20"
          ],
          [
            "9",
            "_"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-hash-full-v5",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-full",
    "variant": 5,
    "title": "关键字依次 [18, 41, 22, 44, 59, 32]；表长 m=9，H(key)=(1*key)%7；冲突线性探测 (H+j)%m，j=0,1,…。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      13,
      41,
      42
    ],
    "origin": "同类考法新题",
    "topic": "r7-4",
    "hint": "",
    "explain": "最终表=[None, 22, 44, 59, 18, 32, 41, None, None]。\n按插入键顺序的成功比较次数=[1, 1, 1, 1, 1, 2]。\nASL=7/6；初地址对 7 取模，探测对 9 取模。",
    "solution": [
      "最终表=[None, 22, 44, 59, 18, 32, 41, None, None]。",
      "按插入键顺序的成功比较次数=[1, 1, 1, 1, 1, 2]。",
      "ASL=7/6；初地址对 7 取模，探测对 9 取模。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按地址 0..m-1 的表内容，空槽填 _",
        "answer": "_,22,44,59,18,32,41,_,_",
        "points": 5,
        "kind": "slots",
        "aliases": []
      },
      {
        "label": "成功等概率 ASL",
        "answer": "7/6",
        "points": 3,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "初地址的模数p和探测绕回表长m必须分开。",
      "plan": [
        "逐键算初地址，碰撞后每次加1并对m取余，记完整探测链。",
        "成功次数包含最后写入/命中槽，等概率ASL按关键字平均。"
      ],
      "format": "表按0..m−1逐槽写，空位写_；次数按插入键次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "18",
            "4",
            "4",
            "1"
          ],
          [
            "41",
            "6",
            "6",
            "1"
          ],
          [
            "22",
            "1",
            "1",
            "1"
          ],
          [
            "44",
            "2",
            "2",
            "1"
          ],
          [
            "59",
            "3",
            "3",
            "1"
          ],
          [
            "32",
            "4",
            "4，5",
            "2"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "_"
          ],
          [
            "1",
            "22"
          ],
          [
            "2",
            "44"
          ],
          [
            "3",
            "59"
          ],
          [
            "4",
            "18"
          ],
          [
            "5",
            "32"
          ],
          [
            "6",
            "41"
          ],
          [
            "7",
            "_"
          ],
          [
            "8",
            "_"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-hash-probes-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-probes",
    "variant": 1,
    "title": "依次插入 [22, 41, 53, 8, 16, 30, 1, 31, 55]，m=15，H=(1*key)%11，线性探测每次 +1 后对 m 取模。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      13,
      41,
      42
    ],
    "origin": "同类考法新题",
    "topic": "r7-4",
    "hint": "",
    "explain": "表=[22, 1, 55, None, None, 16, None, None, 41, 53, 8, 30, 31, None, None]。\n探测次数=[1, 1, 1, 3, 1, 4, 1, 4, 3]，包含最终命中槽。ASL=19/9。",
    "solution": [
      "表=[22, 1, 55, None, None, 16, None, None, 41, 53, 8, 30, 31, None, None]。",
      "探测次数=[1, 1, 1, 3, 1, 4, 1, 4, 3]，包含最终命中槽。ASL=19/9。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按关键字插入次序的探测次数",
        "answer": "1,1,1,3,1,4,1,4,3",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "成功 ASL",
        "answer": "19/9",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "初地址的模数p和探测绕回表长m必须分开。",
      "plan": [
        "逐键算初地址，碰撞后每次加1并对m取余，记完整探测链。",
        "成功次数包含最后写入/命中槽，等概率ASL按关键字平均。"
      ],
      "format": "表按0..m−1逐槽写，空位写_；次数按插入键次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "22",
            "0",
            "0",
            "1"
          ],
          [
            "41",
            "8",
            "8",
            "1"
          ],
          [
            "53",
            "9",
            "9",
            "1"
          ],
          [
            "8",
            "8",
            "8，9，10",
            "3"
          ],
          [
            "16",
            "5",
            "5",
            "1"
          ],
          [
            "30",
            "8",
            "8，9，10，11",
            "4"
          ],
          [
            "1",
            "1",
            "1",
            "1"
          ],
          [
            "31",
            "9",
            "9，10，11，12",
            "4"
          ],
          [
            "55",
            "0",
            "0，1，2",
            "3"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "22"
          ],
          [
            "1",
            "1"
          ],
          [
            "2",
            "55"
          ],
          [
            "3",
            "_"
          ],
          [
            "4",
            "_"
          ],
          [
            "5",
            "16"
          ],
          [
            "6",
            "_"
          ],
          [
            "7",
            "_"
          ],
          [
            "8",
            "41"
          ],
          [
            "9",
            "53"
          ],
          [
            "10",
            "8"
          ],
          [
            "11",
            "30"
          ],
          [
            "12",
            "31"
          ],
          [
            "13",
            "_"
          ],
          [
            "14",
            "_"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-hash-probes-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-probes",
    "variant": 2,
    "title": "依次插入 [22, 41, 53, 8, 46, 30, 1, 31, 66]，m=11，H=(3*key)%11，线性探测每次 +1 后对 m 取模。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      13,
      41,
      42
    ],
    "origin": "同类考法新题",
    "topic": "r7-4",
    "hint": "",
    "explain": "表=[22, 66, 41, 8, 30, 53, 46, 1, 31, None, None]。\n探测次数=[1, 1, 1, 2, 1, 3, 5, 4, 2]，包含最终命中槽。ASL=20/9。",
    "solution": [
      "表=[22, 66, 41, 8, 30, 53, 46, 1, 31, None, None]。",
      "探测次数=[1, 1, 1, 2, 1, 3, 5, 4, 2]，包含最终命中槽。ASL=20/9。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按关键字插入次序的探测次数",
        "answer": "1,1,1,2,1,3,5,4,2",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "成功 ASL",
        "answer": "20/9",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "初地址的模数p和探测绕回表长m必须分开。",
      "plan": [
        "逐键算初地址，碰撞后每次加1并对m取余，记完整探测链。",
        "成功次数包含最后写入/命中槽，等概率ASL按关键字平均。"
      ],
      "format": "表按0..m−1逐槽写，空位写_；次数按插入键次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "22",
            "0",
            "0",
            "1"
          ],
          [
            "41",
            "2",
            "2",
            "1"
          ],
          [
            "53",
            "5",
            "5",
            "1"
          ],
          [
            "8",
            "2",
            "2，3",
            "2"
          ],
          [
            "46",
            "6",
            "6",
            "1"
          ],
          [
            "30",
            "2",
            "2，3，4",
            "3"
          ],
          [
            "1",
            "3",
            "3，4，5，6，7",
            "5"
          ],
          [
            "31",
            "5",
            "5，6，7，8",
            "4"
          ],
          [
            "66",
            "0",
            "0，1",
            "2"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "22"
          ],
          [
            "1",
            "66"
          ],
          [
            "2",
            "41"
          ],
          [
            "3",
            "8"
          ],
          [
            "4",
            "30"
          ],
          [
            "5",
            "53"
          ],
          [
            "6",
            "46"
          ],
          [
            "7",
            "1"
          ],
          [
            "8",
            "31"
          ],
          [
            "9",
            "_"
          ],
          [
            "10",
            "_"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-hash-probes-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-probes",
    "variant": 3,
    "title": "依次插入 [32, 13, 49, 55, 22, 39, 20]，m=8，H=(1*key)%7，线性探测每次 +1 后对 m 取模。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      13,
      41,
      42
    ],
    "origin": "同类考法新题",
    "topic": "r7-4",
    "hint": "",
    "explain": "表=[49, 22, 20, None, 32, 39, 13, 55]。\n探测次数=[1, 1, 1, 2, 1, 2, 5]，包含最终命中槽。ASL=13/7。",
    "solution": [
      "表=[49, 22, 20, None, 32, 39, 13, 55]。",
      "探测次数=[1, 1, 1, 2, 1, 2, 5]，包含最终命中槽。ASL=13/7。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按关键字插入次序的探测次数",
        "answer": "1,1,1,2,1,2,5",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "成功 ASL",
        "answer": "13/7",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "初地址的模数p和探测绕回表长m必须分开。",
      "plan": [
        "逐键算初地址，碰撞后每次加1并对m取余，记完整探测链。",
        "成功次数包含最后写入/命中槽，等概率ASL按关键字平均。"
      ],
      "format": "表按0..m−1逐槽写，空位写_；次数按插入键次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "32",
            "4",
            "4",
            "1"
          ],
          [
            "13",
            "6",
            "6",
            "1"
          ],
          [
            "49",
            "0",
            "0",
            "1"
          ],
          [
            "55",
            "6",
            "6，7",
            "2"
          ],
          [
            "22",
            "1",
            "1",
            "1"
          ],
          [
            "39",
            "4",
            "4，5",
            "2"
          ],
          [
            "20",
            "6",
            "6，7，0，1，2",
            "5"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "49"
          ],
          [
            "1",
            "22"
          ],
          [
            "2",
            "20"
          ],
          [
            "3",
            "_"
          ],
          [
            "4",
            "32"
          ],
          [
            "5",
            "39"
          ],
          [
            "6",
            "13"
          ],
          [
            "7",
            "55"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-hash-probes-v4",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-probes",
    "variant": 4,
    "title": "依次插入 [13, 29, 1, 23, 44, 55, 20]，m=10，H=(1*key)%7，线性探测每次 +1 后对 m 取模。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      13,
      41,
      42
    ],
    "origin": "同类考法新题",
    "topic": "r7-4",
    "hint": "",
    "explain": "表=[None, 29, 1, 23, 44, None, 13, 55, 20, None]。\n探测次数=[1, 1, 2, 2, 3, 2, 3]，包含最终命中槽。ASL=14/7。",
    "solution": [
      "表=[None, 29, 1, 23, 44, None, 13, 55, 20, None]。",
      "探测次数=[1, 1, 2, 2, 3, 2, 3]，包含最终命中槽。ASL=14/7。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "按关键字插入次序的探测次数",
        "answer": "1,1,2,2,3,2,3",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "成功 ASL",
        "answer": "2",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "初地址的模数p和探测绕回表长m必须分开。",
      "plan": [
        "逐键算初地址，碰撞后每次加1并对m取余，记完整探测链。",
        "成功次数包含最后写入/命中槽，等概率ASL按关键字平均。"
      ],
      "format": "表按0..m−1逐槽写，空位写_；次数按插入键次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "13",
            "6",
            "6",
            "1"
          ],
          [
            "29",
            "1",
            "1",
            "1"
          ],
          [
            "1",
            "1",
            "1，2",
            "2"
          ],
          [
            "23",
            "2",
            "2，3",
            "2"
          ],
          [
            "44",
            "2",
            "2，3，4",
            "3"
          ],
          [
            "55",
            "6",
            "6，7",
            "2"
          ],
          [
            "20",
            "6",
            "6，7，8",
            "3"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "_"
          ],
          [
            "1",
            "29"
          ],
          [
            "2",
            "1"
          ],
          [
            "3",
            "23"
          ],
          [
            "4",
            "44"
          ],
          [
            "5",
            "_"
          ],
          [
            "6",
            "13"
          ],
          [
            "7",
            "55"
          ],
          [
            "8",
            "20"
          ],
          [
            "9",
            "_"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-hash-failure-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-failure",
    "variant": 1,
    "title": "将 [1, 8, 15] 插入 m=7 的线性探测表，H=key%7。失败查找的初始地址按 H 的值域 0..6 等概率分布，遇到普通空槽停止，空槽这次检查也计数；探测绕回仍对 m 取模。",
    "type": "fields",
    "points": 4,
    "difficulty": "进阶边界",
    "sourcePages": [
      41,
      42
    ],
    "origin": "同类考法新题",
    "topic": "r7-5",
    "hint": "",
    "explain": "表=[None, 1, 8, 15, None, None, None]；从每个初地址逐个走到第一个空槽。\n按初地址 0..6 的失败次数=[1, 4, 3, 2, 1, 1, 1]；ASL=13/7。\n失败平均按可能初地址及其概率，不按已有关键字数，也不默认用表长作分母。",
    "solution": [
      "表=[None, 1, 8, 15, None, None, None]；从每个初地址逐个走到第一个空槽。",
      "按初地址 0..6 的失败次数=[1, 4, 3, 2, 1, 1, 1]；ASL=13/7。",
      "失败平均按可能初地址及其概率，不按已有关键字数，也不默认用表长作分母。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "各初地址失败探测次数",
        "answer": "1,4,3,2,1,1,1",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "失败 ASL",
        "answer": "13/7",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "失败平均的对象是可能初地址，不是已有键。",
      "plan": [
        "先完整构表，再从每个题设可能初址沿线性探测走到首个普通空槽。",
        "空槽检查也计一次，按题设初址概率求平均；不能默认除表长。"
      ],
      "format": "序列按初址0..p−1排列，不按已有键插入次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "1",
            "1",
            "1",
            "1"
          ],
          [
            "8",
            "1",
            "1，2",
            "2"
          ],
          [
            "15",
            "1",
            "1，2，3",
            "3"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "_"
          ],
          [
            "1",
            "1"
          ],
          [
            "2",
            "8"
          ],
          [
            "3",
            "15"
          ],
          [
            "4",
            "_"
          ],
          [
            "5",
            "_"
          ],
          [
            "6",
            "_"
          ]
        ]
      },
      {
        "caption": "失败从题设可能初址出发，遇普通空槽也算最后一次检查",
        "heads": [
          "初地址",
          "含空槽的探测地址",
          "次数"
        ],
        "rows": [
          [
            "0",
            "0",
            "1"
          ],
          [
            "1",
            "1，2，3，4",
            "4"
          ],
          [
            "2",
            "2，3，4",
            "3"
          ],
          [
            "3",
            "3，4",
            "2"
          ],
          [
            "4",
            "4",
            "1"
          ],
          [
            "5",
            "5",
            "1"
          ],
          [
            "6",
            "6",
            "1"
          ]
        ]
      }
    ],
    "priority": "extension",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R7-hash-failure-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-failure",
    "variant": 2,
    "title": "将 [2, 9, 16, 4] 插入 m=8 的线性探测表，H=key%7。失败查找的初始地址按 H 的值域 0..6 等概率分布，遇到普通空槽停止，空槽这次检查也计数；探测绕回仍对 m 取模。",
    "type": "fields",
    "points": 4,
    "difficulty": "进阶边界",
    "sourcePages": [
      41,
      42
    ],
    "origin": "同类考法新题",
    "topic": "r7-5",
    "hint": "",
    "explain": "表=[None, None, 2, 9, 16, 4, None, None]；从每个初地址逐个走到第一个空槽。\n按初地址 0..6 的失败次数=[1, 1, 5, 4, 3, 2, 1]；ASL=17/7。\n失败平均按可能初地址及其概率，不按已有关键字数，也不默认用表长作分母。",
    "solution": [
      "表=[None, None, 2, 9, 16, 4, None, None]；从每个初地址逐个走到第一个空槽。",
      "按初地址 0..6 的失败次数=[1, 1, 5, 4, 3, 2, 1]；ASL=17/7。",
      "失败平均按可能初地址及其概率，不按已有关键字数，也不默认用表长作分母。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "各初地址失败探测次数",
        "answer": "1,1,5,4,3,2,1",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "失败 ASL",
        "answer": "17/7",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "失败平均的对象是可能初地址，不是已有键。",
      "plan": [
        "先完整构表，再从每个题设可能初址沿线性探测走到首个普通空槽。",
        "空槽检查也计一次，按题设初址概率求平均；不能默认除表长。"
      ],
      "format": "序列按初址0..p−1排列，不按已有键插入次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "2",
            "2",
            "2",
            "1"
          ],
          [
            "9",
            "2",
            "2，3",
            "2"
          ],
          [
            "16",
            "2",
            "2，3，4",
            "3"
          ],
          [
            "4",
            "4",
            "4，5",
            "2"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "_"
          ],
          [
            "1",
            "_"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "9"
          ],
          [
            "4",
            "16"
          ],
          [
            "5",
            "4"
          ],
          [
            "6",
            "_"
          ],
          [
            "7",
            "_"
          ]
        ]
      },
      {
        "caption": "失败从题设可能初址出发，遇普通空槽也算最后一次检查",
        "heads": [
          "初地址",
          "含空槽的探测地址",
          "次数"
        ],
        "rows": [
          [
            "0",
            "0",
            "1"
          ],
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "2，3，4，5，6",
            "5"
          ],
          [
            "3",
            "3，4，5，6",
            "4"
          ],
          [
            "4",
            "4，5，6",
            "3"
          ],
          [
            "5",
            "5，6",
            "2"
          ],
          [
            "6",
            "6",
            "1"
          ]
        ]
      }
    ],
    "priority": "extension",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R7-hash-failure-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-hash-failure",
    "variant": 3,
    "title": "将 [3, 10, 17, 6] 插入 m=9 的线性探测表，H=key%7。失败查找的初始地址按 H 的值域 0..6 等概率分布，遇到普通空槽停止，空槽这次检查也计数；探测绕回仍对 m 取模。",
    "type": "fields",
    "points": 4,
    "difficulty": "进阶边界",
    "sourcePages": [
      41,
      42
    ],
    "origin": "同类考法新题",
    "topic": "r7-5",
    "hint": "",
    "explain": "表=[None, None, None, 3, 10, 17, 6, None, None]；从每个初地址逐个走到第一个空槽。\n按初地址 0..6 的失败次数=[1, 1, 1, 5, 4, 3, 2]；ASL=17/7。\n失败平均按可能初地址及其概率，不按已有关键字数，也不默认用表长作分母。",
    "solution": [
      "表=[None, None, None, 3, 10, 17, 6, None, None]；从每个初地址逐个走到第一个空槽。",
      "按初地址 0..6 的失败次数=[1, 1, 1, 5, 4, 3, 2]；ASL=17/7。",
      "失败平均按可能初地址及其概率，不按已有关键字数，也不默认用表长作分母。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "各初地址失败探测次数",
        "answer": "1,1,1,5,4,3,2",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "失败 ASL",
        "answer": "17/7",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "失败平均的对象是可能初地址，不是已有键。",
      "plan": [
        "先完整构表，再从每个题设可能初址沿线性探测走到首个普通空槽。",
        "空槽检查也计一次，按题设初址概率求平均；不能默认除表长。"
      ],
      "format": "序列按初址0..p−1排列，不按已有键插入次序。"
    },
    "worked": [
      {
        "caption": "插入路线与成功查找路线相同，包含最终槽",
        "heads": [
          "关键字",
          "初地址",
          "依次检查地址",
          "次数"
        ],
        "rows": [
          [
            "3",
            "3",
            "3",
            "1"
          ],
          [
            "10",
            "3",
            "3，4",
            "2"
          ],
          [
            "17",
            "3",
            "3，4，5",
            "3"
          ],
          [
            "6",
            "6",
            "6",
            "1"
          ]
        ]
      },
      {
        "caption": "完整表按地址排列，空位不能省略",
        "heads": [
          "地址",
          "内容"
        ],
        "rows": [
          [
            "0",
            "_"
          ],
          [
            "1",
            "_"
          ],
          [
            "2",
            "_"
          ],
          [
            "3",
            "3"
          ],
          [
            "4",
            "10"
          ],
          [
            "5",
            "17"
          ],
          [
            "6",
            "6"
          ],
          [
            "7",
            "_"
          ],
          [
            "8",
            "_"
          ]
        ]
      },
      {
        "caption": "失败从题设可能初址出发，遇普通空槽也算最后一次检查",
        "heads": [
          "初地址",
          "含空槽的探测地址",
          "次数"
        ],
        "rows": [
          [
            "0",
            "0",
            "1"
          ],
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "2",
            "1"
          ],
          [
            "3",
            "3，4，5，6，7",
            "5"
          ],
          [
            "4",
            "4，5，6，7",
            "4"
          ],
          [
            "5",
            "5，6，7",
            "3"
          ],
          [
            "6",
            "6，7",
            "2"
          ]
        ]
      }
    ],
    "priority": "extension",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R7-alpha-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-alpha",
    "variant": 1,
    "title": "有 9 个不同记录，目标装填因子 α=3/5，若 m=n/α 恰为整数，求表长。",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      41
    ],
    "origin": "同类考法新题",
    "topic": "r7-4",
    "hint": "",
    "explain": "m=n/α=9/(3/5)=15。\n模数 p 可以小于 m，p 和 m 不应混用。",
    "solution": [
      "m=n/α=9/(3/5)=15。",
      "模数 p 可以小于 m，p 和 m 不应混用。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "表长 m",
        "answer": "15",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "把“占用比例”反过来求槽位总数。",
      "plan": [
        "装填因子=记录数/表长，因此表长=记录数/装填因子。",
        "分数除法先化为乘倒数；题目保证结果恰为整数。"
      ],
      "format": "填表长m，不要误填哈希模数p。"
    },
    "walkthrough": [
      "把“占用比例”反过来求槽位总数。",
      "装填因子=记录数/表长，因此表长=记录数/装填因子。",
      "分数除法先化为乘倒数；题目保证结果恰为整数。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-alpha-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-alpha",
    "variant": 2,
    "title": "有 12 个不同记录，目标装填因子 α=3/4，若 m=n/α 恰为整数，求表长。",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      41
    ],
    "origin": "同类考法新题",
    "topic": "r7-4",
    "hint": "",
    "explain": "m=n/α=12/(3/4)=16。\n模数 p 可以小于 m，p 和 m 不应混用。",
    "solution": [
      "m=n/α=12/(3/4)=16。",
      "模数 p 可以小于 m，p 和 m 不应混用。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "表长 m",
        "answer": "16",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "把“占用比例”反过来求槽位总数。",
      "plan": [
        "装填因子=记录数/表长，因此表长=记录数/装填因子。",
        "分数除法先化为乘倒数；题目保证结果恰为整数。"
      ],
      "format": "填表长m，不要误填哈希模数p。"
    },
    "walkthrough": [
      "把“占用比例”反过来求槽位总数。",
      "装填因子=记录数/表长，因此表长=记录数/装填因子。",
      "分数除法先化为乘倒数；题目保证结果恰为整数。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-alpha-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-alpha",
    "variant": 3,
    "title": "有 7 个不同记录，目标装填因子 α=7/8，若 m=n/α 恰为整数，求表长。",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      10,
      41
    ],
    "origin": "同类考法新题",
    "topic": "r7-4",
    "hint": "",
    "explain": "m=n/α=7/(7/8)=8。\n模数 p 可以小于 m，p 和 m 不应混用。",
    "solution": [
      "m=n/α=7/(7/8)=8。",
      "模数 p 可以小于 m，p 和 m 不应混用。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "表长 m",
        "answer": "8",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "把“占用比例”反过来求槽位总数。",
      "plan": [
        "装填因子=记录数/表长，因此表长=记录数/装填因子。",
        "分数除法先化为乘倒数；题目保证结果恰为整数。"
      ],
      "format": "填表长m，不要误填哈希模数p。"
    },
    "walkthrough": [
      "把“占用比例”反过来求槽位总数。",
      "装填因子=记录数/表长，因此表长=记录数/装填因子。",
      "分数除法先化为乘倒数；题目保证结果恰为整数。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R7-search-boundary-v1",
    "chapter": 7,
    "mode": "review",
    "family": "R7-search-boundary",
    "variant": 1,
    "title": "分块查找的基本有序条件是？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [],
    "origin": "PPT重点补全题",
    "topic": "r7-5",
    "hint": "",
    "explain": "块间取值范围必须分离且有序，块内可以无序。",
    "solution": [
      "块间取值范围必须分离且有序，块内可以无序。"
    ],
    "rubric": [],
    "options": [
      "每块内部有序即可",
      "前一块最大值小于后一块最小值",
      "只有索引最大值递增就足够",
      "所有块完全相同"
    ],
    "answer": 1,
    "support": {
      "ask": "先检查数据组织前提，别只背复杂度标签。",
      "plan": [
        "分块要块间范围有序；链表没有数组的常数中点访问。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：只让块内有序而块间范围交叠，索引仍可能选错块。",
      "符合：块间取值范围必须分离且有序，块内可以无序。",
      "核对条件：最大值递增并不排除前块存在大于后块某值的情况。",
      "核对条件：块无需相同，要求是取值范围依次分离有序。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason",
    "pages": "12–16",
    "sourceNature": "PPT关键补充"
  },
  {
    "id": "R7-search-boundary-v2",
    "chapter": 7,
    "mode": "review",
    "family": "R7-search-boundary",
    "variant": 2,
    "title": "线性探测表直接把被删槽置为空，可能导致？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [],
    "origin": "拓展训练：删除标记，非课件直接讲授重点",
    "topic": "r7-5",
    "hint": "",
    "explain": "需要删除标记或正确回填策略，不能无条件用普通空槽代替。",
    "solution": [
      "需要删除标记或正确回填策略，不能无条件用普通空槽代替。"
    ],
    "rubric": [],
    "options": [
      "截断后续冲突键的查找路径",
      "所有键自动前移",
      "改变哈希函数",
      "查找更快且总正确"
    ],
    "answer": 0,
    "support": {
      "ask": "先检查数据组织前提，别只背复杂度标签。",
      "plan": [
        "分块要块间范围有序；链表没有数组的常数中点访问。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "符合：需要删除标记或正确回填策略，不能无条件用普通空槽代替。",
      "核对条件：没有实施回填代码，其他键不会自动移动。",
      "核对条件：哈希函数不随一个槽被删而改变。",
      "核对条件：虽然会早停，但可能错误漏掉后续冲突键，因此不总正确。"
    ],
    "priority": "extension",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R7-search-boundary-v3",
    "chapter": 7,
    "mode": "review",
    "family": "R7-search-boundary",
    "variant": 3,
    "title": "表中键越多、装填因子越大时，通常冲突趋势如何？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      2,
      12,
      13
    ],
    "origin": "同类考法新题",
    "topic": "r7-5",
    "hint": "",
    "explain": "同样分布和策略下，占用更高通常意味着更长探测。",
    "solution": [
      "同样分布和策略下，占用更高通常意味着更长探测。"
    ],
    "rubric": [],
    "options": [
      "永不变化",
      "必然没有冲突",
      "降低",
      "增大"
    ],
    "answer": 3,
    "support": {
      "ask": "先检查数据组织前提，别只背复杂度标签。",
      "plan": [
        "分块要块间范围有序；链表没有数组的常数中点访问。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：同样策略和分布下，占用程度会影响探测链，不能说永不变。",
      "核对条件：更多键不能保证没有冲突，恰恰通常更拥挤。",
      "核对条件：空位变少通常让冲突更严重，不是自动降低。",
      "符合：同样分布和策略下，占用更高通常意味着更长探测。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R7-search-boundary-v4",
    "chapter": 7,
    "mode": "review",
    "family": "R7-search-boundary",
    "variant": 4,
    "title": "二分查找可以直接在有序链表上保持数组版本的 O(log n) 总访问成本吗？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1,
      2,
      12,
      13
    ],
    "origin": "同类考法新题",
    "topic": "r7-5",
    "hint": "",
    "explain": "比较次数可能为对数，但寻找中点还需走链，不能混同随机访问。",
    "solution": [
      "比较次数可能为对数，但寻找中点还需走链，不能混同随机访问。"
    ],
    "rubric": [],
    "options": [
      "链表不能有序",
      "可以，总是",
      "通常不行，中点访问不是 O(1)",
      "只要值为整数就行"
    ],
    "answer": 2,
    "support": {
      "ask": "先检查数据组织前提，别只背复杂度标签。",
      "plan": [
        "分块要块间范围有序；链表没有数组的常数中点访问。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：链表当然可以按值有序，问题是中点访问成本。",
      "核对条件：比较次数可能是对数，但走链接找中点不是常数时间。",
      "符合：比较次数可能为对数，但寻找中点还需走链，不能混同随机访问。",
      "核对条件：元素为整数不提供随机访问能力，仍须沿链接移动。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-quick-first-v1",
    "chapter": 8,
    "mode": "review",
    "family": "R8-quick-first",
    "variant": 1,
    "title": "对 [47, 79, 56, 38, 40, 84] 做第一次快速划分：首元素为基准，右指针先扫描 >=pivot，填左坑，再左扫 <=pivot，填右坑；指针相遇回填基准，0 起始。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      23,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-1",
    "hint": "",
    "explain": "基准=47，按指定挖坑法，结果 [40, 38, 47, 56, 79, 84]，基准下标 2。\n一次划分后两段内部仍可能无序，不能直接把整段排好后提交。",
    "solution": [
      "基准=47，按指定挖坑法，结果 [40, 38, 47, 56, 79, 84]，基准下标 2。",
      "一次划分后两段内部仍可能无序，不能直接把整段排好后提交。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "划分后的完整数组",
        "answer": "40,38,47,56,79,84",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "基准最终下标",
        "answer": "2",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "本题固定挖坑规则，不能套另一种快排中间排列。",
      "plan": [
        "暂存首基准，右先找小值填左坑，再左找大值填右坑。",
        "相遇回填基准；左区间先递归，希尔部分必须重新从原数组开始。"
      ],
      "format": "写每次划分全数组和区间；一次划分不等于全表已排序。"
    },
    "worked": [
      {
        "caption": "按指定挖坑法展开；空只是演示标记，不是删除元素",
        "heads": [
          "当前区间",
          "动作",
          "完整数组"
        ],
        "rows": [
          [
            "[0,5]",
            "暂存首基准47",
            "空，79，56，38，40，84"
          ],
          [
            "[0,5]",
            "右小值填左坑",
            "40，79，56，38，空，84"
          ],
          [
            "[0,5]",
            "左大值填右坑",
            "40，空，56，38，79，84"
          ],
          [
            "[0,5]",
            "右小值填左坑",
            "40，38，56，空，79，84"
          ],
          [
            "[0,5]",
            "左大值填右坑",
            "40，38，空，56，79，84"
          ],
          [
            "[0,5]",
            "基准回填到下标2",
            "40，38，47，56，79，84"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-quick-first-v2",
    "chapter": 8,
    "mode": "review",
    "family": "R8-quick-first",
    "variant": 2,
    "title": "对 [10, 18, 4, 13, 16, 5, 10, 8, 2] 做第一次快速划分：首元素为基准，右指针先扫描 >=pivot，填左坑，再左扫 <=pivot，填右坑；指针相遇回填基准，0 起始。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      23,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-1",
    "hint": "",
    "explain": "基准=10，按指定挖坑法，结果 [2, 8, 4, 5, 10, 16, 10, 13, 18]，基准下标 4。\n一次划分后两段内部仍可能无序，不能直接把整段排好后提交。",
    "solution": [
      "基准=10，按指定挖坑法，结果 [2, 8, 4, 5, 10, 16, 10, 13, 18]，基准下标 4。",
      "一次划分后两段内部仍可能无序，不能直接把整段排好后提交。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "划分后的完整数组",
        "answer": "2,8,4,5,10,16,10,13,18",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "基准最终下标",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "本题固定挖坑规则，不能套另一种快排中间排列。",
      "plan": [
        "暂存首基准，右先找小值填左坑，再左找大值填右坑。",
        "相遇回填基准；左区间先递归，希尔部分必须重新从原数组开始。"
      ],
      "format": "写每次划分全数组和区间；一次划分不等于全表已排序。"
    },
    "worked": [
      {
        "caption": "按指定挖坑法展开；空只是演示标记，不是删除元素",
        "heads": [
          "当前区间",
          "动作",
          "完整数组"
        ],
        "rows": [
          [
            "[0,8]",
            "暂存首基准10",
            "空，18，4，13，16，5，10，8，2"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "2，18，4，13，16，5，10，8，空"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "2，空，4，13，16，5，10，8，18"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "2，8，4，13，16，5，10，空，18"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "2，8，4，空，16，5，10，13，18"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "2，8，4，5，16，空，10，13，18"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "2，8，4，5，空，16，10，13，18"
          ],
          [
            "[0,8]",
            "基准回填到下标4",
            "2，8，4，5，10，16，10，13，18"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-quick-first-v3",
    "chapter": 8,
    "mode": "review",
    "family": "R8-quick-first",
    "variant": 3,
    "title": "对 [19, 24, 22, 10, 21, 13, 36, 22, 24] 做第一次快速划分：首元素为基准，右指针先扫描 >=pivot，填左坑，再左扫 <=pivot，填右坑；指针相遇回填基准，0 起始。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      23,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-1",
    "hint": "",
    "explain": "基准=19，按指定挖坑法，结果 [13, 10, 19, 22, 21, 24, 36, 22, 24]，基准下标 2。\n一次划分后两段内部仍可能无序，不能直接把整段排好后提交。",
    "solution": [
      "基准=19，按指定挖坑法，结果 [13, 10, 19, 22, 21, 24, 36, 22, 24]，基准下标 2。",
      "一次划分后两段内部仍可能无序，不能直接把整段排好后提交。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "划分后的完整数组",
        "answer": "13,10,19,22,21,24,36,22,24",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "基准最终下标",
        "answer": "2",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "本题固定挖坑规则，不能套另一种快排中间排列。",
      "plan": [
        "暂存首基准，右先找小值填左坑，再左找大值填右坑。",
        "相遇回填基准；左区间先递归，希尔部分必须重新从原数组开始。"
      ],
      "format": "写每次划分全数组和区间；一次划分不等于全表已排序。"
    },
    "worked": [
      {
        "caption": "按指定挖坑法展开；空只是演示标记，不是删除元素",
        "heads": [
          "当前区间",
          "动作",
          "完整数组"
        ],
        "rows": [
          [
            "[0,8]",
            "暂存首基准19",
            "空，24，22，10，21，13，36，22，24"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "13，24，22，10，21，空，36，22，24"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "13，空，22，10，21，24，36，22，24"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "13，10，22，空，21，24，36，22，24"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "13，10，空，22，21，24，36，22，24"
          ],
          [
            "[0,8]",
            "基准回填到下标2",
            "13，10，19，22，21，24，36，22，24"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-quick-first-v4",
    "chapter": 8,
    "mode": "review",
    "family": "R8-quick-first",
    "variant": 4,
    "title": "对 [46, 26, 22, 68, 48, 42, 36, 84, 66] 做第一次快速划分：首元素为基准，右指针先扫描 >=pivot，填左坑，再左扫 <=pivot，填右坑；指针相遇回填基准，0 起始。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      23,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-1",
    "hint": "",
    "explain": "基准=46，按指定挖坑法，结果 [36, 26, 22, 42, 46, 48, 68, 84, 66]，基准下标 4。\n一次划分后两段内部仍可能无序，不能直接把整段排好后提交。",
    "solution": [
      "基准=46，按指定挖坑法，结果 [36, 26, 22, 42, 46, 48, 68, 84, 66]，基准下标 4。",
      "一次划分后两段内部仍可能无序，不能直接把整段排好后提交。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "划分后的完整数组",
        "answer": "36,26,22,42,46,48,68,84,66",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "基准最终下标",
        "answer": "4",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "本题固定挖坑规则，不能套另一种快排中间排列。",
      "plan": [
        "暂存首基准，右先找小值填左坑，再左找大值填右坑。",
        "相遇回填基准；左区间先递归，希尔部分必须重新从原数组开始。"
      ],
      "format": "写每次划分全数组和区间；一次划分不等于全表已排序。"
    },
    "worked": [
      {
        "caption": "按指定挖坑法展开；空只是演示标记，不是删除元素",
        "heads": [
          "当前区间",
          "动作",
          "完整数组"
        ],
        "rows": [
          [
            "[0,8]",
            "暂存首基准46",
            "空，26，22，68，48，42，36，84，66"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "36，26，22，68，48，42，空，84，66"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "36，26，22，空，48，42，68，84，66"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "36，26，22，42，48，空，68，84，66"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "36，26，22，42，空，48，68，84，66"
          ],
          [
            "[0,8]",
            "基准回填到下标4",
            "36，26，22，42，46，48，68，84，66"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-quick-full-v1",
    "chapter": 8,
    "mode": "review",
    "family": "R8-quick-full",
    "variant": 1,
    "title": "把 [47, 79, 56, 38, 40, 84] 用快速排序排升序。首元素基准、右侧先扫的挖坑法，左子区间先递归。列出每次划分后的全数组，并标出当前区间和基准位置。（快速排序部分5分。）再从同一原序列出发，以增量[5,3,1]做希尔排序，列出每个增量结束的全数组（3分）。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      6,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-1",
    "hint": "",
    "explain": "区间/基准/全数组逐次为：[(0, 5, 2, [40, 38, 47, 56, 79, 84]), (0, 1, 1, [38, 40, 47, 56, 79, 84]), (3, 5, 3, [38, 40, 47, 56, 79, 84]), (4, 5, 4, [38, 40, 47, 56, 79, 84])]。\n最终 [38, 40, 47, 56, 79, 84]。\n不同划分算法的中间排列可能不同；本题已经固定实现约定。\n希尔 gap=5 后：[47, 79, 56, 38, 40, 84]\n希尔 gap=3 后：[38, 40, 56, 47, 79, 84]\n希尔 gap=1 后：[38, 40, 47, 56, 79, 84]",
    "solution": [
      "区间/基准/全数组逐次为：[(0, 5, 2, [40, 38, 47, 56, 79, 84]), (0, 1, 1, [38, 40, 47, 56, 79, 84]), (3, 5, 3, [38, 40, 47, 56, 79, 84]), (4, 5, 4, [38, 40, 47, 56, 79, 84])]。",
      "最终 [38, 40, 47, 56, 79, 84]。",
      "不同划分算法的中间排列可能不同；本题已经固定实现约定。",
      "希尔 gap=5 后：[47, 79, 56, 38, 40, 84]",
      "希尔 gap=3 后：[38, 40, 56, 47, 79, 84]",
      "希尔 gap=1 后：[38, 40, 47, 56, 79, 84]"
    ],
    "rubric": [
      {
        "label": "快排首次划分和基准位置正确",
        "points": 2
      },
      {
        "label": "快排后续递归区间及各次划分正确",
        "points": 2
      },
      {
        "label": "快排最终结果正确且重复键未丢失",
        "points": 1
      },
      {
        "label": "希尔三个增量结束的全数组均正确",
        "points": 3
      }
    ],
    "support": {
      "ask": "本题固定挖坑规则，不能套另一种快排中间排列。",
      "plan": [
        "暂存首基准，右先找小值填左坑，再左找大值填右坑。",
        "相遇回填基准；左区间先递归，希尔部分必须重新从原数组开始。"
      ],
      "format": "写每次划分全数组和区间；一次划分不等于全表已排序。"
    },
    "worked": [
      {
        "caption": "按指定挖坑法展开；空只是演示标记，不是删除元素",
        "heads": [
          "当前区间",
          "动作",
          "完整数组"
        ],
        "rows": [
          [
            "[0,5]",
            "暂存首基准47",
            "空，79，56，38，40，84"
          ],
          [
            "[0,5]",
            "右小值填左坑",
            "40，79，56，38，空，84"
          ],
          [
            "[0,5]",
            "左大值填右坑",
            "40，空，56，38，79，84"
          ],
          [
            "[0,5]",
            "右小值填左坑",
            "40，38，56，空，79，84"
          ],
          [
            "[0,5]",
            "左大值填右坑",
            "40，38，空，56，79，84"
          ],
          [
            "[0,5]",
            "基准回填到下标2",
            "40，38，47，56，79，84"
          ],
          [
            "[0,1]",
            "暂存首基准40",
            "空，38，47，56，79，84"
          ],
          [
            "[0,1]",
            "右小值填左坑",
            "38，空，47，56，79，84"
          ],
          [
            "[0,1]",
            "基准回填到下标1",
            "38，40，47，56，79，84"
          ],
          [
            "[3,5]",
            "暂存首基准56",
            "38，40，47，空，79，84"
          ],
          [
            "[3,5]",
            "基准回填到下标3",
            "38，40，47，56，79，84"
          ],
          [
            "[4,5]",
            "暂存首基准79",
            "38，40，47，56，空，84"
          ],
          [
            "[4,5]",
            "基准回填到下标4",
            "38，40，47，56，79，84"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R8-quick-full-v2",
    "chapter": 8,
    "mode": "review",
    "family": "R8-quick-full",
    "variant": 2,
    "title": "把 [10, 18, 4, 13, 16, 5, 10, 8, 2] 用快速排序排升序。首元素基准、右侧先扫的挖坑法，左子区间先递归。列出每次划分后的全数组，并标出当前区间和基准位置。（快速排序部分5分。）再从同一原序列出发，以增量[5,3,1]做希尔排序，列出每个增量结束的全数组（3分）。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      6,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-1",
    "hint": "",
    "explain": "区间/基准/全数组逐次为：[(0, 8, 4, [2, 8, 4, 5, 10, 16, 10, 13, 18]), (0, 3, 0, [2, 8, 4, 5, 10, 16, 10, 13, 18]), (1, 3, 3, [2, 5, 4, 8, 10, 16, 10, 13, 18]), (1, 2, 2, [2, 4, 5, 8, 10, 16, 10, 13, 18]), (5, 8, 7, [2, 4, 5, 8, 10, 13, 10, 16, 18]), (5, 6, 6, [2, 4, 5, 8, 10, 10, 13, 16, 18])]。\n最终 [2, 4, 5, 8, 10, 10, 13, 16, 18]。\n不同划分算法的中间排列可能不同；本题已经固定实现约定。\n希尔 gap=5 后：[5, 10, 4, 2, 16, 10, 18, 8, 13]\n希尔 gap=3 后：[2, 8, 4, 5, 10, 10, 18, 16, 13]\n希尔 gap=1 后：[2, 4, 5, 8, 10, 10, 13, 16, 18]",
    "solution": [
      "区间/基准/全数组逐次为：[(0, 8, 4, [2, 8, 4, 5, 10, 16, 10, 13, 18]), (0, 3, 0, [2, 8, 4, 5, 10, 16, 10, 13, 18]), (1, 3, 3, [2, 5, 4, 8, 10, 16, 10, 13, 18]), (1, 2, 2, [2, 4, 5, 8, 10, 16, 10, 13, 18]), (5, 8, 7, [2, 4, 5, 8, 10, 13, 10, 16, 18]), (5, 6, 6, [2, 4, 5, 8, 10, 10, 13, 16, 18])]。",
      "最终 [2, 4, 5, 8, 10, 10, 13, 16, 18]。",
      "不同划分算法的中间排列可能不同；本题已经固定实现约定。",
      "希尔 gap=5 后：[5, 10, 4, 2, 16, 10, 18, 8, 13]",
      "希尔 gap=3 后：[2, 8, 4, 5, 10, 10, 18, 16, 13]",
      "希尔 gap=1 后：[2, 4, 5, 8, 10, 10, 13, 16, 18]"
    ],
    "rubric": [
      {
        "label": "快排首次划分和基准位置正确",
        "points": 2
      },
      {
        "label": "快排后续递归区间及各次划分正确",
        "points": 2
      },
      {
        "label": "快排最终结果正确且重复键未丢失",
        "points": 1
      },
      {
        "label": "希尔三个增量结束的全数组均正确",
        "points": 3
      }
    ],
    "support": {
      "ask": "本题固定挖坑规则，不能套另一种快排中间排列。",
      "plan": [
        "暂存首基准，右先找小值填左坑，再左找大值填右坑。",
        "相遇回填基准；左区间先递归，希尔部分必须重新从原数组开始。"
      ],
      "format": "写每次划分全数组和区间；一次划分不等于全表已排序。"
    },
    "worked": [
      {
        "caption": "按指定挖坑法展开；空只是演示标记，不是删除元素",
        "heads": [
          "当前区间",
          "动作",
          "完整数组"
        ],
        "rows": [
          [
            "[0,8]",
            "暂存首基准10",
            "空，18，4，13，16，5，10，8，2"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "2，18，4，13，16，5，10，8，空"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "2，空，4，13，16，5，10，8，18"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "2，8，4，13，16，5，10，空，18"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "2，8，4，空，16，5，10，13，18"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "2，8，4，5，16，空，10，13，18"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "2，8，4，5，空，16，10，13，18"
          ],
          [
            "[0,8]",
            "基准回填到下标4",
            "2，8，4，5，10，16，10，13，18"
          ],
          [
            "[0,3]",
            "暂存首基准2",
            "空，8，4，5，10，16，10，13，18"
          ],
          [
            "[0,3]",
            "基准回填到下标0",
            "2，8，4，5，10，16，10，13，18"
          ],
          [
            "[1,3]",
            "暂存首基准8",
            "2，空，4，5，10，16，10，13，18"
          ],
          [
            "[1,3]",
            "右小值填左坑",
            "2，5，4，空，10，16，10，13，18"
          ],
          [
            "[1,3]",
            "基准回填到下标3",
            "2，5，4，8，10，16，10，13，18"
          ],
          [
            "[1,2]",
            "暂存首基准5",
            "2，空，4，8，10，16，10，13，18"
          ],
          [
            "[1,2]",
            "右小值填左坑",
            "2，4，空，8，10，16，10，13，18"
          ],
          [
            "[1,2]",
            "基准回填到下标2",
            "2，4，5，8，10，16，10，13，18"
          ],
          [
            "[5,8]",
            "暂存首基准16",
            "2，4，5，8，10，空，10，13，18"
          ],
          [
            "[5,8]",
            "右小值填左坑",
            "2，4，5，8，10，13，10，空，18"
          ],
          [
            "[5,8]",
            "基准回填到下标7",
            "2，4，5，8，10，13，10，16，18"
          ],
          [
            "[5,6]",
            "暂存首基准13",
            "2，4，5，8，10，空，10，16，18"
          ],
          [
            "[5,6]",
            "右小值填左坑",
            "2，4，5，8，10，10，空，16，18"
          ],
          [
            "[5,6]",
            "基准回填到下标6",
            "2，4，5，8，10，10，13，16，18"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R8-quick-full-v3",
    "chapter": 8,
    "mode": "review",
    "family": "R8-quick-full",
    "variant": 3,
    "title": "把 [19, 24, 22, 10, 21, 13, 36, 22, 24] 用快速排序排升序。首元素基准、右侧先扫的挖坑法，左子区间先递归。列出每次划分后的全数组，并标出当前区间和基准位置。（快速排序部分5分。）再从同一原序列出发，以增量[5,3,1]做希尔排序，列出每个增量结束的全数组（3分）。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      6,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-1",
    "hint": "",
    "explain": "区间/基准/全数组逐次为：[(0, 8, 2, [13, 10, 19, 22, 21, 24, 36, 22, 24]), (0, 1, 1, [10, 13, 19, 22, 21, 24, 36, 22, 24]), (3, 8, 4, [10, 13, 19, 21, 22, 24, 36, 22, 24]), (5, 8, 6, [10, 13, 19, 21, 22, 22, 24, 36, 24]), (7, 8, 8, [10, 13, 19, 21, 22, 22, 24, 24, 36])]。\n最终 [10, 13, 19, 21, 22, 22, 24, 24, 36]。\n不同划分算法的中间排列可能不同；本题已经固定实现约定。\n希尔 gap=5 后：[13, 24, 22, 10, 21, 19, 36, 22, 24]\n希尔 gap=3 后：[10, 21, 19, 13, 22, 22, 36, 24, 24]\n希尔 gap=1 后：[10, 13, 19, 21, 22, 22, 24, 24, 36]",
    "solution": [
      "区间/基准/全数组逐次为：[(0, 8, 2, [13, 10, 19, 22, 21, 24, 36, 22, 24]), (0, 1, 1, [10, 13, 19, 22, 21, 24, 36, 22, 24]), (3, 8, 4, [10, 13, 19, 21, 22, 24, 36, 22, 24]), (5, 8, 6, [10, 13, 19, 21, 22, 22, 24, 36, 24]), (7, 8, 8, [10, 13, 19, 21, 22, 22, 24, 24, 36])]。",
      "最终 [10, 13, 19, 21, 22, 22, 24, 24, 36]。",
      "不同划分算法的中间排列可能不同；本题已经固定实现约定。",
      "希尔 gap=5 后：[13, 24, 22, 10, 21, 19, 36, 22, 24]",
      "希尔 gap=3 后：[10, 21, 19, 13, 22, 22, 36, 24, 24]",
      "希尔 gap=1 后：[10, 13, 19, 21, 22, 22, 24, 24, 36]"
    ],
    "rubric": [
      {
        "label": "快排首次划分和基准位置正确",
        "points": 2
      },
      {
        "label": "快排后续递归区间及各次划分正确",
        "points": 2
      },
      {
        "label": "快排最终结果正确且重复键未丢失",
        "points": 1
      },
      {
        "label": "希尔三个增量结束的全数组均正确",
        "points": 3
      }
    ],
    "support": {
      "ask": "本题固定挖坑规则，不能套另一种快排中间排列。",
      "plan": [
        "暂存首基准，右先找小值填左坑，再左找大值填右坑。",
        "相遇回填基准；左区间先递归，希尔部分必须重新从原数组开始。"
      ],
      "format": "写每次划分全数组和区间；一次划分不等于全表已排序。"
    },
    "worked": [
      {
        "caption": "按指定挖坑法展开；空只是演示标记，不是删除元素",
        "heads": [
          "当前区间",
          "动作",
          "完整数组"
        ],
        "rows": [
          [
            "[0,8]",
            "暂存首基准19",
            "空，24，22，10，21，13，36，22，24"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "13，24，22，10，21，空，36，22，24"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "13，空，22，10，21，24，36，22，24"
          ],
          [
            "[0,8]",
            "右小值填左坑",
            "13，10，22，空，21，24，36，22，24"
          ],
          [
            "[0,8]",
            "左大值填右坑",
            "13，10，空，22，21，24，36，22，24"
          ],
          [
            "[0,8]",
            "基准回填到下标2",
            "13，10，19，22，21，24，36，22，24"
          ],
          [
            "[0,1]",
            "暂存首基准13",
            "空，10，19，22，21，24，36，22，24"
          ],
          [
            "[0,1]",
            "右小值填左坑",
            "10，空，19，22，21，24，36，22，24"
          ],
          [
            "[0,1]",
            "基准回填到下标1",
            "10，13，19，22，21，24，36，22，24"
          ],
          [
            "[3,8]",
            "暂存首基准22",
            "10，13，19，空，21，24，36，22，24"
          ],
          [
            "[3,8]",
            "右小值填左坑",
            "10，13，19，21，空，24，36，22，24"
          ],
          [
            "[3,8]",
            "基准回填到下标4",
            "10，13，19，21，22，24，36，22，24"
          ],
          [
            "[5,8]",
            "暂存首基准24",
            "10，13，19，21，22，空，36，22，24"
          ],
          [
            "[5,8]",
            "右小值填左坑",
            "10，13，19，21，22，22，36，空，24"
          ],
          [
            "[5,8]",
            "左大值填右坑",
            "10，13，19，21，22，22，空，36，24"
          ],
          [
            "[5,8]",
            "基准回填到下标6",
            "10，13，19，21，22，22，24，36，24"
          ],
          [
            "[7,8]",
            "暂存首基准36",
            "10，13，19，21，22，22，24，空，24"
          ],
          [
            "[7,8]",
            "右小值填左坑",
            "10，13，19，21，22，22，24，24，空"
          ],
          [
            "[7,8]",
            "基准回填到下标8",
            "10，13，19，21，22，22，24，24，36"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R8-shell-v1",
    "chapter": 8,
    "mode": "review",
    "family": "R8-shell",
    "variant": 1,
    "title": "序列 [10, 18, 4, 13, 16, 5, 10, 8, 2] 按增量 [5, 3, 1] 做希尔排序；每个增量结束后写完整数组。分组按下标差 gap，不是连续切块。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-2",
    "hint": "",
    "explain": "gap=5 后：[5, 10, 4, 2, 16, 10, 18, 8, 13]\ngap=3 后：[2, 8, 4, 5, 10, 10, 18, 16, 13]\ngap=1 后：[2, 4, 5, 8, 10, 10, 13, 16, 18]\n每组保持原下标间距并进行直接插入。gap=1 后整体有序。",
    "solution": [
      "gap=5 后：[5, 10, 4, 2, 16, 10, 18, 8, 13]",
      "gap=3 后：[2, 8, 4, 5, 10, 10, 18, 16, 13]",
      "gap=1 后：[2, 4, 5, 8, 10, 10, 13, 16, 18]",
      "每组保持原下标间距并进行直接插入。gap=1 后整体有序。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "gap=5 一趟后的完整序列",
        "answer": "5,10,4,2,16,10,18,8,13",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "gap=3 一趟后的完整序列",
        "answer": "2,8,4,5,10,10,18,16,13",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "gap=1 一趟后的完整序列",
        "answer": "2,4,5,8,10,10,13,16,18",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "一趟指某个gap的所有间隔组都完成之后。",
      "plan": [
        "按下标余数分组，每组内做插入，仍放回原间隔位置。",
        "所有组处理完才抄完整数组，再换下一个gap。"
      ],
      "format": "每空写完整数组，不把各组局部结果连续拼接。"
    },
    "worked": [
      {
        "caption": "逐个间隔组完成后仍放回原位置；同gap所有组结束才算一趟",
        "heads": [
          "gap",
          "本组下标",
          "组内排序结果",
          "当前全数组"
        ],
        "rows": [
          [
            "5",
            "0，5",
            "5，10",
            "5，18，4，13，16，10，10，8，2"
          ],
          [
            "5",
            "1，6",
            "10，18",
            "5，10，4，13，16，10，18，8，2"
          ],
          [
            "5",
            "2，7",
            "4，8",
            "5，10，4，13，16，10，18，8，2"
          ],
          [
            "5",
            "3，8",
            "2，13",
            "5，10，4，2，16，10，18，8，13"
          ],
          [
            "5",
            "4",
            "16",
            "5，10，4，2，16，10，18，8，13"
          ],
          [
            "3",
            "0，3，6",
            "2，5，18",
            "2，10，4，5，16，10，18，8，13"
          ],
          [
            "3",
            "1，4，7",
            "8，10，16",
            "2，8，4，5，10，10，18，16，13"
          ],
          [
            "3",
            "2，5，8",
            "4，10，13",
            "2，8，4，5，10，10，18，16，13"
          ],
          [
            "1",
            "0，1，2，3，4，5，6，7，8",
            "2，4，5，8，10，10，13，16，18",
            "2，4，5，8，10，10，13，16，18"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-shell-v2",
    "chapter": 8,
    "mode": "review",
    "family": "R8-shell",
    "variant": 2,
    "title": "序列 [19, 24, 22, 10, 21, 13, 36, 22, 24] 按增量 [5, 3, 1] 做希尔排序；每个增量结束后写完整数组。分组按下标差 gap，不是连续切块。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-2",
    "hint": "",
    "explain": "gap=5 后：[13, 24, 22, 10, 21, 19, 36, 22, 24]\ngap=3 后：[10, 21, 19, 13, 22, 22, 36, 24, 24]\ngap=1 后：[10, 13, 19, 21, 22, 22, 24, 24, 36]\n每组保持原下标间距并进行直接插入。gap=1 后整体有序。",
    "solution": [
      "gap=5 后：[13, 24, 22, 10, 21, 19, 36, 22, 24]",
      "gap=3 后：[10, 21, 19, 13, 22, 22, 36, 24, 24]",
      "gap=1 后：[10, 13, 19, 21, 22, 22, 24, 24, 36]",
      "每组保持原下标间距并进行直接插入。gap=1 后整体有序。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "gap=5 一趟后的完整序列",
        "answer": "13,24,22,10,21,19,36,22,24",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "gap=3 一趟后的完整序列",
        "answer": "10,21,19,13,22,22,36,24,24",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "gap=1 一趟后的完整序列",
        "answer": "10,13,19,21,22,22,24,24,36",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "一趟指某个gap的所有间隔组都完成之后。",
      "plan": [
        "按下标余数分组，每组内做插入，仍放回原间隔位置。",
        "所有组处理完才抄完整数组，再换下一个gap。"
      ],
      "format": "每空写完整数组，不把各组局部结果连续拼接。"
    },
    "worked": [
      {
        "caption": "逐个间隔组完成后仍放回原位置；同gap所有组结束才算一趟",
        "heads": [
          "gap",
          "本组下标",
          "组内排序结果",
          "当前全数组"
        ],
        "rows": [
          [
            "5",
            "0，5",
            "13，19",
            "13，24，22，10，21，19，36，22，24"
          ],
          [
            "5",
            "1，6",
            "24，36",
            "13，24，22，10，21，19，36，22，24"
          ],
          [
            "5",
            "2，7",
            "22，22",
            "13，24，22，10，21，19，36，22，24"
          ],
          [
            "5",
            "3，8",
            "10，24",
            "13，24，22，10，21，19，36，22，24"
          ],
          [
            "5",
            "4",
            "21",
            "13，24，22，10，21，19，36，22，24"
          ],
          [
            "3",
            "0，3，6",
            "10，13，36",
            "10，24，22，13，21，19，36，22，24"
          ],
          [
            "3",
            "1，4，7",
            "21，22，24",
            "10，21，22，13，22，19，36，24，24"
          ],
          [
            "3",
            "2，5，8",
            "19，22，24",
            "10，21，19，13，22，22，36，24，24"
          ],
          [
            "1",
            "0，1，2，3，4，5，6，7，8",
            "10，13，19，21，22，22，24，24，36",
            "10，13，19，21，22，22，24，24，36"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-shell-v3",
    "chapter": 8,
    "mode": "review",
    "family": "R8-shell",
    "variant": 3,
    "title": "序列 [26, 5, 77, 1, 61, 11, 59, 15, 48, 19] 按增量 [5, 2, 1] 做希尔排序；每个增量结束后写完整数组。分组按下标差 gap，不是连续切块。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-2",
    "hint": "",
    "explain": "gap=5 后：[11, 5, 15, 1, 19, 26, 59, 77, 48, 61]\ngap=2 后：[11, 1, 15, 5, 19, 26, 48, 61, 59, 77]\ngap=1 后：[1, 5, 11, 15, 19, 26, 48, 59, 61, 77]\n每组保持原下标间距并进行直接插入。gap=1 后整体有序。",
    "solution": [
      "gap=5 后：[11, 5, 15, 1, 19, 26, 59, 77, 48, 61]",
      "gap=2 后：[11, 1, 15, 5, 19, 26, 48, 61, 59, 77]",
      "gap=1 后：[1, 5, 11, 15, 19, 26, 48, 59, 61, 77]",
      "每组保持原下标间距并进行直接插入。gap=1 后整体有序。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "gap=5 一趟后的完整序列",
        "answer": "11,5,15,1,19,26,59,77,48,61",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "gap=2 一趟后的完整序列",
        "answer": "11,1,15,5,19,26,48,61,59,77",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "gap=1 一趟后的完整序列",
        "answer": "1,5,11,15,19,26,48,59,61,77",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "一趟指某个gap的所有间隔组都完成之后。",
      "plan": [
        "按下标余数分组，每组内做插入，仍放回原间隔位置。",
        "所有组处理完才抄完整数组，再换下一个gap。"
      ],
      "format": "每空写完整数组，不把各组局部结果连续拼接。"
    },
    "worked": [
      {
        "caption": "逐个间隔组完成后仍放回原位置；同gap所有组结束才算一趟",
        "heads": [
          "gap",
          "本组下标",
          "组内排序结果",
          "当前全数组"
        ],
        "rows": [
          [
            "5",
            "0，5",
            "11，26",
            "11，5，77，1，61，26，59，15，48，19"
          ],
          [
            "5",
            "1，6",
            "5，59",
            "11，5，77，1，61，26，59，15，48，19"
          ],
          [
            "5",
            "2，7",
            "15，77",
            "11，5，15，1，61，26，59，77，48，19"
          ],
          [
            "5",
            "3，8",
            "1，48",
            "11，5，15，1，61，26，59，77，48，19"
          ],
          [
            "5",
            "4，9",
            "19，61",
            "11，5，15，1，19，26，59，77，48，61"
          ],
          [
            "2",
            "0，2，4，6，8",
            "11，15，19，48，59",
            "11，5，15，1，19，26，48，77，59，61"
          ],
          [
            "2",
            "1，3，5，7，9",
            "1，5，26，61，77",
            "11，1，15，5，19，26，48，61，59，77"
          ],
          [
            "1",
            "0，1，2，3，4，5，6，7，8，9",
            "1，5，11，15，19，26，48，59，61，77",
            "1，5，11，15，19，26，48，59，61，77"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-shell-v4",
    "chapter": 8,
    "mode": "review",
    "family": "R8-shell",
    "variant": 4,
    "title": "序列 [8, 1, 6, 2, 9, 3, 7, 4, 5] 按增量 [4, 2, 1] 做希尔排序；每个增量结束后写完整数组。分组按下标差 gap，不是连续切块。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-2",
    "hint": "",
    "explain": "gap=4 后：[5, 1, 6, 2, 8, 3, 7, 4, 9]\ngap=2 后：[5, 1, 6, 2, 7, 3, 8, 4, 9]\ngap=1 后：[1, 2, 3, 4, 5, 6, 7, 8, 9]\n每组保持原下标间距并进行直接插入。gap=1 后整体有序。",
    "solution": [
      "gap=4 后：[5, 1, 6, 2, 8, 3, 7, 4, 9]",
      "gap=2 后：[5, 1, 6, 2, 7, 3, 8, 4, 9]",
      "gap=1 后：[1, 2, 3, 4, 5, 6, 7, 8, 9]",
      "每组保持原下标间距并进行直接插入。gap=1 后整体有序。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "gap=4 一趟后的完整序列",
        "answer": "5,1,6,2,8,3,7,4,9",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "gap=2 一趟后的完整序列",
        "answer": "5,1,6,2,7,3,8,4,9",
        "points": 3,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "gap=1 一趟后的完整序列",
        "answer": "1,2,3,4,5,6,7,8,9",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "一趟指某个gap的所有间隔组都完成之后。",
      "plan": [
        "按下标余数分组，每组内做插入，仍放回原间隔位置。",
        "所有组处理完才抄完整数组，再换下一个gap。"
      ],
      "format": "每空写完整数组，不把各组局部结果连续拼接。"
    },
    "worked": [
      {
        "caption": "逐个间隔组完成后仍放回原位置；同gap所有组结束才算一趟",
        "heads": [
          "gap",
          "本组下标",
          "组内排序结果",
          "当前全数组"
        ],
        "rows": [
          [
            "4",
            "0，4，8",
            "5，8，9",
            "5，1，6，2，8，3，7，4，9"
          ],
          [
            "4",
            "1，5",
            "1，3",
            "5，1，6，2，8，3，7，4，9"
          ],
          [
            "4",
            "2，6",
            "6，7",
            "5，1，6，2，8，3，7，4，9"
          ],
          [
            "4",
            "3，7",
            "2，4",
            "5，1，6，2，8，3，7，4，9"
          ],
          [
            "2",
            "0，2，4，6，8",
            "5，6，7，8，9",
            "5，1，6，2，7，3，8，4，9"
          ],
          [
            "2",
            "1，3，5，7",
            "1，2，3，4",
            "5，1，6，2，7，3，8，4，9"
          ],
          [
            "1",
            "0，1，2，3，4，5，6，7，8",
            "1，2，3，4，5，6，7，8，9",
            "1，2，3，4，5，6，7，8，9"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-heap-v1",
    "chapter": 8,
    "mode": "review",
    "family": "R8-heap",
    "variant": 1,
    "title": "对 [26, 5, 77, 1, 61, 11, 59, 15, 48, 19] 做升序堆排序。0 起始，从最后非叶结点向前建大根堆；向下筛选时取更大孩子，相等优先左孩子。写出建堆及每次取出堆顶后完整数组，区分堆区与有序后缀。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      15
    ],
    "origin": "同类考法新题",
    "topic": "r8-3",
    "hint": "",
    "explain": "初始大根堆=[77, 61, 59, 48, 19, 11, 26, 15, 1, 5]。\n第 1 次取顶并调整后=[61, 48, 59, 15, 19, 11, 26, 5, 1, 77]，堆大小 9。\n第 2 次取顶并调整后=[59, 48, 26, 15, 19, 11, 1, 5, 61, 77]，堆大小 8。\n第 3 次取顶并调整后=[48, 19, 26, 15, 5, 11, 1, 59, 61, 77]，堆大小 7。\n第 4 次取顶并调整后=[26, 19, 11, 15, 5, 1, 48, 59, 61, 77]，堆大小 6。\n第 5 次取顶并调整后=[19, 15, 11, 1, 5, 26, 48, 59, 61, 77]，堆大小 5。\n第 6 次取顶并调整后=[15, 5, 11, 1, 19, 26, 48, 59, 61, 77]，堆大小 4。\n第 7 次取顶并调整后=[11, 5, 1, 15, 19, 26, 48, 59, 61, 77]，堆大小 3。\n第 8 次取顶并调整后=[5, 1, 11, 15, 19, 26, 48, 59, 61, 77]，堆大小 2。\n第 9 次取顶并调整后=[1, 5, 11, 15, 19, 26, 48, 59, 61, 77]，堆大小 1。\n取出的最大值交换到当前末尾，余下部分继续成堆。",
    "solution": [
      "初始大根堆=[77, 61, 59, 48, 19, 11, 26, 15, 1, 5]。",
      "第 1 次取顶并调整后=[61, 48, 59, 15, 19, 11, 26, 5, 1, 77]，堆大小 9。",
      "第 2 次取顶并调整后=[59, 48, 26, 15, 19, 11, 1, 5, 61, 77]，堆大小 8。",
      "第 3 次取顶并调整后=[48, 19, 26, 15, 5, 11, 1, 59, 61, 77]，堆大小 7。",
      "第 4 次取顶并调整后=[26, 19, 11, 15, 5, 1, 48, 59, 61, 77]，堆大小 6。",
      "第 5 次取顶并调整后=[19, 15, 11, 1, 5, 26, 48, 59, 61, 77]，堆大小 5。",
      "第 6 次取顶并调整后=[15, 5, 11, 1, 19, 26, 48, 59, 61, 77]，堆大小 4。",
      "第 7 次取顶并调整后=[11, 5, 1, 15, 19, 26, 48, 59, 61, 77]，堆大小 3。",
      "第 8 次取顶并调整后=[5, 1, 11, 15, 19, 26, 48, 59, 61, 77]，堆大小 2。",
      "第 9 次取顶并调整后=[1, 5, 11, 15, 19, 26, 48, 59, 61, 77]，堆大小 1。",
      "取出的最大值交换到当前末尾，余下部分继续成堆。"
    ],
    "rubric": [
      {
        "label": "按最后非叶到根正确建大根堆",
        "points": 3
      },
      {
        "label": "每趟堆顶交换与缩小边界正确",
        "points": 2
      },
      {
        "label": "逐趟下筛选与完整序列正确",
        "points": 2
      },
      {
        "label": "区分堆区/有序后缀，得到升序",
        "points": 1
      }
    ],
    "support": {
      "ask": "先建堆，再取顶、缩小堆、调整，三步分开。",
      "plan": [
        "从最后非叶到根向下筛选，大孩子上移，等值优先左。",
        "每次最大值换到当前末尾后缩小边界，有序后缀不再参与。"
      ],
      "format": "给初堆和每趟完整数组，并标堆大小。"
    },
    "worked": [
      {
        "caption": "有序后缀不再参与后续下筛选",
        "heads": [
          "阶段",
          "堆大小",
          "完整数组"
        ],
        "rows": [
          [
            "建堆完成",
            "10",
            "77，61，59，48，19，11，26，15，1，5"
          ],
          [
            "第1次取顶后",
            "9",
            "61，48，59，15，19，11，26，5，1，77"
          ],
          [
            "第2次取顶后",
            "8",
            "59，48，26，15，19，11，1，5，61，77"
          ],
          [
            "第3次取顶后",
            "7",
            "48，19，26，15，5，11，1，59，61，77"
          ],
          [
            "第4次取顶后",
            "6",
            "26，19，11，15，5，1，48，59，61，77"
          ],
          [
            "第5次取顶后",
            "5",
            "19，15，11，1，5，26，48，59，61，77"
          ],
          [
            "第6次取顶后",
            "4",
            "15，5，11，1，19，26，48，59，61，77"
          ],
          [
            "第7次取顶后",
            "3",
            "11，5，1，15，19，26，48，59，61，77"
          ],
          [
            "第8次取顶后",
            "2",
            "5，1，11，15，19，26，48，59，61，77"
          ],
          [
            "第9次取顶后",
            "1",
            "1，5，11，15，19，26，48，59，61，77"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R8-heap-v2",
    "chapter": 8,
    "mode": "review",
    "family": "R8-heap",
    "variant": 2,
    "title": "对 [46, 26, 22, 68, 48, 42, 36, 84, 66] 做升序堆排序。0 起始，从最后非叶结点向前建大根堆；向下筛选时取更大孩子，相等优先左孩子。写出建堆及每次取出堆顶后完整数组，区分堆区与有序后缀。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      15
    ],
    "origin": "同类考法新题",
    "topic": "r8-3",
    "hint": "",
    "explain": "初始大根堆=[84, 68, 42, 66, 48, 22, 36, 26, 46]。\n第 1 次取顶并调整后=[68, 66, 42, 46, 48, 22, 36, 26, 84]，堆大小 8。\n第 2 次取顶并调整后=[66, 48, 42, 46, 26, 22, 36, 68, 84]，堆大小 7。\n第 3 次取顶并调整后=[48, 46, 42, 36, 26, 22, 66, 68, 84]，堆大小 6。\n第 4 次取顶并调整后=[46, 36, 42, 22, 26, 48, 66, 68, 84]，堆大小 5。\n第 5 次取顶并调整后=[42, 36, 26, 22, 46, 48, 66, 68, 84]，堆大小 4。\n第 6 次取顶并调整后=[36, 22, 26, 42, 46, 48, 66, 68, 84]，堆大小 3。\n第 7 次取顶并调整后=[26, 22, 36, 42, 46, 48, 66, 68, 84]，堆大小 2。\n第 8 次取顶并调整后=[22, 26, 36, 42, 46, 48, 66, 68, 84]，堆大小 1。\n取出的最大值交换到当前末尾，余下部分继续成堆。",
    "solution": [
      "初始大根堆=[84, 68, 42, 66, 48, 22, 36, 26, 46]。",
      "第 1 次取顶并调整后=[68, 66, 42, 46, 48, 22, 36, 26, 84]，堆大小 8。",
      "第 2 次取顶并调整后=[66, 48, 42, 46, 26, 22, 36, 68, 84]，堆大小 7。",
      "第 3 次取顶并调整后=[48, 46, 42, 36, 26, 22, 66, 68, 84]，堆大小 6。",
      "第 4 次取顶并调整后=[46, 36, 42, 22, 26, 48, 66, 68, 84]，堆大小 5。",
      "第 5 次取顶并调整后=[42, 36, 26, 22, 46, 48, 66, 68, 84]，堆大小 4。",
      "第 6 次取顶并调整后=[36, 22, 26, 42, 46, 48, 66, 68, 84]，堆大小 3。",
      "第 7 次取顶并调整后=[26, 22, 36, 42, 46, 48, 66, 68, 84]，堆大小 2。",
      "第 8 次取顶并调整后=[22, 26, 36, 42, 46, 48, 66, 68, 84]，堆大小 1。",
      "取出的最大值交换到当前末尾，余下部分继续成堆。"
    ],
    "rubric": [
      {
        "label": "按最后非叶到根正确建大根堆",
        "points": 3
      },
      {
        "label": "每趟堆顶交换与缩小边界正确",
        "points": 2
      },
      {
        "label": "逐趟下筛选与完整序列正确",
        "points": 2
      },
      {
        "label": "区分堆区/有序后缀，得到升序",
        "points": 1
      }
    ],
    "support": {
      "ask": "先建堆，再取顶、缩小堆、调整，三步分开。",
      "plan": [
        "从最后非叶到根向下筛选，大孩子上移，等值优先左。",
        "每次最大值换到当前末尾后缩小边界，有序后缀不再参与。"
      ],
      "format": "给初堆和每趟完整数组，并标堆大小。"
    },
    "worked": [
      {
        "caption": "有序后缀不再参与后续下筛选",
        "heads": [
          "阶段",
          "堆大小",
          "完整数组"
        ],
        "rows": [
          [
            "建堆完成",
            "9",
            "84，68，42，66，48，22，36，26，46"
          ],
          [
            "第1次取顶后",
            "8",
            "68，66，42，46，48，22，36，26，84"
          ],
          [
            "第2次取顶后",
            "7",
            "66，48，42，46，26，22，36，68，84"
          ],
          [
            "第3次取顶后",
            "6",
            "48，46，42，36，26，22，66，68，84"
          ],
          [
            "第4次取顶后",
            "5",
            "46，36，42，22，26，48，66，68，84"
          ],
          [
            "第5次取顶后",
            "4",
            "42，36，26，22，46，48，66，68，84"
          ],
          [
            "第6次取顶后",
            "3",
            "36，22，26，42，46，48，66，68，84"
          ],
          [
            "第7次取顶后",
            "2",
            "26，22，36，42，46，48，66，68，84"
          ],
          [
            "第8次取顶后",
            "1",
            "22，26，36，42，46，48，66，68，84"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R8-heap-v3",
    "chapter": 8,
    "mode": "review",
    "family": "R8-heap",
    "variant": 3,
    "title": "对 [46, 79, 56, 38, 40, 84] 做升序堆排序。0 起始，从最后非叶结点向前建大根堆；向下筛选时取更大孩子，相等优先左孩子。写出建堆及每次取出堆顶后完整数组，区分堆区与有序后缀。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      15
    ],
    "origin": "同类考法新题",
    "topic": "r8-3",
    "hint": "",
    "explain": "初始大根堆=[84, 79, 56, 38, 40, 46]。\n第 1 次取顶并调整后=[79, 46, 56, 38, 40, 84]，堆大小 5。\n第 2 次取顶并调整后=[56, 46, 40, 38, 79, 84]，堆大小 4。\n第 3 次取顶并调整后=[46, 38, 40, 56, 79, 84]，堆大小 3。\n第 4 次取顶并调整后=[40, 38, 46, 56, 79, 84]，堆大小 2。\n第 5 次取顶并调整后=[38, 40, 46, 56, 79, 84]，堆大小 1。\n取出的最大值交换到当前末尾，余下部分继续成堆。",
    "solution": [
      "初始大根堆=[84, 79, 56, 38, 40, 46]。",
      "第 1 次取顶并调整后=[79, 46, 56, 38, 40, 84]，堆大小 5。",
      "第 2 次取顶并调整后=[56, 46, 40, 38, 79, 84]，堆大小 4。",
      "第 3 次取顶并调整后=[46, 38, 40, 56, 79, 84]，堆大小 3。",
      "第 4 次取顶并调整后=[40, 38, 46, 56, 79, 84]，堆大小 2。",
      "第 5 次取顶并调整后=[38, 40, 46, 56, 79, 84]，堆大小 1。",
      "取出的最大值交换到当前末尾，余下部分继续成堆。"
    ],
    "rubric": [
      {
        "label": "按最后非叶到根正确建大根堆",
        "points": 3
      },
      {
        "label": "每趟堆顶交换与缩小边界正确",
        "points": 2
      },
      {
        "label": "逐趟下筛选与完整序列正确",
        "points": 2
      },
      {
        "label": "区分堆区/有序后缀，得到升序",
        "points": 1
      }
    ],
    "support": {
      "ask": "先建堆，再取顶、缩小堆、调整，三步分开。",
      "plan": [
        "从最后非叶到根向下筛选，大孩子上移，等值优先左。",
        "每次最大值换到当前末尾后缩小边界，有序后缀不再参与。"
      ],
      "format": "给初堆和每趟完整数组，并标堆大小。"
    },
    "worked": [
      {
        "caption": "有序后缀不再参与后续下筛选",
        "heads": [
          "阶段",
          "堆大小",
          "完整数组"
        ],
        "rows": [
          [
            "建堆完成",
            "6",
            "84，79，56，38，40，46"
          ],
          [
            "第1次取顶后",
            "5",
            "79，46，56，38，40，84"
          ],
          [
            "第2次取顶后",
            "4",
            "56，46，40，38，79，84"
          ],
          [
            "第3次取顶后",
            "3",
            "46，38，40，56，79，84"
          ],
          [
            "第4次取顶后",
            "2",
            "40，38，46，56，79，84"
          ],
          [
            "第5次取顶后",
            "1",
            "38，40，46，56，79，84"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R8-heap-v4",
    "chapter": 8,
    "mode": "review",
    "family": "R8-heap",
    "variant": 4,
    "title": "对 [12, 4, 18, 7, 3, 9] 做升序堆排序。0 起始，从最后非叶结点向前建大根堆；向下筛选时取更大孩子，相等优先左孩子。写出建堆及每次取出堆顶后完整数组，区分堆区与有序后缀。",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "sourcePages": [
      15
    ],
    "origin": "同类考法新题",
    "topic": "r8-3",
    "hint": "",
    "explain": "初始大根堆=[18, 7, 12, 4, 3, 9]。\n第 1 次取顶并调整后=[12, 7, 9, 4, 3, 18]，堆大小 5。\n第 2 次取顶并调整后=[9, 7, 3, 4, 12, 18]，堆大小 4。\n第 3 次取顶并调整后=[7, 4, 3, 9, 12, 18]，堆大小 3。\n第 4 次取顶并调整后=[4, 3, 7, 9, 12, 18]，堆大小 2。\n第 5 次取顶并调整后=[3, 4, 7, 9, 12, 18]，堆大小 1。\n取出的最大值交换到当前末尾，余下部分继续成堆。",
    "solution": [
      "初始大根堆=[18, 7, 12, 4, 3, 9]。",
      "第 1 次取顶并调整后=[12, 7, 9, 4, 3, 18]，堆大小 5。",
      "第 2 次取顶并调整后=[9, 7, 3, 4, 12, 18]，堆大小 4。",
      "第 3 次取顶并调整后=[7, 4, 3, 9, 12, 18]，堆大小 3。",
      "第 4 次取顶并调整后=[4, 3, 7, 9, 12, 18]，堆大小 2。",
      "第 5 次取顶并调整后=[3, 4, 7, 9, 12, 18]，堆大小 1。",
      "取出的最大值交换到当前末尾，余下部分继续成堆。"
    ],
    "rubric": [
      {
        "label": "按最后非叶到根正确建大根堆",
        "points": 3
      },
      {
        "label": "每趟堆顶交换与缩小边界正确",
        "points": 2
      },
      {
        "label": "逐趟下筛选与完整序列正确",
        "points": 2
      },
      {
        "label": "区分堆区/有序后缀，得到升序",
        "points": 1
      }
    ],
    "support": {
      "ask": "先建堆，再取顶、缩小堆、调整，三步分开。",
      "plan": [
        "从最后非叶到根向下筛选，大孩子上移，等值优先左。",
        "每次最大值换到当前末尾后缩小边界，有序后缀不再参与。"
      ],
      "format": "给初堆和每趟完整数组，并标堆大小。"
    },
    "worked": [
      {
        "caption": "有序后缀不再参与后续下筛选",
        "heads": [
          "阶段",
          "堆大小",
          "完整数组"
        ],
        "rows": [
          [
            "建堆完成",
            "6",
            "18，7，12，4，3，9"
          ],
          [
            "第1次取顶后",
            "5",
            "12，7，9，4，3，18"
          ],
          [
            "第2次取顶后",
            "4",
            "9，7，3，4，12，18"
          ],
          [
            "第3次取顶后",
            "3",
            "7，4，3，9，12，18"
          ],
          [
            "第4次取顶后",
            "2",
            "4，3，7，9，12，18"
          ],
          [
            "第5次取顶后",
            "1",
            "3，4，7，9，12，18"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "R8-bubble-count-v1",
    "chapter": 8,
    "mode": "review",
    "family": "R8-bubble-count",
    "variant": 1,
    "title": "冒泡升序，左到右比较相邻元素，每趟右边界减一，整趟无交换提前结束。对 [19, 18, 60, 40, 7, 31, 72, 65]，每次交换按 3 次记录移动计。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      40
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "逐趟（数组,比较,交换）=[([18, 19, 40, 7, 31, 60, 65, 72], 7, 5), ([18, 19, 7, 31, 40, 60, 65, 72], 6, 2), ([18, 7, 19, 31, 40, 60, 65, 72], 5, 1), ([7, 18, 19, 31, 40, 60, 65, 72], 4, 1), ([7, 18, 19, 31, 40, 60, 65, 72], 3, 0)]。\n比较 25，交换 9，移动 27，扫描 5 趟。\n算法是否提前结束会影响比较次数；交换和记录移动不是同一个数。",
    "solution": [
      "逐趟（数组,比较,交换）=[([18, 19, 40, 7, 31, 60, 65, 72], 7, 5), ([18, 19, 7, 31, 40, 60, 65, 72], 6, 2), ([18, 7, 19, 31, 40, 60, 65, 72], 5, 1), ([7, 18, 19, 31, 40, 60, 65, 72], 4, 1), ([7, 18, 19, 31, 40, 60, 65, 72], 3, 0)]。",
      "比较 25，交换 9，移动 27，扫描 5 趟。",
      "算法是否提前结束会影响比较次数；交换和记录移动不是同一个数。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "总关键字比较次数",
        "answer": "25",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "交换次数",
        "answer": "9",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "记录移动次数",
        "answer": "27",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "实际扫描趟数",
        "answer": "5",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "比较、交换、记录移动与扫描趟数是四个不同量。",
      "plan": [
        "每趟右界减一，逐对比较；只有逆序才交换，交换算3次移动。",
        "整趟无交换提前结束，那一趟的比较仍要计入。"
      ],
      "format": "按题给有标志版本精确统计，不套固定总比较公式。"
    },
    "worked": [
      {
        "caption": "最后无交换的一趟仍计算比较数",
        "heads": [
          "趟",
          "本趟比较",
          "本趟交换",
          "本趟移动",
          "趟后全数组"
        ],
        "rows": [
          [
            "1",
            "7",
            "5",
            "15",
            "18，19，40，7，31，60，65，72"
          ],
          [
            "2",
            "6",
            "2",
            "6",
            "18，19，7，31，40，60，65，72"
          ],
          [
            "3",
            "5",
            "1",
            "3",
            "18，7，19，31，40，60，65，72"
          ],
          [
            "4",
            "4",
            "1",
            "3",
            "7，18，19，31，40，60，65，72"
          ],
          [
            "5",
            "3",
            "0",
            "0",
            "7，18，19，31，40，60，65，72"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-bubble-count-v2",
    "chapter": 8,
    "mode": "review",
    "family": "R8-bubble-count",
    "variant": 2,
    "title": "冒泡升序，左到右比较相邻元素，每趟右边界减一，整趟无交换提前结束。对 [1, 2, 3, 4, 5]，每次交换按 3 次记录移动计。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      40
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "逐趟（数组,比较,交换）=[([1, 2, 3, 4, 5], 4, 0)]。\n比较 4，交换 0，移动 0，扫描 1 趟。\n算法是否提前结束会影响比较次数；交换和记录移动不是同一个数。",
    "solution": [
      "逐趟（数组,比较,交换）=[([1, 2, 3, 4, 5], 4, 0)]。",
      "比较 4，交换 0，移动 0，扫描 1 趟。",
      "算法是否提前结束会影响比较次数；交换和记录移动不是同一个数。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "总关键字比较次数",
        "answer": "4",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "交换次数",
        "answer": "0",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "记录移动次数",
        "answer": "0",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "实际扫描趟数",
        "answer": "1",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "比较、交换、记录移动与扫描趟数是四个不同量。",
      "plan": [
        "每趟右界减一，逐对比较；只有逆序才交换，交换算3次移动。",
        "整趟无交换提前结束，那一趟的比较仍要计入。"
      ],
      "format": "按题给有标志版本精确统计，不套固定总比较公式。"
    },
    "worked": [
      {
        "caption": "最后无交换的一趟仍计算比较数",
        "heads": [
          "趟",
          "本趟比较",
          "本趟交换",
          "本趟移动",
          "趟后全数组"
        ],
        "rows": [
          [
            "1",
            "4",
            "0",
            "0",
            "1，2，3，4，5"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-bubble-count-v3",
    "chapter": 8,
    "mode": "review",
    "family": "R8-bubble-count",
    "variant": 3,
    "title": "冒泡升序，左到右比较相邻元素，每趟右边界减一，整趟无交换提前结束。对 [5, 4, 3, 2, 1]，每次交换按 3 次记录移动计。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      40
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "逐趟（数组,比较,交换）=[([4, 3, 2, 1, 5], 4, 4), ([3, 2, 1, 4, 5], 3, 3), ([2, 1, 3, 4, 5], 2, 2), ([1, 2, 3, 4, 5], 1, 1)]。\n比较 10，交换 10，移动 30，扫描 4 趟。\n算法是否提前结束会影响比较次数；交换和记录移动不是同一个数。",
    "solution": [
      "逐趟（数组,比较,交换）=[([4, 3, 2, 1, 5], 4, 4), ([3, 2, 1, 4, 5], 3, 3), ([2, 1, 3, 4, 5], 2, 2), ([1, 2, 3, 4, 5], 1, 1)]。",
      "比较 10，交换 10，移动 30，扫描 4 趟。",
      "算法是否提前结束会影响比较次数；交换和记录移动不是同一个数。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "总关键字比较次数",
        "answer": "10",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "交换次数",
        "answer": "10",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "记录移动次数",
        "answer": "30",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "实际扫描趟数",
        "answer": "4",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "比较、交换、记录移动与扫描趟数是四个不同量。",
      "plan": [
        "每趟右界减一，逐对比较；只有逆序才交换，交换算3次移动。",
        "整趟无交换提前结束，那一趟的比较仍要计入。"
      ],
      "format": "按题给有标志版本精确统计，不套固定总比较公式。"
    },
    "worked": [
      {
        "caption": "最后无交换的一趟仍计算比较数",
        "heads": [
          "趟",
          "本趟比较",
          "本趟交换",
          "本趟移动",
          "趟后全数组"
        ],
        "rows": [
          [
            "1",
            "4",
            "4",
            "12",
            "4，3，2，1，5"
          ],
          [
            "2",
            "3",
            "3",
            "9",
            "3，2，1，4，5"
          ],
          [
            "3",
            "2",
            "2",
            "6",
            "2，1，3，4，5"
          ],
          [
            "4",
            "1",
            "1",
            "3",
            "1，2，3，4，5"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-bubble-count-v4",
    "chapter": 8,
    "mode": "review",
    "family": "R8-bubble-count",
    "variant": 4,
    "title": "冒泡升序，左到右比较相邻元素，每趟右边界减一，整趟无交换提前结束。对 [3, 1, 4, 2, 5]，每次交换按 3 次记录移动计。",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "sourcePages": [
      40
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "逐趟（数组,比较,交换）=[([1, 3, 2, 4, 5], 4, 2), ([1, 2, 3, 4, 5], 3, 1), ([1, 2, 3, 4, 5], 2, 0)]。\n比较 9，交换 3，移动 9，扫描 3 趟。\n算法是否提前结束会影响比较次数；交换和记录移动不是同一个数。",
    "solution": [
      "逐趟（数组,比较,交换）=[([1, 3, 2, 4, 5], 4, 2), ([1, 2, 3, 4, 5], 3, 1), ([1, 2, 3, 4, 5], 2, 0)]。",
      "比较 9，交换 3，移动 9，扫描 3 趟。",
      "算法是否提前结束会影响比较次数；交换和记录移动不是同一个数。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "总关键字比较次数",
        "answer": "9",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "交换次数",
        "answer": "3",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "记录移动次数",
        "answer": "9",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "实际扫描趟数",
        "answer": "3",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "比较、交换、记录移动与扫描趟数是四个不同量。",
      "plan": [
        "每趟右界减一，逐对比较；只有逆序才交换，交换算3次移动。",
        "整趟无交换提前结束，那一趟的比较仍要计入。"
      ],
      "format": "按题给有标志版本精确统计，不套固定总比较公式。"
    },
    "worked": [
      {
        "caption": "最后无交换的一趟仍计算比较数",
        "heads": [
          "趟",
          "本趟比较",
          "本趟交换",
          "本趟移动",
          "趟后全数组"
        ],
        "rows": [
          [
            "1",
            "4",
            "2",
            "6",
            "1，3，2，4，5"
          ],
          [
            "2",
            "3",
            "1",
            "3",
            "1，2，3，4，5"
          ],
          [
            "3",
            "2",
            "0",
            "0",
            "1，2，3，4，5"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-recognize-v1",
    "chapter": 8,
    "mode": "review",
    "family": "R8-recognize",
    "variant": 1,
    "title": "原序列 [9, 3, 7, 1, 5]，第 1 趟 [1, 3, 7, 9, 5]，第 2 趟 [1, 3, 7, 9, 5]；每趟从未排序区找全局最小值交换到前端。这是什么算法？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      32
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "关键线索是扫描整个未排序区取最小，再与区间首项交换。",
    "solution": [
      "关键线索是扫描整个未排序区取最小，再与区间首项交换。"
    ],
    "rubric": [],
    "options": [
      "冒泡",
      "简单选择",
      "快速排序",
      "希尔排序"
    ],
    "answer": 1,
    "support": {
      "ask": "识别每趟是否扫描整个无序区取最小。",
      "plan": [
        "第1趟比较n−1次，下一趟n−2次，依次到1次。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：冒泡逐对比较相邻项，不是一趟先选全局最小再交换。",
      "符合：关键线索是扫描整个未排序区取最小，再与区间首项交换。",
      "核对条件：快排按基准划分两段，不是逐趟选剩余最小放前端。",
      "核对条件：希尔按gap间隔分组插入，不是每趟从全区找最小。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-recognize-v2",
    "chapter": 8,
    "mode": "review",
    "family": "R8-recognize",
    "variant": 2,
    "title": "原序列 [4, 2, 5, 1, 3]，第 1 趟 [1, 2, 5, 4, 3]，第 2 趟 [1, 2, 5, 4, 3]；每趟从未排序区找全局最小值交换到前端。这是什么算法？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      32
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "关键线索是扫描整个未排序区取最小，再与区间首项交换。",
    "solution": [
      "关键线索是扫描整个未排序区取最小，再与区间首项交换。"
    ],
    "rubric": [],
    "options": [
      "简单选择",
      "快速排序",
      "希尔排序",
      "冒泡"
    ],
    "answer": 0,
    "support": {
      "ask": "识别每趟是否扫描整个无序区取最小。",
      "plan": [
        "第1趟比较n−1次，下一趟n−2次，依次到1次。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "符合：关键线索是扫描整个未排序区取最小，再与区间首项交换。",
      "核对条件：快排按基准划分两段，不是逐趟选剩余最小放前端。",
      "核对条件：希尔按gap间隔分组插入，不是每趟从全区找最小。",
      "核对条件：冒泡逐对比较相邻项，不是一趟先选全局最小再交换。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-recognize-v3",
    "chapter": 8,
    "mode": "review",
    "family": "R8-recognize",
    "variant": 3,
    "title": "原序列 [8, 5, 1, 6, 2]，第 1 趟 [1, 5, 8, 6, 2]，第 2 趟 [1, 2, 8, 6, 5]；每趟从未排序区找全局最小值交换到前端。这是什么算法？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      32
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "关键线索是扫描整个未排序区取最小，再与区间首项交换。",
    "solution": [
      "关键线索是扫描整个未排序区取最小，再与区间首项交换。"
    ],
    "rubric": [],
    "options": [
      "快速排序",
      "希尔排序",
      "冒泡",
      "简单选择"
    ],
    "answer": 3,
    "support": {
      "ask": "识别每趟是否扫描整个无序区取最小。",
      "plan": [
        "第1趟比较n−1次，下一趟n−2次，依次到1次。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：快排按基准划分两段，不是逐趟选剩余最小放前端。",
      "核对条件：希尔按gap间隔分组插入，不是每趟从全区找最小。",
      "核对条件：冒泡逐对比较相邻项，不是一趟先选全局最小再交换。",
      "符合：关键线索是扫描整个未排序区取最小，再与区间首项交换。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-recognize-v4",
    "chapter": 8,
    "mode": "review",
    "family": "R8-recognize",
    "variant": 4,
    "title": "原序列 [7, 3, 6, 2, 4]，第 1 趟 [2, 3, 6, 7, 4]，第 2 趟 [2, 3, 6, 7, 4]；每趟从未排序区找全局最小值交换到前端。这是什么算法？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      32
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "关键线索是扫描整个未排序区取最小，再与区间首项交换。",
    "solution": [
      "关键线索是扫描整个未排序区取最小，再与区间首项交换。"
    ],
    "rubric": [],
    "options": [
      "希尔排序",
      "冒泡",
      "简单选择",
      "快速排序"
    ],
    "answer": 2,
    "support": {
      "ask": "识别每趟是否扫描整个无序区取最小。",
      "plan": [
        "第1趟比较n−1次，下一趟n−2次，依次到1次。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：希尔按gap间隔分组插入，不是每趟从全区找最小。",
      "核对条件：冒泡逐对比较相邻项，不是一趟先选全局最小再交换。",
      "符合：关键线索是扫描整个未排序区取最小，再与区间首项交换。",
      "核对条件：快排按基准划分两段，不是逐趟选剩余最小放前端。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-selection-count-v1",
    "chapter": 8,
    "mode": "review",
    "family": "R8-selection-count",
    "variant": 1,
    "title": "对 9 个记录做简单选择排序，未排序区每趟完整扫描。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      32
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "比较=(9-1)+…+1=36；至多 8 次交换。\n即使已排序，比较次数仍为同样的平方级。",
    "solution": [
      "比较=(9-1)+…+1=36；至多 8 次交换。",
      "即使已排序，比较次数仍为同样的平方级。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "关键字比较总次数",
        "answer": "36",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最多发生的交换次数",
        "answer": "8",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "识别每趟是否扫描整个无序区取最小。",
      "plan": [
        "第1趟比较n−1次，下一趟n−2次，依次到1次。",
        "每趟最多一次真正交换；比较总数与交换总数不同。"
      ],
      "format": "比较总次数求和，最多交换次数为n−1。"
    },
    "walkthrough": [
      "识别每趟是否扫描整个无序区取最小。",
      "第1趟比较n−1次，下一趟n−2次，依次到1次。",
      "每趟最多一次真正交换；比较总数与交换总数不同。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-selection-count-v2",
    "chapter": 8,
    "mode": "review",
    "family": "R8-selection-count",
    "variant": 2,
    "title": "对 16 个记录做简单选择排序，未排序区每趟完整扫描。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      32
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "比较=(16-1)+…+1=120；至多 15 次交换。\n即使已排序，比较次数仍为同样的平方级。",
    "solution": [
      "比较=(16-1)+…+1=120；至多 15 次交换。",
      "即使已排序，比较次数仍为同样的平方级。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "关键字比较总次数",
        "answer": "120",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最多发生的交换次数",
        "answer": "15",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "识别每趟是否扫描整个无序区取最小。",
      "plan": [
        "第1趟比较n−1次，下一趟n−2次，依次到1次。",
        "每趟最多一次真正交换；比较总数与交换总数不同。"
      ],
      "format": "比较总次数求和，最多交换次数为n−1。"
    },
    "walkthrough": [
      "识别每趟是否扫描整个无序区取最小。",
      "第1趟比较n−1次，下一趟n−2次，依次到1次。",
      "每趟最多一次真正交换；比较总数与交换总数不同。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-selection-count-v3",
    "chapter": 8,
    "mode": "review",
    "family": "R8-selection-count",
    "variant": 3,
    "title": "对 30 个记录做简单选择排序，未排序区每趟完整扫描。",
    "type": "fields",
    "points": 3,
    "difficulty": "考试标准",
    "sourcePages": [
      32
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "比较=(30-1)+…+1=435；至多 29 次交换。\n即使已排序，比较次数仍为同样的平方级。",
    "solution": [
      "比较=(30-1)+…+1=435；至多 29 次交换。",
      "即使已排序，比较次数仍为同样的平方级。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "关键字比较总次数",
        "answer": "435",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "最多发生的交换次数",
        "answer": "29",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "识别每趟是否扫描整个无序区取最小。",
      "plan": [
        "第1趟比较n−1次，下一趟n−2次，依次到1次。",
        "每趟最多一次真正交换；比较总数与交换总数不同。"
      ],
      "format": "比较总次数求和，最多交换次数为n−1。"
    },
    "walkthrough": [
      "识别每趟是否扫描整个无序区取最小。",
      "第1趟比较n−1次，下一趟n−2次，依次到1次。",
      "每趟最多一次真正交换；比较总数与交换总数不同。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-stability-v1",
    "chapter": 8,
    "mode": "review",
    "family": "R8-stability",
    "variant": 1,
    "title": "选择排序将 [2甲,2乙,1] 排为 [1,2乙,2甲]，说明什么？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      12,
      15,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-5",
    "hint": "",
    "explain": "关键字相等而身份不同，远距离交换颠倒了原相对次序。",
    "solution": [
      "关键字相等而身份不同，远距离交换颠倒了原相对次序。"
    ],
    "rubric": [],
    "options": [
      "排序稳定",
      "选择排序存在破坏稳定性的输入",
      "升序错误",
      "甲乙必须相等记录"
    ],
    "answer": 1,
    "support": {
      "ask": "同时核对稳定性、最坏时间、额外空间这些条件。",
      "plan": [
        "相等记录加身份，找是否可能颠倒次序的反例。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：甲乙先后已颠倒，正是稳定性反例。",
      "符合：关键字相等而身份不同，远距离交换颠倒了原相对次序。",
      "核对条件：关键字序列仍为1、2、2，升序本身正确。",
      "核对条件：相等关键字不表示姓名等整条记录必须相同，甲乙仍有身份。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-stability-v2",
    "chapter": 8,
    "mode": "review",
    "family": "R8-stability",
    "variant": 2,
    "title": "折半插入相等时放在已有相等键之后，是否稳定？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      12,
      15,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-5",
    "hint": "",
    "explain": "从左到右处理、相等插在后方可保持相对次序；课件末尾分类需要校注。",
    "solution": [
      "从左到右处理、相等插在后方可保持相对次序；课件末尾分类需要校注。"
    ],
    "rubric": [],
    "options": [
      "必不稳定",
      "取决于数组地址",
      "只对递减序列稳定",
      "稳定"
    ],
    "answer": 3,
    "support": {
      "ask": "同时核对稳定性、最坏时间、额外空间这些条件。",
      "plan": [
        "相等记录加身份，找是否可能颠倒次序的反例。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：按本题从左处理、相等放后方的规则可保持原次序。",
      "核对条件：地址不决定相等记录是否跨越，插入规则才决定。",
      "核对条件：这个规则适用于所有输入，不只递减序列。",
      "符合：从左到右处理、相等插在后方可保持相对次序；课件末尾分类需要校注。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-stability-v3",
    "chapter": 8,
    "mode": "review",
    "family": "R8-stability",
    "variant": 3,
    "title": "若希望最坏 O(n log n) 且迭代实现额外 O(1)，最合适的是？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      12,
      15,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-5",
    "hint": "",
    "explain": "堆排序同时满足这两个条件，普通快速排序有平方级最坏及递归栈开销。",
    "solution": [
      "堆排序同时满足这两个条件，普通快速排序有平方级最坏及递归栈开销。"
    ],
    "rubric": [],
    "options": [
      "首元素快速排序",
      "折半插入",
      "直接插入",
      "堆排序"
    ],
    "answer": 3,
    "support": {
      "ask": "同时核对稳定性、最坏时间、额外空间这些条件。",
      "plan": [
        "相等记录加身份，找是否可能颠倒次序的反例。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：普通首元素快排最坏可达平方级，并有递归栈。",
      "核对条件：折半插入的移动总量最坏仍平方级。",
      "核对条件：直接插入最坏同样平方级，不能满足最坏n log n。",
      "符合：堆排序同时满足这两个条件，普通快速排序有平方级最坏及递归栈开销。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-insertion-v1",
    "chapter": 8,
    "mode": "review",
    "family": "R8-insertion",
    "variant": 1,
    "title": "对 [5, 2, 4, 1] 做稳定的直接插入升序，第一项初始视为有序，求前两趟结束的全数组。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      32
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "第 1 趟插入第二项：[2, 5, 4, 1]。\n第 2 趟插入第三项：[2, 4, 5, 1]。\n一趟只使左侧有序前缀增长 1，不会把整个数组都排好。",
    "solution": [
      "第 1 趟插入第二项：[2, 5, 4, 1]。",
      "第 2 趟插入第三项：[2, 4, 5, 1]。",
      "一趟只使左侧有序前缀增长 1，不会把整个数组都排好。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "第 1 趟",
        "answer": "2,5,4,1",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "第 2 趟",
        "answer": "2,4,5,1",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "第1趟处理第2项，第2趟处理第3项。",
      "plan": [
        "先暂存新项，把有序前缀中严格更大的值逐个右移。",
        "遇不大的值停止再填入；完整抄全数组，未处理后缀原样保留。"
      ],
      "format": "两个空都写全数组，不只写已排序前缀。"
    },
    "worked": [
      {
        "caption": "暂存的新项只跨过严格较大值，保持相等记录先后",
        "heads": [
          "趟",
          "暂存值",
          "依次右移的值",
          "填入下标",
          "完整数组"
        ],
        "rows": [
          [
            "1",
            "2",
            "5",
            "0",
            "2，5，4，1"
          ],
          [
            "2",
            "4",
            "5",
            "1",
            "2，4，5，1"
          ],
          [
            "3",
            "1",
            "5，4，2",
            "0",
            "1，2，4，5"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-insertion-v2",
    "chapter": 8,
    "mode": "review",
    "family": "R8-insertion",
    "variant": 2,
    "title": "对 [8, 3, 6, 2, 9] 做稳定的直接插入升序，第一项初始视为有序，求前两趟结束的全数组。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      32
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "第 1 趟插入第二项：[3, 8, 6, 2, 9]。\n第 2 趟插入第三项：[3, 6, 8, 2, 9]。\n一趟只使左侧有序前缀增长 1，不会把整个数组都排好。",
    "solution": [
      "第 1 趟插入第二项：[3, 8, 6, 2, 9]。",
      "第 2 趟插入第三项：[3, 6, 8, 2, 9]。",
      "一趟只使左侧有序前缀增长 1，不会把整个数组都排好。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "第 1 趟",
        "answer": "3,8,6,2,9",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "第 2 趟",
        "answer": "3,6,8,2,9",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "第1趟处理第2项，第2趟处理第3项。",
      "plan": [
        "先暂存新项，把有序前缀中严格更大的值逐个右移。",
        "遇不大的值停止再填入；完整抄全数组，未处理后缀原样保留。"
      ],
      "format": "两个空都写全数组，不只写已排序前缀。"
    },
    "worked": [
      {
        "caption": "暂存的新项只跨过严格较大值，保持相等记录先后",
        "heads": [
          "趟",
          "暂存值",
          "依次右移的值",
          "填入下标",
          "完整数组"
        ],
        "rows": [
          [
            "1",
            "3",
            "8",
            "0",
            "3，8，6，2，9"
          ],
          [
            "2",
            "6",
            "8",
            "1",
            "3，6，8，2，9"
          ],
          [
            "3",
            "2",
            "8，6，3",
            "0",
            "2，3，6，8，9"
          ],
          [
            "4",
            "9",
            "空",
            "4",
            "2，3，6，8，9"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-insertion-v3",
    "chapter": 8,
    "mode": "review",
    "family": "R8-insertion",
    "variant": 3,
    "title": "对 [7, 1, 5, 3, 2] 做稳定的直接插入升序，第一项初始视为有序，求前两趟结束的全数组。",
    "type": "fields",
    "points": 4,
    "difficulty": "考试标准",
    "sourcePages": [
      12,
      32
    ],
    "origin": "同类考法新题",
    "topic": "r8-4",
    "hint": "",
    "explain": "第 1 趟插入第二项：[1, 7, 5, 3, 2]。\n第 2 趟插入第三项：[1, 5, 7, 3, 2]。\n一趟只使左侧有序前缀增长 1，不会把整个数组都排好。",
    "solution": [
      "第 1 趟插入第二项：[1, 7, 5, 3, 2]。",
      "第 2 趟插入第三项：[1, 5, 7, 3, 2]。",
      "一趟只使左侧有序前缀增长 1，不会把整个数组都排好。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "第 1 趟",
        "answer": "1,7,5,3,2",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "第 2 趟",
        "answer": "1,5,7,3,2",
        "points": 2,
        "kind": "sequence",
        "aliases": []
      }
    ],
    "support": {
      "ask": "第1趟处理第2项，第2趟处理第3项。",
      "plan": [
        "先暂存新项，把有序前缀中严格更大的值逐个右移。",
        "遇不大的值停止再填入；完整抄全数组，未处理后缀原样保留。"
      ],
      "format": "两个空都写全数组，不只写已排序前缀。"
    },
    "worked": [
      {
        "caption": "暂存的新项只跨过严格较大值，保持相等记录先后",
        "heads": [
          "趟",
          "暂存值",
          "依次右移的值",
          "填入下标",
          "完整数组"
        ],
        "rows": [
          [
            "1",
            "1",
            "7",
            "0",
            "1，7，5，3，2"
          ],
          [
            "2",
            "5",
            "7",
            "1",
            "1，5，7，3，2"
          ],
          [
            "3",
            "3",
            "7，5",
            "1",
            "1，3，5，7，2"
          ],
          [
            "4",
            "2",
            "7，5，3",
            "1",
            "1，2，3，5，7"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "R8-comparison-v1",
    "chapter": 8,
    "mode": "review",
    "family": "R8-comparison",
    "variant": 1,
    "title": "首元素快排在有序互异输入上，最坏可能为？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      12,
      15,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-5",
    "hint": "",
    "explain": "每轮只划掉一个基准，形成极不均衡的递归。",
    "solution": [
      "每轮只划掉一个基准，形成极不均衡的递归。"
    ],
    "rubric": [],
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 3,
    "support": {
      "ask": "同时核对稳定性、最坏时间、额外空间这些条件。",
      "plan": [
        "相等记录加身份，找是否可能颠倒次序的反例。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：log n只是均衡时层数，本题最坏甚至有n层，每层还扫描。",
      "核对条件：线性只相当于一次划分，不是所有递归的累计。",
      "核对条件：这是平均或均衡情形，顺序输入首基准可能连续极不均衡。",
      "符合：每轮只划掉一个基准，形成极不均衡的递归。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-comparison-v2",
    "chapter": 8,
    "mode": "review",
    "family": "R8-comparison",
    "variant": 2,
    "title": "希尔排序能否脱离增量序列统一声称 O(n log n)？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      12,
      15,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-5",
    "hint": "",
    "explain": "增量选择影响复杂度，一般不能给统一的这个界。",
    "solution": [
      "增量选择影响复杂度，一般不能给统一的这个界。"
    ],
    "rubric": [],
    "options": [
      "能",
      "不能，复杂度依赖增量",
      "只有元素都是整数能",
      "只看表长奇偶"
    ],
    "answer": 1,
    "support": {
      "ask": "同时核对稳定性、最坏时间、额外空间这些条件。",
      "plan": [
        "相等记录加身份，找是否可能颠倒次序的反例。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：增量直接影响分组次数和移动量，不能统一给这个界。",
      "符合：增量选择影响复杂度，一般不能给统一的这个界。",
      "核对条件：键为整数不决定增量序列，也不提供该时间保证。",
      "核对条件：表长奇偶不足以确定每个gap的工作量。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-comparison-v3",
    "chapter": 8,
    "mode": "review",
    "family": "R8-comparison",
    "variant": 3,
    "title": "大根堆一定满足哪项？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      12,
      15,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-5",
    "hint": "",
    "explain": "堆只约束父子，不是 BST，也不要求兄弟有序。",
    "solution": [
      "堆只约束父子，不是 BST，也不要求兄弟有序。"
    ],
    "rubric": [],
    "options": [
      "父结点不小于其存在的孩子",
      "数组整体递减",
      "兄弟从左到右有序",
      "所有左子树小于右子树"
    ],
    "answer": 0,
    "support": {
      "ask": "同时核对稳定性、最坏时间、额外空间这些条件。",
      "plan": [
        "相等记录加身份，找是否可能颠倒次序的反例。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "符合：堆只约束父子，不是 BST，也不要求兄弟有序。",
      "核对条件：堆只约束父子，数组兄弟间可大可小，整体未必递减。",
      "核对条件：兄弟相对大小没有要求。",
      "核对条件：这是把BST或另一种全局次序条件误加给堆。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "R8-comparison-v4",
    "chapter": 8,
    "mode": "review",
    "family": "R8-comparison",
    "variant": 4,
    "title": "普通折半插入把比较减少到 O(n log n)，为什么整体最坏仍 O(n²)？",
    "type": "choice",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      6,
      12,
      15,
      39
    ],
    "origin": "同类考法新题",
    "topic": "r8-5",
    "hint": "",
    "explain": "移动成本没有因查找位置使用二分而消失。",
    "solution": [
      "移动成本没有因查找位置使用二分而消失。"
    ],
    "rubric": [],
    "options": [
      "比较必须翻倍",
      "因为递归无限",
      "没有使用数组",
      "移动记录仍可为平方级"
    ],
    "answer": 3,
    "support": {
      "ask": "同时核对稳定性、最坏时间、额外空间这些条件。",
      "plan": [
        "相等记录加身份，找是否可能颠倒次序的反例。"
      ],
      "format": "单选；先独立判断，再提交看逐项核对。"
    },
    "optionReasons": [
      "核对条件：比较并没有必须翻倍，剩下的主要成本是记录移动。",
      "核对条件：普通折半插入可迭代，不存在无限递归这个原因。",
      "核对条件：它正是在数组中插入，使用数组才会发生后缀批量右移。",
      "符合：移动成本没有因查找位置使用二分而消失。"
    ],
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "E14-address-v1",
    "chapter": 2,
    "mode": "review",
    "family": "E14-address",
    "variant": 1,
    "title": "2014–2015 卷填空 1：一个向量第一个元素的存储地址是 100，每个元素的长度为 2，则第 5 个元素的地址是多少？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1
    ],
    "origin": "原题整理",
    "topic": "r2-3",
    "hint": "",
    "explain": "100+(5−1)×2=108。",
    "solution": [
      "100+(5−1)×2=108。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "地址",
        "answer": "108",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先找“第几个之前有几项”，再乘字节长。",
      "plan": [
        "位序k从1开始，第k项之前有k−1项。",
        "地址=首地址+跳过项数×每项字节数；不是首地址再乘字节数。"
      ],
      "format": "填目标元素起始字节地址。"
    },
    "walkthrough": [
      "先找“第几个之前有几项”，再乘字节长。",
      "位序k从1开始，第k项之前有k−1项。",
      "地址=首地址+跳过项数×每项字节数；不是首地址再乘字节数。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "E14-leaves-v1",
    "chapter": 5,
    "mode": "review",
    "family": "E14-leaves",
    "variant": 1,
    "title": "2014–2015 卷填空 3：一棵有 2014 个结点的任意二叉树，度 1 的结点数为 13，则叶子数是多少？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1
    ],
    "origin": "原题整理",
    "topic": "r5-1",
    "hint": "",
    "explain": "n₀+n₁+n₂=2014，n₀=n₂+1，得 n₀=1001。",
    "solution": [
      "n₀+n₁+n₂=2014，n₀=n₂+1，得 n₀=1001。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "叶子数",
        "answer": "1001",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "题目是任意非空二叉树，不一定完全。",
      "plan": [
        "列总数n=n₀+n₁+n₂与叶子关系n₀=n₂+1。",
        "联立得到n₀=(n−n₁+1)/2，再用n₂=n₀−1，代回总数验证。"
      ],
      "format": "填叶子和双孩子结点数，不能机械用完全树的叶子公式。"
    },
    "walkthrough": [
      "题目是任意非空二叉树，不一定完全。",
      "列总数n=n₀+n₁+n₂与叶子关系n₀=n₂+1。",
      "联立得到n₀=(n−n₁+1)/2，再用n₂=n₀−1，代回总数验证。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "E14-binary-v1",
    "chapter": 7,
    "mode": "review",
    "family": "E14-binary",
    "variant": 1,
    "title": "2014–2015 卷填空 4：对分查找序列 (6,15,30,37,65,78,89,90,97)，查 89 时比较次数是多少？中点向下取整。",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1
    ],
    "origin": "原题整理",
    "topic": "r7-1",
    "hint": "",
    "explain": "先比较 65，再比较 89，共 2 次。",
    "solution": [
      "先比较 65，再比较 89，共 2 次。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "比较次数",
        "answer": "2",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "记录每轮实际读到的中点关键字。",
      "plan": [
        "闭区间从low到high都含在内，中点向下取整。",
        "比较后排除已看中点，直到命中或low>high；空区间检查不是关键字比较。"
      ],
      "format": "序列写关键字值，不写下标；最后下标不存在填−1。"
    },
    "worked": [
      {
        "caption": "每轮只把与中点关键字比较计一次",
        "heads": [
          "low",
          "high",
          "mid下标",
          "中点值",
          "下一步"
        ],
        "rows": [
          [
            "0",
            "8",
            "4",
            "65",
            "目标较大，low=5"
          ],
          [
            "5",
            "8",
            "6",
            "89",
            "相等，命中"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "E14-postfix-v1",
    "chapter": 3,
    "mode": "review",
    "family": "E14-postfix",
    "variant": 1,
    "title": "2014–2015 卷填空 5：后缀表达式 5 3 - 2 * 18 6 / +，其计算结果为多少？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1
    ],
    "origin": "原题整理",
    "topic": "r3-2",
    "hint": "",
    "explain": "(5−3)×2+18/6=4+3=7。",
    "solution": [
      "(5−3)×2+18/6=4+3=7。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "结果",
        "answer": "7",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先读数还是先读运算符，决定当前操作。",
      "plan": [
        "数入栈；二元运算先弹右数b，再弹左数a，算a op b。",
        "每个结果压回，结束应只剩一个结果；减法除法特别核对顺序。"
      ],
      "format": "填最终数值，分数或小数按题设接受。"
    },
    "worked": [
      {
        "caption": "从左到右；每个中间结果都压回栈",
        "heads": [
          "读到",
          "动作",
          "栈底→栈顶"
        ],
        "rows": [
          [
            "5",
            "操作数入栈",
            "5"
          ],
          [
            "3",
            "操作数入栈",
            "5，3"
          ],
          [
            "-",
            "先弹右数3，再弹左数5，算5-3=2",
            "2"
          ],
          [
            "2",
            "操作数入栈",
            "2，2"
          ],
          [
            "*",
            "先弹右数2，再弹左数2，算2*2=4",
            "4"
          ],
          [
            "18",
            "操作数入栈",
            "4，18"
          ],
          [
            "6",
            "操作数入栈",
            "4，18，6"
          ],
          [
            "/",
            "先弹右数6，再弹左数18，算18/6=3",
            "4，3"
          ],
          [
            "+",
            "先弹右数3，再弹左数4，算4+3=7",
            "7"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "E14-moves-v1",
    "chapter": 2,
    "mode": "review",
    "family": "E14-moves",
    "variant": 1,
    "title": "2014–2015 卷填空 6：长度 n 的顺序表，在第 i 个元素（1≤i≤n+1）之前插入新元素，需向后移动多少个元素？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1
    ],
    "origin": "原题整理",
    "topic": "r2-3",
    "hint": "",
    "explain": "第 i 到第 n 个均需后移，共 n−i+1 个。",
    "solution": [
      "第 i 到第 n 个均需后移，共 n−i+1 个。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "含 n、i 的表达式",
        "answer": "n-i+1",
        "points": 1,
        "kind": "formula",
        "aliases": [
          "n+1-i"
        ]
      }
    ],
    "support": {
      "ask": "数原第i项到第n项，首尾都包含。",
      "plan": [
        "插入移动n−i+1项，先核对i=n+1时应为0。",
        "若随后删新项，表长已经变成n+1，不能沿用旧长度。"
      ],
      "format": "数值题填整数；原题符号空用n-i+1等显式等价式。"
    },
    "walkthrough": [
      "数原第i项到第n项，首尾都包含。",
      "插入移动n−i+1项，先核对i=n+1时应为0。",
      "若随后删新项，表长已经变成n+1，不能沿用旧长度。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "E14-frequency-v1",
    "chapter": 1,
    "mode": "review",
    "family": "E14-frequency",
    "variant": 1,
    "title": "2014–2015 卷填空 7：算法执行次数为 10¹⁰n³+n⁴，则其渐近时间复杂度是什么？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1
    ],
    "origin": "原题整理",
    "topic": "r1-1",
    "hint": "",
    "explain": "最高次幂 n⁴ 最终占主导，时间 O(n⁴)。",
    "solution": [
      "最高次幂 n⁴ 最终占主导，时间 O(n⁴)。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "时间复杂度",
        "answer": "O(n⁴)",
        "points": 1,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "support": {
      "ask": "先识别题目问的是增长级别、概率条件还是算法质量。",
      "plan": [
        "增长题比较主导项；平均题明确输入分布。",
        "区分算法特征与设计要求，并将选项代回题干检验。"
      ],
      "format": "单选只选一个；复杂度空填O(...)。"
    },
    "walkthrough": [
      "先识别题目问的是增长级别、概率条件还是算法质量。",
      "增长题比较主导项；平均题明确输入分布。",
      "区分算法特征与设计要求，并将选项代回题干检验。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "E14-avl-v1",
    "chapter": 7,
    "mode": "review",
    "family": "E14-avl",
    "variant": 1,
    "title": "2014–2015 卷填空 9：AVL 树中，每个结点左右子树高度之差的绝对值不超过多少？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1
    ],
    "origin": "原题整理",
    "topic": "r7-3",
    "hint": "",
    "explain": "AVL 每个结点的平衡因子必须为 −1、0、1。",
    "solution": [
      "AVL 每个结点的平衡因子必须为 −1、0、1。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "最大允许绝对值",
        "answer": "1",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "高度差采用左高减右高，失衡型与旋转方向不要混淆。",
      "plan": [
        "从新结点向上找最近失衡祖先，看路径LL、RR、LR或RL。",
        "重接后验证中序不变，检查平衡因子落在−1、0、1。"
      ],
      "format": "失衡型用LL等字母；根值、中序分别填写。"
    },
    "walkthrough": [
      "高度差采用左高减右高，失衡型与旋转方向不要混淆。",
      "从新结点向上找最近失衡祖先，看路径LL、RR、LR或RL。",
      "重接后验证中序不变，检查平衡因子落在−1、0、1。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "E14-shapes-v1",
    "chapter": 5,
    "mode": "review",
    "family": "E14-shapes",
    "variant": 1,
    "title": "2014–2015 卷填空 10：前序遍历结果为 CBA，有多少种不同二叉树可以得到这一结果？标识互异且区分左右。",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      1
    ],
    "origin": "原题整理",
    "topic": "r5-1",
    "hint": "",
    "explain": "根为 C。按根的左子树结点数分为0、1、2三类：左空时右侧两结点有2种形状；左右各一个时有1种；右空时左侧两结点有2种。合计2+1+2=5种。固定先序后，每种形状的标识排列唯一。",
    "solution": [
      "根为 C。按根的左子树结点数分为0、1、2三类：左空时右侧两结点有2种形状；左右各一个时有1种；右空时左侧两结点有2种。合计2+1+2=5种。固定先序后，每种形状的标识排列唯一。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "种数",
        "answer": "5",
        "points": 1,
        "kind": "number",
        "aliases": []
      }
    ],
    "support": {
      "ask": "固定前序不等于固定左右形状。",
      "plan": [
        "可按根左子树结点数0到n−1分类，每类是左右形状数相乘。",
        "卡特兰数把这些类别相加；标识互异且前序固定后，每种形状恰有一种标识分配。"
      ],
      "format": "填形状总数；n=3时按2+1+2逐类核对。"
    },
    "worked": [
      {
        "caption": "按左子树结点数分类，左右形状数相乘后相加",
        "heads": [
          "左结点数",
          "右结点数",
          "本类形状数"
        ],
        "rows": [
          [
            "0",
            "2",
            "2"
          ],
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "0",
            "2"
          ]
        ]
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "E-undated-triangle-v1",
    "chapter": 4,
    "mode": "review",
    "family": "E-undated-triangle",
    "variant": 1,
    "title": "未标年份样卷填空：n×n 下三角矩阵按行为主序压缩到 B[1..m]，所需最大存储单元数为多少？",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      11
    ],
    "origin": "原题整理",
    "topic": "r4-2",
    "hint": "",
    "explain": "1+2+…+n=n(n+1)/2。",
    "solution": [
      "1+2+…+n=n(n+1)/2。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "含 n 的表达式",
        "answer": "n*(n+1)/2",
        "points": 1,
        "kind": "formula",
        "aliases": [
          "n(n+1)/2",
          "(n*n+n)/2"
        ]
      }
    ],
    "support": {
      "ask": "按行数一数含对角线的下三角位置。",
      "plan": [
        "第1行1项，直到第n行n项；不要加上方已知为零的逐项存储。",
        "总量1+2+…+n，含主对角线，不能用不含对角的公式。"
      ],
      "format": "原题符号空填n(n+1)/2等列明的等价表达式。"
    },
    "walkthrough": [
      "按行数一数含对角线的下三角位置。",
      "第1行1项，直到第n行n项；不要加上方已知为零的逐项存储。",
      "总量1+2+…+n，含主对角线，不能用不含对角的公式。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "E-notes-treeedges-v1",
    "chapter": 6,
    "mode": "review",
    "family": "E-notes-treeedges",
    "variant": 1,
    "title": "资料手写整理题：n 个顶点的连通图至少有多少条边？按简单无向图解释。",
    "type": "fields",
    "points": 1,
    "difficulty": "考试标准",
    "sourcePages": [
      24
    ],
    "origin": "整理题重述",
    "topic": "r6-1",
    "hint": "",
    "explain": "连通无向图至少是一棵生成树，需 n−1 条边。",
    "solution": [
      "连通无向图至少是一棵生成树，需 n−1 条边。"
    ],
    "rubric": [],
    "fields": [
      {
        "label": "含 n 的表达式",
        "answer": "n-1",
        "points": 1,
        "kind": "formula",
        "aliases": []
      }
    ],
    "support": {
      "ask": "无向边在度数总和中被两个端点各数一次。",
      "plan": [
        "总度数除2才是实际边数。",
        "若另问同顶点数的一棵树，边数是顶点数减1，不能混用这两个图。"
      ],
      "format": "注意“原图边数”和“另构成树所需边数”的不同。"
    },
    "walkthrough": [
      "无向边在度数总和中被两个端点各数一次。",
      "总度数除2才是实际边数。",
      "若另问同顶点数的一棵树，边数是顶点数减1，不能混用这两个图。"
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "C1-elements",
    "chapter": 1,
    "mode": "review",
    "family": "concept-r1-2",
    "variant": 1,
    "topic": "r1-2",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "成绩表以“学生的完整记录”为单位时，姓名字段、整条记录、同类记录的集合分别是什么？",
    "options": [
      "数据对象、数据元素、数据项",
      "数据项、数据元素、数据对象",
      "数据元素、数据项、数据对象",
      "数据项、数据对象、数据元素"
    ],
    "answer": 1,
    "optionReasons": [
      "姓名字段不是同类记录的集合，最后的集合也不只是一个字段。",
      "先确定讨论单位：一名学生的一整行是元素，行内字段是数据项，同类元素的集合是数据对象。",
      "把字段与整条记录的层次颠倒了；讨论单位已指定为学生记录。",
      "记录集合才是数据对象，单条完整记录是数据元素。"
    ],
    "sourcePages": [],
    "pages": "14–15",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "先确定讨论单位：一名学生的一整行是元素，行内字段是数据项，同类元素的集合是数据对象。",
    "explain": "先确定讨论单位：一名学生的一整行是元素，行内字段是数据项，同类元素的集合是数据对象。",
    "solution": [
      "先确定讨论单位：一名学生的一整行是元素，行内字段是数据项，同类元素的集合是数据对象。",
      "元素与数据项取决于当前讨论单位，不是“一个数字永远只能算数据项”。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C1-elements",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C1-relation",
    "chapter": 1,
    "mode": "review",
    "family": "concept-r1-2",
    "variant": 2,
    "topic": "r1-2",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "关系为 A→B、B→C、C→D、D→B。为什么不能把它当作普通线性表？",
    "options": [
      "B 有 A、D 两个直接前驱，而且关系形成了环",
      "因为元素名称不是数字",
      "因为只要有箭头就是树",
      "因为所有关系图都属于线性结构"
    ],
    "answer": 0,
    "optionReasons": [
      "普通线性表是一条有限先后序列；中间元素恰有一个直接前驱和一个直接后继，这里 B 的前驱不唯一。",
      "字符或数字都可以做线性表的元素，名称不决定结构。",
      "树还必须满足层次与唯一双亲等条件，不能只看箭头。",
      "图可描述多种关系，不能因为画成图就判成线性。"
    ],
    "sourcePages": [
      2,
      12
    ],
    "pages": "16–23",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "普通线性表是一条有限先后序列；中间元素恰有一个直接前驱和一个直接后继，这里 B 的前驱不唯一。",
    "explain": "普通线性表是一条有限先后序列；中间元素恰有一个直接前驱和一个直接后继，这里 B 的前驱不唯一。",
    "solution": [
      "普通线性表是一条有限先后序列；中间元素恰有一个直接前驱和一个直接后继，这里 B 的前驱不唯一。",
      "循环链表的存储指针可以成环；本题给的是逻辑关系，不是在问存储实现。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C1-relation",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C1-three",
    "chapter": 1,
    "mode": "review",
    "family": "concept-r1-2",
    "variant": 3,
    "topic": "r1-2",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "同一条排队名单分别用数组和链表保存，哪一项保持不变？",
    "options": [
      "结点的物理地址",
      "按位访问的具体过程",
      "指针域的数量",
      "名单的逻辑先后关系"
    ],
    "answer": 3,
    "optionReasons": [
      "地址由具体分配决定，换实现后不必相同。",
      "数组可直接定位，链表通常需沿链接走，过程不同。",
      "数组元素不必带后继指针，不能认为指针域相同。",
      "逻辑结构说明谁先谁后，存储结构说明在内存中怎样表示；同一逻辑结构可以有不同实现。"
    ],
    "sourcePages": [
      2
    ],
    "pages": "13、24–30",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "逻辑结构说明谁先谁后，存储结构说明在内存中怎样表示；同一逻辑结构可以有不同实现。",
    "explain": "逻辑结构说明谁先谁后，存储结构说明在内存中怎样表示；同一逻辑结构可以有不同实现。",
    "solution": [
      "逻辑结构说明谁先谁后，存储结构说明在内存中怎样表示；同一逻辑结构可以有不同实现。",
      "数据结构三要素是逻辑结构、存储结构和运算；不要把其中任意两个当成同义词。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C1-three",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C1-adt",
    "chapter": 1,
    "mode": "review",
    "family": "concept-r1-2",
    "variant": 4,
    "topic": "r1-2",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "抽象数据类型 ADT 的核心说明包含哪三部分？",
    "options": [
      "数据对象、存储容量、基本操作",
      "逻辑结构、存储结构、算法五特征",
      "数据对象、数据关系、基本操作",
      "数据对象、数据关系、物理地址"
    ],
    "answer": 2,
    "optionReasons": [
      "容量可能是实现约束，不能用它替代元素之间的关系。",
      "这混合了数据结构与算法的几组术语，不是ADT的D、R、P。",
      "ADT 用 D、R、P 约定数据与操作；操作的使用前提和结果属于约定，具体内存布局属于实现。",
      "物理地址属于实现细节，ADT还必须约定操作。"
    ],
    "sourcePages": [],
    "pages": "31–33",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "ADT 用 D、R、P 约定数据与操作；操作的使用前提和结果属于约定，具体内存布局属于实现。",
    "explain": "ADT 用 D、R、P 约定数据与操作；操作的使用前提和结果属于约定，具体内存布局属于实现。",
    "solution": [
      "ADT 用 D、R、P 约定数据与操作；操作的使用前提和结果属于约定，具体内存布局属于实现。",
      "能解释接口与实现的区别即可，不需要背矩形 ADT 示例中的拼写。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C1-adt",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C1-algorithm",
    "chapter": 1,
    "mode": "review",
    "family": "concept-r1-2",
    "variant": 5,
    "topic": "r1-2",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "以下哪组完整列出了课件中的算法五个基本特征？",
    "options": [
      "正确性、可读性、健壮性、效率、低存储",
      "有穷性、确定性、可行性、输入、输出",
      "有穷性、确定性、可行性、至少一个输入、至少一个输出",
      "有穷性、确定性、可行性、零个或多个输入、零个输出也可以"
    ],
    "answer": 1,
    "optionReasons": [
      "这是设计好算法的评价要求，不能替换基本五特征。",
      "五个特征说明步骤能明确执行并在有限步结束；输入可为零个或多个，输出至少一个。",
      "输入可以是零个；返回固定常量的算法不需要外部输入。",
      "算法至少产生一个输出，返回值或修改后的数据结果也算输出。"
    ],
    "sourcePages": [
      2
    ],
    "pages": "37",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "五个特征说明步骤能明确执行并在有限步结束；输入可为零个或多个，输出至少一个。",
    "explain": "五个特征说明步骤能明确执行并在有限步结束；输入可为零个或多个，输出至少一个。",
    "solution": [
      "五个特征说明步骤能明确执行并在有限步结束；输入可为零个或多个，输出至少一个。",
      "“算法能结束”与“算出的答案一定正确”是两个层面的要求。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C1-algorithm",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C1-evaluation",
    "chapter": 1,
    "mode": "review",
    "family": "concept-r1-2",
    "variant": 6,
    "topic": "r1-2",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "程序对非法输入给出清楚的错误处理，而代码又容易读懂，这两项分别对应什么？",
    "options": [
      "健壮性、可读性",
      "稳定性、有穷性",
      "可读性、健壮性",
      "时间复杂度、空间复杂度"
    ],
    "answer": 0,
    "optionReasons": [
      "健壮性针对错误数据与异常，可读性针对人能否容易理解代码；正确性仍是设计评价的首要条件。",
      "稳定性看相等键顺序，有穷性看是否结束，都不是题中两项。",
      "两种评价对象颠倒了。",
      "时间和空间描述资源开销，不能替代异常处理与可读性。"
    ],
    "sourcePages": [],
    "pages": "38",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "健壮性针对错误数据与异常，可读性针对人能否容易理解代码；正确性仍是设计评价的首要条件。",
    "explain": "健壮性针对错误数据与异常，可读性针对人能否容易理解代码；正确性仍是设计评价的首要条件。",
    "solution": [
      "健壮性针对错误数据与异常，可读性针对人能否容易理解代码；正确性仍是设计评价的首要条件。",
      "“容易看懂”不能证明算法结果正确；“运行很快”也不能。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C1-evaluation",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C2-addresses",
    "chapter": 2,
    "mode": "review",
    "family": "concept-r2-3",
    "variant": 1,
    "topic": "r2-3",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "链式存储要求各数据结点的内存地址怎样安排？",
    "options": [
      "必须连续",
      "必须全部不连续",
      "地址越小逻辑位序越靠前",
      "连续或不连续都可以，逻辑次序由链接表示"
    ],
    "answer": 3,
    "optionReasons": [
      "连续是顺序存储的要求，不是链式存储的要求。",
      "“不要求连续”并不等于“禁止连续”。",
      "应沿 next 找逻辑后继，不能按地址大小排序。",
      "链式存储不依赖相邻物理位置表示后继，因此允许分散分配；偶然连续也仍可使用链接。"
    ],
    "sourcePages": [
      2
    ],
    "pages": "22–23",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "链式存储不依赖相邻物理位置表示后继，因此允许分散分配；偶然连续也仍可使用链接。",
    "explain": "链式存储不依赖相邻物理位置表示后继，因此允许分散分配；偶然连续也仍可使用链接。",
    "solution": [
      "链式存储不依赖相邻物理位置表示后继，因此允许分散分配；偶然连续也仍可使用链接。",
      "原卷问“可用单元的地址”时，关键字是“可以”，不是“一定不连续”。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C2-addresses",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C2-head",
    "chapter": 2,
    "mode": "review",
    "family": "concept-r2-1",
    "variant": 1,
    "topic": "r2-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "带头结点循环单链表中，头指针、头结点和首元结点有什么区别？",
    "options": [
      "头结点必须保存第一个有效值",
      "空表时必须释放头结点",
      "头指针指向头结点；首元结点才保存第一个有效元素",
      "三者永远是同一对象"
    ],
    "answer": 2,
    "optionReasons": [
      "头结点数据域可不用或存辅助信息，不算首个有效元素。",
      "带头循环空表仍保留头结点，next 指回自身。",
      "指针是保存地址的变量，结点是被指向的对象；附加头结点用来统一空表、首部操作。",
      "变量与结点不是同一层次，附加头结点也不等于首元。"
    ],
    "sourcePages": [],
    "pages": "29、47",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "指针是保存地址的变量，结点是被指向的对象；附加头结点用来统一空表、首部操作。",
    "explain": "指针是保存地址的变量，结点是被指向的对象；附加头结点用来统一空表、首部操作。",
    "solution": [
      "指针是保存地址的变量，结点是被指向的对象；附加头结点用来统一空表、首部操作。",
      "无头结点链表的头指针通常直接指向首元，做题先读有无头结点。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C2-head",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C2-position",
    "chapter": 2,
    "mode": "review",
    "family": "concept-r2-3",
    "variant": 2,
    "topic": "r2-3",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "顺序表按位取第 i 个与按值找 x，为什么通常分别是 O(1) 和 O(n)？",
    "options": [
      "只要连续存放就无需比较关键字",
      "已知位序可算地址；按值查找通常还要逐项比较",
      "两者都必须从第一项逐个走",
      "按值查找永远 O(1)"
    ],
    "answer": 1,
    "optionReasons": [
      "连续性提供位置计算，不提供值到位置的映射。",
      "随机访问解决的是“已知下标到哪里读”；它不会直接告诉你某个值出现在哪个下标。",
      "顺序表可通过地址公式直接定位给定位序，无需逐项走。",
      "未给额外索引或有序条件，不能承诺按值常数时间。"
    ],
    "sourcePages": [
      1
    ],
    "pages": "10–20",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "随机访问解决的是“已知下标到哪里读”；它不会直接告诉你某个值出现在哪个下标。",
    "explain": "随机访问解决的是“已知下标到哪里读”；它不会直接告诉你某个值出现在哪个下标。",
    "solution": [
      "随机访问解决的是“已知下标到哪里读”；它不会直接告诉你某个值出现在哪个下标。",
      "已排序数组可用折半查找；本题按普通未建索引的顺序表讨论。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C2-position",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C2-choice",
    "chapter": 2,
    "mode": "review",
    "family": "concept-r2-3",
    "variant": 3,
    "topic": "r2-3",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "频繁插删时常选链表，这一结论要补充哪项前提才严谨？",
    "options": [
      "链接修改便捷，但若还要按值定位，定位仍可能 O(n)",
      "链表所有操作都 O(1)",
      "链表不占任何辅助空间",
      "链表一定比数组快且无需申请内存"
    ],
    "answer": 0,
    "optionReasons": [
      "已知合法前驱后改少量链接可为常数时间；找位置与改链接需要分别分析。",
      "查找第 i 项或按值定位通常仍要遍历。",
      "指针域需要额外空间。",
      "实际开销还受定位、局部性和内存申请等影响，不能一概保证。"
    ],
    "sourcePages": [
      1,
      11
    ],
    "pages": "53–55",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "已知合法前驱后改少量链接可为常数时间；找位置与改链接需要分别分析。",
    "explain": "已知合法前驱后改少量链接可为常数时间；找位置与改链接需要分别分析。",
    "solution": [
      "已知合法前驱后改少量链接可为常数时间；找位置与改链接需要分别分析。",
      "试卷的简短填空可答链式存储；理解时要保留“定位另算”的条件。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C2-choice",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C2-loop",
    "chapter": 2,
    "mode": "review",
    "family": "concept-r2-1",
    "variant": 2,
    "topic": "r2-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "遍历带头结点循环单链表，p 从 L->next 开始，结束条件应检查什么？",
    "options": [
      "p 是否为 NULL",
      "p 的数据是否为 0",
      "p 的地址是否大于 L",
      "p 是否重新等于 L"
    ],
    "answer": 3,
    "optionReasons": [
      "有效循环链的结点指针不会按普通表方式走到 NULL。",
      "数据值可以为零，不能拿它当结构边界。",
      "物理地址大小不反映循环的逻辑次序。",
      "循环尾部回到头结点，遍历有效结点到重新遇到 L 时结束；空表一开始就满足结束条件。"
    ],
    "sourcePages": [
      3
    ],
    "pages": "46–49",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "循环尾部回到头结点，遍历有效结点到重新遇到 L 时结束；空表一开始就满足结束条件。",
    "explain": "循环尾部回到头结点，遍历有效结点到重新遇到 L 时结束；空表一开始就满足结束条件。",
    "solution": [
      "循环尾部回到头结点，遍历有效结点到重新遇到 L 时结束；空表一开始就满足结束条件。",
      "若题目改为无头结点，哨点就应改成起点结点，不能机械照抄 L。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C2-loop",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C2-double",
    "chapter": 2,
    "mode": "review",
    "family": "concept-r2-2",
    "variant": 1,
    "topic": "r2-2",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "双向链表用额外 prior 域换来了什么？",
    "options": [
      "不再需要 next 域",
      "无需处理首尾边界",
      "可直接到前驱，但每个结点需要额外指针空间",
      "可按任意位序 O(1) 访问"
    ],
    "answer": 2,
    "optionReasons": [
      "前向访问仍使用 next，两个方向各有用途。",
      "普通双向表的首尾可能有 NULL，循环表也有头结点约定。",
      "双向链接让已知结点的前驱可直接取得，并未让链表变成支持下标随机访问的数组。",
      "跳到任意第 i 项通常仍需沿链接走。"
    ],
    "sourcePages": [
      30
    ],
    "pages": "41–45",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "双向链接让已知结点的前驱可直接取得，并未让链表变成支持下标随机访问的数组。",
    "explain": "双向链接让已知结点的前驱可直接取得，并未让链表变成支持下标随机访问的数组。",
    "solution": [
      "双向链接让已知结点的前驱可直接取得，并未让链表变成支持下标随机访问的数组。",
      "删除时修复两侧链接，释放必须在不再访问该结点之后。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C2-double",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C3-common",
    "chapter": 3,
    "mode": "review",
    "family": "concept-r3-1",
    "variant": 1,
    "topic": "r3-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "栈和队列的共同点是什么？",
    "options": [
      "都只能用顺序存储",
      "都是插入、删除位置受限制的线性表",
      "都先进先出",
      "都后进先出"
    ],
    "answer": 1,
    "optionReasons": [
      "两者都可用数组或链式结构实现。",
      "栈在同一端进出，队列一端进、另一端出；共同点是操作位置受限，不是输出次序相同。",
      "FIFO 是队列规则，栈是 LIFO。",
      "LIFO 是栈规则，队列是 FIFO。"
    ],
    "sourcePages": [
      2,
      12
    ],
    "pages": "1、3、27",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "栈在同一端进出，队列一端进、另一端出；共同点是操作位置受限，不是输出次序相同。",
    "explain": "栈在同一端进出，队列一端进、另一端出；共同点是操作位置受限，不是输出次序相同。",
    "solution": [
      "栈在同一端进出，队列一端进、另一端出；共同点是操作位置受限，不是输出次序相同。",
      "“允许在端点插入和删除”是原卷的共同点表述，不表示两端都任意可用。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C3-common",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C3-top",
    "chapter": 3,
    "mode": "review",
    "family": "concept-r3-1",
    "variant": 2,
    "topic": "r3-1",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "按 PPT 的顺序栈约定，top 指向栈顶元素的下一个空位置，正确出栈顺序是？",
    "options": [
      "先让 top 减一，再读取该位置的元素",
      "先读 top 所指值，再减一",
      "先让 base 减一",
      "永远先让 top 加一"
    ],
    "answer": 0,
    "optionReasons": [
      "top 当前指向空位置；回退一格才来到最后压入的有效元素。出栈前仍须判空。",
      "读取当前 top 会读到非栈内有效元素的位置。",
      "base 是栈底基址，普通出栈不移动它。",
      "加一是该约定下压入后推进的方向。"
    ],
    "sourcePages": [],
    "pages": "4–5",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "top 当前指向空位置；回退一格才来到最后压入的有效元素。出栈前仍须判空。",
    "explain": "top 当前指向空位置；回退一格才来到最后压入的有效元素。出栈前仍须判空。",
    "solution": [
      "top 当前指向空位置；回退一格才来到最后压入的有效元素。出栈前仍须判空。",
      "有的教材让 top 指向有效栈顶，本题必须服从课件已写明的约定。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C3-top",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C3-empty-stack",
    "chapter": 3,
    "mode": "review",
    "family": "concept-r3-1",
    "variant": 3,
    "topic": "r3-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "按 top 指向下一空位的约定，顺序栈为空但已经存在时，应满足？",
    "options": [
      "base==NULL 才叫空栈",
      "top==base−1",
      "top==base+1",
      "top==base"
    ],
    "answer": 3,
    "optionReasons": [
      "课件把base==NULL用于栈不存在，已分配的空栈仍有基址。",
      "这是与另一种栈顶下标约定混用；本题top指下一空位。",
      "相差一个元素位置通常已有一项，不是空栈。",
      "已经分配的栈即使无元素也有基址；top 与 base 重合表示元素数为零。"
    ],
    "sourcePages": [],
    "pages": "4–6",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "已经分配的栈即使无元素也有基址；top 与 base 重合表示元素数为零。",
    "explain": "已经分配的栈即使无元素也有基址；top 与 base 重合表示元素数为零。",
    "solution": [
      "已经分配的栈即使无元素也有基址；top 与 base 重合表示元素数为零。",
      "无头链栈判空通常是 top==NULL，别把两套表示混用。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C3-empty-stack",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C3-operands",
    "chapter": 3,
    "mode": "review",
    "family": "concept-r3-2",
    "variant": 1,
    "topic": "r3-2",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "计算后缀表达式遇到减号时，先弹出 b、再弹出 a，应压回什么？",
    "options": [
      "a+b",
      "只压回第二次弹出的 a",
      "a−b",
      "b−a"
    ],
    "answer": 2,
    "optionReasons": [
      "运算符是减号，不能改为加号。",
      "二元运算必须处理两个操作数并压入结果。",
      "后压入的是右操作数，因此先弹出的 b 在运算符右边；减法、除法能直接暴露顺序错误。",
      "把左右操作数颠倒了，减法一般不满足交换律。"
    ],
    "sourcePages": [
      1,
      11
    ],
    "pages": "13–19",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "后压入的是右操作数，因此先弹出的 b 在运算符右边；减法、除法能直接暴露顺序错误。",
    "explain": "后压入的是右操作数，因此先弹出的 b 在运算符右边；减法、除法能直接暴露顺序错误。",
    "solution": [
      "后压入的是右操作数，因此先弹出的 b 在运算符右边；减法、除法能直接暴露顺序错误。",
      "加法、乘法碰巧交换不变，不能据此认为弹出顺序不重要。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C3-operands",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C3-bracket",
    "chapter": 3,
    "mode": "review",
    "family": "concept-r3-2",
    "variant": 2,
    "topic": "r3-2",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "括号串的左右括号数量相等，是否足以保证匹配？",
    "options": [
      "用队列代替栈就一定匹配",
      "不足，还要逐个检查类型和嵌套顺序",
      "足够，数目相等即可",
      "只要第一个是左括号就足够"
    ],
    "answer": 1,
    "optionReasons": [
      "改变容器不能把不合法的括号串变合法，最近未匹配者对应栈。",
      "([)] 数量相等仍交叉；每个右括号必须匹配最近尚未匹配的左括号，最终栈还要为空。",
      "数量相等是必要条件之一，不能保证顺序和类型。",
      "首字符正确不能保证后续全部正确。"
    ],
    "sourcePages": [],
    "pages": "11–12",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "([)] 数量相等仍交叉；每个右括号必须匹配最近尚未匹配的左括号，最终栈还要为空。",
    "explain": "([)] 数量相等仍交叉；每个右括号必须匹配最近尚未匹配的左括号，最终栈还要为空。",
    "solution": [
      "([)] 数量相等仍交叉；每个右括号必须匹配最近尚未匹配的左括号，最终栈还要为空。",
      "遇右括号时栈已空，应立即判不匹配；不能继续弹栈。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C3-bracket",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C3-full",
    "chapter": 3,
    "mode": "review",
    "family": "concept-r3-3",
    "variant": 1,
    "topic": "r3-3",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "循环队列容量为 m，采用“留一个空单元”方案时，满与空怎样区分？",
    "options": [
      "空 rear==front；满 (rear+1)%m==front",
      "满与空都只用 rear==front 且无需其他信息",
      "空 (rear+1)%m==front；满 rear==front",
      "满 rear==m−1，不考虑 front"
    ],
    "answer": 0,
    "optionReasons": [
      "牺牲一个单元使有效容量为 m−1，避免满与空同时出现 front==rear 的歧义。",
      "若要用全部 m 格，还须计数或标志等额外信息。",
      "把留空位方案的两个条件颠倒了。",
      "rear 可回绕，是否满取决于相对 front 的位置。"
    ],
    "sourcePages": [
      25,
      26
    ],
    "pages": "29–31",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "牺牲一个单元使有效容量为 m−1，避免满与空同时出现 front==rear 的歧义。",
    "explain": "牺牲一个单元使有效容量为 m−1，避免满与空同时出现 front==rear 的歧义。",
    "solution": [
      "牺牲一个单元使有效容量为 m−1，避免满与空同时出现 front==rear 的歧义。",
      "计数方案可使用全部 m 格，但其满空条件不同；不要跨方案套公式。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C3-full",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C3-false-overflow",
    "chapter": 3,
    "mode": "review",
    "family": "concept-r3-3",
    "variant": 2,
    "topic": "r3-3",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "循环队列主要解决普通顺序队列的哪种问题？",
    "options": [
      "使有限数组能无限存元素",
      "保证任何入队都不会失败",
      "把 FIFO 变成 LIFO",
      "前部空位无法复用造成的假溢出"
    ],
    "answer": 3,
    "optionReasons": [
      "回绕复用不等于增加物理容量。",
      "容量满或内存申请失败等情况仍需处理。",
      "队列接口仍是先进先出。",
      "用取模回绕复用出队留下的位置；底层数组容量仍有限，真正满时仍不能直接入队。"
    ],
    "sourcePages": [],
    "pages": "28–31、37",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "用取模回绕复用出队留下的位置；底层数组容量仍有限，真正满时仍不能直接入队。",
    "explain": "用取模回绕复用出队留下的位置；底层数组容量仍有限，真正满时仍不能直接入队。",
    "solution": [
      "用取模回绕复用出队留下的位置；底层数组容量仍有限，真正满时仍不能直接入队。",
      "链队也可能申请内存失败；“不受预设数组容量限制”不是“永远不会溢出”。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C3-false-overflow",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C3-chain-empty",
    "chapter": 3,
    "mode": "review",
    "family": "concept-r3-3",
    "variant": 3,
    "topic": "r3-3",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "PPT 的无头结点链队删除最后一个有效结点后，需要怎样处理？",
    "options": [
      "只清 rear，front 保留旧地址",
      "让 rear 继续指向已释放结点",
      "front 和 rear 都置为 NULL",
      "只清 front，rear 保留旧地址"
    ],
    "answer": 2,
    "optionReasons": [
      "front 也已失效，不能只修队尾。",
      "已释放对象的地址不能继续作为有效队尾使用。",
      "首尾是同一个结点，删空后不存在有效队首或队尾；保留旧 rear 会形成悬空指针。",
      "旧 rear 指向已删结点，下一次入队可能访问失效空间。"
    ],
    "sourcePages": [
      27
    ],
    "pages": "32–34",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "首尾是同一个结点，删空后不存在有效队首或队尾；保留旧 rear 会形成悬空指针。",
    "explain": "首尾是同一个结点，删空后不存在有效队首或队尾；保留旧 rear 会形成悬空指针。",
    "solution": [
      "首尾是同一个结点，删空后不存在有效队首或队尾；保留旧 rear 会形成悬空指针。",
      "带头结点链队删空时通常 rear 回到头结点，不是这道题的无头方案。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C3-chain-empty",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C4-stride",
    "chapter": 4,
    "mode": "review",
    "family": "concept-r4-1",
    "variant": 1,
    "topic": "r4-1",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "m 行 n 列数组按行优先存储，从当前元素到下一行同一列，通常跨过几个等长元素位置？",
    "options": [
      "m+n 个",
      "n 个",
      "m 个",
      "1 个"
    ],
    "answer": 1,
    "optionReasons": [
      "二维偏移按整行数乘列数再加列内偏移，不是行列数相加。",
      "一整行有 n 个元素，因此行号增加一而列号不变，元素偏移增加 n；字节偏移还要乘元素大小。",
      "m 是行数，行优先的一行长度由列数 n 决定。",
      "相邻同一行两列才相差一个元素位置。"
    ],
    "sourcePages": [
      22,
      24
    ],
    "pages": "5–7",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "一整行有 n 个元素，因此行号增加一而列号不变，元素偏移增加 n；字节偏移还要乘元素大小。",
    "explain": "一整行有 n 个元素，因此行号增加一而列号不变，元素偏移增加 n；字节偏移还要乘元素大小。",
    "solution": [
      "一整行有 n 个元素，因此行号增加一而列号不变，元素偏移增加 n；字节偏移还要乘元素大小。",
      "列优先时下一列同一行跨 m 个位置；题目必须先确认优先顺序。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C4-stride",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C4-triangle",
    "chapter": 4,
    "mode": "review",
    "family": "concept-r4-2",
    "variant": 1,
    "topic": "r4-2",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "只存下三角时，对称矩阵上三角的 a[2][5] 应怎样读取？",
    "options": [
      "映射到下三角 a[5][2] 对应位置",
      "一律返回零",
      "另存整个上三角才能读取",
      "按 a[2][5] 直接套只适用 i≥j 的公式"
    ],
    "answer": 0,
    "optionReasons": [
      "对称性保证 a[i][j]=a[j][i]；未重复存储不代表元素为零。",
      "下三角矩阵的上三角为零，对称矩阵的上三角通常不为零。",
      "对称部分能由已存的一半恢复，无需重复。",
      "先检查公式适用的半区，越界不能硬套。"
    ],
    "sourcePages": [
      11
    ],
    "pages": "11、14",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "对称性保证 a[i][j]=a[j][i]；未重复存储不代表元素为零。",
    "explain": "对称性保证 a[i][j]=a[j][i]；未重复存储不代表元素为零。",
    "solution": [
      "对称性保证 a[i][j]=a[j][i]；未重复存储不代表元素为零。",
      "下三角矩阵与对称矩阵是不同前提，题目使用哪一个就遵守哪一个。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C4-triangle",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C4-sparse",
    "chapter": 4,
    "mode": "review",
    "family": "concept-r4-3",
    "variant": 1,
    "topic": "r4-3",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "只列出稀疏矩阵所有非零三元组，还需要保留哪些信息才能区分末尾全零的行列？",
    "options": [
      "行数列数都由最大非零坐标推得，无需另存",
      "只需要非零元数，行列数可以省略",
      "只需要所有非零值，不用保存坐标",
      "矩阵行数、列数和非零元个数"
    ],
    "answer": 3,
    "optionReasons": [
      "末尾整行或整列可能全零，最大非零坐标不能恢复真实维度。",
      "相同非零元数可出现在不同长宽矩阵中，不能据此还原维度。",
      "相同数值放在不同位置会形成不同矩阵，坐标不能省略。",
      "三元组记录非零位置和值；矩阵维度不能总由最大非零下标推得，末尾可能整行整列全零。"
    ],
    "sourcePages": [
      45,
      46
    ],
    "pages": "15、19",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "三元组记录非零位置和值；矩阵维度不能总由最大非零下标推得，末尾可能整行整列全零。",
    "explain": "三元组记录非零位置和值；矩阵维度不能总由最大非零下标推得，末尾可能整行整列全零。",
    "solution": [
      "三元组记录非零位置和值；矩阵维度不能总由最大非零下标推得，末尾可能整行整列全零。",
      "课件 TSMatrix 的 mu、nu、tu 是元数据，data[0] 未用只是该实现的约定。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C4-sparse",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C4-transpose",
    "chapter": 4,
    "mode": "review",
    "family": "concept-r4-3",
    "variant": 2,
    "topic": "r4-3",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "快速转置的 num 和 cpot 辅助向量主要解决什么？",
    "options": [
      "省掉转置后的矩阵维度",
      "保证额外空间比不用向量更小",
      "预先确定输出位置，避免为每列反复扫描全部非零元",
      "让非零元数变少"
    ],
    "answer": 2,
    "optionReasons": [
      "转置后的行列数仍须保留，只是互换。",
      "辅助向量本身要占空间，主要收益是时间效率。",
      "num 统计原列的非零元数，cpot 给对应新行的写入起点；用辅助空间换取更少重复扫描。",
      "转置只交换坐标，非零元数不变。"
    ],
    "sourcePages": [
      2,
      12
    ],
    "pages": "18–24",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "num 统计原列的非零元数，cpot 给对应新行的写入起点；用辅助空间换取更少重复扫描。",
    "explain": "num 统计原列的非零元数，cpot 给对应新行的写入起点；用辅助空间换取更少重复扫描。",
    "solution": [
      "num 统计原列的非零元数，cpot 给对应新行的写入起点；用辅助空间换取更少重复扫描。",
      "通常非空情况下普通三元组转置 O(列数×非零元数)，快速转置 O(列数+非零元数)。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C4-transpose",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C4-cpot",
    "chapter": 4,
    "mode": "review",
    "family": "concept-r4-3",
    "variant": 3,
    "topic": "r4-3",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "课件的快速转置将一个元素写到 T.data[cpot[col]] 后，会把 cpot[col] 加一。此后该值表示什么？",
    "options": [
      "原矩阵这一列首元素在原表的位置",
      "该新行下一个可写位置，不再是最初起点",
      "这一行始终不变的初始起点",
      "这一行已经写入的元素个数"
    ],
    "answer": 1,
    "optionReasons": [
      "它用于转置后的表；原表按原行序，不同列的元素未必连续。",
      "cpot 既用于给出初始段首，也在填入过程中充当写游标；写入一次后前进一步。",
      "cpot在写入后自增；如果需要最初起点，必须另存副本。",
      "cpot存的是输出表中的绝对位置，不是已写个数。"
    ],
    "sourcePages": [],
    "pages": "21–24",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "cpot 既用于给出初始段首，也在填入过程中充当写游标；写入一次后前进一步。",
    "explain": "cpot 既用于给出初始段首，也在填入过程中充当写游标；写入一次后前进一步。",
    "solution": [
      "cpot 既用于给出初始段首，也在填入过程中充当写游标；写入一次后前进一步。",
      "空列的起点可与后一列相同；空列本身不会占一个虚构三元组。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C4-cpot",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C4-cross",
    "chapter": 4,
    "mode": "review",
    "family": "concept-r4-3",
    "variant": 4,
    "topic": "r4-3",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "十字链表里，同一个非零元通常怎样参与行链与列链？",
    "options": [
      "一个结点同时有行方向和列方向的后继指针",
      "复制成两个互不关联的数据结点",
      "只接行链，列方向全靠数值大小",
      "为每个零元也建相同结点"
    ],
    "answer": 0,
    "optionReasons": [
      "结点保存行、列、值以及两个方向链接，同一个非零元同时属于所在行和所在列。",
      "两个链方向共享同一非零元结点，不要求复制数据对象。",
      "十字链表正是为行列两个方向访问而设。",
      "普通稀疏十字链表只为非零元建数据结点。"
    ],
    "sourcePages": [
      45,
      46
    ],
    "pages": "25–27",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "结点保存行、列、值以及两个方向链接，同一个非零元同时属于所在行和所在列。",
    "explain": "结点保存行、列、值以及两个方向链接，同一个非零元同时属于所在行和所在列。",
    "solution": [
      "结点保存行、列、值以及两个方向链接，同一个非零元同时属于所在行和所在列。",
      "删除非零元时，两个方向的相邻链接都要修复。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C4-cross",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C5-degree",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-1",
    "variant": 1,
    "topic": "r5-1",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "A 连同自身一共有 4 个同双亲的兄弟结点，双亲 B 的度是多少？",
    "options": [
      "3",
      "5",
      "不能由孩子数判断",
      "4"
    ],
    "answer": 3,
    "optionReasons": [
      "4 已包含 A，不应再减成 3。",
      "只有“另有 4 个兄弟”才需要再加上 A。",
      "一般树结点的度按孩子数定义，信息足够。",
      "题目已经把 A 算在 4 个孩子中；结点的度就是它拥有的孩子（子树）数，所以 B 的度为 4。"
    ],
    "sourcePages": [
      12
    ],
    "pages": "3–4",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "题目已经把 A 算在 4 个孩子中；结点的度就是它拥有的孩子（子树）数，所以 B 的度为 4。",
    "explain": "题目已经把 A 算在 4 个孩子中；结点的度就是它拥有的孩子（子树）数，所以 B 的度为 4。",
    "solution": [
      "题目已经把 A 算在 4 个孩子中；结点的度就是它拥有的孩子（子树）数，所以 B 的度为 4。",
      "树的度是所有结点度数的最大值；不是任意给定结点的度，也不是整棵树的结点数。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-degree",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C5-left-right",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-1",
    "variant": 2,
    "topic": "r5-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "只有一个孩子的二叉树结点，其孩子放左侧与放右侧是否代表同一种形状？",
    "options": [
      "是，因为前序结果一定相同",
      "无法使用二叉树表示单个孩子",
      "不是，二叉树明确区分左、右位置",
      "是，只有两个孩子才区分左右"
    ],
    "answer": 2,
    "optionReasons": [
      "相同前序不保证树形相同，恰是单序遍历不唯一的原因。",
      "二叉树允许空子树，单孩子完全合法。",
      "二叉树最多两个孩子，且每个位置有左右身份；一个孩子也必须说明在哪一侧。",
      "左右位置的区别不取决于是否同时有两个孩子。"
    ],
    "sourcePages": [
      1,
      12
    ],
    "pages": "6",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "二叉树最多两个孩子，且每个位置有左右身份；一个孩子也必须说明在哪一侧。",
    "explain": "二叉树最多两个孩子，且每个位置有左右身份；一个孩子也必须说明在哪一侧。",
    "solution": [
      "二叉树最多两个孩子，且每个位置有左右身份；一个孩子也必须说明在哪一侧。",
      "“每结点最多两个孩子的一般无序树”与二叉树不是同一个定义。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-left-right",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C5-complete",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-1",
    "variant": 3,
    "topic": "r5-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "关于课件所说的满二叉树与完全二叉树，哪句正确？",
    "options": [
      "最后一层随意留空也仍是完全二叉树",
      "满二叉树一定完全；完全二叉树最底层可不满，但必须从左连续占位",
      "完全二叉树一定每个分支都有两个孩子",
      "没有度 1 结点就一定是满二叉树"
    ],
    "answer": 1,
    "optionReasons": [
      "出现左空右有或最底层中间空位，就不符合从左连续。",
      "本课件“满”指各层全部铺满；“完全”容许最底层只填左边若干位置，前面各层必须满。",
      "完全二叉树可能有一个只有左孩子的分支结点。",
      "内部结点都二叉只保证没有度 1，叶子仍可能不在同一层。"
    ],
    "sourcePages": [
      1,
      11
    ],
    "pages": "11–13",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "本课件“满”指各层全部铺满；“完全”容许最底层只填左边若干位置，前面各层必须满。",
    "explain": "本课件“满”指各层全部铺满；“完全”容许最底层只填左边若干位置，前面各层必须满。",
    "solution": [
      "本课件“满”指各层全部铺满；“完全”容许最底层只填左边若干位置，前面各层必须满。",
      "本课件按层数计高度：非空完全树 h=⌊log₂n⌋+1，叶子数 ⌈n/2⌉；不要套给任意树。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-complete",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C5-degree-identity",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-1",
    "variant": 4,
    "topic": "r5-1",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "非空二叉树为什么总有 n₀=n₂+1？其中 n₀、n₁、n₂ 是度为 0、1、2 的结点数。",
    "options": [
      "边数既等于 n−1，也等于 n₁+2n₂，联立可得",
      "因为每棵二叉树都完全",
      "因为 n₁ 一定是零",
      "因为所有叶子都在最下一层"
    ],
    "answer": 0,
    "optionReasons": [
      "除根外每个结点有一条来自双亲的边；按双亲的孩子数数同一批边，再与 n=n₀+n₁+n₂ 联立。",
      "任意二叉树不保证完全，这个恒等式不需要完全性。",
      "允许度 1 结点，联立后 n₁ 恰好消掉。",
      "任意树的叶子可以分布在不同层。"
    ],
    "sourcePages": [
      1
    ],
    "pages": "9–10",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "除根外每个结点有一条来自双亲的边；按双亲的孩子数数同一批边，再与 n=n₀+n₁+n₂ 联立。",
    "explain": "除根外每个结点有一条来自双亲的边；按双亲的孩子数数同一批边，再与 n=n₀+n₁+n₂ 联立。",
    "solution": [
      "除根外每个结点有一条来自双亲的边；按双亲的孩子数数同一批边，再与 n=n₀+n₁+n₂ 联立。",
      "空树 n₀=n₂=0，不能直接使用带“+1”的非空结论。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-degree-identity",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C5-position",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-2",
    "variant": 1,
    "topic": "r5-2",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "按根为 1、左孩子 2i、右孩子 2i+1 编号。根 A 只有右孩子 C，C 的编号是多少？",
    "options": [
      "2，因为所有实际结点应紧挨着连续编号",
      "2，因为左右孩子都按2i编号",
      "由C在物理指针表中的编号决定",
      "3，左孩子对应的 2 号位置应保留为空"
    ],
    "answer": 3,
    "optionReasons": [
      "顺序树位置不能压缩空位，否则右孩子会被画成左孩子。",
      "左孩子是2i，右孩子是2i+1；不能共用同一个公式。",
      "物理标签与完全树位置号是两套编号，必须分别确定。",
      "位置号用来表达树形，空缺不能压缩；如果把 C 移到 2，就会把右孩子误变成左孩子。"
    ],
    "sourcePages": [
      4,
      13
    ],
    "pages": "15–17",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "位置号用来表达树形，空缺不能压缩；如果把 C 移到 2，就会把右孩子误变成左孩子。",
    "explain": "位置号用来表达树形，空缺不能压缩；如果把 C 移到 2，就会把右孩子误变成左孩子。",
    "solution": [
      "位置号用来表达树形，空缺不能压缩；如果把 C 移到 2，就会把右孩子误变成左孩子。",
      "一般树形可用这种顺序位置表示，但单支树会浪费很多空位。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-position",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C5-null",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-3",
    "variant": 1,
    "topic": "r5-3",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "有 n 个结点的非空二叉链表，每结点恰有两个孩子指针域且不含额外头结点。空孩子域有几个？",
    "options": [
      "2n",
      "n",
      "n+1",
      "n−1"
    ],
    "answer": 2,
    "optionReasons": [
      "2n 是总域数，漏减已有链接。",
      "少算了根没有来自双亲的那一条关系造成的差额。",
      "总域数 2n，非空孩子链接恰有 n−1 条，所以空域为 2n−(n−1)=n+1。",
      "n−1 数的是非空孩子链接，不是空域。"
    ],
    "sourcePages": [],
    "pages": "18、28",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "总域数 2n，非空孩子链接恰有 n−1 条，所以空域为 2n−(n−1)=n+1。",
    "explain": "总域数 2n，非空孩子链接恰有 n−1 条，所以空域为 2n−(n−1)=n+1。",
    "solution": [
      "总域数 2n，非空孩子链接恰有 n−1 条，所以空域为 2n−(n−1)=n+1。",
      "线索化或额外头结点会改变指针含义；本题限定普通二叉链表。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-null",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C5-rebuild",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-2",
    "variant": 2,
    "topic": "r5-2",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "结点标识互异时，哪组遍历通常足以唯一重建任意二叉树？",
    "options": [
      "只给层序与结点总数",
      "中序与前序，或中序与后序",
      "只给中序",
      "只给前序与后序，对所有树都唯一"
    ],
    "answer": 1,
    "optionReasons": [
      "层序顺序与数量不能区分某个单孩子究竟在左还是右。",
      "前序首或后序末确定根，中序中根的位置确定左右结点集合，再递归切分。",
      "中序不告诉你哪一个是根，不同树形可以具有同一中序。",
      "只有一个孩子时，放左侧或右侧可有相同前后序，所以不保证唯一。"
    ],
    "sourcePages": [
      4,
      13
    ],
    "pages": "20–24",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "前序首或后序末确定根，中序中根的位置确定左右结点集合，再递归切分。",
    "explain": "前序首或后序末确定根，中序中根的位置确定左右结点集合，再递归切分。",
    "solution": [
      "前序首或后序末确定根，中序中根的位置确定左右结点集合，再递归切分。",
      "标识重复时，仅这些序列也可能不足以区分相同标签的结点；题库重建题都说明互异。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-rebuild",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C5-forest",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-4",
    "variant": 1,
    "topic": "r5-4",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "孩子兄弟表示中，A.left=B，B.right=C。还原一般树时，C 与谁是兄弟？",
    "options": [
      "B；B、C 都是 A 的孩子",
      "A；C是第二棵树的根",
      "C是B的孩子",
      "B、C都直接成为森林的根"
    ],
    "answer": 0,
    "optionReasons": [
      "left 到第一个孩子，然后沿这个孩子的 right 链列同一双亲的其他孩子。",
      "森林根应沿A.right找；这里先走了A.left，进入的是A的孩子链。",
      "孩子从B.left进入；B.right在这种表示里是兄弟。",
      "B是A的第一个孩子，C是同双亲的下一兄弟，并非森林根。"
    ],
    "sourcePages": [
      10
    ],
    "pages": "30–35",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "left 到第一个孩子，然后沿这个孩子的 right 链列同一双亲的其他孩子。",
    "explain": "left 到第一个孩子，然后沿这个孩子的 right 链列同一双亲的其他孩子。",
    "solution": [
      "left 到第一个孩子，然后沿这个孩子的 right 链列同一双亲的其他孩子。",
      "只有从森林第一棵树的根沿其右链，才是在枚举各棵树的根。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-forest",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C5-tree-traverse",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-4",
    "variant": 2,
    "topic": "r5-4",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "一般树采用左孩子右兄弟表示后，原树的后序对应二叉表示的哪种遍历？",
    "options": [
      "后序遍历",
      "层序遍历",
      "右子树优先的前序",
      "中序遍历"
    ],
    "answer": 3,
    "optionReasons": [
      "二叉后序会把右兄弟也放到当前根之前，改变原树次序。",
      "层序按层推进，不等于先完成子树再访问根。",
      "原树约定从左到右，不能任意改成右侧优先。",
      "二叉中序先完成 left 所表示的孩子森林，再访问当前根，最后处理 right 所表示的后续兄弟。"
    ],
    "sourcePages": [],
    "pages": "36–39",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "二叉中序先完成 left 所表示的孩子森林，再访问当前根，最后处理 right 所表示的后续兄弟。",
    "explain": "二叉中序先完成 left 所表示的孩子森林，再访问当前根，最后处理 right 所表示的后续兄弟。",
    "solution": [
      "二叉中序先完成 left 所表示的孩子森林，再访问当前根，最后处理 right 所表示的后续兄弟。",
      "原树先序对应二叉先序；先确认是在遍历原树还是它的二叉表示。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-tree-traverse",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C5-huffman-shape",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-5",
    "variant": 1,
    "topic": "r5-5",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "含 n≥2 个正权叶子的标准二元哈夫曼树，哪些结构结论正确？",
    "options": [
      "一定是完全二叉树",
      "相同权值只能得到唯一的一组编码",
      "没有度 1 结点，总结点数为 2n−1，但树形不一定唯一",
      "一定是课件定义的满二叉树"
    ],
    "answer": 2,
    "optionReasons": [
      "贪心合并优化带权成本，不保证最底层从左连续。",
      "等权选择和左右边交换都可能产生不同合法编码。",
      "每次合并两个根会新建一个度 2 内部结点；n 个叶子需 n−1 次合并，共 2n−1 个结点。",
      "没有度 1 不意味着各层全满，叶子仍可深浅不同。"
    ],
    "sourcePages": [
      9,
      17
    ],
    "pages": "43–44",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "每次合并两个根会新建一个度 2 内部结点；n 个叶子需 n−1 次合并，共 2n−1 个结点。",
    "explain": "每次合并两个根会新建一个度 2 内部结点；n 个叶子需 n−1 次合并，共 2n−1 个结点。",
    "solution": [
      "每次合并两个根会新建一个度 2 内部结点；n 个叶子需 n−1 次合并，共 2n−1 个结点。",
      "不同合法哈夫曼编码可有相同最优 WPL；不要只按码字与参考是否逐字相同判错。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-huffman-shape",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C5-prefix",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-6",
    "variant": 1,
    "topic": "r5-6",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "码字集合 {0,10,11} 为什么可以按前缀码方式无歧义逐字译码？",
    "options": [
      "因为每个码字都从同一位开始",
      "任一码字都不是另一码字的前缀",
      "因为三个码字长度都相等",
      "因为任何包含 0、1 的码都唯一可译"
    ],
    "answer": 1,
    "optionReasons": [
      "是否共享首位不是判定标准，10 与 11 共享 1 仍合法。",
      "从左读到一个叶子即可输出对应字符并重新开始；0 不在另两个码字开头，10 与 11 也互不包含。",
      "本组长度为 1、2、2，前缀码不要求等长。",
      "例如 {0,00} 就会把 00 产生两种切分，不能只看二进制。"
    ],
    "sourcePages": [
      9,
      17
    ],
    "pages": "45–47",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "从左读到一个叶子即可输出对应字符并重新开始；0 不在另两个码字开头，10 与 11 也互不包含。",
    "explain": "从左读到一个叶子即可输出对应字符并重新开始；0 不在另两个码字开头，10 与 11 也互不包含。",
    "solution": [
      "从左读到一个叶子即可输出对应字符并重新开始；0 不在另两个码字开头，10 与 11 也互不包含。",
      "逐对检查有没有完整码字成为另一码字的开头；前缀码不要求所有码字等长。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-prefix",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C5-average-code",
    "chapter": 5,
    "mode": "review",
    "family": "concept-r5-6",
    "variant": 2,
    "topic": "r5-6",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "权值给的是出现次数而非概率时，WPL 与平均码长是什么关系？",
    "options": [
      "平均码长等于 WPL 除以总出现次数",
      "平均码长永远直接等于 WPL",
      "平均码长等于 WPL 除以字符种数",
      "平均码长等于树的最大深度"
    ],
    "answer": 0,
    "optionReasons": [
      "WPL 是各次数乘码长的总位数；除以总次数，才得到每次出现平均使用的位数。",
      "只有权值已归一化且总和为 1 时，WPL 数值才直接等于平均码长。",
      "按种数平均会忽略不同字符出现概率不同。",
      "最大深度只给最长路径，不是加权平均。"
    ],
    "sourcePages": [
      9,
      17
    ],
    "pages": "42、47",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "WPL 是各次数乘码长的总位数；除以总次数，才得到每次出现平均使用的位数。",
    "explain": "WPL 是各次数乘码长的总位数；除以总次数，才得到每次出现平均使用的位数。",
    "solution": [
      "WPL 是各次数乘码长的总位数；除以总次数，才得到每次出现平均使用的位数。",
      "压缩比还要按题设确定原/新或新/原；字符种数决定固定长码所需位数。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C5-average-code",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C6-edge-limit",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-7",
    "variant": 1,
    "topic": "r6-7",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "无自环、无重弧的 n 顶点简单有向图最多有多少条弧？",
    "options": [
      "n(n−1)/2",
      "n²",
      "n−1",
      "n(n−1)"
    ],
    "answer": 3,
    "optionReasons": [
      "除以 2 适用于简单无向完全图，这里两个方向不同。",
      "n² 把 n 个自环也算进去了。",
      "n−1 是连通无向图生成树的边数，不是有向最大值。",
      "每个起点可指向其余 n−1 个顶点，两个方向可同时存在且算不同弧。"
    ],
    "sourcePages": [
      2,
      12
    ],
    "pages": "3–4、11",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "每个起点可指向其余 n−1 个顶点，两个方向可同时存在且算不同弧。",
    "explain": "每个起点可指向其余 n−1 个顶点，两个方向可同时存在且算不同弧。",
    "solution": [
      "每个起点可指向其余 n−1 个顶点，两个方向可同时存在且算不同弧。",
      "允许自环或重边时结论会变；做题先确认简单图的约定。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-edge-limit",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C6-degree",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-7",
    "variant": 2,
    "topic": "r6-7",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "有向图有 E 条弧。所有顶点入度之和与出度之和分别是多少？",
    "options": [
      "两者都为 E/2",
      "入度和必等于顶点数",
      "都为 E；若把总度相加则为 2E",
      "入度和为 2E，出度和为 E"
    ],
    "answer": 2,
    "optionReasons": [
      "每条弧都确实有一个起点和一个终点，不能除半。",
      "顶点数与弧数没有这种固定相等关系。",
      "每条弧在终点贡献一次入度、在起点贡献一次出度，因此两边分别各数一次全部弧。",
      "把总度之和的 2E 错套到仅入度。"
    ],
    "sourcePages": [],
    "pages": "7–8",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "每条弧在终点贡献一次入度、在起点贡献一次出度，因此两边分别各数一次全部弧。",
    "explain": "每条弧在终点贡献一次入度、在起点贡献一次出度，因此两边分别各数一次全部弧。",
    "solution": [
      "每条弧在终点贡献一次入度、在起点贡献一次出度，因此两边分别各数一次全部弧。",
      "无向图每条边在两个端点各贡献一次度，因此度数和也是 2E。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-degree",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C6-connectivity",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-7",
    "variant": 3,
    "topic": "r6-7",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "有向图从顶点 1 能到达所有其他点，就能认定强连通吗？",
    "options": [
      "能，只要图中存在一个有向环",
      "不能；还必须任意两点互相可达",
      "能，有一个起点能到全部点就足够",
      "能，只要弧数不少于n−1"
    ],
    "answer": 1,
    "optionReasons": [
      "一个局部有向环不能保证图中所有其他点也双向可达。",
      "1→2→3 中 1 可到全部点，但 3 不能返回 1；强连通要求每对顶点两个方向都可达。",
      "单源可达不保证返回源点，更不保证每对点双向可达。",
      "弧数不能决定方向可达性，1→2→3就满足边数但不强连通。"
    ],
    "sourcePages": [],
    "pages": "10–12",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "1→2→3 中 1 可到全部点，但 3 不能返回 1；强连通要求每对顶点两个方向都可达。",
    "explain": "1→2→3 中 1 可到全部点，但 3 不能返回 1；强连通要求每对顶点两个方向都可达。",
    "solution": [
      "1→2→3 中 1 可到全部点，但 3 不能返回 1；强连通要求每对顶点两个方向都可达。",
      "“连通分量”用于无向连通的分块，“强连通分量”强调有向的双向可达。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-connectivity",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C6-matrix-degree",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-1",
    "variant": 1,
    "topic": "r6-1",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "无权有向图以 A[i][j]=1 表示 i→j，则第 i 行和第 i 列的和分别是什么？",
    "options": [
      "顶点 i 的出度、入度",
      "顶点i的入度、出度",
      "行列的和都分别给出顶点i的总度",
      "行列都只统计双向成对出现的弧"
    ],
    "answer": 0,
    "optionReasons": [
      "行固定起点，逐列列出从 i 发出的弧；列固定终点，逐行列出指向 i 的弧。",
      "固定行是固定起点，固定列是固定终点；这两者颠倒了。",
      "一行只数从i发出的弧，一列只数进入i的弧，总度须把两者相加。",
      "单向弧也应计入，不要求同时存在反向弧。"
    ],
    "sourcePages": [
      5
    ],
    "pages": "14–17",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "行固定起点，逐列列出从 i 发出的弧；列固定终点，逐行列出指向 i 的弧。",
    "explain": "行固定起点，逐列列出从 i 发出的弧；列固定终点，逐行列出指向 i 的弧。",
    "solution": [
      "行固定起点，逐列列出从 i 发出的弧；列固定终点，逐行列出指向 i 的弧。",
      "带权矩阵的数值和通常是权之和，不是度；统计度应数存在的边。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-matrix-degree",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C6-adj-count",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-1",
    "variant": 2,
    "topic": "r6-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "普通无向图有 E 条边，邻接表中通常有多少个边结点？",
    "options": [
      "E，每条无向边只记录一次",
      "V，每个顶点恰有一个边结点",
      "V+E，把顶点数加边数即可",
      "2E，每条边在两个端点的表中各出现一次"
    ],
    "answer": 3,
    "optionReasons": [
      "普通无向邻接表需要从两个端点各找到对方，每边两个邻接结点。",
      "V数的是顶点表头；一个顶点可有多个邻接结点。",
      "这是把两类对象混算；题目只问边结点，不含顶点表头。",
      "邻接表要从每个端点都能找到相邻端点，因此同一无向边通常存两个邻接结点。"
    ],
    "sourcePages": [
      5,
      16
    ],
    "pages": "16–17",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "邻接表要从每个端点都能找到相邻端点，因此同一无向边通常存两个邻接结点。",
    "explain": "邻接表要从每个端点都能找到相邻端点，因此同一无向边通常存两个邻接结点。",
    "solution": [
      "邻接表要从每个端点都能找到相邻端点，因此同一无向边通常存两个邻接结点。",
      "有向邻接表每条弧通常一个边结点；特殊共享边结构应另按题设计数。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-adj-count",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C6-visited",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-2",
    "variant": 1,
    "topic": "r6-2",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "BFS 中一个尚未访问的邻居何时应标记为已访问？",
    "options": [
      "只在全部遍历结束后统一标记",
      "遇到已经标记的点就清除标记",
      "第一次发现并入队时就标记",
      "等它出队后才首次标记最稳妥"
    ],
    "answer": 2,
    "optionReasons": [
      "这无法阻止环和汇合路径造成的重复访问。",
      "清标记会破坏已访问信息，可能反复循环。",
      "入队即标记能阻止其他前驱再次把同一顶点入队，保持每点只发现一次。",
      "出队才标记会让同一顶点可能在队列中重复出现。"
    ],
    "sourcePages": [],
    "pages": "20–25",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "入队即标记能阻止其他前驱再次把同一顶点入队，保持每点只发现一次。",
    "explain": "入队即标记能阻止其他前驱再次把同一顶点入队，保持每点只发现一次。",
    "solution": [
      "入队即标记能阻止其他前驱再次把同一顶点入队，保持每点只发现一次。",
      "邻接访问顺序影响具体序列，visited 只负责避免重复，不负责按编号排序。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-visited",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C6-aov-aoe",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-4",
    "variant": 1,
    "topic": "r6-4",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "AOV 与 AOE 网中，“活动”分别由什么表示？",
    "options": [
      "AOE 的顶点表示工期，弧不带权",
      "AOV 用顶点表示活动；AOE 用弧表示活动",
      "两者都用顶点表示活动",
      "AOV 用弧，AOE 用顶点"
    ],
    "answer": 1,
    "optionReasons": [
      "AOE 工期在活动弧的权上，不是顶点名字或顶点值。",
      "AOV 的弧表示先后依赖；AOE 的顶点是事件，弧是有持续时间的活动。",
      "AOE 的活动在边上，顶点表示事件发生。",
      "把 vertex 与 edge 两种表示颠倒了。"
    ],
    "sourcePages": [
      7,
      18
    ],
    "pages": "43、49–50",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "AOV 的弧表示先后依赖；AOE 的顶点是事件，弧是有持续时间的活动。",
    "explain": "AOV 的弧表示先后依赖；AOE 的顶点是事件，弧是有持续时间的活动。",
    "solution": [
      "AOV 的弧表示先后依赖；AOE 的顶点是事件，弧是有持续时间的活动。",
      "拓扑次序用来满足依赖；AOE 的 ve/vl 属于事件，e/l 属于活动。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-aov-aoe",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C6-topo-cycle",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-3",
    "variant": 1,
    "topic": "r6-3",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "拓扑排序还剩未输出顶点，但已找不到入度为 0 的顶点，说明什么？",
    "options": [
      "剩余依赖中存在有向环，不能完成拓扑排序",
      "只是图不连通，重新任取一个起点就能继续",
      "只说明容器空了，不能据此判断有环",
      "任取一个未输出顶点继续，仍然保证合法"
    ],
    "answer": 0,
    "optionReasons": [
      "在有限剩余有向图中，每点都有前驱会导致沿前驱链重复结点，形成有向环。",
      "无环的非连通部分也应存在零入度点；题设剩余部分没有零入度点，说明有环。",
      "若按正确规则更新全部剩余入度，仍有顶点却无零入度点就是环的判据。",
      "强行取点可能把尚未完成的前驱放到后面，破坏依赖约束。"
    ],
    "sourcePages": [],
    "pages": "43–48",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "在有限剩余有向图中，每点都有前驱会导致沿前驱链重复结点，形成有向环。",
    "explain": "在有限剩余有向图中，每点都有前驱会导致沿前驱链重复结点，形成有向环。",
    "solution": [
      "在有限剩余有向图中，每点都有前驱会导致沿前驱链重复结点，形成有向环。",
      "多个零入度点只说明可能有多种合法次序，不等于有环。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-topo-cycle",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C6-critical",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-5",
    "variant": 1,
    "topic": "r6-5",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "下列哪句话准确描述关键活动与关键路径？",
    "options": [
      "关键路径就是边数最多的任意路径",
      "关键活动等于权值最大的边",
      "只缩短一条关键路径的独有活动就必定缩短工期",
      "关键活动时差为零；关键路径按持续时间和取最长，可能不唯一"
    ],
    "answer": 3,
    "optionReasons": [
      "AOE 衡量的是权值和，边条数多不一定工期长。",
      "关键与全链的依赖和时限有关，不由单边权最大决定。",
      "其他未缩短的等长关键路径可能仍把工期卡在原值。",
      "项目须等全部前驱链完成，最长工期链决定最短完工时间；零时差活动不能在原计划下延迟。"
    ],
    "sourcePages": [
      7,
      18
    ],
    "pages": "51、56–58",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "项目须等全部前驱链完成，最长工期链决定最短完工时间；零时差活动不能在原计划下延迟。",
    "explain": "项目须等全部前驱链完成，最长工期链决定最短完工时间；零时差活动不能在原计划下延迟。",
    "solution": [
      "项目须等全部前驱链完成，最长工期链决定最短完工时间；零时差活动不能在原计划下延迟。",
      "多条关键路径可共享关键活动；缩短共享段也要重新计算，不能机械认定必须逐条各改一条边。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-critical",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C6-ve-vl",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-4",
    "variant": 2,
    "topic": "r6-4",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "对活动 i→j、持续时间 w，为什么最早开始 e=ve(i)，最迟开始 l=vl(j)−w？",
    "options": [
      "l 应取 vl(i)+w，越晚越安全",
      "e 和 l 都等于该边的权 w",
      "开工要等起点事件发生；又必须留足 w 才能赶上终点的截止时间",
      "e 应取 ve(j)，因为先到终点再开工"
    ],
    "answer": 2,
    "optionReasons": [
      "应从终点截止时间往前扣工期，不能从起点向后加来放宽。",
      "工期是持续长度，开始时间还受全网先后约束影响。",
      "活动从起点事件后开始，完成要在终点最迟发生前；两个量属于活动，不能与事件时间混为一谈。",
      "终点表示该活动及其他前驱完成的状态，不能拿它当开工条件。"
    ],
    "sourcePages": [
      7
    ],
    "pages": "52–55、57",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "活动从起点事件后开始，完成要在终点最迟发生前；两个量属于活动，不能与事件时间混为一谈。",
    "explain": "活动从起点事件后开始，完成要在终点最迟发生前；两个量属于活动，不能与事件时间混为一谈。",
    "solution": [
      "活动从起点事件后开始，完成要在终点最迟发生前；两个量属于活动，不能与事件时间混为一谈。",
      "ve 对前驱完成时间取最大；vl 对后继允许时间取最小，因为所有依赖都要同时满足。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-ve-vl",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C6-dijkstra",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-6",
    "variant": 1,
    "topic": "r6-6",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "Dijkstra 每轮确定哪个未确定顶点？使用时需注意什么权值条件？",
    "options": [
      "入度最小者；允许任意负权",
      "暂定源点距离最小者；标准算法要求边权非负",
      "与上轮顶点的边最短者；负权完全无影响",
      "编号最小者；只要无向就行"
    ],
    "answer": 1,
    "optionReasons": [
      "入度用于拓扑依赖判断，不是最短路的距离依据。",
      "比较的是源点到顶点的累计暂定距离；非负权保证以后绕行不会把已确定距离再变小。",
      "局部最小边不是累计最短路距离；负边可能破坏确定过程。",
      "编号只可作距离相同时的约定，不能替代贪心标准。"
    ],
    "sourcePages": [
      20,
      27
    ],
    "pages": "39–42",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "比较的是源点到顶点的累计暂定距离；非负权保证以后绕行不会把已确定距离再变小。",
    "explain": "比较的是源点到顶点的累计暂定距离；非负权保证以后绕行不会把已确定距离再变小。",
    "solution": [
      "比较的是源点到顶点的累计暂定距离；非负权保证以后绕行不会把已确定距离再变小。",
      "BFS 可求无权图最少边数路径，但有一般非负权时不能直接当作 Dijkstra。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-dijkstra",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C6-mst",
    "chapter": 6,
    "mode": "review",
    "family": "concept-r6-7",
    "variant": 4,
    "topic": "r6-7",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "最小生成树与从某源点出发的最短路径树，优化目标有什么区别？",
    "options": [
      "前者使连接全部顶点的树总权最小；后者使各点到源点的路径距离最短",
      "两者永远同一棵树",
      "前者不要求连接全部顶点",
      "后者必须全树总权最小"
    ],
    "answer": 0,
    "optionReasons": [
      "MST 优化所选 n−1 条边的总成本，最短路树优化每条源点路径；两个目标一般不同。",
      "某些图碰巧相同不能推出普遍相同。",
      "生成树必须覆盖全部顶点，连通是基本要求。",
      "各条源点路径最短并不保证全树总权最小。"
    ],
    "sourcePages": [
      24
    ],
    "pages": "29–38",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "MST 优化所选 n−1 条边的总成本，最短路树优化每条源点路径；两个目标一般不同。",
    "explain": "MST 优化所选 n−1 条边的总成本，最短路树优化每条源点路径；两个目标一般不同。",
    "solution": [
      "MST 优化所选 n−1 条边的总成本，最短路树优化每条源点路径；两个目标一般不同。",
      "课件需要掌握 Prim 扩展顶点集、Kruskal 按边选且避环；不把它夸大成正式卷已见大题。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C6-mst",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C7-asl",
    "chapter": 7,
    "mode": "review",
    "family": "concept-r7-1",
    "variant": 1,
    "topic": "r7-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "平均查找长度 ASL 中，平均的是什么？",
    "options": [
      "不必考虑概率，永远把各目标比较次数取算术平均",
      "只把所有目标比较次数相加，不除以目标数",
      "只统计最难找到的目标所需比较次数",
      "按各目标概率加权的关键字比较次数"
    ],
    "answer": 3,
    "optionReasons": [
      "只有目标等概率时才可直接取算术平均；一般要按概率加权。",
      "求和不是平均，等概率时还要除以目标数，非等概率需加权。",
      "这是最坏情况的代价，不是各情况的期望。",
      "ASL=ΣpᵢCᵢ；等概率成功查找时 pᵢ=1/n，才可把各目标比较次数直接相加再除以 n。"
    ],
    "sourcePages": [
      1,
      11
    ],
    "pages": "2–3",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "ASL=ΣpᵢCᵢ；等概率成功查找时 pᵢ=1/n，才可把各目标比较次数直接相加再除以 n。",
    "explain": "ASL=ΣpᵢCᵢ；等概率成功查找时 pᵢ=1/n，才可把各目标比较次数直接相加再除以 n。",
    "solution": [
      "ASL=ΣpᵢCᵢ；等概率成功查找时 pᵢ=1/n，才可把各目标比较次数直接相加再除以 n。",
      "先确认成功还是失败、目标分布与“比较次数”的计数约定。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C7-asl",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C7-sequential",
    "chapter": 7,
    "mode": "review",
    "family": "concept-r7-1",
    "variant": 2,
    "topic": "r7-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "顺序查找对顺序表或链表中的数据排列有什么基本要求？",
    "options": [
      "必须是完全二叉树",
      "每个关键字必须等概率出现才允许查找",
      "不要求关键字预先有序，也可用于链式存储",
      "必须严格递增且只能数组"
    ],
    "answer": 2,
    "optionReasons": [
      "顺序查找不要求树形。",
      "未知概率时仍能查找，只是不能确定某些平均值。",
      "逐项检查相等即可执行；概率分布影响平均效率计算，不决定是否能查找。",
      "这是把折半查找的要求套到顺序查找。"
    ],
    "sourcePages": [
      11
    ],
    "pages": "3–4",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "逐项检查相等即可执行；概率分布影响平均效率计算，不决定是否能查找。",
    "explain": "逐项检查相等即可执行；概率分布影响平均效率计算，不决定是否能查找。",
    "solution": [
      "逐项检查相等即可执行；概率分布影响平均效率计算，不决定是否能查找。",
      "课件监视哨设在数组额外位置；使用监视哨不表示目标一定存在于有效记录中。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C7-sequential",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C7-binary",
    "chapter": 7,
    "mode": "review",
    "family": "concept-r7-1",
    "variant": 3,
    "topic": "r7-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "要直接使用课件数组版折半查找并保持通常的对数级访问成本，需要什么？",
    "options": [
      "任何有序链表都能直接按同样成本跳到中点",
      "关键字有序，并支持按中点下标随机访问",
      "只需链式存储，无需有序",
      "只需连续存储，无需有序"
    ],
    "answer": 1,
    "optionReasons": [
      "链表找中点要走链接，不能照搬数组版总访问成本。",
      "有序让比较中点后能排除一侧，随机访问使每次取中点不必沿链寻找。",
      "无序时不能依据中点大小排除半边。",
      "连续性解决定位，不保证被排除半边中没有目标。"
    ],
    "sourcePages": [
      2
    ],
    "pages": "5–7、16",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "有序让比较中点后能排除一侧，随机访问使每次取中点不必沿链寻找。",
    "explain": "有序让比较中点后能排除一侧，随机访问使每次取中点不必沿链寻找。",
    "solution": [
      "有序让比较中点后能排除一侧，随机访问使每次取中点不必沿链寻找。",
      "闭区间写法应在 low≤high 时继续，low==high 仍有最后一个候选。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C7-binary",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C7-bst-global",
    "chapter": 7,
    "mode": "review",
    "family": "concept-r7-2",
    "variant": 1,
    "topic": "r7-2",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "BST 互异键满足“左小右大”，其中“左小”指什么？",
    "options": [
      "整个左子树的所有键都小于当前根",
      "仅左孩子小于根，其他左子孙任意",
      "左子树结点数量少于右子树",
      "左子树高度小于右子树"
    ],
    "answer": 0,
    "optionReasons": [
      "有序约束递归作用于整棵子树；只比较直接孩子可能放过更深处越过祖先范围的错误。",
      "左孩子的右子孙也必须小于祖先根，不能只看一层。",
      "BST 不按结点数量分左右。",
      "BST 本身不要求高度平衡。"
    ],
    "sourcePages": [
      2,
      8
    ],
    "pages": "17–19",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "有序约束递归作用于整棵子树；只比较直接孩子可能放过更深处越过祖先范围的错误。",
    "explain": "有序约束递归作用于整棵子树；只比较直接孩子可能放过更深处越过祖先范围的错误。",
    "solution": [
      "有序约束递归作用于整棵子树；只比较直接孩子可能放过更深处越过祖先范围的错误。",
      "本题用互异键；若允许重复，先说明重复放哪侧，再判断中序是递增还是非递减。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C7-bst-global",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C7-bst-order",
    "chapter": 7,
    "mode": "review",
    "family": "concept-r7-2",
    "variant": 2,
    "topic": "r7-2",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "将同一组互异键按不同插入顺序建立普通 BST，树形与 ASL 会怎样？",
    "options": [
      "同一组键总得到同一棵树",
      "任意顺序都保证平衡",
      "树形不同但成功 ASL 永远相同",
      "可能不同；固定某一插入顺序时树形才确定"
    ],
    "answer": 3,
    "optionReasons": [
      "相同集合不等于相同插入过程，根就可能不同。",
      "递增插入普通 BST 可退化为单链。",
      "层数分布改变可能改变各比较次数之和。",
      "首个键成为根，后续沿比较路径插入；顺序影响层数分布，而比较次数等于目标层数。"
    ],
    "sourcePages": [
      8
    ],
    "pages": "17–19",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "首个键成为根，后续沿比较路径插入；顺序影响层数分布，而比较次数等于目标层数。",
    "explain": "首个键成为根，后续沿比较路径插入；顺序影响层数分布，而比较次数等于目标层数。",
    "solution": [
      "首个键成为根，后续沿比较路径插入；顺序影响层数分布，而比较次数等于目标层数。",
      "课件“相同序列构成的树不唯一”应理解为同一组键的不同插入次序；严格固定顺序时无此歧义。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C7-bst-order",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C7-avl",
    "chapter": 7,
    "mode": "review",
    "family": "concept-r7-3",
    "variant": 1,
    "topic": "r7-3",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "AVL 的高度条件要对哪些结点检查？平衡因子按课件如何定义？",
    "options": [
      "每个结点；左右结点数之差",
      "只检查叶子；左高加右高",
      "每个结点；左子树高减右子树高，只允许 −1、0、1",
      "只检查根；因子可为任意整数"
    ],
    "answer": 2,
    "optionReasons": [
      "比较的是高度而非结点数量。",
      "叶子自然平衡，不能只查叶子；也不是高度相加。",
      "AVL 是递归的平衡 BST；根平衡并不能排除某个深层子树不平衡。",
      "每个子树都要满足条件，±2 已表示失衡。"
    ],
    "sourcePages": [
      1,
      11
    ],
    "pages": "20–27",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "AVL 是递归的平衡 BST；根平衡并不能排除某个深层子树不平衡。",
    "explain": "AVL 是递归的平衡 BST；根平衡并不能排除某个深层子树不平衡。",
    "solution": [
      "AVL 是递归的平衡 BST；根平衡并不能排除某个深层子树不平衡。",
      "LL/RR 说的是插入路径相对于失衡点的两段方向，修复方向分别是右旋/左旋。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C7-avl",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C7-block",
    "chapter": 7,
    "mode": "review",
    "family": "concept-r7-5",
    "variant": 1,
    "topic": "r7-5",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "课件分块查找的“块间有序、块内可无序”准确指什么？",
    "options": [
      "所有块必须拥有相同关键字",
      "前块最大键小于后块最小键，块内记录可任意排列",
      "只要各块最大键递增，块内取值范围可重叠",
      "每块内部有序就够，块间可交叉"
    ],
    "answer": 1,
    "optionReasons": [
      "关键字相同不是分块查找的要求。",
      "值域分离才能用索引确定唯一候选块；块内再顺序查找，不要求内部排序。",
      "例如前块含 1、100，后块含 2、200，最大值虽递增却不能据此正确定位 2。",
      "块间范围交叉会破坏索引排除条件。"
    ],
    "sourcePages": [],
    "pages": "12–16",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "值域分离才能用索引确定唯一候选块；块内再顺序查找，不要求内部排序。",
    "explain": "值域分离才能用索引确定唯一候选块；块内再顺序查找，不要求内部排序。",
    "solution": [
      "值域分离才能用索引确定唯一候选块；块内再顺序查找，不要求内部排序。",
      "课件专题需要会定义和两次查找的思路；不给它安排超过正式卷核心大题的训练比重。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C7-block",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C7-collision",
    "chapter": 7,
    "mode": "review",
    "family": "concept-r7-4",
    "variant": 1,
    "topic": "r7-4",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "不同关键字得到相同哈希地址意味着什么？",
    "options": [
      "发生冲突，需要按指定策略继续处理",
      "两个关键字一定相等",
      "哈希函数一定编写错误",
      "只要使用质数就绝不冲突"
    ],
    "answer": 0,
    "optionReasons": [
      "哈希地址空间有限，不同键可能映到同一位置；冲突是要处理的正常情形。",
      "题目已经说不同键，地址相等不能推出键相等。",
      "合理哈希函数也可能冲突，不必然是错误。",
      "选模数可改善分布，但不能保证所有输入无冲突。"
    ],
    "sourcePages": [
      1,
      11
    ],
    "pages": "28、33–35",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "哈希地址空间有限，不同键可能映到同一位置；冲突是要处理的正常情形。",
    "explain": "哈希地址空间有限，不同键可能映到同一位置；冲突是要处理的正常情形。",
    "solution": [
      "哈希地址空间有限，不同键可能映到同一位置；冲突是要处理的正常情形。",
      "哈希查找的理想常数级不能解释为“任何输入都只比较一次”。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C7-collision",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C7-alpha",
    "chapter": 7,
    "mode": "review",
    "family": "concept-r7-4",
    "variant": 2,
    "topic": "r7-4",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "装填因子 α 的定义是什么？在其余条件相近时增大通常怎样影响冲突？",
    "options": [
      "α=m/n；越大越拥挤",
      "α 等于哈希函数的模数",
      "α 越大冲突一定越少",
      "α=n/m；表越拥挤通常越容易冲突"
    ],
    "answer": 3,
    "optionReasons": [
      "分子分母颠倒，无法直接表达已占比例。",
      "模数 p 与容量 m 可能不同，α 是占用率。",
      "通常趋势相反；也不应把趋势说成对每次插入的绝对保证。",
      "n 是已存记录数，m 是表容量，比例描述占用程度；同策略和分布下空位少通常探测更长。"
    ],
    "sourcePages": [
      1,
      11
    ],
    "pages": "33–35",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "n 是已存记录数，m 是表容量，比例描述占用程度；同策略和分布下空位少通常探测更长。",
    "explain": "n 是已存记录数，m 是表容量，比例描述占用程度；同策略和分布下空位少通常探测更长。",
    "solution": [
      "n 是已存记录数，m 是表容量，比例描述占用程度；同策略和分布下空位少通常探测更长。",
      "由目标 α 估表长常要向上取整；实际 α 应用最终选定的整数表长重算。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C7-alpha",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C7-modulus",
    "chapter": 7,
    "mode": "review",
    "family": "concept-r7-4",
    "variant": 3,
    "topic": "r7-4",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "表长 m=11，哈希函数 H(key)=key%7，线性探测应怎样回绕？",
    "options": [
      "初始必须改成对 11 取模，忽略题设",
      "只要初始在 0..6，后续也不能用 7..10",
      "初始地址对 7 取模，冲突后的槽位按 11 取模回绕",
      "初始和探测都只能对 7 取模"
    ],
    "answer": 2,
    "optionReasons": [
      "不能擅自更改给定的哈希函数。",
      "冲突后可以进入模数之外但仍在表内的槽位。",
      "p=7 决定初始地址范围，m=11 决定可用槽位范围；探测应覆盖题设表的实际地址。",
      "会错误地把 7..10 四个合法槽排除，甚至提前探测失败。"
    ],
    "sourcePages": [
      10,
      13
    ],
    "pages": "33–38",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "p=7 决定初始地址范围，m=11 决定可用槽位范围；探测应覆盖题设表的实际地址。",
    "explain": "p=7 决定初始地址范围，m=11 决定可用槽位范围；探测应覆盖题设表的实际地址。",
    "solution": [
      "p=7 决定初始地址范围，m=11 决定可用槽位范围；探测应覆盖题设表的实际地址。",
      "成功 ASL 数每个键按原探测规则查到的位置所需探测次数，不能只看最终槽下标。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C7-modulus",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C8-stability",
    "chapter": 8,
    "mode": "review",
    "family": "concept-r8-5",
    "variant": 1,
    "topic": "r8-5",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "排序稳定性在什么情况下才有可观察的含义？",
    "options": [
      "运行时间没有波动就叫稳定",
      "存在相等关键字而身份不同的记录，检查它们的相对先后",
      "所有关键字互异时仅看数字升序就能证明稳定",
      "排序结果每次相同就叫稳定"
    ],
    "answer": 1,
    "optionReasons": [
      "耗时波动不是排序稳定性的定义。",
      "稳定性是对所有输入保持相等键记录原相对次序的保证；甲乙身份让次序变化可见。",
      "互异键没有相等对，该例不能验证稳定性保证。",
      "确定的算法也可能固定地颠倒相等键，确定性不同于稳定性。"
    ],
    "sourcePages": [],
    "pages": "1",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "稳定性是对所有输入保持相等键记录原相对次序的保证；甲乙身份让次序变化可见。",
    "explain": "稳定性是对所有输入保持相等键记录原相对次序的保证；甲乙身份让次序变化可见。",
    "solution": [
      "稳定性是对所有输入保持相等键记录原相对次序的保证；甲乙身份让次序变化可见。",
      "一例未颠倒不能证明算法总稳定；一个合法输入的颠倒反例足以证明可能不稳定。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C8-stability",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C8-insert",
    "chapter": 8,
    "mode": "review",
    "family": "concept-r8-4",
    "variant": 1,
    "topic": "r8-4",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "直接插入排序中，第一项起初视为有序。第 i 趟开始前和结束后，有序前缀各有几项？",
    "options": [
      "开始前 i 项，结束后 i+1 项",
      "开始前i−1项，结束后i项",
      "开始前i+1项，结束后i+2项",
      "开始前n−i项，结束后n−i−1项"
    ],
    "answer": 0,
    "optionReasons": [
      "第 1 趟插入第 2 项，有序区由 1 项变 2 项；之后每趟只扩展一项。",
      "第1趟开始前已有第1项，不能套成0项；这常是趟号与数组下标混淆。",
      "整体多算一项，第1趟结束只有前2项有序。",
      "这像在数缩小的无序区，不是题目所问的增长有序前缀。"
    ],
    "sourcePages": [],
    "pages": "4–6、11",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "第 1 趟插入第 2 项，有序区由 1 项变 2 项；之后每趟只扩展一项。",
    "explain": "第 1 趟插入第 2 项，有序区由 1 项变 2 项；之后每趟只扩展一项。",
    "solution": [
      "第 1 趟插入第 2 项，有序区由 1 项变 2 项；之后每趟只扩展一项。",
      "有的题把 i 当待插入元素的下标而不是趟号，先读题目定义再用公式。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C8-insert",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C8-binary-insert",
    "chapter": 8,
    "mode": "review",
    "family": "concept-r8-5",
    "variant": 2,
    "topic": "r8-5",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "按 PPT 折半插入代码，相等时向右继续找位置，为什么可保持稳定？",
    "options": [
      "折半插入无论相等时放前还是放后都稳定",
      "二分找到位置后不再需要移动记录",
      "比较次数减少了，所以整体最坏一定是O(n log n)",
      "当前较晚出现的相等记录插到已有相等记录之后"
    ],
    "answer": 3,
    "optionReasons": [
      "相等时放到已有相等键前方，会反转先出现记录与当前记录的次序。",
      "定位之后仍须给插入位置腾出空间，后缀记录仍可能右移。",
      "比较减少不代表移动减少，最坏总移动量仍可为平方级。",
      "从左到右处理，已有相等记录更早；将当前项放它们后方就保持原先后。课件末页的分类需结合代码校正。"
    ],
    "sourcePages": [],
    "pages": "7–8、32",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "从左到右处理，已有相等记录更早；将当前项放它们后方就保持原先后。课件末页的分类需结合代码校正。",
    "explain": "从左到右处理，已有相等记录更早；将当前项放它们后方就保持原先后。课件末页的分类需结合代码校正。",
    "solution": [
      "从左到右处理，已有相等记录更早；将当前项放它们后方就保持原先后。课件末页的分类需结合代码校正。",
      "整体最坏仍 O(n²)，因为移动次数仍可能为平方级。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C8-binary-insert",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C8-shell",
    "chapter": 8,
    "mode": "review",
    "family": "concept-r8-2",
    "variant": 1,
    "topic": "r8-2",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "希尔排序的一个增量 gap 趟结束，意味着什么？",
    "options": [
      "把每个分组拼接成新的连续数组",
      "每个增量结束都保证全数组有序",
      "所有相隔 gap 的分组都完成插入排序，记录仍放回原下标",
      "只排前 gap 个元素"
    ],
    "answer": 2,
    "optionReasons": [
      "拼组会改变后续增量的元素位置，不是标准过程。",
      "gap>1 时不同组之间仍可能有逆序。",
      "分组按下标余数区分，组内排完回填各自间隔位置；只有最终 gap=1 才把全数组作为一组排。",
      "同余下标分布在整个数组，不是连续前缀。"
    ],
    "sourcePages": [
      6
    ],
    "pages": "9–10",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "分组按下标余数区分，组内排完回填各自间隔位置；只有最终 gap=1 才把全数组作为一组排。",
    "explain": "分组按下标余数区分，组内排完回填各自间隔位置；只有最终 gap=1 才把全数组作为一组排。",
    "solution": [
      "分组按下标余数区分，组内排完回填各自间隔位置；只有最终 gap=1 才把全数组作为一组排。",
      "复杂度依赖增量序列；不要脱离增量背成统一 O(n log n)。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C8-shell",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C8-heap",
    "chapter": 8,
    "mode": "review",
    "family": "concept-r8-3",
    "variant": 1,
    "topic": "r8-3",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "大根堆必须满足什么？",
    "options": [
      "堆数组整体必须递减",
      "是完全二叉树形状，且每个父结点不小于其存在的孩子",
      "左子树所有键小于根，右子树所有键大于根",
      "兄弟从左到右必须递增"
    ],
    "answer": 1,
    "optionReasons": [
      "数组按层排，父子约束不能推出整个数组递减。",
      "堆的形状保证可用连续数组表示，大小约束只沿父子方向；不要求左右子树互相有序。",
      "这是 BST 的有序范围，不是堆的定义。",
      "兄弟之间没有必须递增的约束。"
    ],
    "sourcePages": [
      15,
      19
    ],
    "pages": "15–17",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "堆的形状保证可用连续数组表示，大小约束只沿父子方向；不要求左右子树互相有序。",
    "explain": "堆的形状保证可用连续数组表示，大小约束只沿父子方向；不要求左右子树互相有序。",
    "solution": [
      "堆的形状保证可用连续数组表示，大小约束只沿父子方向；不要求左右子树互相有序。",
      "升序堆排序把最大值换到末尾，剩余堆区缩小；别把有序后缀重新拉回堆里。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C8-heap",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "C8-heap-build",
    "chapter": 8,
    "mode": "review",
    "family": "concept-r8-3",
    "variant": 2,
    "topic": "r8-3",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "1 起始数组存完全树，从底向上建堆为什么从 ⌊n/2⌋ 开始？",
    "options": [
      "它是最后一个非叶子，后面的叶子子树天然已经是堆",
      "因为所有结点都有两个孩子",
      "因为必须先把数组整体排序",
      "因为前半部分全是叶子"
    ],
    "answer": 0,
    "optionReasons": [
      "i>⌊n/2⌋ 时 2i>n，没有左孩子，也就没有孩子可调整；从最后非叶子往前保证下方已成堆。",
      "最后一个非叶子可能只有左孩子，不能假定全有两个。",
      "建堆只需满足堆序，不先完成排序。",
      "恰好后半部分是叶子，不是前半部分。"
    ],
    "sourcePages": [],
    "pages": "17、22",
    "origin": "课件重点概念新题",
    "sourceNature": "PPT关键补充",
    "hint": "i>⌊n/2⌋ 时 2i>n，没有左孩子，也就没有孩子可调整；从最后非叶子往前保证下方已成堆。",
    "explain": "i>⌊n/2⌋ 时 2i>n，没有左孩子，也就没有孩子可调整；从最后非叶子往前保证下方已成堆。",
    "solution": [
      "i>⌊n/2⌋ 时 2i>n，没有左孩子，也就没有孩子可调整；从最后非叶子往前保证下方已成堆。",
      "从底向上建堆总时间 O(n)；取顶后一次下筛选 O(log n)，完整排序最坏 O(n log n)。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C8-heap-build",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C8-bubble-count",
    "chapter": 8,
    "mode": "review",
    "family": "concept-r8-4",
    "variant": 2,
    "topic": "r8-4",
    "type": "choice",
    "points": 1,
    "difficulty": "辨析应用",
    "title": "带“整趟无交换就停止”的冒泡，对已递增的 n≥2 项，比较次数与交换次数分别是？",
    "options": [
      "0 次比较，0 次交换",
      "n(n−1)/2 次比较，0 次交换",
      "n−1 次比较，3(n−1) 次交换",
      "n−1 次比较，0 次交换"
    ],
    "answer": 3,
    "optionReasons": [
      "不能在检查前知道输入已经有序，算法仍执行第一趟。",
      "固定所有趟数忽略了题中提前停止条件。",
      "已递增不交换，3 次通常是“一次交换”的记录移动计数。",
      "必须扫描第一趟才知道无交换；一趟比较相邻的 n−1 对，随后提前结束。"
    ],
    "sourcePages": [
      32,
      40
    ],
    "pages": "24–26、29",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "必须扫描第一趟才知道无交换；一趟比较相邻的 n−1 对，随后提前结束。",
    "explain": "必须扫描第一趟才知道无交换；一趟比较相邻的 n−1 对，随后提前结束。",
    "solution": [
      "必须扫描第一趟才知道无交换；一趟比较相邻的 n−1 对，随后提前结束。",
      "比较、交换、记录移动分开数；最后无交换的一趟仍有比较。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C8-bubble-count",
    "priority": "core",
    "skill": "concept",
    "tier": "reason"
  },
  {
    "id": "C8-quick",
    "chapter": 8,
    "mode": "review",
    "family": "concept-r8-1",
    "variant": 1,
    "topic": "r8-1",
    "type": "choice",
    "points": 1,
    "difficulty": "概念回忆",
    "title": "快速排序一次划分结束后，通常能保证什么？",
    "options": [
      "只剩一个元素还未排",
      "下一步必须把左右两侧合并为一个数组再排序",
      "基准到达本轮最终位置，两侧满足划分关系，但各侧内部未必有序",
      "左右两侧都已经完全有序"
    ],
    "answer": 2,
    "optionReasons": [
      "基准定位不意味着其他元素全部定位。",
      "快排在原区间分治，普通过程不需要归并排序那样的合并。",
      "划分只隔开相对基准的两组；还要分别递归处理两侧，所以不能把一次划分当完整排序。",
      "两侧中仍可能有多组逆序，正需递归继续。"
    ],
    "sourcePages": [
      6
    ],
    "pages": "27–29",
    "origin": "课件重点概念新题",
    "sourceNature": "卷面考法关联",
    "hint": "划分只隔开相对基准的两组；还要分别递归处理两侧，所以不能把一次划分当完整排序。",
    "explain": "划分只隔开相对基准的两组；还要分别递归处理两侧，所以不能把一次划分当完整排序。",
    "solution": [
      "划分只隔开相对基准的两组；还要分别递归处理两侧，所以不能把一次划分当完整排序。",
      "逐趟数组依赖具体划分实现、相等键规则和递归次序，题库会明确给定。"
    ],
    "support": {
      "ask": "选出符合定义与题目条件的一项；注意限定词。",
      "plan": [
        "先回忆定义，再检查选项有没有把前提扩大或颠倒。"
      ],
      "format": "单选；提交后可逐项核对反例和适用前提。"
    },
    "recall": "C8-quick",
    "priority": "core",
    "skill": "concept",
    "tier": "recall"
  },
  {
    "id": "E14-loop-up",
    "chapter": 1,
    "mode": "review",
    "family": "E14-loop-up",
    "variant": 1,
    "topic": "r1-1",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "title": "正式卷频度题（1）整理：n≥1，for(i=1;i<=n;i++) for(j=i;j<=n;j++) @ k++;。求 @ 精确次数与时间复杂度。",
    "fields": [
      {
        "label": "@ 精确次数",
        "answer": "n*(n+1)/2",
        "points": 2,
        "kind": "formula",
        "aliases": [
          "n(n+1)/2",
          "(n*n+n)/2"
        ]
      },
      {
        "label": "时间复杂度",
        "answer": "O(n²)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "solution": [
      "固定 i 时，j 从 i 数到 n，包含两端，共 n−i+1 次。",
      "各行次数 n,n−1,…,1，总和 n(n+1)/2。",
      "内层逐行求和为平方增长，时间 O(n²)。"
    ],
    "explain": "固定 i 时，j 从 i 数到 n，包含两端，共 n−i+1 次。 各行次数 n,n−1,…,1，总和 n(n+1)/2。 内层逐行求和为平方增长，时间 O(n²)。",
    "support": {
      "ask": "只数 @ 的执行次数；再判断整个程序随 n 增长的主要阶。",
      "plan": [
        "固定外层 i，先列内层合法取值的个数。",
        "没有执行的行贡献0；题目若只要 @，不另计循环判断。"
      ],
      "format": "次数填精确表达式或整数；复杂度可写 O(n²) 或 O(n^2)。"
    },
    "worked": [
      {
        "caption": "从 i 数到 n，端点都要算",
        "heads": [
          "外层 i",
          "内层 j",
          "本行 @ 次数"
        ],
        "rows": [
          [
            "1",
            "1..n",
            "n"
          ],
          [
            "2",
            "2..n",
            "n−1"
          ],
          [
            "…",
            "…",
            "…"
          ],
          [
            "n",
            "n..n",
            "1"
          ]
        ]
      }
    ],
    "pages": "61–62",
    "sourcePages": [
      3
    ],
    "origin": "原题整理 · PDF第3页频度(1)",
    "hint": "固定 i 时，j 从 i 数到 n，包含两端，共 n−i+1 次。",
    "rubric": [],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "E14-loop-down",
    "chapter": 1,
    "mode": "review",
    "family": "E14-loop-down",
    "variant": 1,
    "topic": "r1-1",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "title": "正式卷频度题（2）整理：n≥2，for(i=1;i<=n-1;i++) for(j=n;j>=i;j--) @ x=x+1;。求 @ 精确次数与时间复杂度。",
    "fields": [
      {
        "label": "@ 精确次数",
        "answer": "n*(n+1)/2-1",
        "points": 2,
        "kind": "formula",
        "aliases": [
          "n(n+1)/2-1",
          "(n-1)*(n+2)/2",
          "(n-1)(n+2)/2",
          "(n*n+n-2)/2"
        ]
      },
      {
        "label": "时间复杂度",
        "answer": "O(n²)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "solution": [
      "固定 i 时，j 取 n,n−1,…,i，包含 i，共 n−i+1 次。",
      "i 只到 n−1，因此最后一行是2次，不会出现 i=n 的1次。",
      "次数为 n+(n−1)+…+2=n(n+1)/2−1；时间 O(n²)。"
    ],
    "explain": "固定 i 时，j 取 n,n−1,…,i，包含 i，共 n−i+1 次。 i 只到 n−1，因此最后一行是2次，不会出现 i=n 的1次。 次数为 n+(n−1)+…+2=n(n+1)/2−1；时间 O(n²)。",
    "support": {
      "ask": "只数 @ 的执行次数；再判断整个程序随 n 增长的主要阶。",
      "plan": [
        "固定外层 i，先列内层合法取值的个数。",
        "没有执行的行贡献0；题目若只要 @，不另计循环判断。"
      ],
      "format": "次数填精确表达式或整数；复杂度可写 O(n²) 或 O(n^2)。"
    },
    "worked": [
      {
        "caption": "最后一行是2次：外层没有 i=n 那一行",
        "heads": [
          "外层 i",
          "内层取值个数",
          "边界说明"
        ],
        "rows": [
          [
            "1",
            "n",
            "包含j=1"
          ],
          [
            "2",
            "n−1",
            "包含j=2"
          ],
          [
            "…",
            "…",
            "…"
          ],
          [
            "n−1",
            "2",
            "j=n与j=n−1"
          ],
          [
            "n",
            "0",
            "外层根本不执行这一行"
          ]
        ]
      }
    ],
    "pages": "61–62",
    "sourcePages": [
      3
    ],
    "origin": "原题整理 · PDF第3页频度(2)",
    "hint": "固定 i 时，j 取 n,n−1,…,i，包含 i，共 n−i+1 次。",
    "rubric": [],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "PPT1-even-start-8",
    "chapter": 1,
    "mode": "review",
    "family": "PPT1-even-start",
    "variant": 1,
    "topic": "r1-1",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "title": "课件第67页同类边界：n=8（偶数），for(i=1;i<=n;i++) for(j=2*i;j<=n;j++) @ m++;。求本次 @ 次数与将 n 视为规模时的时间复杂度。",
    "fields": [
      {
        "label": "@ 精确次数",
        "answer": "16",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n²)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "solution": [
      "只有 i≤n/2 的行有内层执行；i>4 时，2i>n，次数为0。",
      "非空行次数为 7,5,…,1，相加得到 16；一般偶数 n 的和为 n²/4。",
      "外层仍执行 n 次，但主要工作由平方级的内层累计决定；时间 O(n²)。"
    ],
    "explain": "只有 i≤n/2 的行有内层执行；i>4 时，2i>n，次数为0。 非空行次数为 7,5,…,1，相加得到 16；一般偶数 n 的和为 n²/4。 外层仍执行 n 次，但主要工作由平方级的内层累计决定；时间 O(n²)。",
    "support": {
      "ask": "只数 @ 的执行次数；再判断整个程序随 n 增长的主要阶。",
      "plan": [
        "固定外层 i，先列内层合法取值的个数。",
        "没有执行的行贡献0；题目若只要 @，不另计循环判断。"
      ],
      "format": "次数填精确表达式或整数；复杂度可写 O(n²) 或 O(n^2)。"
    },
    "worked": [
      {
        "caption": "先判这一行是否进入内层，再求和",
        "heads": [
          "i",
          "j的合法范围",
          "本行次数",
          "累计次数"
        ],
        "rows": [
          [
            "1",
            "2..8",
            "7",
            "7"
          ],
          [
            "2",
            "4..8",
            "5",
            "12"
          ],
          [
            "3",
            "6..8",
            "3",
            "15"
          ],
          [
            "4",
            "8..8",
            "1",
            "16"
          ],
          [
            "5",
            "起点已超过上界",
            "0",
            "16"
          ],
          [
            "6",
            "起点已超过上界",
            "0",
            "16"
          ],
          [
            "7",
            "起点已超过上界",
            "0",
            "16"
          ],
          [
            "8",
            "起点已超过上界",
            "0",
            "16"
          ]
        ]
      }
    ],
    "pages": "67",
    "sourcePages": [],
    "origin": "PPT同类边界新题 · 非原卷原题",
    "hint": "只有 i≤n/2 的行有内层执行；i>4 时，2i>n，次数为0。",
    "rubric": [],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "PPT1-even-start-14",
    "chapter": 1,
    "mode": "review",
    "family": "PPT1-even-start",
    "variant": 2,
    "topic": "r1-1",
    "type": "fields",
    "points": 4,
    "difficulty": "综合拔高",
    "title": "课件第67页同类边界：n=14（偶数），for(i=1;i<=n;i++) for(j=2*i;j<=n;j++) @ m++;。求本次 @ 次数与将 n 视为规模时的时间复杂度。",
    "fields": [
      {
        "label": "@ 精确次数",
        "answer": "49",
        "points": 2,
        "kind": "number",
        "aliases": []
      },
      {
        "label": "时间复杂度",
        "answer": "O(n²)",
        "points": 2,
        "kind": "complexity",
        "aliases": []
      }
    ],
    "solution": [
      "只有 i≤n/2 的行有内层执行；i>7 时，2i>n，次数为0。",
      "非空行次数为 13,11,…,1，相加得到 49；一般偶数 n 的和为 n²/4。",
      "外层仍执行 n 次，但主要工作由平方级的内层累计决定；时间 O(n²)。"
    ],
    "explain": "只有 i≤n/2 的行有内层执行；i>7 时，2i>n，次数为0。 非空行次数为 13,11,…,1，相加得到 49；一般偶数 n 的和为 n²/4。 外层仍执行 n 次，但主要工作由平方级的内层累计决定；时间 O(n²)。",
    "support": {
      "ask": "只数 @ 的执行次数；再判断整个程序随 n 增长的主要阶。",
      "plan": [
        "固定外层 i，先列内层合法取值的个数。",
        "没有执行的行贡献0；题目若只要 @，不另计循环判断。"
      ],
      "format": "次数填精确表达式或整数；复杂度可写 O(n²) 或 O(n^2)。"
    },
    "worked": [
      {
        "caption": "先判这一行是否进入内层，再求和",
        "heads": [
          "i",
          "j的合法范围",
          "本行次数",
          "累计次数"
        ],
        "rows": [
          [
            "1",
            "2..14",
            "13",
            "13"
          ],
          [
            "2",
            "4..14",
            "11",
            "24"
          ],
          [
            "3",
            "6..14",
            "9",
            "33"
          ],
          [
            "4",
            "8..14",
            "7",
            "40"
          ],
          [
            "5",
            "10..14",
            "5",
            "45"
          ],
          [
            "6",
            "12..14",
            "3",
            "48"
          ],
          [
            "7",
            "14..14",
            "1",
            "49"
          ],
          [
            "8",
            "起点已超过上界",
            "0",
            "49"
          ],
          [
            "9",
            "起点已超过上界",
            "0",
            "49"
          ],
          [
            "10",
            "起点已超过上界",
            "0",
            "49"
          ],
          [
            "11",
            "起点已超过上界",
            "0",
            "49"
          ],
          [
            "12",
            "起点已超过上界",
            "0",
            "49"
          ],
          [
            "13",
            "起点已超过上界",
            "0",
            "49"
          ],
          [
            "14",
            "起点已超过上界",
            "0",
            "49"
          ]
        ]
      }
    ],
    "pages": "67",
    "sourcePages": [],
    "origin": "PPT同类边界新题 · 非原卷原题",
    "hint": "只有 i≤n/2 的行有内层执行；i>7 时，2i>n，次数为0。",
    "rubric": [],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "BST-shape-1",
    "chapter": 5,
    "mode": "review",
    "family": "R5-fixed-shape",
    "variant": 1,
    "topic": "r5-7",
    "type": "fields",
    "points": 8,
    "difficulty": "综合拔高",
    "title": "保持下方树形不变，把互异关键字 [1, 2, 3, 4, 5, 6, 7, 8, 9] 各填一次，使它成为BST。按位置标签顺序 A,B,C,D,E,F,G,H,I 填出键值序列，再求等概率成功ASL。根比较计1次。",
    "given": {
      "kind": "tree",
      "caption": "给定树形：字母是位置标签，不是待填关键字",
      "nodes": [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I"
      ],
      "points": [
        [
          300.0,
          35
        ],
        [
          184.44444444444446,
          125
        ],
        [
          531.1111111111111,
          125
        ],
        [
          68.88888888888889,
          215
        ],
        [
          242.22222222222223,
          215
        ],
        [
          415.55555555555554,
          215
        ],
        [
          126.66666666666667,
          305
        ],
        [
          357.77777777777777,
          305
        ],
        [
          473.3333333333333,
          305
        ]
      ],
      "links": [
        [
          "A",
          "B",
          "左"
        ],
        [
          "A",
          "C",
          "右"
        ],
        [
          "B",
          "D",
          "左"
        ],
        [
          "B",
          "E",
          "右"
        ],
        [
          "C",
          "F",
          "左"
        ],
        [
          "D",
          "G",
          "右"
        ],
        [
          "F",
          "H",
          "左"
        ],
        [
          "F",
          "I",
          "右"
        ]
      ],
      "rows": [
        [
          "A",
          "B",
          "C"
        ],
        [
          "B",
          "D",
          "E"
        ],
        [
          "C",
          "F",
          "∅"
        ],
        [
          "D",
          "∅",
          "G"
        ],
        [
          "E",
          "∅",
          "∅"
        ],
        [
          "F",
          "H",
          "I"
        ],
        [
          "G",
          "∅",
          "∅"
        ],
        [
          "H",
          "∅",
          "∅"
        ],
        [
          "I",
          "∅",
          "∅"
        ]
      ],
      "height": 340
    },
    "pages": "48–53",
    "sourcePages": [
      8
    ],
    "origin": "原卷树形整理并加位置标签",
    "hint": "BST中序必须递增；先写位置的中序，再把排好序的关键字依次放进去。",
    "support": {
      "ask": "给的是形状，形状不能改；这次不按输入次序插入新树。",
      "plan": [
        "先按左、根、右写出位置标签的中序，再依次赋递增键。",
        "赋值完成后按给定形状数层数，根1层，ASL取全部层数的等概率平均。"
      ],
      "format": "字母仅标位置；保持空孩子与左右方向。数值序列用逗号分隔；ASL可填分数。"
    },
    "solution": [
      "位置中序为 D,G,B,E,A,H,F,I,C，应按该顺序放递增关键字。",
      "各位置填值：A=5；B=3；C=9；D=1；E=4；F=7；G=2；H=6；I=8。",
      "层数和=26；等概率成功ASL=26/9。同一固定形状下，互异键的具体大小不改变这组层数。"
    ],
    "worked": [
      {
        "caption": "先确定中序位置，再对应递增键",
        "heads": [
          "中序次序",
          "位置标签",
          "填入键",
          "层数/比较次数"
        ],
        "rows": [
          [
            "1",
            "D",
            "1",
            "3"
          ],
          [
            "2",
            "G",
            "2",
            "4"
          ],
          [
            "3",
            "B",
            "3",
            "2"
          ],
          [
            "4",
            "E",
            "4",
            "3"
          ],
          [
            "5",
            "A",
            "5",
            "1"
          ],
          [
            "6",
            "H",
            "6",
            "4"
          ],
          [
            "7",
            "F",
            "7",
            "3"
          ],
          [
            "8",
            "I",
            "8",
            "4"
          ],
          [
            "9",
            "C",
            "9",
            "2"
          ]
        ]
      }
    ],
    "rubric": [],
    "explain": "位置中序为 D,G,B,E,A,H,F,I,C，应按该顺序放递增关键字。 各位置填值：A=5；B=3；C=9；D=1；E=4；F=7；G=2；H=6；I=8。 层数和=26；等概率成功ASL=26/9。同一固定形状下，互异键的具体大小不改变这组层数。",
    "fields": [
      {
        "label": "按 A,B,C,D,E,F,G,H,I 顺序填各位置的键值",
        "answer": "5,3,9,1,4,7,2,6,8",
        "points": 6,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "等概率成功 ASL",
        "answer": "26/9",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "BST-shape-2",
    "chapter": 5,
    "mode": "review",
    "family": "R5-fixed-shape",
    "variant": 2,
    "topic": "r5-7",
    "type": "fields",
    "points": 8,
    "difficulty": "考试标准",
    "title": "保持下方树形不变，把互异关键字 [2, 4, 6, 8, 10, 12, 14] 各填一次，使它成为BST。按位置标签顺序 A,B,C,D,E,F,G 填出键值序列，再求等概率成功ASL。根比较计1次。",
    "given": {
      "kind": "tree",
      "caption": "给定树形：字母是位置标签，不是待填关键字",
      "nodes": [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G"
      ],
      "points": [
        [
          300.0,
          35
        ],
        [
          151.42857142857144,
          125
        ],
        [
          448.57142857142856,
          125
        ],
        [
          77.14285714285714,
          215
        ],
        [
          225.71428571428572,
          215
        ],
        [
          374.2857142857143,
          215
        ],
        [
          522.8571428571429,
          215
        ]
      ],
      "links": [
        [
          "A",
          "B",
          "左"
        ],
        [
          "A",
          "C",
          "右"
        ],
        [
          "B",
          "D",
          "左"
        ],
        [
          "B",
          "E",
          "右"
        ],
        [
          "C",
          "F",
          "左"
        ],
        [
          "C",
          "G",
          "右"
        ]
      ],
      "rows": [
        [
          "A",
          "B",
          "C"
        ],
        [
          "B",
          "D",
          "E"
        ],
        [
          "C",
          "F",
          "G"
        ],
        [
          "D",
          "∅",
          "∅"
        ],
        [
          "E",
          "∅",
          "∅"
        ],
        [
          "F",
          "∅",
          "∅"
        ],
        [
          "G",
          "∅",
          "∅"
        ]
      ],
      "height": 250
    },
    "pages": "48–53",
    "sourcePages": [
      8
    ],
    "origin": "同类考法新题",
    "hint": "BST中序必须递增；先写位置的中序，再把排好序的关键字依次放进去。",
    "support": {
      "ask": "给的是形状，形状不能改；这次不按输入次序插入新树。",
      "plan": [
        "先按左、根、右写出位置标签的中序，再依次赋递增键。",
        "赋值完成后按给定形状数层数，根1层，ASL取全部层数的等概率平均。"
      ],
      "format": "字母仅标位置；保持空孩子与左右方向。数值序列用逗号分隔；ASL可填分数。"
    },
    "solution": [
      "位置中序为 D,B,E,A,F,C,G，应按该顺序放递增关键字。",
      "各位置填值：A=8；B=4；C=12；D=2；E=6；F=10；G=14。",
      "层数和=17；等概率成功ASL=17/7。同一固定形状下，互异键的具体大小不改变这组层数。"
    ],
    "worked": [
      {
        "caption": "先确定中序位置，再对应递增键",
        "heads": [
          "中序次序",
          "位置标签",
          "填入键",
          "层数/比较次数"
        ],
        "rows": [
          [
            "1",
            "D",
            "2",
            "3"
          ],
          [
            "2",
            "B",
            "4",
            "2"
          ],
          [
            "3",
            "E",
            "6",
            "3"
          ],
          [
            "4",
            "A",
            "8",
            "1"
          ],
          [
            "5",
            "F",
            "10",
            "3"
          ],
          [
            "6",
            "C",
            "12",
            "2"
          ],
          [
            "7",
            "G",
            "14",
            "3"
          ]
        ]
      }
    ],
    "rubric": [],
    "explain": "位置中序为 D,B,E,A,F,C,G，应按该顺序放递增关键字。 各位置填值：A=8；B=4；C=12；D=2；E=6；F=10；G=14。 层数和=17；等概率成功ASL=17/7。同一固定形状下，互异键的具体大小不改变这组层数。",
    "fields": [
      {
        "label": "按 A,B,C,D,E,F,G 顺序填各位置的键值",
        "answer": "8,4,12,2,6,10,14",
        "points": 6,
        "kind": "sequence",
        "aliases": []
      },
      {
        "label": "等概率成功 ASL",
        "answer": "17/7",
        "points": 2,
        "kind": "number",
        "aliases": []
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "standard"
  },
  {
    "id": "BST-shape-paper",
    "chapter": 5,
    "mode": "review",
    "family": "R5-fixed-shape",
    "variant": 3,
    "topic": "r5-7",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "title": "保持下方树形不变，把互异关键字 [1, 2, 3, 4, 5, 6, 7, 8, 9] 各填一次，使它成为BST。在纸上填树，并写出每个位置的值及等概率成功ASL。根比较计1次。",
    "given": {
      "kind": "tree",
      "caption": "给定树形：字母是位置标签，不是待填关键字",
      "nodes": [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I"
      ],
      "points": [
        [
          300.0,
          35
        ],
        [
          184.44444444444446,
          125
        ],
        [
          531.1111111111111,
          125
        ],
        [
          68.88888888888889,
          215
        ],
        [
          242.22222222222223,
          215
        ],
        [
          415.55555555555554,
          215
        ],
        [
          126.66666666666667,
          305
        ],
        [
          357.77777777777777,
          305
        ],
        [
          473.3333333333333,
          305
        ]
      ],
      "links": [
        [
          "A",
          "B",
          "左"
        ],
        [
          "A",
          "C",
          "右"
        ],
        [
          "B",
          "D",
          "左"
        ],
        [
          "B",
          "E",
          "右"
        ],
        [
          "C",
          "F",
          "左"
        ],
        [
          "D",
          "G",
          "右"
        ],
        [
          "F",
          "H",
          "左"
        ],
        [
          "F",
          "I",
          "右"
        ]
      ],
      "rows": [
        [
          "A",
          "B",
          "C"
        ],
        [
          "B",
          "D",
          "E"
        ],
        [
          "C",
          "F",
          "∅"
        ],
        [
          "D",
          "∅",
          "G"
        ],
        [
          "E",
          "∅",
          "∅"
        ],
        [
          "F",
          "H",
          "I"
        ],
        [
          "G",
          "∅",
          "∅"
        ],
        [
          "H",
          "∅",
          "∅"
        ],
        [
          "I",
          "∅",
          "∅"
        ]
      ],
      "height": 340
    },
    "pages": "48–53",
    "sourcePages": [
      8
    ],
    "origin": "原卷树形整理并加位置标签",
    "hint": "BST中序必须递增；先写位置的中序，再把排好序的关键字依次放进去。",
    "support": {
      "ask": "给的是形状，形状不能改；这次不按输入次序插入新树。",
      "plan": [
        "先按左、根、右写出位置标签的中序，再依次赋递增键。",
        "赋值完成后按给定形状数层数，根1层，ASL取全部层数的等概率平均。"
      ],
      "format": "字母仅标位置；保持空孩子与左右方向。数值序列用逗号分隔；ASL可填分数。"
    },
    "solution": [
      "位置中序为 D,G,B,E,A,H,F,I,C，应按该顺序放递增关键字。",
      "各位置填值：A=5；B=3；C=9；D=1；E=4；F=7；G=2；H=6；I=8。",
      "层数和=26；等概率成功ASL=26/9。同一固定形状下，互异键的具体大小不改变这组层数。"
    ],
    "worked": [
      {
        "caption": "先确定中序位置，再对应递增键",
        "heads": [
          "中序次序",
          "位置标签",
          "填入键",
          "层数/比较次数"
        ],
        "rows": [
          [
            "1",
            "D",
            "1",
            "3"
          ],
          [
            "2",
            "G",
            "2",
            "4"
          ],
          [
            "3",
            "B",
            "3",
            "2"
          ],
          [
            "4",
            "E",
            "4",
            "3"
          ],
          [
            "5",
            "A",
            "5",
            "1"
          ],
          [
            "6",
            "H",
            "6",
            "4"
          ],
          [
            "7",
            "F",
            "7",
            "3"
          ],
          [
            "8",
            "I",
            "8",
            "4"
          ],
          [
            "9",
            "C",
            "9",
            "2"
          ]
        ]
      }
    ],
    "rubric": [
      {
        "label": "全部位置赋值正确，BST中序递增且给定形状不变",
        "points": 6
      },
      {
        "label": "根计1次，成功ASL=26/9，分母为9",
        "points": 2
      }
    ],
    "explain": "位置中序为 D,G,B,E,A,H,F,I,C，应按该顺序放递增关键字。 各位置填值：A=5；B=3；C=9；D=1；E=4；F=7；G=2；H=6；I=8。 层数和=26；等概率成功ASL=26/9。同一固定形状下，互异键的具体大小不改变这组层数。",
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  },
  {
    "id": "E14-pointer-forest",
    "chapter": 5,
    "mode": "review",
    "family": "E14-pointer-forest",
    "variant": 1,
    "topic": "r5-4",
    "type": "written",
    "points": 8,
    "difficulty": "综合拔高",
    "pages": "18、30–35",
    "sourcePages": [
      10
    ],
    "origin": "原题指针表整理 · PDF第10页下题",
    "title": "根据下方二叉链表物理指针表还原二叉树，再把它按左孩子右兄弟规则转换为一般树/森林。T=6 为根指针，0 表示空；先画二叉树（4分），再画森林或逐项列出根和孩子（4分）。",
    "given": {
      "kind": "table",
      "caption": "原卷指针表转成逐行形式：编号不是Data，T=6",
      "heads": [
        "物理编号",
        "Data",
        "Lchild编号",
        "Rchild编号"
      ],
      "rows": [
        [
          1,
          "F",
          10,
          0
        ],
        [
          2,
          "H",
          0,
          3
        ],
        [
          3,
          "I",
          0,
          0
        ],
        [
          4,
          "C",
          0,
          8
        ],
        [
          5,
          "B",
          0,
          4
        ],
        [
          6,
          "A",
          5,
          7
        ],
        [
          7,
          "E",
          1,
          9
        ],
        [
          8,
          "D",
          0,
          0
        ],
        [
          9,
          "G",
          2,
          0
        ],
        [
          10,
          "J",
          0,
          0
        ]
      ]
    },
    "hint": "从编号6读到Data A，再沿孩子域找对应编号的行。画完二叉树才改变左右域的解释。",
    "support": {
      "ask": "分两步：按物理编号连出二叉树；再把左、右指针解释为第一孩子、下一兄弟。",
      "plan": [
        "先建立编号到Data与两个孩子域的对应，从T=6逐链接还原。",
        "根的右链列森林根；每个结点从左孩子开始，沿右链列全部孩子。"
      ],
      "format": "可先在纸上画图；输入中保留根、全部左右关系和森林孩子清单后再自评。"
    },
    "solution": [
      "T=6 指向数据 A；物理编号不是数据值，也不是完全树位置号。",
      "二叉树根 A，A 左 B 右 E；B 右 C，C 右 D；E 左 F 右 G；F 左 J；G 左 H，H 右 I。",
      "森林根沿二叉根的右链得到 A、E、G。",
      "还原后：A的孩子B、C、D；E的孩子F，F的孩子J；G的孩子H、I；其余结点无孩子。"
    ],
    "explain": "T=6 指向数据 A；物理编号不是数据值，也不是完全树位置号。 二叉树根 A，A 左 B 右 E；B 右 C，C 右 D；E 左 F 右 G；F 左 J；G 左 H，H 右 I。 森林根沿二叉根的右链得到 A、E、G。 还原后：A的孩子B、C、D；E的孩子F，F的孩子J；G的孩子H、I；其余结点无孩子。",
    "worked": [
      {
        "caption": "第一步：把编号链接译成Data之间的二叉左右关系",
        "heads": [
          "Data",
          "二叉左孩子",
          "二叉右孩子"
        ],
        "rows": [
          [
            "A",
            "B",
            "E"
          ],
          [
            "B",
            "∅",
            "C"
          ],
          [
            "C",
            "∅",
            "D"
          ],
          [
            "D",
            "∅",
            "∅"
          ],
          [
            "E",
            "F",
            "G"
          ],
          [
            "F",
            "J",
            "∅"
          ],
          [
            "J",
            "∅",
            "∅"
          ],
          [
            "G",
            "H",
            "∅"
          ],
          [
            "H",
            "∅",
            "I"
          ],
          [
            "I",
            "∅",
            "∅"
          ]
        ]
      },
      {
        "caption": "第二步：森林根为A、E、G；逐点还原原树孩子",
        "heads": [
          "原树结点",
          "原树全部孩子"
        ],
        "rows": [
          [
            "A",
            "B、C、D"
          ],
          [
            "B",
            "无"
          ],
          [
            "C",
            "无"
          ],
          [
            "D",
            "无"
          ],
          [
            "E",
            "F"
          ],
          [
            "F",
            "J"
          ],
          [
            "J",
            "无"
          ],
          [
            "G",
            "H、I"
          ],
          [
            "H",
            "无"
          ],
          [
            "I",
            "无"
          ]
        ]
      }
    ],
    "rubric": [
      {
        "label": "识别T=6的数据A为根，不把编号当键值",
        "points": 1
      },
      {
        "label": "二叉左右链接与指针表全部一致，结点无遗漏",
        "points": 3
      },
      {
        "label": "森林根为A、E、G，根链正确",
        "points": 1
      },
      {
        "label": "A的孩子为B、C、D；E的孩子F且F的孩子J；G的孩子H、I；不把兄弟当孩子",
        "points": 3
      }
    ],
    "priority": "core",
    "skill": "process",
    "tier": "challenge"
  }
];
