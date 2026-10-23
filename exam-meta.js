window.EXAM_META = {
  "source": {
    "file": "历年卷/数据结构历年卷.pdf",
    "pages": 52,
    "groups": [
      {
        "pages": "1–10",
        "label": "2014–2015 学年秋季正式卷"
      },
      {
        "pages": "11–18",
        "label": "未标年份样卷"
      },
      {
        "pages": "19–52",
        "label": "手写整理题与参考解答，包含重复题/变式"
      }
    ],
    "notice": "不是 52 份独立试卷；手写解答不视为官方答案。训练权重按可核对分值、题型复杂度和跨资料重复专题制定，不是下一次考试分值预测。"
  },
  "blueprint": {
    "label": "按 2014–2015 卷题型分值编排",
    "fill": 10,
    "choice": 10,
    "code": 8,
    "frequency": 8,
    "comprehensive": 64,
    "total": 100,
    "recommendedMinutes": 120
  },
  "chapters": [
    {
      "id": 1,
      "title": "绪论",
      "priority": "必会计算",
      "learnCount": 11,
      "reviewCount": 34,
      "families": 11,
      "sourcePages": [
        1,
        3,
        14,
        21,
        31
      ],
      "reason": "正式卷含 8 分精确频度，基础概念另见客观题。",
      "conceptCount": 11,
      "coreCount": 33,
      "extensionCount": 1,
      "learnLevels": {
        "foundation": 6,
        "transfer": 4,
        "challenge": 1
      },
      "reviewLevels": {
        "standard": 12,
        "challenge": 11,
        "reason": 7,
        "recall": 4
      }
    },
    {
      "id": 2,
      "title": "线性表",
      "priority": "算法重点",
      "learnCount": 15,
      "reviewCount": 38,
      "families": 14,
      "sourcePages": [
        1,
        3,
        14,
        25,
        29,
        30
      ],
      "reason": "正式卷单列 8 分有序循环链表插入，样卷与手写材料还有逆置、删值、双向链表。",
      "conceptCount": 11,
      "coreCount": 38,
      "extensionCount": 0,
      "learnLevels": {
        "transfer": 4,
        "foundation": 10,
        "challenge": 1
      },
      "reviewLevels": {
        "challenge": 14,
        "standard": 13,
        "reason": 7,
        "recall": 4
      }
    },
    {
      "id": 3,
      "title": "栈和队列",
      "priority": "基础稳分",
      "learnCount": 13,
      "reviewCount": 38,
      "families": 12,
      "sourcePages": [
        1,
        2,
        12,
        19,
        23,
        26
      ],
      "reason": "栈合法输出/最小容量、后缀表达式、队列指针多次出现，以客观稳分为主。",
      "conceptCount": 17,
      "coreCount": 38,
      "extensionCount": 0,
      "learnLevels": {
        "foundation": 7,
        "transfer": 5,
        "challenge": 1
      },
      "reviewLevels": {
        "reason": 12,
        "challenge": 4,
        "standard": 17,
        "recall": 5
      }
    },
    {
      "id": 4,
      "title": "数组",
      "priority": "公式稳分",
      "learnCount": 11,
      "reviewCount": 34,
      "families": 12,
      "sourcePages": [
        11,
        22,
        24,
        25,
        45,
        46
      ],
      "reason": "地址与压缩公式多次出现，手写题含稀疏矩阵三元组及行链表转换。",
      "conceptCount": 8,
      "coreCount": 34,
      "extensionCount": 0,
      "learnLevels": {
        "foundation": 8,
        "transfer": 2,
        "challenge": 1
      },
      "reviewLevels": {
        "standard": 19,
        "challenge": 7,
        "reason": 4,
        "recall": 4
      }
    },
    {
      "id": 5,
      "title": "树和二叉树",
      "priority": "综合核心",
      "learnCount": 21,
      "reviewCount": 62,
      "families": 22,
      "sourcePages": [
        1,
        4,
        8,
        9,
        10,
        13,
        17,
        21,
        24,
        28,
        34,
        35,
        36,
        43,
        44
      ],
      "reason": "正式卷综合题含树重建、哈夫曼、二叉链表转树/森林，过程与图形是核心。",
      "conceptCount": 12,
      "coreCount": 60,
      "extensionCount": 2,
      "learnLevels": {
        "foundation": 16,
        "transfer": 4,
        "challenge": 1
      },
      "reviewLevels": {
        "standard": 39,
        "challenge": 11,
        "reason": 6,
        "recall": 6
      }
    },
    {
      "id": 6,
      "title": "图",
      "priority": "综合核心",
      "learnCount": 21,
      "reviewCount": 67,
      "families": 21,
      "sourcePages": [
        2,
        5,
        7,
        12,
        16,
        18,
        20,
        27,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52
      ],
      "reason": "正式卷含遍历与 AOE，后续材料含拓扑、Dijkstra、ve/vl 全表；综合步骤多。",
      "conceptCount": 23,
      "coreCount": 67,
      "extensionCount": 0,
      "learnLevels": {
        "transfer": 4,
        "foundation": 16,
        "challenge": 1
      },
      "reviewLevels": {
        "challenge": 10,
        "standard": 34,
        "reason": 18,
        "recall": 5
      }
    },
    {
      "id": 7,
      "title": "查找",
      "priority": "综合重点",
      "learnCount": 15,
      "reviewCount": 54,
      "families": 18,
      "sourcePages": [
        1,
        8,
        10,
        11,
        13,
        22,
        23,
        33,
        37,
        38,
        40,
        41,
        42
      ],
      "reason": "正式卷含哈希构造/ASL 与 BST 赋值/ASL，后续材料反复训练折半判定树与探测。",
      "conceptCount": 14,
      "coreCount": 50,
      "extensionCount": 4,
      "learnLevels": {
        "transfer": 6,
        "foundation": 8,
        "challenge": 1
      },
      "reviewLevels": {
        "standard": 30,
        "challenge": 10,
        "reason": 8,
        "recall": 6
      }
    },
    {
      "id": 8,
      "title": "排序",
      "priority": "过程重点",
      "learnCount": 13,
      "reviewCount": 44,
      "families": 15,
      "sourcePages": [
        6,
        12,
        15,
        19,
        23,
        32,
        39,
        40
      ],
      "reason": "正式卷要求快排与希尔逐趟过程，样卷含堆排序，手写题含冒泡比较/交换计数。",
      "conceptCount": 19,
      "coreCount": 44,
      "extensionCount": 0,
      "learnLevels": {
        "foundation": 7,
        "transfer": 5,
        "challenge": 1
      },
      "reviewLevels": {
        "standard": 18,
        "challenge": 7,
        "reason": 15,
        "recall": 4
      }
    }
  ],
  "totals": {
    "learn": 120,
    "review": 371,
    "families": 125,
    "recall": 68,
    "core": 364,
    "extension": 7,
    "coreFamilies": 124
  }
};
