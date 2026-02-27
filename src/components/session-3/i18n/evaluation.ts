export const evaluationText = {
  en: {
    // Section header
    title: "Evaluation & Iteration",
    subtitle: "Testing and Refining Your Prompts",
    description:
      "Great prompts rarely emerge on the first try. Learning to systematically evaluate outputs, identify failure modes, and iterate with precision is what separates casual prompting from reliable, production-grade results.",

    // Subsection A - Common Failure Modes
    failureModesLabel: "Common Failure Modes",
    failureModes: [
      {
        title: "Hallucination",
        description:
          "The AI fabricates facts, cites non-existent sources, or invents details that sound plausible but are false.",
        fix: "Fix: Ask the model to cite sources and verify claims before presenting them.",
      },
      {
        title: "Format Drift",
        description:
          "Output gradually deviates from the requested format, especially in longer responses or multi-turn conversations.",
        fix: "Fix: Restate format requirements explicitly and provide a structural template.",
      },
      {
        title: "Wrong Scope",
        description:
          "The answer is too broad, covering irrelevant territory, or too narrow, missing key aspects of the task.",
        fix: "Fix: Define scope boundaries clearly and specify what to include and exclude.",
      },
      {
        title: "Surface-Level Answers",
        description:
          "Responses lack depth, give generic advice, and fail to engage with the specifics of your question.",
        fix: "Fix: Request specific reasoning, examples, and trade-off analysis.",
      },
    ],

    // Subsection B - Iterative Refinement
    refinementLabel: "Iterative Refinement",
    refinementSteps: [
      {
        num: "01",
        title: "Run the Prompt",
        description: "Execute the prompt and capture the full output for review.",
      },
      {
        num: "02",
        title: "Compare Against Criteria",
        description:
          "Check the output against your success criteria - accuracy, format, completeness, tone.",
      },
      {
        num: "03",
        title: "Identify the Gap",
        description:
          "Pinpoint the specific issue. Is it format? Accuracy? Depth? Tone? Name it precisely.",
      },
      {
        num: "04",
        title: "Adjust One Variable",
        description:
          "Change a single element in your prompt to address the identified gap.",
      },
      {
        num: "05",
        title: "Re-run and Compare",
        description:
          "Execute the updated prompt and compare results against the previous output.",
      },
    ],
    refinementCallout:
      "Change one thing at a time. If you change three variables simultaneously, you cannot know which one fixed the issue.",

    // Subsection C - Building Rubrics
    rubricsLabel: "Building Rubrics",
    rubricsDescription:
      "Before running a prompt, define what success looks like. Use this checklist to evaluate every output systematically.",
    rubricItems: [
      {
        label: "Accuracy",
        description: "Are all facts verifiable?",
      },
      {
        label: "Format",
        description: "Does output match the requested structure?",
      },
      {
        label: "Completeness",
        description: "Are all parts of the task addressed?",
      },
      {
        label: "Tone",
        description: "Does it match the specified voice and audience?",
      },
      {
        label: "Actionability",
        description: "Can the user act on this output directly?",
      },
    ],
  },

  zh: {
    // Section header
    title: "评估与迭代",
    subtitle: "Testing and Refining Your Prompts",
    description:
      "优秀的 prompt 很少一次就能写好。学会系统性地评估输出、识别失败模式、精准迭代，是从随意提问到可靠、生产级结果的关键分水岭。",

    // Subsection A - Common Failure Modes
    failureModesLabel: "常见失败模式",
    failureModes: [
      {
        title: "Hallucination (幻觉)",
        description:
          "AI 捏造事实、引用不存在的来源，或编造听起来合理但实际虚假的细节。",
        fix: "修复: 要求模型在呈现信息前引用来源并验证其准确性。",
      },
      {
        title: "Format Drift (格式漂移)",
        description:
          "输出逐渐偏离要求的格式，在较长的回复或多轮对话中尤为明显。",
        fix: "修复: 明确重申格式要求，并提供结构化模板。",
      },
      {
        title: "Wrong Scope (范围偏差)",
        description:
          "回答范围太广，涵盖了无关内容；或太窄，遗漏了任务的关键部分。",
        fix: "修复: 清晰定义范围边界，明确说明需要包含和排除的内容。",
      },
      {
        title: "Surface-Level Answers (浅层回答)",
        description:
          "回复缺乏深度，给出泛泛的建议，未能针对你问题的具体细节进行分析。",
        fix: "修复: 要求具体的推理过程、实例和利弊权衡分析。",
      },
    ],

    // Subsection B - Iterative Refinement
    refinementLabel: "迭代优化",
    refinementSteps: [
      {
        num: "01",
        title: "执行 Prompt",
        description: "运行 prompt 并完整记录输出结果以供审查。",
      },
      {
        num: "02",
        title: "对照标准检查",
        description:
          "将输出与你的成功标准进行比对 - 准确性、格式、完整性、语气。",
      },
      {
        num: "03",
        title: "定位具体差距",
        description:
          "精确定位问题所在。是格式? 准确性? 深度? 语气? 准确命名它。",
      },
      {
        num: "04",
        title: "调整单一变量",
        description: "只修改 prompt 中的一个元素来解决已识别的问题。",
      },
      {
        num: "05",
        title: "重新执行并对比",
        description: "运行更新后的 prompt，将结果与上一次输出进行对比。",
      },
    ],
    refinementCallout:
      "每次只改变一个变量。如果同时修改三个变量，你无法知道是哪一个解决了问题。",

    // Subsection C - Building Rubrics
    rubricsLabel: "构建评估标准",
    rubricsDescription:
      "在运行 prompt 之前，先定义成功的标准。使用以下清单系统性地评估每一次输出。",
    rubricItems: [
      {
        label: "准确性",
        description: "所有事实是否可验证?",
      },
      {
        label: "格式",
        description: "输出是否符合要求的结构?",
      },
      {
        label: "完整性",
        description: "任务的所有部分是否都被涵盖?",
      },
      {
        label: "语气",
        description: "是否符合指定的表达风格和目标受众?",
      },
      {
        label: "可操作性",
        description: "用户是否可以直接依据此输出采取行动?",
      },
    ],
  },
} as const;
