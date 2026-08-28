import { CurriculumModule } from '../types';

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 'tab-1',
    unitNumber: 1,
    title: 'AI Safety',
    tagline: 'Navigating privacy, fact-checking, deepfakes, and responsible generative AI.',
    ageGroup: '11-14',
    duration: '3 Lessons / 90 Minutes',
    difficulty: 'Beginner',
    summary: 'Equip learners with the knowledge and skills to responsibly and safely navigate the challenges associated with AI, from data privacy, misinformation, and fact-checking, to deepfakes and generative AI.',
    lessons: [
      {
        lessonNumber: 1,
        title: 'Your data and AI',
        description: 'Discover the types of personal data shared with AI applications and ways to protect privacy when using them.'
      },
      {
        lessonNumber: 2,
        title: 'Media literacy in the age of AI',
        description: 'Explore how the use of AI tools can support the spread of misinformation and develop strategies to distinguish fact from false information.'
      },
      {
        lessonNumber: 3,
        title: 'Using AI tools responsibly',
        description: 'Reflect on learners’ responsibilities when using generative AI tools and the expectations to place on the developers of these tools.'
      }
    ],
    learningOutcomes: [
      'Discover types of personal data shared with AI apps and protect digital privacy',
      'Examine how AI tools can amplify misinformation and false claims',
      'Develop critical strategies to distinguish fact from AI-generated misinformation',
      'Reflect on user responsibilities and developer expectations when using generative AI'
    ],
    classroomActivity: 'Unplugged & Interactive "AI Fact or Fake?" Lab: Students analyze synthetic media examples, audit data permissions, and create an actionable AI Safety & Ethics checklist.',
    resources: [
      {
        title: 'Module 1 Master Slides (Lessons 1–3 PPTX / PDF)',
        type: 'Slides'
      },
      {
        title: 'Student Media Literacy & Privacy Worksheet',
        type: 'Worksheet'
      },
      {
        title: 'Educator AI Safety Facilitation Guide',
        type: 'Teacher Guide'
      }
    ],
    keyTerms: [
      {
        term: 'Data Privacy',
        meaning: 'Methods and practices to protect personal information shared with AI systems.'
      },
      {
        term: 'Misinformation',
        meaning: 'Inaccurate or deceptive information produced or amplified by synthetic tools.'
      },
      {
        term: 'Deepfake',
        meaning: 'Synthetic audio, image, or video generated using AI to realistically simulate real people.'
      },
      {
        term: 'Responsible AI',
        meaning: 'Using and building AI technologies with accountability, transparency, and human safety.'
      }
    ]
  },
  {
    id: 'tab-2',
    unitNumber: 2,
    title: 'Foundations of AI',
    tagline: 'Lesson plans, presentations, simulations, and hands-on projects for ages 11–14.',
    ageGroup: '11-14',
    duration: '6 Lessons / 180 Minutes',
    difficulty: 'Beginner',
    summary: "Explore our collection of lesson plans, presentations, simulations, worksheets and hands-on projects to help introduce AI to KS3 students (aged 11–14). Whether you're a seasoned teacher or just getting started, you'll find something useful here.",
    lessons: [
      {
        lessonNumber: 1,
        title: 'What is AI?',
        description: 'Explore how AI is used in the world today and consider some of the benefits and drawbacks of AI systems.'
      },
      {
        lessonNumber: 2,
        title: 'How computers learn from data',
        description: 'Learn about the role of data-driven models in AI systems and machine learning.'
      },
      {
        lessonNumber: 3,
        title: 'Bias in, bias out',
        description: 'Create a machine learning model to classify images and explore how a limited data set can lead to bias.'
      },
      {
        lessonNumber: 4,
        title: 'Decision trees',
        description: 'Discover how and why decision trees are used in machine learning.'
      },
      {
        lessonNumber: 5,
        title: 'How to solve problems with machine learning models',
        description: 'Train and test a machine learning model to solve a real-world problem.'
      },
      {
        lessonNumber: 6,
        title: 'Model cards and careers',
        description: 'Evaluate a project by creating a model card and learn about AI-related careers.'
      }
    ],
    learningOutcomes: [
      'Examine real-world AI applications, benefits, and societal drawbacks',
      'Understand how data-driven models and machine learning function',
      'Train vision models and diagnose dataset bias and fairness issues',
      'Construct decision trees for structured classification problems',
      'Train and validate a machine learning model to solve authentic challenges',
      'Author standard Model Cards and discover modern AI career pathways'
    ],
    classroomActivity: 'Hands-on Vision Classifier & Model Card Lab: Collect dataset samples, train an image classification model, audit for bias, and create a production-style Model Card.',
    resources: [
      {
        title: 'Module 2 Master Slide Decks (Lessons 1–6)',
        type: 'Slides'
      },
      {
        title: 'Classroom Activity Worksheets & Decision Tree Templates',
        type: 'Worksheet'
      },
      {
        title: 'Model Card Template & Educator Guide',
        type: 'Teacher Guide'
      }
    ],
    keyTerms: [
      {
        term: 'Machine Learning Model',
        meaning: 'A mathematical representation trained on data to recognize patterns or make predictions.'
      },
      {
        term: 'Algorithmic Bias',
        meaning: 'Systematic errors or unfair outcomes resulting from flawed or unrepresentative training data.'
      },
      {
        term: 'Decision Tree',
        meaning: 'A structured branching flowchart used to categorize data and make transparent decisions.'
      },
      {
        term: 'Model Card',
        meaning: 'A short documentation file providing benchmarked evaluation and intended use cases for an AI model.'
      }
    ]
  },
  {
    id: 'tab-3',
    unitNumber: 3,
    title: 'Large language models (LLMs)',
    tagline: 'Understanding generative text, prompt craft, transformer models, and capabilities.',
    ageGroup: '11-18',
    duration: '4 Lessons / 120 Minutes',
    difficulty: 'Intermediate',
    summary: 'Discover how Large Language Models (LLMs) and generative artificial intelligence understand, process, and generate human-like text, code, and multimodal content. Explore transformer architectures, token prediction, prompt engineering, hallucinations, and safety boundaries.',
    lessons: [
      {
        lessonNumber: 1,
        title: 'How LLMs generate text',
        description: 'Unpack next-token prediction, embeddings, context windows, and foundational language representations.'
      },
      {
        lessonNumber: 2,
        title: 'Prompt engineering and structuring',
        description: 'Learn techniques for zero-shot, few-shot, and role-based prompting to achieve reliable and structured outputs.'
      },
      {
        lessonNumber: 3,
        title: 'Evaluating truth, hallucination, and bias',
        description: 'Explore why and when LLMs generate factual inaccuracies, how to verify sources, and how to identify model biases.'
      },
      {
        lessonNumber: 4,
        title: 'Building responsible generative AI tools',
        description: 'Design assistive text tools, summarize complex articles, and understand copyright and developer safety principles.'
      }
    ],
    learningOutcomes: [
      'Explain how next-token prediction and context windows operate in LLMs',
      'Craft structured, multi-shot natural language prompts with constraints and personas',
      'Identify model hallucinations and practice source verification routines',
      'Evaluate ethical considerations, intellectual property, and safety guardrails'
    ],
    classroomActivity: 'Prompt Engineering Challenge & Fact-Check Audit: Students design specialized prompts to summarize educational texts and systematically test for hallucinations and edge cases.',
    resources: [
      {
        title: 'Module 3 LLMs Slide Decks & Presentations',
        type: 'Slides'
      },
      {
        title: 'Prompt Engineering Student Playbook',
        type: 'Worksheet'
      },
      {
        title: 'Educator Generative AI Classroom Guide',
        type: 'Teacher Guide'
      }
    ],
    keyTerms: [
      {
        term: 'Large Language Model (LLM)',
        meaning: 'A deep learning model trained on massive text datasets to understand and generate natural language.'
      },
      {
        term: 'Token Prediction',
        meaning: 'The process of calculating statistical probabilities to select the most likely next word or subword.'
      },
      {
        term: 'Prompt Engineering',
        meaning: 'The practice of structuring natural language instructions to guide AI models toward accurate outputs.'
      },
      {
        term: 'Hallucination',
        meaning: 'When an AI system produces plausible-sounding responses that are factually incorrect or unfounded.'
      }
    ]
  },
  {
    id: 'tab-4',
    unitNumber: 4,
    title: 'AI and Biology',
    tagline: 'Computational biology, AlphaFold protein structures, and environmental biodiversity.',
    ageGroup: '11-18',
    duration: '4 Lessons / 120 Minutes',
    difficulty: 'Intermediate',
    summary: 'Explore how artificial intelligence and machine learning are revolutionizing biological sciences and healthcare, from 3D protein structure prediction (such as DeepMind’s AlphaFold) to biodiversity monitoring, crop disease diagnostics, and environmental conservation in Bangladesh.',
    lessons: [
      {
        lessonNumber: 1,
        title: 'Introduction to AI in life sciences',
        description: 'Discover how computational models analyze complex biological sequences, DNA patterns, and molecular structures.'
      },
      {
        lessonNumber: 2,
        title: 'Protein folding and AlphaFold',
        description: 'Learn how predicting 3D protein structures from amino acid sequences accelerates biological discovery and medicine.'
      },
      {
        lessonNumber: 3,
        title: 'Biodiversity and ecosystem monitoring',
        description: 'Apply computer vision and audio classification to monitor wildlife populations, mangrove health, and river ecosystems.'
      },
      {
        lessonNumber: 4,
        title: 'Precision agriculture and plant pathology',
        description: 'Train computer vision models to identify crop diseases, pest infestations, and soil fertility variations in local farming.'
      }
    ],
    learningOutcomes: [
      'Understand how AI analyzes complex biological data and amino acid sequences',
      'Explain the significance of 3D protein structure prediction (AlphaFold) for science and medicine',
      'Explore computer vision applications for wildlife tracking and ecosystem protection',
      'Apply machine learning models to detect agricultural plant diseases and support farmers'
    ],
    classroomActivity: 'AlphaFold 3D Molecular Viewer & Crop Disease Classifier Lab: Students explore 3D protein structures online and test a vision model for identifying diseased crop leaves.',
    resources: [
      {
        title: 'Module 4 AI & Biology Presentations',
        type: 'Slides'
      },
      {
        title: 'Protein Structure & Biodiversity Activity Kit',
        type: 'Worksheet'
      },
      {
        title: 'Interactive Python / Colab Genomics & Vision Lab',
        type: 'Colab Notebook'
      }
    ],
    keyTerms: [
      {
        term: 'AlphaFold',
        meaning: 'An AI system developed by DeepMind that predicts a protein’s 3D structure from its amino acid sequence.'
      },
      {
        term: 'Protein Folding',
        meaning: 'The physical process by which a protein chain assumes its functional three-dimensional shape.'
      },
      {
        term: 'Computational Biology',
        meaning: 'The use of data analysis, mathematical modeling, and AI simulations to study biological systems.'
      },
      {
        term: 'Plant Pathology AI',
        meaning: 'Computer vision systems trained to diagnose botanical infections, fungus, and pest damage from photographs.'
      }
    ]
  },
  {
    id: 'tab-5',
    unitNumber: 5,
    title: 'Labs',
    tagline: 'Interactive sandboxes, simulations, live vision classifiers, and Jupyter Colab notebooks.',
    ageGroup: 'All Ages',
    duration: 'Self-Paced / Hands-On',
    difficulty: 'Beginner',
    summary: 'Interactive hands-on AI laboratory sandboxes, real-time machine learning simulators, decision tree visualizers, Google Colab notebooks, and classroom unplugged experiments designed for students and educators to build, train, evaluate, and test AI models in real time.',
    lessons: [
      {
        lessonNumber: 1,
        title: 'Lab 1: Vision Classifier & ML Training Simulator',
        description: 'Collect training image samples, train a live browser-based classifier, and test with new items to observe accuracy.'
      },
      {
        lessonNumber: 2,
        title: 'Lab 2: Dataset Bias & Algorithmic Fairness Auditor',
        description: 'Adjust demographic balance in training data and inspect real-time shifts in false positive and accuracy rates.'
      },
      {
        lessonNumber: 3,
        title: 'Lab 3: Prompt Engineering & LLM Studio',
        description: 'Experiment with zero-shot, few-shot, and role constraints to build high-precision generative prompt recipes.'
      },
      {
        lessonNumber: 4,
        title: 'Lab 4: AI Literacy & Comprehension Challenge',
        description: 'Test your understanding of core machine learning concepts, safety practices, and ethics with instant feedback.'
      }
    ],
    learningOutcomes: [
      'Train, test, and evaluate custom machine learning classifiers live in the browser',
      'Quantify and visualize algorithmic bias caused by unrepresentative datasets',
      'Master prompt crafting and debugging techniques for generative AI models',
      'Access Google Teachable Machine and cloud Jupyter notebooks for advanced experimentation'
    ],
    classroomActivity: 'Live AI Laboratory Exploration: Use the interactive sandbox tools on this site or launch Google Teachable Machine to build and test your own working AI models.',
    resources: [
      {
        title: 'Interactive Browser Sandbox (Built-in Below)',
        type: 'Colab Notebook'
      },
      {
        title: 'Google Teachable Machine Starter Project',
        type: 'Colab Notebook'
      },
      {
        title: 'Hands-on Lab Activity Worksheets',
        type: 'Worksheet'
      }
    ],
    keyTerms: [
      {
        term: 'Interactive Sandbox',
        meaning: 'An isolated environment allowing learners to experiment with AI parameters and see immediate visual feedback.'
      },
      {
        term: 'Teachable Machine',
        meaning: 'A fast, easy, web-based tool from Google that makes creating machine learning models accessible to everyone.'
      },
      {
        term: 'Jupyter / Colab Notebook',
        meaning: 'A cloud-based Python development environment that combines executable code, rich text, and data visualizations.'
      }
    ]
  }
];
