/* Generated from events.json by validate.py --write-js. Do not edit by hand. */
window.ZTG_DATA = {
 "schema_version": 1,
 "title": "Zero to GPT: A Timeline of AI",
 "updated": "2026-11-12",
 "notes": "Canonical data for site/timeline. After editing, run: python3 validate.py --write-js (regenerates data/events.js for offline use) then python3 validate.py.",
 "tracks": {
  "main": [
   {
    "id": "01-the-guessing-machine",
    "n": 1,
    "title": "The Guessing Machine",
    "blurb": "Predict the next letter or word by counting what usually comes next.",
    "has_lesson": true
   },
   {
    "id": "02-numbers-that-mean-things",
    "n": 2,
    "title": "Numbers That Mean Things",
    "blurb": "Vectors: lists of numbers that stand for things."
   },
   {
    "id": "03-tables-that-transform",
    "n": 3,
    "title": "Tables That Transform",
    "blurb": "Matrices: grids of numbers that stretch, turn and mix vectors."
   },
   {
    "id": "04-sliding-downhill",
    "n": 4,
    "title": "Sliding Downhill",
    "blurb": "Gradient descent: improve by taking small steps that reduce the error."
   },
   {
    "id": "05-the-fake-neuron",
    "n": 5,
    "title": "The Fake Neuron",
    "blurb": "Artificial neurons and the perceptron."
   },
   {
    "id": "06-blame-flows-backward",
    "n": 6,
    "title": "Blame Flows Backward",
    "blurb": "Backpropagation: figuring out which weights caused the mistake."
   },
   {
    "id": "07-the-babbling-network",
    "n": 7,
    "title": "The Babbling Network",
    "blurb": "A neural network that predicts the next word."
   },
   {
    "id": "08-words-as-places",
    "n": 8,
    "title": "Words as Places",
    "blurb": "Word embeddings: meaning as location."
   },
   {
    "id": "09-memory-problems",
    "n": 9,
    "title": "Memory Problems",
    "blurb": "Recurrent networks, LSTMs and seq2seq."
   },
   {
    "id": "10-just-look-back",
    "n": 10,
    "title": "Just Look Back",
    "blurb": "Attention and the Transformer."
   },
   {
    "id": "11-nanogpt",
    "n": 11,
    "title": "nanoGPT",
    "blurb": "Tokenizers, GPT, and why bigger got better."
   },
   {
    "id": "12-parrot-to-assistant",
    "n": 12,
    "title": "Parrot to Assistant",
    "blurb": "Teaching a text predictor to be helpful: RLHF, InstructGPT, DPO."
   },
   {
    "id": "13-nanochat",
    "n": 13,
    "title": "nanochat",
    "blurb": "Build a small ChatGPT end to end."
   },
   {
    "id": "14-what-we-know-now",
    "n": 14,
    "title": "What We Know Now",
    "blurb": "Modern tricks, reasoning models, and looking inside the black box."
   }
  ],
  "branches": [
   {
    "id": "branch-vision",
    "title": "Computer Vision",
    "icon": "👁️",
    "blurb": "Teaching machines to see."
   },
   {
    "id": "branch-reinforcement-learning",
    "title": "Reinforcement Learning",
    "icon": "🎮",
    "blurb": "Learning from rewards by trial and error."
   },
   {
    "id": "branch-memory-networks",
    "title": "Memory Networks",
    "icon": "🧲",
    "blurb": "Hopfield networks, Boltzmann machines and the 2024 Nobel Prize."
   },
   {
    "id": "branch-generative-images",
    "title": "Generative Images",
    "icon": "🎨",
    "blurb": "GANs, diffusion and machines that make pictures."
   },
   {
    "id": "branch-state-space",
    "title": "State-Space Models",
    "icon": "〰️",
    "blurb": "A different way to handle long sequences."
   },
   {
    "id": "branch-symbolic-ai",
    "title": "Symbolic AI",
    "icon": "♟️",
    "blurb": "Logic, rules and search: the other road to AI."
   },
   {
    "id": "branch-classic-ml",
    "title": "Classic Machine Learning",
    "icon": "📐",
    "blurb": "Learning from data before deep learning."
   },
   {
    "id": "branch-information-theory",
    "title": "Information Theory",
    "icon": "📡",
    "blurb": "Bits, surprise and the mathematics of messages."
   }
  ]
 },
 "eras": [
  {
   "id": "foundations",
   "label": "Math Foundations",
   "start": 1700,
   "end": 1935
  },
  {
   "id": "dawn",
   "label": "Dawn of Computing",
   "start": 1936,
   "end": 1955
  },
  {
   "id": "first-wave",
   "label": "The First AI Boom",
   "start": 1956,
   "end": 1973
  },
  {
   "id": "winters",
   "label": "Winters & Quiet Breakthroughs",
   "start": 1974,
   "end": 1993
  },
  {
   "id": "learning",
   "label": "Machines Learn from Data",
   "start": 1994,
   "end": 2011
  },
  {
   "id": "deep",
   "label": "Deep Learning Takes Off",
   "start": 2012,
   "end": 2016
  },
  {
   "id": "transformers",
   "label": "Attention & Scale",
   "start": 2017,
   "end": 2021
  },
  {
   "id": "assistants",
   "label": "Chatbots & Reasoning",
   "start": 2022,
   "end": 2026
  }
 ],
 "periods": [
  {
   "id": "first-ai-boom",
   "kind": "hype",
   "label": "First AI boom",
   "start": 1956,
   "end": 1973,
   "approximate": true,
   "note": "After the 1956 Dartmouth workshop, leading researchers predicted that machines would match human intelligence within a generation, and government money flowed in. Early programs solved puzzles and proved theorems, but they broke down on messy real-world problems."
  },
  {
   "id": "first-ai-winter",
   "kind": "winter",
   "label": "First AI winter",
   "start": 1974,
   "end": 1980,
   "approximate": true,
   "note": "Big promises went unmet. In Britain the 1973 Lighthill report led to deep cuts, and US funders became pickier too. Neural-network research had already cooled after the 1969 book Perceptrons. Historians date the winter differently; these years are approximate."
  },
  {
   "id": "expert-systems-boom",
   "kind": "hype",
   "label": "Expert-systems boom",
   "start": 1980,
   "end": 1987,
   "approximate": true,
   "note": "Companies spent heavily on 'expert systems', programs built from hand-written if-then rules gathered from human experts. Japan launched its ambitious Fifth Generation computer project in 1982, and other countries answered with programs of their own."
  },
  {
   "id": "second-ai-winter",
   "kind": "winter",
   "label": "Second AI winter",
   "start": 1987,
   "end": 1993,
   "approximate": true,
   "note": "The market for specialised AI hardware collapsed around 1987, and expert systems proved brittle and expensive to maintain. 'AI' became an unfashionable word, even as neural networks and statistical learning quietly improved. Dates are approximate."
  },
  {
   "id": "deep-learning-boom",
   "kind": "hype",
   "label": "Deep-learning boom",
   "start": 2012,
   "end": 2021,
   "approximate": true,
   "note": "After AlexNet won ImageNet in 2012, neural networks trained on GPUs took over vision, speech, translation and games. Tech companies competed to hire the small group of researchers who knew how to make them work."
  },
  {
   "id": "generative-ai-boom",
   "kind": "hype",
   "label": "Generative-AI boom",
   "start": 2022,
   "end": 2026,
   "ongoing": true,
   "approximate": true,
   "note": "ChatGPT's release in late 2022 put language models in front of the public. Investment, excitement and worry all soared, and as of this timeline's last update the boom is still going. Whether it ends in a 'winter' is an open question."
  }
 ],
 "people": {
  "Pieter Abbeel": {
   "bio": "Robotics and machine learning professor at UC Berkeley and co-author of DDPM."
  },
  "David Ackley": {
   "bio": "Computer scientist who co-wrote the 1985 Boltzmann machine learning paper as a graduate student at Carnegie Mellon."
  },
  "Sam Altman": {
   "lived": "born 1985",
   "bio": "Entrepreneur and CEO of OpenAI."
  },
  "Dario Amodei": {
   "bio": "Researcher who led research at OpenAI on GPT-2 and GPT-3 and co-founded Anthropic in 2021, where he is CEO."
  },
  "Jimmy Ba": {
   "bio": "Machine learning researcher, trained at the University of Toronto, who co-created the Adam optimizer."
  },
  "Dzmitry Bahdanau": {
   "bio": "Machine learning researcher who, as a PhD student working with Yoshua Bengio in Montreal, introduced the attention mechanism for neural machine translation."
  },
  "David Baker": {
   "lived": "born 1962",
   "bio": "American biochemist at the University of Washington who pioneered computational protein design; shared the 2024 Nobel Prize in Chemistry."
  },
  "Andrew Barto": {
   "bio": "American computer scientist, professor emeritus at the University of Massachusetts Amherst, co-founder of modern reinforcement learning, and 2024 Turing Award co-recipient."
  },
  "Thomas Bayes": {
   "lived": "c. 1701–1761",
   "bio": "English Presbyterian minister and mathematician whose essay on inverse probability, published after his death, gave us Bayes’ rule."
  },
  "Yoshua Bengio": {
   "lived": "born 1964",
   "bio": "Canadian computer scientist at Université de Montréal and Mila who pioneered neural language models and deep learning; co-winner of the 2018 Turing Award."
  },
  "Alexandra Birch": {
   "bio": "Machine translation researcher at the University of Edinburgh and co-author of the subword BPE paper."
  },
  "George Boole": {
   "lived": "1815–1864",
   "bio": "Largely self-taught English mathematician, later a professor in Cork, Ireland, who turned logic into algebra."
  },
  "Sebastian Borgeaud": {
   "bio": "DeepMind researcher and co-author of the Chinchilla paper."
  },
  "Léon Bottou": {
   "bio": "French computer scientist known for work on stochastic gradient descent and co-author of the 1998 LeNet paper."
  },
  "Trenton Bricken": {
   "bio": "Anthropic researcher and lead author of 'Towards Monosemanticity'."
  },
  "Tom B. Brown": {
   "bio": "Machine learning engineer, lead author of the GPT-3 paper, and a co-founder of Anthropic."
  },
  "Murray Campbell": {
   "bio": "IBM computer scientist and member of the Deep Blue team."
  },
  "Augustin-Louis Cauchy": {
   "lived": "1789–1857",
   "bio": "Hugely prolific French mathematician who helped put calculus on rigorous foundations and proposed the method of steepest descent in 1847."
  },
  "Arthur Cayley": {
   "lived": "1821–1895",
   "bio": "English mathematician who worked as a lawyer for years before becoming a Cambridge professor; he founded the algebra of matrices."
  },
  "Kai Chen": {
   "bio": "Google engineer and co-author of the word2vec paper."
  },
  "Rewon Child": {
   "bio": "Machine learning researcher and co-author of GPT-2."
  },
  "Kyunghyun Cho": {
   "bio": "Korean computer scientist who co-developed the RNN encoder–decoder and the gated recurrent unit (GRU) in Yoshua Bengio's lab; later a professor at NYU."
  },
  "Paul Christiano": {
   "bio": "AI alignment researcher who led early work on learning from human preferences at OpenAI and later founded the Alignment Research Center."
  },
  "Alonzo Church": {
   "lived": "1903–1995",
   "bio": "American logician at Princeton who created the lambda calculus and was Turing’s PhD advisor."
  },
  "Greg Corrado": {
   "bio": "Google researcher and co-author of the word2vec paper."
  },
  "Corinna Cortes": {
   "bio": "Danish computer scientist who co-invented the soft-margin support vector machine at AT&T Bell Labs and later led research at Google."
  },
  "Tri Dao": {
   "bio": "Machine learning researcher known for FlashAttention and co-creator of Mamba."
  },
  "Jeffrey Dean": {
   "bio": "Google engineer and research leader, co-author of word2vec and builder of large-scale computing systems."
  },
  "Jia Deng": {
   "bio": "Computer scientist who was lead author of the 2009 ImageNet paper as a Princeton graduate student."
  },
  "Jacob Devlin": {
   "bio": "Google researcher and lead author of BERT."
  },
  "Réjean Ducharme": {
   "bio": "Co-author of the 2003 neural probabilistic language model paper with Yoshua Bengio."
  },
  "Jeffrey Elman": {
   "lived": "1948–2018",
   "bio": "American cognitive scientist at UC San Diego whose simple recurrent network showed that next-word prediction can teach a network grammar-like structure."
  },
  "Stefano Ermon": {
   "bio": "Computer science professor at Stanford and co-author of DPO."
  },
  "Chelsea Finn": {
   "bio": "Stanford professor working on robotics and machine learning and co-author of DPO."
  },
  "Kunihiko Fukushima": {
   "lived": "born 1936",
   "bio": "Japanese computer scientist who invented the Neocognitron (1980), a direct ancestor of convolutional neural networks, while working at NHK's research laboratories."
  },
  "Philip Gage": {
   "bio": "Programmer who described the byte-pair encoding data-compression algorithm in a 1994 magazine article."
  },
  "Karan Goel": {
   "bio": "Machine learning researcher and co-author of S4."
  },
  "Aidan N. Gomez": {
   "bio": "Co-author of the Transformer paper as an intern at Google Brain; later co-founded Cohere."
  },
  "Ian Goodfellow": {
   "bio": "Computer scientist who invented generative adversarial networks (GANs) as a PhD student in Montreal and co-wrote the textbook 'Deep Learning'."
  },
  "Albert Gu": {
   "bio": "Machine learning researcher at Carnegie Mellon University who created S4 and co-created Mamba."
  },
  "Daya Guo": {
   "bio": "DeepSeek researcher and first-listed author of the DeepSeek-R1 paper."
  },
  "Barry Haddow": {
   "bio": "Machine translation researcher at the University of Edinburgh and co-author of the subword BPE paper."
  },
  "Demis Hassabis": {
   "lived": "born 1976",
   "bio": "British AI researcher, former chess prodigy and game designer, co-founder and CEO of DeepMind; shared the 2024 Nobel Prize in Chemistry for AlphaFold."
  },
  "Kaiming He": {
   "bio": "Computer vision researcher, lead author of ResNet, whose residual connections are now used in nearly every deep network."
  },
  "Tom Henighan": {
   "bio": "AI researcher and co-author of the scaling-laws paper."
  },
  "Geoffrey Hinton": {
   "lived": "born 1947",
   "bio": "British-Canadian computer scientist and a central figure in neural network research, from backpropagation and Boltzmann machines to AlexNet; co-winner of the 2018 Turing Award and the 2024 Nobel Prize in Physics."
  },
  "Jonathan Ho": {
   "bio": "Machine learning researcher, lead author of DDPM, which made diffusion models practical for high-quality images."
  },
  "Sepp Hochreiter": {
   "lived": "born 1967",
   "bio": "German computer scientist who analyzed the vanishing gradient problem in 1991 and co-invented LSTM in 1997."
  },
  "Jordan Hoffmann": {
   "bio": "Machine learning researcher and lead author of DeepMind's Chinchilla paper."
  },
  "John Hopfield": {
   "lived": "born 1933",
   "bio": "American physicist who showed in 1982 how a network of simple neurons can store and recall memories; co-winner of the 2024 Nobel Prize in Physics."
  },
  "Feng-hsiung Hsu": {
   "bio": "Computer engineer who began building chess chips as a Carnegie Mellon graduate student and led the hardware design of IBM's Deep Blue."
  },
  "Aja Huang": {
   "bio": "DeepMind researcher and strong Go player who was a lead developer of AlphaGo and placed its stones during the 2016 match."
  },
  "David Hubel": {
   "lived": "1926–2013",
   "bio": "Canadian-American neuroscientist who, with Torsten Wiesel, discovered how cells in the visual cortex respond to edges and lines; they shared the 1981 Nobel Prize in Physiology or Medicine."
  },
  "Robert Jacobs": {
   "bio": "Cognitive scientist and lead author of the 1991 'Adaptive Mixtures of Local Experts' paper."
  },
  "Ajay Jain": {
   "bio": "Machine learning researcher and co-author of DDPM."
  },
  "Christian Jauvin": {
   "bio": "Co-author of the 2003 neural probabilistic language model paper."
  },
  "Llion Jones": {
   "bio": "Welsh computer scientist, co-author of the Transformer paper, reportedly the one who suggested its title; later co-founded Sakana AI."
  },
  "Michael I. Jordan": {
   "lived": "born 1956",
   "bio": "American computer scientist and statistician at UC Berkeley, influential in machine learning, probabilistic models and neural networks."
  },
  "A. Joseph Hoane Jr.": {
   "bio": "IBM researcher and member of the Deep Blue team."
  },
  "John Jumper": {
   "lived": "born 1985",
   "bio": "American scientist at Google DeepMind who led AlphaFold 2; shared the 2024 Nobel Prize in Chemistry."
  },
  "Łukasz Kaiser": {
   "bio": "Polish computer scientist and co-author of the Transformer paper; later joined OpenAI."
  },
  "Jared Kaplan": {
   "bio": "Theoretical physicist at Johns Hopkins who led the 2020 scaling-laws study and co-founded Anthropic."
  },
  "Andrej Karpathy": {
   "bio": "Slovak-born Canadian AI researcher and teacher; founding member of OpenAI, former head of AI at Tesla, creator of nanoGPT, nanochat and the 'Neural Networks: Zero to Hero' video series, and founder of Eureka Labs."
  },
  "Garry Kasparov": {
   "lived": "born 1963",
   "bio": "Russian chess grandmaster and world champion who played the famous 1996 and 1997 matches against IBM's Deep Blue."
  },
  "Diederik P. Kingma": {
   "bio": "Dutch machine learning researcher who co-invented the variational autoencoder and the Adam optimizer."
  },
  "Alex Krizhevsky": {
   "bio": "Computer scientist who designed and trained AlexNet as a graduate student at the University of Toronto."
  },
  "Pierre-Simon Laplace": {
   "lived": "1749–1827",
   "bio": "French mathematician and astronomer who independently developed Bayesian probability and applied it widely to science."
  },
  "Quoc V. Le": {
   "bio": "Vietnamese-American computer scientist at Google, co-author of sequence-to-sequence learning."
  },
  "Yann LeCun": {
   "lived": "born 1960",
   "bio": "French-American computer scientist who developed convolutional neural networks at Bell Labs; co-winner of the 2018 Turing Award."
  },
  "Jan Leike": {
   "bio": "AI alignment researcher who worked at DeepMind and led alignment work at OpenAI before joining Anthropic in 2024."
  },
  "Fei-Fei Li": {
   "lived": "born 1976",
   "bio": "Chinese-American computer scientist who led the creation of ImageNet; professor at Stanford and author of the memoir 'The Worlds I See.'"
  },
  "Kai Li": {
   "bio": "Princeton computer scientist and co-author of the ImageNet paper."
  },
  "James Lighthill": {
   "lived": "1924–1998",
   "bio": "British applied mathematician known for fluid dynamics, whose 1973 report on AI led to funding cuts in the UK."
  },
  "Jack Lindsey": {
   "bio": "Anthropic researcher and lead author of 'On the Biology of a Large Language Model'."
  },
  "Seppo Linnainmaa": {
   "bio": "Finnish computer scientist whose 1970 master’s thesis described reverse-mode automatic differentiation, the math behind backpropagation."
  },
  "Ryan Lowe": {
   "bio": "AI researcher and co-author of the InstructGPT paper."
  },
  "Yu Lu": {
   "bio": "Co-author of the RoFormer paper that introduced RoPE."
  },
  "Benjamin Mann": {
   "bio": "Engineer, co-author of the GPT-3 paper and co-founder of Anthropic."
  },
  "Christopher D. Manning": {
   "bio": "Stanford professor of linguistics and computer science, a leading figure in natural language processing, and co-author of DPO."
  },
  "Andrey Markov": {
   "lived": "1856–1922",
   "bio": "Russian mathematician who invented Markov chains and tested them by counting letters in Pushkin’s Eugene Onegin."
  },
  "Sam McCandlish": {
   "bio": "Physicist turned AI researcher, co-lead of the scaling-laws paper and co-founder of Anthropic."
  },
  "John McCarthy": {
   "lived": "1927–2011",
   "bio": "American computer scientist who coined “artificial intelligence”, created the Lisp programming language and founded the Stanford AI Lab."
  },
  "Warren McCulloch": {
   "lived": "1898–1969",
   "bio": "American neurophysiologist and psychiatrist who co-invented the first mathematical model of a neuron."
  },
  "Arthur Mensch": {
   "bio": "French researcher and co-author of Chinchilla who co-founded Mistral AI in 2023."
  },
  "Tomas Mikolov": {
   "bio": "Czech computer scientist who led the word2vec work at Google and earlier pioneered recurrent neural network language models."
  },
  "Marvin Minsky": {
   "lived": "1927–2016",
   "bio": "American AI pioneer who co-founded the MIT AI Lab and co-wrote Perceptrons."
  },
  "Eric Mitchell": {
   "bio": "Stanford researcher and co-lead author of DPO."
  },
  "Volodymyr Mnih": {
   "bio": "DeepMind researcher and lead author of DQN, the network that learned to play Atari games from pixels."
  },
  "Ahmed Murtadha": {
   "bio": "Co-author of the RoFormer paper that introduced RoPE."
  },
  "Karthik Narasimhan": {
   "bio": "Computer scientist at Princeton University and co-author of the original GPT paper."
  },
  "Allen Newell": {
   "lived": "1927–1992",
   "bio": "American computer scientist at Carnegie Mellon who, with Herbert Simon, built early reasoning programs such as the Logic Theorist."
  },
  "Steven Nowlan": {
   "bio": "Neural network researcher and co-author of the 1991 mixture-of-experts paper."
  },
  "Chris Olah": {
   "bio": "Interpretability researcher and Anthropic co-founder, known for clear visual explanations of how neural networks work."
  },
  "Simon Osindero": {
   "bio": "Co-author of the 2006 deep belief network paper with Geoffrey Hinton and Yee-Whye Teh."
  },
  "Long Ouyang": {
   "bio": "OpenAI researcher and lead author of the InstructGPT paper."
  },
  "Shengfeng Pan": {
   "bio": "Co-author of the RoFormer paper that introduced RoPE."
  },
  "Seymour Papert": {
   "lived": "1928–2016",
   "bio": "South African-born mathematician and educator at MIT who co-wrote Perceptrons and co-created the Logo language for children."
  },
  "Niki Parmar": {
   "bio": "Machine learning researcher and co-author of the Transformer paper."
  },
  "Walter Pitts": {
   "lived": "1923–1969",
   "bio": "Largely self-taught American logician who, as a teenager, co-wrote the 1943 paper modeling neurons as logic units."
  },
  "Illia Polosukhin": {
   "bio": "Ukrainian computer scientist and co-author of the Transformer paper; later co-founded NEAR Protocol."
  },
  "Richard Price": {
   "lived": "1723–1791",
   "bio": "Welsh minister and moral philosopher who edited Bayes’ essay and presented it to the Royal Society in 1763."
  },
  "Alec Radford": {
   "bio": "OpenAI researcher who was lead author of GPT-1 and GPT-2 and contributed to CLIP and Whisper."
  },
  "Rafael Rafailov": {
   "bio": "Stanford researcher and co-lead author of Direct Preference Optimization (DPO)."
  },
  "Shaoqing Ren": {
   "bio": "Computer vision researcher and co-author of ResNet and Faster R-CNN."
  },
  "Nathaniel Rochester": {
   "lived": "1919–2001",
   "bio": "IBM engineer who designed the IBM 701 and co-organized the 1956 Dartmouth workshop."
  },
  "Robin Rombach": {
   "bio": "Researcher and lead author of latent diffusion, the method behind Stable Diffusion."
  },
  "Frank Rosenblatt": {
   "lived": "1928–1971",
   "bio": "American psychologist at Cornell who invented the perceptron, the first artificial neuron that learned from examples."
  },
  "David Rumelhart": {
   "lived": "1942–2011",
   "bio": "American cognitive scientist who led the 1986 backpropagation paper and the influential 'Parallel Distributed Processing' books."
  },
  "Nick Ryder": {
   "bio": "OpenAI researcher and co-author of the GPT-3 paper."
  },
  "Christopher Ré": {
   "bio": "Computer science professor at Stanford whose lab developed S4."
  },
  "Ruslan Salakhutdinov": {
   "bio": "Machine learning researcher who, as Hinton's student, co-wrote the 2006 Science paper on deep autoencoders; later a professor at Carnegie Mellon."
  },
  "Tim Salimans": {
   "bio": "Machine learning researcher and co-author of the original GPT paper."
  },
  "Gerard Salton": {
   "lived": "1927–1995",
   "bio": "German-born Cornell computer scientist, often called a father of information retrieval, who developed the vector space model for search."
  },
  "Arthur Samuel": {
   "lived": "1901–1990",
   "bio": "American engineer at IBM whose self-improving checkers program helped popularize the term “machine learning”."
  },
  "Jürgen Schmidhuber": {
   "lived": "born 1963",
   "bio": "German computer scientist who supervised Hochreiter's thesis and co-invented LSTM; long associated with the IDSIA lab in Switzerland."
  },
  "John Schulman": {
   "bio": "OpenAI co-founder who created the PPO algorithm and led the team that built ChatGPT."
  },
  "Lee Sedol": {
   "lived": "born 1983",
   "bio": "South Korean professional Go player, one of the strongest players of his generation, who played AlphaGo in 2016 and retired in 2019."
  },
  "Terrence Sejnowski": {
   "lived": "born 1947",
   "bio": "American computational neuroscientist at the Salk Institute who co-invented the Boltzmann machine with Geoffrey Hinton."
  },
  "Rico Sennrich": {
   "bio": "Computational linguist who adapted byte-pair encoding for neural machine translation while at the University of Edinburgh."
  },
  "Claude Shannon": {
   "lived": "1916–2001",
   "bio": "American mathematician and engineer at Bell Labs and MIT who founded information theory and showed Boolean logic could describe circuits."
  },
  "Zhihong Shao": {
   "bio": "DeepSeek researcher and lead author of DeepSeekMath, which introduced the GRPO reinforcement learning method."
  },
  "Archit Sharma": {
   "bio": "Stanford researcher and co-lead author of DPO."
  },
  "Noam Shazeer": {
   "bio": "Computer scientist and co-author of the Transformer and of sparsely-gated mixture-of-experts layers; co-founded Character.AI."
  },
  "Laurent Sifre": {
   "bio": "DeepMind researcher and senior author of the Chinchilla paper."
  },
  "David Silver": {
   "bio": "British computer scientist at Google DeepMind who led the AlphaGo project."
  },
  "Herbert A. Simon": {
   "lived": "1916–2001",
   "bio": "American scientist at Carnegie Mellon who co-created early AI programs and won the 1978 Nobel Prize in Economics."
  },
  "Jascha Sohl-Dickstein": {
   "bio": "Machine learning researcher who introduced diffusion-based generative models in 2015, drawing on ideas from physics."
  },
  "Jianlin Su": {
   "bio": "Chinese machine learning researcher who proposed rotary position embedding (RoPE), first on his blog and then in the RoFormer paper."
  },
  "Melanie Subbiah": {
   "bio": "Researcher and co-author of the GPT-3 paper."
  },
  "Jian Sun": {
   "bio": "Chinese computer vision researcher who led the Microsoft Research Asia team behind ResNet."
  },
  "Ilya Sutskever": {
   "bio": "Computer scientist who co-created AlexNet and sequence-to-sequence learning, and later co-founded OpenAI."
  },
  "Richard Sutton": {
   "bio": "Computer scientist who developed temporal-difference learning and co-wrote the standard reinforcement learning textbook; co-winner of the 2024 Turing Award with Andrew Barto."
  },
  "Richard S. Sutton": {
   "bio": "Canadian computer scientist at the University of Alberta, co-founder of modern reinforcement learning, author of 'The Bitter Lesson', and 2024 Turing Award co-recipient."
  },
  "James Joseph Sylvester": {
   "lived": "1814–1897",
   "bio": "English mathematician who coined the word “matrix” and worked on algebra with his friend Arthur Cayley."
  },
  "Yee-Whye Teh": {
   "bio": "Statistician and machine learning researcher, co-author of the 2006 deep belief network paper."
  },
  "Adly Templeton": {
   "bio": "Anthropic researcher and lead author of 'Scaling Monosemanticity'."
  },
  "Gerald Tesauro": {
   "bio": "IBM researcher who built TD-Gammon, a backgammon program that learned through self-play reinforcement learning."
  },
  "Alan Turing": {
   "lived": "1912–1954",
   "bio": "English mathematician who defined the Turing machine, helped break German codes in World War II, and proposed the imitation game for machine intelligence."
  },
  "Jakob Uszkoreit": {
   "bio": "Computer scientist who championed replacing recurrence with self-attention in the Transformer; later co-founded the biotech company Inceptive."
  },
  "Vladimir Vapnik": {
   "lived": "born 1936",
   "bio": "Soviet-American statistician who co-developed statistical learning theory with Alexey Chervonenkis and co-invented support vector machines."
  },
  "Ashish Vaswani": {
   "bio": "Computer scientist and first author of 'Attention Is All You Need', written at Google Brain."
  },
  "Pascal Vincent": {
   "bio": "Computer scientist at Université de Montréal, co-author of the 2003 neural language model paper and known for denoising autoencoders."
  },
  "Oriol Vinyals": {
   "bio": "Spanish computer scientist, co-author of sequence-to-sequence learning, later a research leader at DeepMind."
  },
  "Jason Wei": {
   "bio": "AI researcher, lead author of chain-of-thought prompting at Google, who later worked on reasoning models at OpenAI."
  },
  "Joseph Weizenbaum": {
   "lived": "1923–2008",
   "bio": "German-born MIT computer scientist who created ELIZA and became a leading critic of over-trusting computers."
  },
  "Max Welling": {
   "bio": "Dutch machine learning professor at the University of Amsterdam and co-inventor of the variational autoencoder."
  },
  "Liang Wenfeng": {
   "bio": "Chinese entrepreneur who founded the AI lab DeepSeek, funded by the quantitative hedge fund High-Flyer that he co-founded."
  },
  "Paul Werbos": {
   "bio": "American scientist whose 1974 Harvard thesis proposed training multi-layer neural networks by backpropagation; he later directed research programs at the US National Science Foundation."
  },
  "Torsten Wiesel": {
   "lived": "born 1924",
   "bio": "Swedish neuroscientist who worked with David Hubel on how the brain processes vision; co-winner of the 1981 Nobel Prize in Physiology or Medicine."
  },
  "Ronald J. Williams": {
   "bio": "American computer scientist, co-author of the 1986 backpropagation paper, also known for learning algorithms for recurrent networks and reinforcement learning."
  },
  "Jeff Wu": {
   "bio": "OpenAI researcher and co-author of GPT-2 and InstructGPT."
  },
  "Xiangyu Zhang": {
   "bio": "Computer vision researcher and co-author of ResNet at Microsoft Research Asia."
  },
  "Denny Zhou": {
   "bio": "Google researcher who led work on chain-of-thought prompting and reasoning in language models."
  }
 },
 "events": [
  {
   "id": "bayes-1763",
   "year": 1763,
   "title": "Bayes and Laplace: changing your mind with math",
   "people": [
    {
     "name": "Thomas Bayes",
     "role": "Minister and amateur mathematician who wrote the essay"
    },
    {
     "name": "Richard Price",
     "role": "Friend who found, edited and published the essay after Bayes died"
    },
    {
     "name": "Pierre-Simon Laplace",
     "role": "Mathematician who independently developed the idea and turned it into a general tool"
    }
   ],
   "track": "01-the-guessing-machine",
   "era": "foundations",
   "what_happened": "Two years after Thomas Bayes died, his friend Richard Price found an unfinished essay among his papers and sent it to the Royal Society, which published it in 1763. It showed how to work backward from evidence to the likely cause. A decade later, Pierre-Simon Laplace discovered the same idea on his own and built it into a full mathematics of uncertainty.",
   "why_it_mattered_kid": "It gave us a recipe for updating a guess when new clues arrive, which is exactly what a guessing machine has to do.",
   "why_it_mattered_adult": "Bayes’ rule formalizes how a prior belief should change in light of data. Modern language models are trained to output probability distributions, and the language of priors, likelihoods and posteriors runs through all of machine learning.",
   "thinking_move": "Flip the question around: instead of asking “given the cause, what will I see?”, ask “given what I saw, what was the likely cause?” — and keep a number for how sure you are.",
   "deeper_dive": [
    "Eighteenth-century mathematicians were good at forward problems: if a coin is fair, how likely are ten heads in a row? What stumped them was the reverse, which they called “inverse probability”: if you watch a coin land heads ten times, what should you believe about the coin? Thomas Bayes, a Presbyterian minister in Tunbridge Wells, England, worked on this with a thought experiment about balls rolled onto a table, where you must guess the position of a hidden first ball from where later balls land relative to it.",
    "Bayes never published it. After his death in 1761, Richard Price, a fellow minister and moral philosopher, found the manuscript, added an introduction and examples, and presented it to the Royal Society. Price saw it partly as a way to reason carefully about evidence in general, not just about dice and lotteries.",
    "Laplace, working in France and apparently unaware of Bayes, reached the same core idea in 1774 and then spent decades using it on real data such as birth records and astronomy. In his 1814 Philosophical Essay on Probabilities he famously described probability as “common sense reduced to calculation.” For about two centuries the approach went in and out of fashion, attacked for depending on a starting guess (the “prior”). Today it is everywhere, from spam filters to the way we think about what a language model “believes” about the next word."
   ],
   "sources": [
    {
     "title": "Bayes & Price (1763), An Essay towards Solving a Problem in the Doctrine of Chances, Philosophical Transactions",
     "url": "https://doi.org/10.1098/rstl.1763.0053"
    },
    {
     "title": "Laplace, A Philosophical Essay on Probabilities (English translation, Project Gutenberg)",
     "url": "https://www.gutenberg.org/ebooks/58881"
    }
   ],
   "watch": [
    {
     "title": "Bayes theorem, the geometry of changing beliefs",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=HZGCoVF3YvM"
    }
   ],
   "read": [
    {
     "title": "The Theory That Would Not Die",
     "author": "Sharon Bertsch McGrayne",
     "year": 2012,
     "isbn13": "9780300188226",
     "url": "https://www.amazon.com/s?k=9780300188226",
     "kid_friendly": false
    },
    {
     "title": "The Book of Why",
     "author": "Judea Pearl and Dana Mackenzie",
     "year": 2018,
     "isbn13": "9780465097609",
     "url": "https://www.amazon.com/s?k=9780465097609",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "probability",
    "evidence"
   ]
  },
  {
   "id": "cauchy-1847",
   "year": 1847,
   "date": "1847-10-18",
   "title": "Cauchy invents walking downhill",
   "people": [
    {
     "name": "Augustin-Louis Cauchy",
     "role": "Mathematician who proposed the method of steepest descent"
    }
   ],
   "track": "04-sliding-downhill",
   "era": "foundations",
   "what_happened": "In a short note read to the French Academy of Sciences on 18 October 1847, Augustin-Louis Cauchy described a general way to solve hard systems of equations: turn them into one quantity that measures “how wrong” you are, then repeatedly step in the direction that makes it shrink fastest. This is the idea we now call gradient descent.",
   "why_it_mattered_kid": "Almost every modern AI learns by doing what Cauchy described: take a small step downhill on a “wrongness” landscape, then do it again, millions of times.",
   "why_it_mattered_adult": "Cauchy’s steepest descent is the ancestor of stochastic gradient descent and Adam, the optimizers that train every large neural network. The key move — replace solving with minimizing, and follow the negative gradient — is unchanged after 175+ years.",
   "thinking_move": "If you can’t solve a problem directly, measure how wrong you are with one number, then repeatedly nudge everything in whichever direction lowers that number fastest.",
   "deeper_dive": [
    "Cauchy’s problem came from astronomy, where computing an orbit meant solving many equations with many unknowns, all by hand. Exact algebraic methods became hopeless as the equations got messier. His trick was to square each equation’s error and add them up into a single positive quantity. The true answer is where that total reaches zero, so solving the equations becomes the same as finding the bottom of a valley.",
    "To find the bottom, he suggested looking at how the total changes when each unknown is nudged (its partial derivatives) and moving all the unknowns a little in the direction that lowers the total fastest, then repeating. He also discussed how big a step to take, a question that still occupies people who train neural networks today, where it is called choosing the learning rate.",
    "The note is only about three pages long, and Cauchy did not develop it much further; he was busy with an enormous output of other work, hundreds of papers across his career. He was also a figure of political drama: a committed royalist, he left France for years after the 1830 revolution rather than swear an oath to the new king. The humble downhill method he sketched in an afternoon’s note ended up being one of his most used ideas."
   ],
   "sources": [
    {
     "title": "Comptes rendus de l’Académie des sciences, vol. 25, issue of 18 Oct 1847 (contains Cauchy, “Méthode générale pour la résolution des systèmes d’équations simultanées”)",
     "url": "https://archive.org/details/comptes-rendus-hebdomadaires-academie-des-sciences_1847-10-18_25_16"
    }
   ],
   "watch": [
    {
     "title": "Gradient descent, how neural networks learn | Deep Learning Chapter 2",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=IHZwWFHWa-w"
    }
   ],
   "read": [
    {
     "title": "Why Machines Learn: The Elegant Math Behind Modern AI",
     "author": "Anil Ananthaswamy",
     "year": 2024,
     "isbn13": "9780593185742",
     "url": "https://www.amazon.com/s?k=9780593185742",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "optimization",
    "calculus"
   ]
  },
  {
   "id": "boole-1854",
   "year": 1854,
   "title": "Boole turns logic into algebra",
   "people": [
    {
     "name": "George Boole",
     "role": "Self-taught mathematician who wrote The Laws of Thought"
    }
   ],
   "track": "branch-symbolic-ai",
   "era": "foundations",
   "what_happened": "George Boole published An Investigation of the Laws of Thought, showing that reasoning with “and”, “or” and “not” could be written as algebra with only two values. Statements became equations you could calculate with.",
   "why_it_mattered_kid": "Boole’s true/false math is what every computer chip runs on, and it was the first serious try at turning thinking into calculation.",
   "why_it_mattered_adult": "Boolean algebra became the basis of digital circuit design and of symbolic AI’s dream of mechanizing reasoning. McCulloch and Pitts later used logic of this kind to describe idealized neurons.",
   "thinking_move": "Treat words like “and”, “or” and “not” as math operations, so arguments can be checked by calculation instead of by persuasion.",
   "deeper_dive": [
    "Boole was the son of a shoemaker in Lincoln, England, and largely taught himself mathematics and languages while working as a schoolteacher to support his family. Without a university degree, he still won a Royal Society medal and in 1849 became the first professor of mathematics at Queen’s College Cork in Ireland.",
    "Logic at the time was still mostly Aristotle’s: patterns of argument memorized in words. Boole’s surprise was that logic obeys an algebra of its own, with one odd rule: if x stands for “things that are true”, then x times x equals x, because saying something twice doesn’t make it more true. That rule only works for numbers 0 and 1, so all of logic could live in a two-valued world.",
    "Boole hoped he was describing the laws of human thought itself. His work was admired but seemed mostly philosophical for decades. In 1937 a young Claude Shannon showed in his master’s thesis that Boole’s algebra exactly describes circuits of electrical switches, and suddenly a book about the “laws of thought” became the blueprint for computer hardware."
   ],
   "sources": [
    {
     "title": "Boole, An Investigation of the Laws of Thought (Project Gutenberg)",
     "url": "https://www.gutenberg.org/ebooks/15114"
    }
   ],
   "watch": [
    {
     "title": "Boolean Logic & Logic Gates: Crash Course Computer Science #3",
     "channel": "CrashCourse",
     "url": "https://www.youtube.com/watch?v=gI-qXk7XojA"
    }
   ],
   "read": [
    {
     "title": "Code: The Hidden Language of Computer Hardware and Software (2nd ed.)",
     "author": "Charles Petzold",
     "year": 2022,
     "isbn13": "9780137909100",
     "url": "https://www.amazon.com/s?k=9780137909100",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "logic",
    "computing"
   ]
  },
  {
   "id": "cayley-1858",
   "year": 1858,
   "title": "Cayley gives tables of numbers their own algebra",
   "people": [
    {
     "name": "Arthur Cayley",
     "role": "Mathematician who wrote the first systematic theory of matrices"
    },
    {
     "name": "James Joseph Sylvester",
     "role": "Mathematician who coined the word “matrix” in 1850"
    }
   ],
   "track": "03-tables-that-transform",
   "era": "foundations",
   "what_happened": "Arthur Cayley’s “A Memoir on the Theory of Matrices” treated a rectangular table of numbers as a single object that can be added and multiplied. He defined matrix multiplication and noticed that, unlike ordinary numbers, the order of multiplication matters.",
   "why_it_mattered_kid": "A neural network is mostly giant tables of numbers being multiplied together, and Cayley wrote the rules for that game.",
   "why_it_mattered_adult": "Matrix multiplication is the core operation of deep learning: every layer of a transformer is dominated by matrix products, and GPUs are, in effect, matrix-multiplication machines.",
   "thinking_move": "Stop treating a grid of numbers as a pile of separate values; treat the whole grid as one thing that acts on other things.",
   "deeper_dive": [
    "In the 1800s, grids of numbers appeared all over mathematics, for example as the coefficients of systems of linear equations or as rules for transforming coordinates. Mathematicians mostly cared about one number computed from such a grid, the determinant. In 1850 James Joseph Sylvester called the grid itself a “matrix”, Latin for womb, because it was the thing from which determinants are born.",
    "Cayley took the next step: what if the grid itself is the number? In his 1858 memoir he showed how to add matrices, multiply them, and even find inverses. He pointed out that A times B is generally not the same as B times A, a shock compared to ordinary arithmetic. He also stated what is now called the Cayley–Hamilton theorem, checked it for small cases, and wrote that he had not thought it necessary to undertake the labour of a formal proof.",
    "Both men had unusual careers. Cayley worked as a lawyer for about fourteen years, writing hundreds of math papers on the side, before becoming a professor at Cambridge in 1863. Sylvester, who was Jewish, had been unable to take a Cambridge degree because of a religious test; he worked as an actuary for a time, and the two met and talked mathematics in the London legal world. Their friendship gave us the language that GPUs speak today."
   ],
   "sources": [
    {
     "title": "Cayley (1858), A Memoir on the Theory of Matrices, Philosophical Transactions of the Royal Society",
     "url": "https://doi.org/10.1098/rstl.1858.0002"
    }
   ],
   "watch": [
    {
     "title": "Linear transformations and matrices | Chapter 3, Essence of linear algebra",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=kYB8IZa5AuE"
    }
   ],
   "read": [
    {
     "title": "Why Machines Learn: The Elegant Math Behind Modern AI",
     "author": "Anil Ananthaswamy",
     "year": 2024,
     "isbn13": "9780593185742",
     "url": "https://www.amazon.com/s?k=9780593185742",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "matrices",
    "linear algebra"
   ]
  },
  {
   "id": "markov-1913",
   "year": 1913,
   "date": "1913-01-23",
   "title": "Markov counts the letters of a poem",
   "people": [
    {
     "name": "Andrey Markov",
     "role": "Mathematician who analyzed letter sequences in Eugene Onegin"
    }
   ],
   "track": "01-the-guessing-machine",
   "era": "foundations",
   "what_happened": "Andrey Markov went through the first 20,000 letters of Alexander Pushkin’s verse novel Eugene Onegin by hand, recording whether each letter was a vowel or a consonant. He showed that the chance of the next letter being a vowel depends strongly on what the previous letter was, and he presented the result to the St. Petersburg Academy of Sciences.",
   "why_it_mattered_kid": "Markov showed you can predict what comes next in language just by counting what usually follows what — the very first guessing machine.",
   "why_it_mattered_adult": "This was the first application of what we now call Markov chains to text. N-gram language models, and ultimately GPT’s next-token objective, descend from the idea that language is a sequence whose next element can be predicted from recent context.",
   "thinking_move": "Replace an impossible question (“what will the next letter be?”) with a countable one (“how often does this kind of letter follow that kind?”).",
   "deeper_dive": [
    "Markov was not trying to build anything. He was in a mathematical feud. A rival, Pavel Nekrasov, had argued that the law of large numbers (averages settle down over many trials) only works when events are independent, and he tied this to claims about free will. Markov thought that was nonsense and, starting in 1906, developed chains of events where each one depends on the one before, proving the averages still settle down.",
    "To show his chains described something real, he turned to Russia’s most famous poem. Counting by hand, he found that roughly 43% of the letters were vowels, but a vowel followed another vowel only about 13% of the time, while a vowel followed a consonant about 66% of the time. The letters were clearly not independent coin flips, yet the statistics were perfectly stable.",
    "Markov was famously combative; he even asked the Russian Orthodox Church to excommunicate him in 1912, in solidarity with the excommunicated writer Leo Tolstoy. He saw his poem study as a dry demonstration of probability. More than a century later, the same “what usually comes next?” question, asked with vastly more context and data, is how ChatGPT writes."
   ],
   "sources": [
    {
     "title": "Markov (1913), An Example of Statistical Investigation of the Text Eugene Onegin (English translation, Science in Context 2006)",
     "url": "https://doi.org/10.1017/S0269889706001074"
    }
   ],
   "watch": [
    {
     "title": "Markov Chains Clearly Explained! Part - 1",
     "channel": "Normalized Nerd",
     "url": "https://www.youtube.com/watch?v=i3AkTO9HLXo"
    },
    {
     "title": "The spelled-out intro to language modeling: building makemore",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=PaCmpygFfXo"
    }
   ],
   "read": [],
   "kid_friendly": true,
   "tags": [
    "probability",
    "language"
   ]
  },
  {
   "id": "turing-1936",
   "year": 1936,
   "title": "Turing imagines a machine that can compute anything computable",
   "people": [
    {
     "name": "Alan Turing",
     "role": "Mathematician who defined the Turing machine"
    },
    {
     "name": "Alonzo Church",
     "role": "Logician who reached a matching result by a different route"
    }
   ],
   "track": "branch-symbolic-ai",
   "era": "dawn",
   "what_happened": "In “On Computable Numbers”, 23-year-old Alan Turing described an imaginary machine that reads and writes symbols on a tape, following a simple table of rules. He showed that one “universal” machine could imitate any other, and that some well-defined problems can never be solved by any such machine.",
   "why_it_mattered_kid": "Turing proved that one machine could, in principle, run any recipe for calculation — the idea behind every computer, including the ones that run AI.",
   "why_it_mattered_adult": "The universal Turing machine is the theoretical model of a general-purpose, stored-program computer. It also drew the first sharp limits on what computation can do, framing later debates about whether minds are computational.",
   "thinking_move": "To answer a fuzzy question (“what can be computed?”), build the simplest possible imaginary device that captures the essence of the activity, then reason about the device.",
   "deeper_dive": [
    "The mathematician David Hilbert had asked whether there could be a mechanical procedure that decides, for any mathematical statement, whether it is provable. To answer “no”, someone first had to say precisely what a “mechanical procedure” is. Turing did it by picturing a human clerk with pencil and paper, then stripping that clerk down to the bare minimum: a head that reads one square of tape, writes or erases a symbol, moves left or right, and changes its state.",
    "With that model he showed two astonishing things. First, a single universal machine, given a description of any other machine on its tape, can do whatever that machine does: hardware plus software, decades before either existed. Second, there are questions no machine can answer, such as whether an arbitrary program will ever stop.",
    "According to his biographer Andrew Hodges, the key idea came to Turing while lying in a meadow at Grantchester after a long run. He was beaten to publication by the American logician Alonzo Church, who proved the same impossibility result with a different formalism. Rather than be crushed, Turing went to Princeton to earn his PhD under Church, and the two approaches turned out to be equivalent, which strengthened everyone’s confidence that “computable” had been captured correctly."
   ],
   "sources": [
    {
     "title": "Turing (1936), On Computable Numbers, with an Application to the Entscheidungsproblem, Proceedings of the London Mathematical Society",
     "url": "https://doi.org/10.1112/plms/s2-42.1.230"
    }
   ],
   "watch": [
    {
     "title": "Turing Machines Explained - Computerphile",
     "channel": "Computerphile",
     "url": "https://www.youtube.com/watch?v=dNRDvLACg5Q"
    }
   ],
   "read": [
    {
     "title": "The Annotated Turing",
     "author": "Charles Petzold",
     "year": 2008,
     "isbn13": "9780470229057",
     "url": "https://www.amazon.com/s?k=9780470229057",
     "kid_friendly": false
    },
    {
     "title": "Alan Turing: The Enigma",
     "author": "Andrew Hodges",
     "year": 2014,
     "isbn13": "9780691164724",
     "url": "https://www.amazon.com/s?k=9780691164724",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "computing",
    "logic"
   ]
  },
  {
   "id": "mcculloch-pitts-1943",
   "year": 1943,
   "title": "McCulloch and Pitts invent the fake neuron",
   "people": [
    {
     "name": "Warren McCulloch",
     "role": "Neurophysiologist and psychiatrist, co-author"
    },
    {
     "name": "Walter Pitts",
     "role": "Self-taught teenage logician, co-author"
    }
   ],
   "track": "05-the-fake-neuron",
   "era": "dawn",
   "what_happened": "Warren McCulloch and Walter Pitts published “A Logical Calculus of the Ideas Immanent in Nervous Activity”. They called their units “neurons” and wrote that, because of the “all-or-none” character of nervous activity, “neural events and the relations among them can be treated by means of propositional logic.” Each unit fires when enough of its inputs are on, so networks of them can compute logical functions. Today we would call these units threshold logic units.",
   "why_it_mattered_kid": "This was the first “artificial neuron”: a tiny on/off unit that adds up its inputs, which is still the basic building block of neural networks.",
   "why_it_mattered_adult": "The McCulloch–Pitts unit (weighted sum plus threshold) is the ancestor of every artificial neuron. It linked brain science to logic and computation, though it had no way to learn: its weights were set by hand.",
   "thinking_move": "Throw away almost all the biology and keep one idea you can do math with: a neuron adds up signals and fires if the total crosses a threshold.",
   "deeper_dive": [
    "McCulloch was a middle-aged doctor fascinated by how the brain could produce logic and thought. Pitts was a teenager with no high-school diploma. In a widely told story, Pitts, at around age 12, hid in a Detroit library for days reading Russell and Whitehead’s Principia Mathematica and wrote to Bertrand Russell pointing out problems in it. He later ran away from home to Chicago, where he hung around the university, and McCulloch took him into his own household.",
    "Together they asked a bold question: if each neuron simply fires or doesn’t, can a network of them carry out reasoning? Their answer was yes. Using Boole-style logic, they showed that neurons wired with the right thresholds can compute AND, OR and NOT, and therefore any logical expression. It suggested that the brain might be a kind of computing machine.",
    "The paper was little read by biologists but deeply influenced early computer pioneers, including John von Neumann. The human story ended sadly: after a falling-out with the mathematician Norbert Wiener in the early 1950s cut Pitts off from an important mentor, he withdrew and reportedly destroyed much of his unpublished work. Both he and McCulloch died in 1969. The missing piece in their neuron, the ability to learn, would come from Frank Rosenblatt."
   ],
   "sources": [
    {
     "title": "McCulloch & Pitts (1943), A Logical Calculus of the Ideas Immanent in Nervous Activity, Bulletin of Mathematical Biophysics",
     "url": "https://doi.org/10.1007/BF02478259"
    },
    {
     "title": "McCulloch & Pitts (1943), full text scan (University of Illinois course page)",
     "url": "https://jontallen.ece.illinois.edu/uploads/498-NS.S21/McCulloch-Pitts-1943-neural-networks-ocr.pdf"
    }
   ],
   "watch": [
    {
     "title": "But what is a neural network? | Deep learning chapter 1",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=aircAruvnKk"
    },
    {
     "title": "The Essential Main Ideas of Neural Networks",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=CqOfi41LfDw"
    }
   ],
   "read": [
    {
     "title": "Why Machines Learn: The Elegant Math Behind Modern AI",
     "author": "Anil Ananthaswamy",
     "year": 2024,
     "isbn13": "9780593185742",
     "url": "https://www.amazon.com/s?k=9780593185742",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "neurons",
    "logic"
   ]
  },
  {
   "id": "shannon-1948",
   "year": 1948,
   "date": "1948-07",
   "title": "Shannon measures information in bits",
   "people": [
    {
     "name": "Claude Shannon",
     "role": "Bell Labs mathematician and engineer who founded information theory"
    }
   ],
   "track": "branch-information-theory",
   "era": "dawn",
   "what_happened": "Claude Shannon published “A Mathematical Theory of Communication” in two parts in 1948. It defined information as a measurable quantity, counted in bits, introduced entropy as a measure of surprise, and showed that messages can be sent reliably over noisy channels up to a maximum rate.",
   "why_it_mattered_kid": "Shannon showed how to measure “how surprising” a message is, and that number is exactly what language models are trained to shrink.",
   "why_it_mattered_adult": "Entropy and cross-entropy come straight from this paper; cross-entropy is the loss function used to train GPT. Shannon also built statistical approximations of English that foreshadow n-gram and neural language models.",
   "thinking_move": "Ignore what a message means and measure only how unpredictable it is; that single number turns out to govern compression, communication and prediction.",
   "deeper_dive": [
    "Bell Labs engineers faced practical problems: how many telephone calls can a wire carry, and how do you fight static? Shannon realized that every message, whether voice, text or pictures, could be treated the same way: as a choice among possibilities. The less predictable the choice, the more information it carries. He measured it in “bits”, a word he credited to his colleague John Tukey.",
    "In the same paper he played a game that looks a lot like a modern language model. Using tables of letter and word frequencies, and sometimes just opening a book at random to see what followed a given word, he generated text one piece at a time. Random letters gave gibberish; letters chosen by pair frequencies looked word-like; words chosen by which word follows which produced strange, almost-English sentences.",
    "Shannon was famously playful. He juggled, rode a unicycle through Bell Labs’ hallways, and built a maze-solving mechanical mouse called Theseus. Earlier, his 1937 master’s thesis had shown that George Boole’s logic describes switching circuits. With two papers he laid foundations under both digital computers and the mathematics that tells a language model how wrong its guesses are."
   ],
   "sources": [
    {
     "title": "Shannon (1948), A Mathematical Theory of Communication, Bell System Technical Journal",
     "url": "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    }
   ],
   "watch": [
    {
     "title": "Claude Shannon - Father of the Information Age",
     "channel": "University of California Television (UCTV)",
     "url": "https://www.youtube.com/watch?v=z2Whj_nL-x8"
    }
   ],
   "read": [
    {
     "title": "A Mind at Play: How Claude Shannon Invented the Information Age",
     "author": "Jimmy Soni and Rob Goodman",
     "year": 2017,
     "isbn13": "9781476766683",
     "url": "https://www.amazon.com/s?k=9781476766683",
     "kid_friendly": false
    },
    {
     "title": "The Information: A History, a Theory, a Flood",
     "author": "James Gleick",
     "year": 2011,
     "isbn13": "9781400096237",
     "url": "https://www.amazon.com/s?k=9781400096237",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "information",
    "entropy"
   ]
  },
  {
   "id": "turing-test-1950",
   "year": 1950,
   "date": "1950-10",
   "title": "Turing asks: can machines think?",
   "people": [
    {
     "name": "Alan Turing",
     "role": "Author of “Computing Machinery and Intelligence”"
    }
   ],
   "track": "branch-symbolic-ai",
   "era": "dawn",
   "what_happened": "In the philosophy journal Mind, Alan Turing replaced the vague question “Can machines think?” with a test he called the imitation game: can a machine hold a typed conversation well enough that a judge can’t reliably tell it from a person? He also suggested building machines that learn, like a child, instead of programming in adult knowledge.",
   "why_it_mattered_kid": "Turing turned an argument nobody could settle into a game you could actually play, and he predicted that machines would one day learn instead of just following instructions.",
   "why_it_mattered_adult": "The paper framed AI’s central question for seventy years and anticipated objections that are still debated. Its proposal of a “child machine” that is educated rather than programmed is an early statement of the machine-learning approach.",
   "thinking_move": "When a question is too fuzzy to answer, swap it for a concrete, testable one that captures what you actually care about.",
   "deeper_dive": [
    "The paper opens with the line “I propose to consider the question, ‘Can machines think?’” Turing immediately notes that arguing about the meanings of “machine” and “think” would go nowhere. So he proposes the imitation game: an interrogator types questions to two hidden players, one human and one machine, and tries to tell which is which.",
    "He predicted that in about fifty years, machines with roughly a billion units of storage would play well enough that an average interrogator would have no more than a 70% chance of guessing correctly after five minutes. Then he answered objections one by one, including the theological objection and “Lady Lovelace’s objection” that machines can only do what we tell them. His reply to the last was the most prophetic: instead of simulating an adult mind, build one that simulates a child’s mind and educate it.",
    "Turing did not live to see any of this. In 1952 he was prosecuted under the laws of the time for being gay and forced to undergo hormone treatment. He died in 1954, at 41. Decades later the UK government apologized (2009) and he received a royal pardon (2013). Today’s chatbots routinely fool people in short conversations, which has made his test both famous and hotly debated as a measure of intelligence."
   ],
   "sources": [
    {
     "title": "Turing (1950), Computing Machinery and Intelligence, Mind",
     "url": "https://doi.org/10.1093/mind/LIX.236.433"
    }
   ],
   "watch": [
    {
     "title": "The Turing test: Can a computer pass for a human? - Alex Gendler",
     "channel": "TED-Ed",
     "url": "https://www.youtube.com/watch?v=3wLqsRLvV-c"
    }
   ],
   "read": [
    {
     "title": "Alan Turing: The Enigma",
     "author": "Andrew Hodges",
     "year": 2014,
     "isbn13": "9780691164724",
     "url": "https://www.amazon.com/s?k=9780691164724",
     "kid_friendly": false
    },
    {
     "title": "Gödel, Escher, Bach: An Eternal Golden Braid",
     "author": "Douglas R. Hofstadter",
     "year": 1999,
     "isbn13": "9780465026562",
     "url": "https://www.amazon.com/s?k=9780465026562",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "turing test",
    "philosophy"
   ]
  },
  {
   "id": "shannon-1951",
   "year": 1951,
   "date": "1951-01",
   "title": "Shannon plays the next-letter guessing game",
   "people": [
    {
     "name": "Claude Shannon",
     "role": "Designed the human guessing experiment"
    }
   ],
   "track": "01-the-guessing-machine",
   "era": "dawn",
   "what_happened": "In “Prediction and Entropy of Printed English”, Shannon asked people to guess a hidden passage one letter at a time, recording how many guesses each letter took. Because people knew English so well, they often guessed right on the first try, which let him estimate how predictable, and so how compressible, English really is.",
   "why_it_mattered_kid": "Shannon turned “guess the next letter” into a science experiment, and that same game is exactly how ChatGPT is trained.",
   "why_it_mattered_adult": "The paper estimated the entropy of English at roughly one bit per letter when long context is available, far below the ~4.7 bits of random letters. It frames language modeling as next-symbol prediction scored by entropy, which is precisely the GPT training objective.",
   "thinking_move": "Use people as the measuring instrument: if humans can guess what comes next, the information isn’t really “new”, so you can measure knowledge by measuring surprise.",
   "deeper_dive": [
    "After his 1948 paper, Shannon wanted to know how much information English text actually carries. Counting letter frequencies only captures short-range patterns. A fluent reader knows far more: grammar, common phrases, what the story is about. How could he measure all of that at once?",
    "His clever answer was to use a person as the predictor. A subject saw the text so far and guessed the next letter; if wrong, they guessed again until they got it. Shannon recorded the number of guesses for each letter. Often it was just one. From these counts he calculated upper and lower bounds on the entropy of English, concluding that with long context it is roughly one bit per letter. In other words, most of English is redundant, which is why you can still read txt wth mssng vwls.",
    "The experiment is a direct ancestor of modern language modeling. A GPT model plays the same game: it sees the text so far and assigns probabilities to the next token, and training simply pushes down how surprised it is. Seventy years later, researchers still compare language models’ “bits per character” to Shannon’s human estimates."
   ],
   "sources": [
    {
     "title": "Shannon (1951), Prediction and Entropy of Printed English, Bell System Technical Journal",
     "url": "https://doi.org/10.1002/j.1538-7305.1951.tb01366.x"
    }
   ],
   "watch": [
    {
     "title": "The spelled-out intro to language modeling: building makemore",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=PaCmpygFfXo"
    },
    {
     "title": "Large Language Models explained briefly",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=LPZh9BOjkQs"
    }
   ],
   "read": [
    {
     "title": "The Information: A History, a Theory, a Flood",
     "author": "James Gleick",
     "year": 2011,
     "isbn13": "9781400096237",
     "url": "https://www.amazon.com/s?k=9781400096237",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "entropy",
    "language",
    "prediction"
   ]
  },
  {
   "id": "dartmouth-1956",
   "year": 1956,
   "title": "Dartmouth workshop names “artificial intelligence”",
   "people": [
    {
     "name": "John McCarthy",
     "role": "Dartmouth mathematician who led the proposal and coined the term “artificial intelligence”"
    },
    {
     "name": "Marvin Minsky",
     "role": "Co-organizer"
    },
    {
     "name": "Nathaniel Rochester",
     "role": "IBM engineer and co-organizer"
    },
    {
     "name": "Claude Shannon",
     "role": "Co-organizer"
    },
    {
     "name": "Allen Newell",
     "role": "Attendee who brought the Logic Theorist program"
    },
    {
     "name": "Herbert A. Simon",
     "role": "Attendee who brought the Logic Theorist program"
    }
   ],
   "track": "branch-symbolic-ai",
   "era": "first-wave",
   "what_happened": "A proposal dated 31 August 1955 asked for funding for a summer research project at Dartmouth College on “artificial intelligence”, the first use of the phrase. In summer 1956 a small, shifting group of researchers met there for several weeks, and the field got its name and its founding ambitions.",
   "why_it_mattered_kid": "This is the summer AI got its name, along with a hugely optimistic plan to figure out thinking in just a couple of months.",
   "why_it_mattered_adult": "Dartmouth set AI’s agenda for decades: language, abstraction, self-improvement, neuron nets and creativity were all on the list. It also set a pattern of over-optimistic timelines that helped drive later boom-and-bust cycles.",
   "thinking_move": "Give a scattered set of ideas a name and a shared mission, and a field can form around it.",
   "deeper_dive": [
    "John McCarthy, a young Dartmouth mathematician, wanted to gather people working on thinking machines under one banner. With Marvin Minsky, Nathaniel Rochester of IBM and Claude Shannon, he wrote a proposal asking for a “2 month, 10 man study”. It rested on a bold conjecture: “every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it.” McCarthy chose the name “artificial intelligence” partly to set the new field apart from existing areas like cybernetics.",
    "The proposal predicted that “a significant advance can be made” on these problems if a carefully selected group worked on it together for a summer. In reality the meeting was loose: people came and went, and there was no single breakthrough. The most concrete result shown was Allen Newell and Herbert Simon’s Logic Theorist, a program that proved theorems from Principia Mathematica.",
    "Still, the attendees went on to found the major AI labs at MIT, Stanford and Carnegie Mellon, and their mostly symbolic, logic-based approach dominated for decades. The gap between the summer-sized plan and the decades-long reality is a useful lesson in how hard “simple” mental abilities turn out to be."
   ],
   "sources": [
    {
     "title": "McCarthy, Minsky, Rochester & Shannon (1955), A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence (Stanford copy)",
     "url": "https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html"
    }
   ],
   "watch": [
    {
     "title": "Early AI: The 1956 Dartmouth Conference",
     "channel": "Computer History Museum",
     "url": "https://www.youtube.com/watch?v=3FX2wmJ1fAQ"
    },
    {
     "title": "What Is Artificial Intelligence? Crash Course AI #1",
     "channel": "CrashCourse",
     "url": "https://www.youtube.com/watch?v=a0_lo_GDcFw"
    }
   ],
   "read": [
    {
     "title": "Machines Who Think (2nd ed.)",
     "author": "Pamela McCorduck",
     "year": 2004,
     "isbn13": "9781568812052",
     "url": "https://www.amazon.com/s?k=9781568812052",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "history",
    "symbolic ai"
   ]
  },
  {
   "id": "rosenblatt-1958",
   "year": 1958,
   "date": "1958-07",
   "title": "Rosenblatt’s perceptron learns from mistakes",
   "people": [
    {
     "name": "Frank Rosenblatt",
     "role": "Cornell psychologist who invented the perceptron"
    }
   ],
   "track": "05-the-fake-neuron",
   "era": "first-wave",
   "what_happened": "Frank Rosenblatt demonstrated what he called the “perceptron”. His 1958 paper’s title describes it as “a probabilistic model for information storage and organization in the brain”; today we would call it a single-layer linear classifier, trained by nudging its weights whenever it makes a mistake. In a 1958 demonstration for the US Navy, a simulation on an IBM 704 learned to tell cards marked on the left from cards marked on the right. He later built the Mark I Perceptron, a machine with a camera-like grid of 400 light sensors.",
   "why_it_mattered_kid": "The perceptron was the first artificial neuron that learned by itself from its mistakes instead of being told the answer rule.",
   "why_it_mattered_adult": "The perceptron learning rule is the first trainable neural network and a forerunner of gradient-based learning. Its overhyped press coverage also set a template for AI hype cycles.",
   "thinking_move": "Don’t program the rule; start with random weights and nudge them a little every time the machine gets an example wrong.",
   "deeper_dive": [
    "McCulloch and Pitts had shown that artificial neurons could compute, but someone had to set every connection by hand. Rosenblatt, a psychologist at the Cornell Aeronautical Laboratory, wanted a machine that would learn the way he imagined brains do. His rule was simple: if the perceptron answers wrongly, nudge each weight in the direction that would have made the answer right; if it answers correctly, leave it alone. He proved this procedure finds a correct set of weights whenever one exists.",
    "The press went wild. A New York Times article in July 1958 reported that the Navy expected the device to be the embryo of a computer that would “walk, talk, see, write, reproduce itself and be conscious of its existence.” Rosenblatt himself was more careful than the headlines, but the gap between the hype and what a single-layer perceptron could do set it up for a fall.",
    "The Mark I Perceptron used a 20-by-20 grid of photocells as its eye and motor-driven dials for its adjustable weights, and it learned to recognize simple shapes. The perceptron’s reputation suffered after Minsky and Papert’s 1969 book. Rosenblatt died in a boating accident on his 43rd birthday in 1971, years before multi-layer networks trained by backpropagation vindicated his core idea."
   ],
   "sources": [
    {
     "title": "Rosenblatt (1958), The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain, Psychological Review",
     "url": "https://doi.org/10.1037/h0042519"
    },
    {
     "title": "Rosenblatt (1958), full text scan",
     "url": "https://homepages.math.uic.edu/~lreyzin/papers/rosenblatt58.pdf"
    }
   ],
   "watch": [
    {
     "title": "But what is a neural network? | Deep learning chapter 1",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=aircAruvnKk"
    }
   ],
   "read": [
    {
     "title": "Why Machines Learn: The Elegant Math Behind Modern AI",
     "author": "Anil Ananthaswamy",
     "year": 2024,
     "isbn13": "9780593185742",
     "url": "https://www.amazon.com/s?k=9780593185742",
     "kid_friendly": false
    },
    {
     "title": "Make Your Own Neural Network",
     "author": "Tariq Rashid",
     "year": 2016,
     "isbn13": "9781530826605",
     "url": "https://www.amazon.com/s?k=9781530826605",
     "kid_friendly": true
    }
   ],
   "kid_friendly": true,
   "tags": [
    "neurons",
    "learning",
    "hype"
   ]
  },
  {
   "id": "samuel-1959",
   "year": 1959,
   "date": "1959-07",
   "title": "Samuel’s checkers program learns to beat its maker",
   "people": [
    {
     "name": "Arthur Samuel",
     "role": "IBM engineer who wrote a self-improving checkers program"
    }
   ],
   "track": "branch-classic-ml",
   "era": "first-wave",
   "what_happened": "Arthur Samuel published “Some Studies in Machine Learning Using the Game of Checkers”, describing a program that improved by remembering positions and by adjusting the weights of its position-scoring formula, partly through playing against itself. His abstract begins: “Two machine-learning procedures have been investigated in some detail using the game of checkers.” He argued that “a computer can be programmed so that it will learn to play a better game of checkers than can be played by the person who wrote the program.” The paper is one of the earliest uses of the term “machine learning”.",
   "why_it_mattered_kid": "Samuel showed a computer could get better at a game than the person who programmed it, by practicing.",
   "why_it_mattered_adult": "Samuel’s program combined search (looking ahead several moves) with a learned evaluation function tuned from experience, a recipe that runs through TD-Gammon and AlphaGo. His work is a landmark in both machine learning and reinforcement learning.",
   "thinking_move": "If you can’t write down how to play well, write down how to score a position, and let the machine tune the scoring from its own games.",
   "deeper_dive": [
    "Samuel chose checkers because it is simple enough for 1950s computers yet too deep to solve by brute force. His program looked a few moves ahead and scored the resulting positions with a weighted formula: count pieces, kings, mobility and so on. The question was how to choose the weights.",
    "His answer was learning. The program memorized positions it had already evaluated (“rote learning”) and adjusted its formula so that its quick scores agreed better with what it found by looking further ahead. Versions of the program played against each other, with the better one kept. The machine’s playing strength grew beyond its author’s, which surprised many people who assumed computers could only ever be as good as their programmers.",
    "Samuel is often quoted as defining machine learning as giving computers “the ability to learn without being explicitly programmed”, but that exact sentence does not appear in his 1959 paper; it is a later paraphrase. His real legacy is the working demonstration. A widely reported 1962 game against a human player was billed as a win over a strong opponent, though experts note the opponent was not a top champion, an early example of AI results being a little oversold."
   ],
   "sources": [
    {
     "title": "Samuel (1959), Some Studies in Machine Learning Using the Game of Checkers, IBM Journal of Research and Development",
     "url": "https://doi.org/10.1147/rd.33.0210"
    },
    {
     "title": "Samuel (1959), readable copy (MIT CSAIL)",
     "url": "https://people.csail.mit.edu/brooks/idocs/Samuel.pdf"
    }
   ],
   "watch": [
    {
     "title": "Machine Learning & Artificial Intelligence: Crash Course Computer Science #34",
     "channel": "CrashCourse",
     "url": "https://www.youtube.com/watch?v=z-EtmaFJieY"
    }
   ],
   "read": [
    {
     "title": "The Master Algorithm",
     "author": "Pedro Domingos",
     "year": 2015,
     "isbn13": "9780465065707",
     "url": "https://www.amazon.com/s?k=9780465065707",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "games",
    "learning"
   ]
  },
  {
   "id": "eliza-1966",
   "year": 1966,
   "date": "1966-01",
   "title": "ELIZA, the first chatbot, fools its users",
   "people": [
    {
     "name": "Joseph Weizenbaum",
     "role": "MIT computer scientist who created ELIZA and later became a critic of AI"
    }
   ],
   "track": "branch-symbolic-ai",
   "era": "first-wave",
   "what_happened": "Joseph Weizenbaum published ELIZA, a program that chatted by typed text. Its most famous script, DOCTOR, imitated a therapist by spotting keywords and turning the user’s sentences back into questions. Many users felt understood, even though the program understood nothing.",
   "why_it_mattered_kid": "ELIZA showed that people will believe a machine understands them even when it is only using simple tricks, which is worth remembering when talking to any chatbot.",
   "why_it_mattered_adult": "ELIZA was the first widely known chatbot and gave its name to the “ELIZA effect”: our tendency to attribute understanding to systems that produce human-like text. Weizenbaum’s ethical alarm anticipates today’s debates about AI companions.",
   "thinking_move": "Before crediting a system with understanding, ask how much of the “intelligence” is actually being supplied by the person reading its output.",
   "deeper_dive": [
    "ELIZA worked by pattern matching. If you typed “I am sad about my mother”, it might find the keyword “mother” and reply “Tell me more about your family”, or reflect your words back: “Why are you sad about your mother?” Weizenbaum chose a therapist script because that kind of conversation lets the listener say very little of substance without seeming strange. The name came from Eliza Doolittle, the character in Pygmalion who learns to speak like an aristocrat.",
    "The surprise was how people reacted. Weizenbaum later wrote that his secretary, who knew exactly how the program worked, asked him to leave the room so she could talk to it privately. Some psychiatrists even suggested such programs could one day provide therapy at scale.",
    "That reaction disturbed Weizenbaum, who had fled Nazi Germany with his family as a teenager and cared deeply about human dignity. He spent much of the rest of his career warning against handing human judgment to machines, most famously in his 1976 book Computer Power and Human Reason. ELIZA is now a standard example in discussions of chatbots, trust and over-attribution."
   ],
   "sources": [
    {
     "title": "Weizenbaum (1966), ELIZA — A Computer Program for the Study of Natural Language Communication Between Man and Machine, Communications of the ACM",
     "url": "https://doi.org/10.1145/365153.365168"
    }
   ],
   "watch": [
    {
     "title": "ITS, Eliza & MiT's AI Lab - Computerphile",
     "channel": "Computerphile",
     "url": "https://www.youtube.com/watch?v=tJMqVauWsjk"
    },
    {
     "title": "Eliza — Please tell me your problem (Bits and Bytes, Episode 7)",
     "channel": "Bits and Bytes TVO",
     "url": "https://www.youtube.com/watch?v=4sngIh0YJtk"
    }
   ],
   "read": [
    {
     "title": "Machines Who Think (2nd ed.)",
     "author": "Pamela McCorduck",
     "year": 2004,
     "isbn13": "9781568812052",
     "url": "https://www.amazon.com/s?k=9781568812052",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "chatbots",
    "language",
    "ethics"
   ]
  },
  {
   "id": "perceptrons-1969",
   "year": 1969,
   "title": "Perceptrons: the book that chilled neural nets",
   "people": [
    {
     "name": "Marvin Minsky",
     "role": "MIT AI pioneer and co-author of Perceptrons"
    },
    {
     "name": "Seymour Papert",
     "role": "MIT mathematician and educator, co-author of Perceptrons"
    }
   ],
   "track": "05-the-fake-neuron",
   "era": "first-wave",
   "what_happened": "Marvin Minsky and Seymour Papert published Perceptrons, a careful mathematical analysis proving that single-layer perceptrons cannot learn certain simple-sounding patterns. The best-known example is XOR (“one or the other, but not both”). The book contributed to a sharp drop in neural-network research and funding in the 1970s.",
   "why_it_mattered_kid": "Two famous scientists proved that a single layer of fake neurons can’t learn some easy-looking patterns, and many people stopped working on neural networks for years.",
   "why_it_mattered_adult": "The limits proven apply to single-layer perceptrons; multi-layer networks can represent XOR easily, but in 1969 nobody had a practical way to train them. The book’s influence shows how a correct but narrow result can be read as a much broader verdict.",
   "thinking_move": "Find the smallest example a method cannot handle, then prove exactly why; and when reading such proofs, check carefully what they do and don’t cover.",
   "deeper_dive": [
    "A single perceptron draws one straight line (or flat plane) to separate “yes” examples from “no” examples. XOR puts the yes-cases on opposite corners of a square, so no single straight line can split them. Minsky and Papert went much further than XOR, proving that perceptrons of this kind would need impractically large resources to recognize properties like whether a shape is connected.",
    "The book acknowledged multi-layer networks but expressed doubt that extending the approach would prove fruitful, calling it an important research problem to confirm or reject that intuition. Combined with the hype that had surrounded perceptrons and a broader cooling of AI funding, the effect was that neural networks became an unfashionable topic for more than a decade.",
    "The story has a personal edge: Minsky and Rosenblatt had both attended the Bronx High School of Science and were rivals representing different visions of AI. Papert went on to co-create the Logo programming language and spent decades helping children learn by programming. When backpropagation made multi-layer networks trainable in the 1980s, the authors released an expanded 1988 edition responding to the new work, and debate about the book’s role continues."
   ],
   "sources": [
    {
     "title": "Perceptrons: An Introduction to Computational Geometry (Minsky & Papert; MIT Press reissue, 2017)",
     "url": "https://doi.org/10.7551/mitpress/11301.001.0001"
    }
   ],
   "watch": [
    {
     "title": "But what is a neural network? | Deep learning chapter 1",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=aircAruvnKk"
    }
   ],
   "read": [
    {
     "title": "Perceptrons (Expanded Edition)",
     "author": "Marvin Minsky and Seymour Papert",
     "year": 1988,
     "isbn13": "9780262631112",
     "url": "https://www.amazon.com/s?k=9780262631112",
     "kid_friendly": false
    },
    {
     "title": "Why Machines Learn: The Elegant Math Behind Modern AI",
     "author": "Anil Ananthaswamy",
     "year": 2024,
     "isbn13": "9780593185742",
     "url": "https://www.amazon.com/s?k=9780593185742",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "neurons",
    "limits",
    "ai winter"
   ]
  },
  {
   "id": "linnainmaa-1970",
   "year": 1970,
   "title": "Linnainmaa finds the backward shortcut for derivatives",
   "people": [
    {
     "name": "Seppo Linnainmaa",
     "role": "Finnish computer scientist who described reverse-mode automatic differentiation"
    }
   ],
   "track": "06-blame-flows-backward",
   "era": "first-wave",
   "what_happened": "In his 1970 master’s thesis at the University of Helsinki, Seppo Linnainmaa described a way to compute how a long calculation’s final result depends on every single step, by working backward through the computation once. He published it in English in 1976. This method, reverse-mode automatic differentiation, is the mathematical engine of backpropagation.",
   "why_it_mattered_kid": "Linnainmaa found a fast way to figure out how much each step of a giant calculation is “to blame” for the answer, which is how neural networks learn.",
   "why_it_mattered_adult": "Reverse-mode autodiff computes the gradient of a scalar output with respect to all inputs at a cost comparable to one forward pass. PyTorch’s autograd and Karpathy’s micrograd implement exactly this idea.",
   "thinking_move": "Instead of asking “if I change this input, what happens to the output?” separately for each input, start at the output and pass sensitivity backward through every step once.",
   "deeper_dive": [
    "Linnainmaa was not thinking about neural networks. His problem was rounding errors: computers store numbers with limited precision, and in a long calculation tiny errors pile up. To estimate the total effect, you need to know how sensitive the final result is to each intermediate step. Computing that one step at a time would be slow.",
    "His insight was to record the computation as a chain of simple operations and then sweep backward from the end, applying the chain rule of calculus at each step. One backward pass gives the sensitivity of the output to every intermediate value. This is exactly what neural networks need to learn: how much each weight contributed to the error.",
    "The thesis was written in Finnish and stayed largely unknown in the neural-network world. Other researchers, including Paul Werbos and later Rumelhart, Hinton and Williams, developed or rediscovered the idea for learning, and historians of the field have since pointed back to Linnainmaa as its earliest clear modern statement. It is a good example of a key idea hiding in a neighboring field for years."
   ],
   "sources": [
    {
     "title": "Linnainmaa (1976), Taylor Expansion of the Accumulated Rounding Error, BIT Numerical Mathematics",
     "url": "https://doi.org/10.1007/BF01931367"
    }
   ],
   "watch": [
    {
     "title": "The spelled-out intro to neural networks and backpropagation: building micrograd",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=VMj-3S1tku0"
    },
    {
     "title": "Backpropagation calculus | Deep Learning Chapter 4",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=tIeHLnjs5U8"
    }
   ],
   "read": [],
   "kid_friendly": false,
   "tags": [
    "calculus",
    "backpropagation"
   ]
  },
  {
   "id": "lighthill-1973",
   "year": 1973,
   "title": "The Lighthill report and the first AI winter",
   "people": [
    {
     "name": "James Lighthill",
     "role": "Applied mathematician who wrote the critical review of AI for the UK government"
    }
   ],
   "track": "branch-symbolic-ai",
   "era": "first-wave",
   "what_happened": "The UK’s Science Research Council asked the applied mathematician Sir James Lighthill to review AI research. His 1973 report concluded that the field had failed to deliver on its grand promises, largely because of the “combinatorial explosion” of possibilities in real-world problems. UK funding for AI was sharply cut, and together with US funding cuts this began the first “AI winter”.",
   "why_it_mattered_kid": "When AI didn’t live up to big promises, governments stopped paying for it, and the field went through a long cold spell.",
   "why_it_mattered_adult": "The report crystallized skepticism after the optimism of the 1950s and 60s. The resulting funding retreat, often dated roughly 1974–1980, is the classic example of how over-promising leads to backlash.",
   "thinking_move": "Ask what happens to a method when the problem gets ten times bigger; a demo that works on toy problems may collapse under combinatorial explosion.",
   "deeper_dive": [
    "By the early 1970s AI programs could prove theorems, solve puzzles and talk about blocks on a table, but they struggled outside small, tidy worlds. Lighthill, an outsider famous for work on fluid dynamics, divided AI into three areas: advanced automation, computer-based studies of the nervous system, and the “bridge” between them, such as general-purpose robots. He judged that the bridge category had made disappointing progress.",
    "His central technical complaint was combinatorial explosion: when a program searches through possible actions, the number of possibilities grows so fast that real-world problems become impossible. He doubted general methods would ever overcome it.",
    "The report was publicly debated in a televised 1973 discussion at the Royal Institution in London, where Lighthill faced AI researchers including Donald Michie and John McCarthy. In the US, funders were also pulling back after disappointing results. AI researchers often argue that Lighthill was unfair, but the episode taught the field a lasting lesson about hype. Notably, the solution to combinatorial explosion that eventually worked — learning from vast amounts of data — was barely on the table in 1973."
   ],
   "sources": [
    {
     "title": "Lighthill (1973), Artificial Intelligence: A General Survey (Chilton Computing archive)",
     "url": "https://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/contents.htm"
    }
   ],
   "watch": [],
   "read": [
    {
     "title": "Machines Who Think (2nd ed.)",
     "author": "Pamela McCorduck",
     "year": 2004,
     "isbn13": "9781568812052",
     "url": "https://www.amazon.com/s?k=9781568812052",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "ai winter",
    "funding",
    "hype"
   ]
  },
  {
   "id": "werbos-1974",
   "year": 1974,
   "title": "Werbos proposes backpropagation for neural networks",
   "people": [
    {
     "name": "Paul Werbos",
     "role": "Harvard PhD student who proposed training multi-layer networks with backward derivatives"
    }
   ],
   "track": "06-blame-flows-backward",
   "era": "winters",
   "what_happened": "In his 1974 Harvard PhD thesis, Paul Werbos described how to compute derivatives backward through a network of calculations and use them to train models, including multi-layer neural networks. Few people noticed during the AI winter; the method became famous only after 1986.",
   "why_it_mattered_kid": "Werbos had the key idea for training deep neural networks more than ten years before the world paid attention.",
   "why_it_mattered_adult": "Werbos connected reverse-mode differentiation to learning in multi-layer networks, the exact combination that later became “backpropagation”. His 1974 thesis is often cited as the first proposal to train neural networks this way.",
   "thinking_move": "Combine two ideas from different worlds — efficient backward derivatives and adjustable networks — and you get a learning algorithm neither field had on its own.",
   "deeper_dive": [
    "Werbos was interested in prediction in the social sciences and in how intelligent systems might learn. He saw that if a model is a network of simple calculations, the chain rule lets you send a signal backward from the error to every adjustable parameter, telling each one how to change. His thesis was titled “Beyond Regression: New Tools for Prediction and Analysis in the Behavioral Sciences.”",
    "The timing was terrible. Perceptrons had made neural networks unfashionable, and funding for AI was drying up. Werbos has said he found it hard to get people interested, and the idea stayed obscure. He later wrote that part of his inspiration came from thinking about how signals might flow backward in the mind, drawing loosely on ideas from psychology.",
    "Werbos kept working on the idea, extending it to networks that run over time (“backpropagation through time”), and later spent many years as a program director at the US National Science Foundation funding research. His work was collected in the 1994 book The Roots of Backpropagation. Today he is widely credited, alongside Linnainmaa and the 1986 team, as a key figure in the method’s history."
   ],
   "sources": [
    {
     "title": "Werbos (1990), Backpropagation Through Time: What It Does and How to Do It, Proceedings of the IEEE",
     "url": "https://doi.org/10.1109/5.58337"
    }
   ],
   "watch": [
    {
     "title": "Backpropagation, intuitively | Deep Learning Chapter 3",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=Ilg3gGewQ5U"
    }
   ],
   "read": [
    {
     "title": "The Roots of Backpropagation",
     "author": "Paul J. Werbos",
     "year": 1994,
     "isbn13": "9780471598978",
     "url": "https://www.amazon.com/s?k=9780471598978",
     "kid_friendly": false
    }
   ],
   "kid_friendly": false,
   "tags": [
    "backpropagation",
    "learning"
   ]
  },
  {
   "id": "salton-1975",
   "year": 1975,
   "date": "1975-11",
   "title": "Salton turns documents into arrows in space",
   "people": [
    {
     "name": "Gerard Salton",
     "role": "Cornell computer scientist who pioneered information retrieval"
    }
   ],
   "track": "02-numbers-that-mean-things",
   "era": "winters",
   "what_happened": "Gerard Salton, with A. Wong and C. S. Yang, published “A Vector Space Model for Automatic Indexing”. Each document and each search query became a list of numbers (a vector), one per word, and the best search results were the documents whose vectors pointed in the most similar direction to the query.",
   "why_it_mattered_kid": "Salton showed that if you turn words and documents into lists of numbers, a computer can find things that are “close in meaning” by measuring which arrows point the same way.",
   "why_it_mattered_adult": "The vector space model made similarity a geometric quantity (cosine of the angle between vectors). It underlies classic search engines and anticipates dense embeddings, vector databases and retrieval-augmented generation.",
   "thinking_move": "Represent things as points in a space, so that “how similar are these?” becomes “how close are these points?” — a question geometry can answer.",
   "deeper_dive": [
    "Libraries and early computer systems searched by exact keywords: a document either matched or it didn’t. Salton’s group at Cornell, working on a retrieval system called SMART since the 1960s, wanted ranked results: the most relevant documents first. Their solution was to give each document a long list of numbers, one slot per vocabulary word, recording how important that word is in that document.",
    "Once documents are vectors, a query is a vector too, and relevance becomes geometry. Two documents about the same topic use similar words, so their vectors point in similar directions; the cosine of the angle between them gives a similarity score. The 1975 paper became the classic statement of this approach, which Salton’s group had been developing for years.",
    "Salton, born in Germany in 1927, is often called a father of information retrieval. His vectors had one dimension per word and treated every word as unrelated to every other. A few decades later, word2vec and neural networks would learn much smaller vectors in which related words land near each other, but the core idea — meaning as position in space — starts here."
   ],
   "sources": [
    {
     "title": "Salton, Wong & Yang (1975), A Vector Space Model for Automatic Indexing, Communications of the ACM",
     "url": "https://doi.org/10.1145/361219.361220"
    }
   ],
   "watch": [
    {
     "title": "Vectors | Chapter 1, Essence of linear algebra",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=fNk_zzaMoSs"
    }
   ],
   "read": [],
   "kid_friendly": true,
   "tags": [
    "vectors",
    "search"
   ]
  },
  {
   "id": "neocognitron-1980",
   "year": 1980,
   "title": "The Neocognitron: a network built like an eye",
   "people": [
    {
     "name": "Kunihiko Fukushima",
     "role": "Engineer at NHK's research labs in Tokyo who designed the Neocognitron"
    },
    {
     "name": "David Hubel",
     "role": "Neuroscientist whose cat-vision experiments inspired it"
    },
    {
     "name": "Torsten Wiesel",
     "role": "Neuroscientist and Hubel's long-time research partner"
    }
   ],
   "track": "branch-vision",
   "era": "winters",
   "what_happened": "Kunihiko Fukushima published the Neocognitron, a layered neural network for recognizing handwritten shapes. Early layers detected small local features like short lines; later layers combined them into bigger patterns, so a shape could be recognized even if it moved a little. The design copied what Hubel and Wiesel had found inside the visual cortex of cats.",
   "why_it_mattered_kid": "It was the first network built like the layers of your own eye-and-brain system, and today's photo-recognizing AIs still use the same basic plan.",
   "why_it_mattered_adult": "The Neocognitron introduced the core architecture of convolutional networks: stacks of local feature detectors with shared weights, alternating with pooling-like stages that add tolerance to shifts. It lacked backpropagation training, which LeCun later added.",
   "thinking_move": "Borrow the blueprint from biology: if the brain solves a problem in layers of simple detectors, build a machine with the same layers.",
   "deeper_dive": [
    "The story starts in 1959 at Johns Hopkins, where David Hubel and Torsten Wiesel recorded electrical signals from single neurons in a cat's visual cortex while showing the cat simple images. For a long time nothing worked. As Hubel later told it, a cell finally fired furiously when they slid a glass slide into the projector and the faint edge of the slide swept across the screen. The cell wasn't responding to spots of light at all; it cared about edges at a particular angle.",
    "Over the next few years they mapped 'simple cells' that respond to an edge at one angle in one spot, and 'complex cells' that respond to the same edge anywhere in a small region. Their papers in 1959 and 1962 suggested vision is built in layers, from simple pieces to more complex ones. They shared the 1981 Nobel Prize in Physiology or Medicine for this work.",
    "Kunihiko Fukushima, working at the research labs of Japan's public broadcaster NHK, turned that idea into a machine. His Neocognitron (1980) alternated layers of 'S-cells' (feature detectors) and 'C-cells' (which blur over position), directly naming them after Hubel and Wiesel's simple and complex cells. It could recognize handwritten digits even when they were shifted or slightly distorted.",
    "What it didn't have was a good way to learn all its layers at once from labeled examples. It used a self-organizing rule instead. A decade later Yann LeCun combined Fukushima-style layers with backpropagation, and that combination became the convolutional neural network that eventually beat everything else at seeing."
   ],
   "sources": [
    {
     "title": "Fukushima (1980), Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position",
     "url": "https://doi.org/10.1007/BF00344251"
    },
    {
     "title": "Hubel & Wiesel (1959), Receptive fields of single neurones in the cat's striate cortex",
     "url": "https://doi.org/10.1113/jphysiol.1959.sp006308"
    },
    {
     "title": "Hubel & Wiesel (1962), Receptive fields, binocular interaction and functional architecture in the cat's visual cortex",
     "url": "https://doi.org/10.1113/jphysiol.1962.sp006837"
    }
   ],
   "watch": [
    {
     "title": "But what is a convolution?",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=KuXjwB4LzSA"
    },
    {
     "title": "Learning To See [Part 1: Introduction]",
     "channel": "Welch Labs",
     "url": "https://www.youtube.com/watch?v=i8D90DkCLhI"
    }
   ],
   "read": [
    {
     "title": "Artificial Intelligence: A Guide for Thinking Humans",
     "author": "Melanie Mitchell",
     "year": 2019,
     "isbn13": "9780374257835",
     "url": "https://www.amazon.com/s?k=9780374257835",
     "kid_friendly": false
    },
    {
     "title": "Understanding Deep Learning",
     "author": "Simon J. D. Prince",
     "year": 2023,
     "isbn13": "9780262048644",
     "url": "https://www.amazon.com/s?k=9780262048644",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "vision",
    "brain",
    "convolution"
   ]
  },
  {
   "id": "hopfield-1982",
   "year": 1982,
   "title": "Hopfield networks: memories as valleys",
   "people": [
    {
     "name": "John Hopfield",
     "role": "Physicist at Caltech who proposed the network"
    }
   ],
   "track": "branch-memory-networks",
   "era": "winters",
   "what_happened": "Physicist John Hopfield showed that a network of simple on/off neurons, all connected to each other, can store memories. Give it a damaged or partial pattern and it settles step by step into the closest stored memory. He described this with an 'energy' that always goes down, like a ball rolling into the nearest valley.",
   "why_it_mattered_kid": "It showed how a brain-like network could remember a whole picture from just a piece of it, the way a few notes can bring back a whole song.",
   "why_it_mattered_adult": "Hopfield recast neural computation as energy minimization, importing tools from the physics of magnetic materials (spin glasses). It made 'associative' or content-addressable memory precise and helped draw physicists into neural network research during a period when the field was out of fashion.",
   "thinking_move": "Turn a computing problem into a physics problem: if memories are low points in an energy landscape, recalling is just rolling downhill.",
   "deeper_dive": [
    "In the early 1980s, neural networks were unfashionable. Minsky and Papert's book had cooled interest, and AI funding mostly went to rule-based expert systems. John Hopfield came from a different world: condensed-matter physics, where researchers studied how huge numbers of tiny magnetic spins push and pull on each other until the whole material settles into a stable state.",
    "Hopfield noticed that a network of neurons connected in both directions looks a lot like those spin systems. If you set the connection strengths using a simple rule (strengthen connections between neurons that are active together), each stored pattern becomes a low point, a valley, in an energy landscape. Start the network anywhere nearby, let each neuron update to lower the energy, and it slides into the stored memory. That means you can look up a memory by its content instead of by an address, which is how your own memory seems to work.",
    "His 1982 paper in the Proceedings of the National Academy of Sciences was short, clear, and written so physicists could follow it. It gave the field a new vocabulary and a new kind of respectability. It also had limits: a Hopfield network can only store a modest number of patterns before memories blur into each other.",
    "Forty-two years later, in 2024, Hopfield shared the Nobel Prize in Physics with Geoffrey Hinton 'for foundational discoveries and inventions that enable machine learning with artificial neural networks.'"
   ],
   "sources": [
    {
     "title": "Hopfield (1982), Neural networks and physical systems with emergent collective computational abilities",
     "url": "https://doi.org/10.1073/pnas.79.8.2554"
    },
    {
     "title": "The Nobel Prize in Physics 2024: press release",
     "url": "https://www.nobelprize.org/prizes/physics/2024/press-release/"
    }
   ],
   "watch": [
    {
     "title": "Hopfield network: How are memories stored in neural networks? [Nobel Prize in Physics 2024]  #SoME2",
     "channel": "Layerwise Lectures",
     "url": "https://www.youtube.com/watch?v=piF6D6CQxUw"
    },
    {
     "title": "Nobel Prize lecture: John J. Hopfield, Nobel Prize in Physics 2024",
     "channel": "Nobel Prize",
     "url": "https://www.youtube.com/watch?v=8SffhDk4mdU"
    }
   ],
   "read": [
    {
     "title": "Why Machines Learn: The Elegant Math Behind Modern AI",
     "author": "Anil Ananthaswamy",
     "year": 2024,
     "isbn13": "9780593185742",
     "url": "https://www.amazon.com/s?k=9780593185742",
     "kid_friendly": false
    },
    {
     "title": "The Deep Learning Revolution",
     "author": "Terrence J. Sejnowski",
     "year": 2018,
     "isbn13": "9780262038034",
     "url": "https://www.amazon.com/s?k=9780262038034",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "memory",
    "physics",
    "energy"
   ]
  },
  {
   "id": "boltzmann-machine-1985",
   "year": 1985,
   "title": "The Boltzmann machine learns to dream up data",
   "people": [
    {
     "name": "David Ackley",
     "role": "Co-author; graduate student at Carnegie Mellon"
    },
    {
     "name": "Geoffrey Hinton",
     "role": "Co-inventor of the Boltzmann machine"
    },
    {
     "name": "Terrence Sejnowski",
     "role": "Co-inventor of the Boltzmann machine"
    }
   ],
   "track": "branch-memory-networks",
   "era": "winters",
   "what_happened": "Ackley, Hinton and Sejnowski published a learning rule for the Boltzmann machine, a Hopfield-style network with added randomness and 'hidden' neurons. Instead of storing a few exact memories, it learned the overall patterns in a set of examples, so it could fill in missing pieces and generate new examples that looked like the training data.",
   "why_it_mattered_kid": "It was one of the first machines that could learn what a whole kind of thing looks like and then imagine new examples of it.",
   "why_it_mattered_adult": "The Boltzmann machine was an early generative model: it learned a probability distribution using hidden units, with a learning rule borrowed from statistical physics. Its stripped-down cousin, the restricted Boltzmann machine, powered the 2006 deep learning revival, and the work was cited in Hinton's 2024 Nobel Prize.",
   "thinking_move": "Add controlled randomness: letting a network jiggle like hot molecules helps it escape bad answers and explore what's likely.",
   "deeper_dive": [
    "Hopfield networks always roll straight downhill, so they can get stuck in shallow valleys that aren't the best answer. Hinton and Sejnowski borrowed a fix from 19th-century physicist Ludwig Boltzmann, who described how heat makes particles jiggle randomly. In their network each neuron turns on or off with a probability, controlled by a 'temperature.' Shake things up at first, then cool down, and the network tends to find deeper valleys.",
    "The big step was adding hidden neurons, units that are not part of the input or output. Hidden units can invent their own features to explain the data. The 1985 paper gave a surprisingly simple learning rule: compare how often pairs of neurons are on together when the network is looking at real data versus when it is running freely, and nudge each connection to make the free-running 'dreams' look more like reality.",
    "The catch was speed. The rule needed the network to run for a long time to reach equilibrium, so training was painfully slow on 1980s computers. A year later, backpropagation offered a faster way to train hidden units for many tasks, and attention shifted there.",
    "But the idea did not die. Hinton kept working on a simplified 'restricted' version, which in 2006 became the key ingredient of deep belief networks. When the 2024 Nobel Prize in Physics was announced, the committee singled out the Boltzmann machine as Hinton's contribution."
   ],
   "sources": [
    {
     "title": "Ackley, Hinton & Sejnowski (1985), A Learning Algorithm for Boltzmann Machines",
     "url": "https://doi.org/10.1207/s15516709cog0901_7"
    },
    {
     "title": "The Nobel Prize in Physics 2024: press release",
     "url": "https://www.nobelprize.org/prizes/physics/2024/press-release/"
    }
   ],
   "watch": [
    {
     "title": "Nobel Prize lecture: Geoffrey Hinton, Nobel Prize in Physics",
     "channel": "Nobel Prize",
     "url": "https://www.youtube.com/watch?v=XDE9DjpcSdI"
    }
   ],
   "read": [
    {
     "title": "The Deep Learning Revolution",
     "author": "Terrence J. Sejnowski",
     "year": 2018,
     "isbn13": "9780262038034",
     "url": "https://www.amazon.com/s?k=9780262038034",
     "kid_friendly": false
    },
    {
     "title": "Genius Makers",
     "author": "Cade Metz",
     "year": 2021,
     "isbn13": "9781524742676",
     "url": "https://www.amazon.com/s?k=9781524742676",
     "kid_friendly": false
    }
   ],
   "kid_friendly": false,
   "tags": [
    "generative",
    "physics",
    "probability"
   ]
  },
  {
   "id": "backprop-1986",
   "year": 1986,
   "date": "1986-10-09",
   "title": "Backpropagation goes mainstream",
   "people": [
    {
     "name": "David Rumelhart",
     "role": "Cognitive scientist at UC San Diego; lead author"
    },
    {
     "name": "Geoffrey Hinton",
     "role": "Co-author, then at Carnegie Mellon"
    },
    {
     "name": "Ronald J. Williams",
     "role": "Co-author and researcher in learning algorithms"
    }
   ],
   "track": "06-blame-flows-backward",
   "era": "winters",
   "what_happened": "A short paper in Nature, 'Learning representations by back-propagating errors,' showed how to train networks with hidden layers: measure the error at the output, then pass blame backward through the network to work out how much each connection should change. The hidden neurons learned useful features nobody had programmed into them.",
   "why_it_mattered_kid": "It gave networks a way to figure out which of their millions of tiny knobs caused a mistake, which is how almost every AI learns today.",
   "why_it_mattered_adult": "Backpropagation is reverse-mode differentiation applied to neural networks. It had been derived earlier (Linnainmaa 1970, Werbos 1974), but this paper, plus the companion 'Parallel Distributed Processing' volumes, demonstrated that it made hidden layers learn meaningful internal representations, answering the Minsky–Papert objection that nobody knew how to train multilayer networks.",
   "thinking_move": "Follow the blame backward: work out each part's share of the final error using the chain rule, starting from the end.",
   "deeper_dive": [
    "Ever since Minsky and Papert's 1969 book, everyone knew single-layer perceptrons were limited and that networks with hidden layers could, in principle, do more. The problem was training: if the network gets an answer wrong, which of the hidden connections deserves the blame? This was called the credit assignment problem, and for years it looked hopeless.",
    "The math to solve it already existed. Seppo Linnainmaa described reverse-mode automatic differentiation in 1970, and Paul Werbos proposed using it to train neural networks in his 1974 thesis. Others, including David Parker and Yann LeCun, found versions of it too. But the idea hadn't caught on. What Rumelhart, Hinton and Williams added was a clear, convincing demonstration in a prominent journal.",
    "The surprise was what the hidden layers learned. In one example, a network learned family relationships from two family trees (one English, one Italian). Looking inside, the researchers found hidden units that had invented features like nationality and generation, even though nobody had told the network those concepts existed. Learning wasn't just memorizing; the network was building its own internal descriptions.",
    "The 1986 paper, together with the two-volume 'Parallel Distributed Processing' books from Rumelhart, McClelland and their research group, set off a wave of excitement about 'connectionism.' The excitement faded in the 1990s when deeper networks proved hard to train, but every modern network, including GPT, still learns with backpropagation."
   ],
   "sources": [
    {
     "title": "Rumelhart, Hinton & Williams (1986), Learning representations by back-propagating errors, Nature 323",
     "url": "https://doi.org/10.1038/323533a0"
    },
    {
     "title": "Author's copy of the 1986 Nature paper (University of Toronto)",
     "url": "https://www.cs.toronto.edu/~hinton/absps/naturebp.pdf"
    }
   ],
   "watch": [
    {
     "title": "Backpropagation, intuitively | Deep Learning Chapter 3",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=Ilg3gGewQ5U"
    },
    {
     "title": "Backpropagation calculus | Deep Learning Chapter 4",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=tIeHLnjs5U8"
    },
    {
     "title": "The spelled-out intro to neural networks and backpropagation: building micrograd",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=VMj-3S1tku0"
    }
   ],
   "read": [
    {
     "title": "Make Your Own Neural Network",
     "author": "Tariq Rashid",
     "year": 2016,
     "isbn13": "9781530826605",
     "url": "https://www.amazon.com/s?k=9781530826605",
     "kid_friendly": true
    },
    {
     "title": "Why Machines Learn: The Elegant Math Behind Modern AI",
     "author": "Anil Ananthaswamy",
     "year": 2024,
     "isbn13": "9780593185742",
     "url": "https://www.amazon.com/s?k=9780593185742",
     "kid_friendly": false
    },
    {
     "title": "Genius Makers",
     "author": "Cade Metz",
     "year": 2021,
     "isbn13": "9781524742676",
     "url": "https://www.amazon.com/s?k=9781524742676",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "learning",
    "calculus",
    "backpropagation"
   ]
  },
  {
   "id": "lecun-convnet-1989",
   "year": 1989,
   "title": "A convolutional network learns to read zip codes",
   "people": [
    {
     "name": "Yann LeCun",
     "role": "Researcher at AT&T Bell Labs; lead author"
    },
    {
     "name": "Léon Bottou",
     "role": "Co-author of the 1998 LeNet paper"
    },
    {
     "name": "Yoshua Bengio",
     "role": "Co-author of the 1998 LeNet paper"
    }
   ],
   "track": "branch-vision",
   "era": "winters",
   "what_happened": "At AT&T Bell Labs, Yann LeCun and colleagues trained a convolutional neural network with backpropagation to read handwritten zip-code digits from real U.S. mail. The network learned its own feature detectors instead of having them designed by hand. By 1998 the improved 'LeNet' design was part of systems that read handwritten bank checks.",
   "why_it_mattered_kid": "It was one of the first times a neural network did a real job in the world, reading messy handwriting on envelopes and checks.",
   "why_it_mattered_adult": "LeCun combined Fukushima-style local receptive fields and weight sharing with end-to-end gradient training, producing the convolutional neural network (CNN). The 1998 paper also introduced the MNIST-era benchmark culture and showed a trainable system deployed commercially.",
   "thinking_move": "Build the known structure of the problem into the network: a feature that's useful in one part of an image is useful everywhere, so reuse the same weights across the whole picture.",
   "deeper_dive": [
    "Handwriting is wildly varied: everyone's 7 looks a little different, and digits on envelopes are shifted, slanted and smudged. Hand-written rules for recognizing them broke constantly. LeCun's insight was to let the network learn the features itself, but to give it a smart shape. Each neuron in an early layer looks at only a small patch of the image, and all neurons in a layer share the same weights, so a 'slanted stroke detector' works anywhere in the picture.",
    "Sharing weights also slashed the number of numbers to learn, which mattered a lot with the small datasets and slow computers of 1989. The network was trained on zip codes from envelopes provided by the U.S. Postal Service, and it learned with the backpropagation algorithm that had just become popular.",
    "Over the next decade the team refined the design. Their 1998 paper, 'Gradient-based learning applied to document recognition,' described LeNet-5 and a full check-reading system. The paper reports that the deployed system was reading several million checks per day.",
    "Then neural networks fell out of fashion again. For most of the 2000s, many vision researchers preferred hand-designed features and support vector machines. LeCun kept working on convolutional nets anyway. When bigger data and GPUs arrived, his design was ready, and AlexNet in 2012 was essentially a much larger LeNet."
   ],
   "sources": [
    {
     "title": "LeCun et al. (1989), Backpropagation Applied to Handwritten Zip Code Recognition",
     "url": "https://doi.org/10.1162/neco.1989.1.4.541"
    },
    {
     "title": "LeCun, Bottou, Bengio & Haffner (1998), Gradient-based learning applied to document recognition",
     "url": "https://doi.org/10.1109/5.726791"
    }
   ],
   "watch": [
    {
     "title": "But what is a convolution?",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=KuXjwB4LzSA"
    },
    {
     "title": "Learning To See [Part 1: Introduction]",
     "channel": "Welch Labs",
     "url": "https://www.youtube.com/watch?v=i8D90DkCLhI"
    }
   ],
   "read": [
    {
     "title": "Understanding Deep Learning",
     "author": "Simon J. D. Prince",
     "year": 2023,
     "isbn13": "9780262048644",
     "url": "https://www.amazon.com/s?k=9780262048644",
     "kid_friendly": false
    },
    {
     "title": "Artificial Intelligence: A Guide for Thinking Humans",
     "author": "Melanie Mitchell",
     "year": 2019,
     "isbn13": "9780374257835",
     "url": "https://www.amazon.com/s?k=9780374257835",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "vision",
    "convolution",
    "handwriting"
   ]
  },
  {
   "id": "elman-1990",
   "year": 1990,
   "title": "Elman's network finds structure in time",
   "people": [
    {
     "name": "Jeffrey Elman",
     "role": "Cognitive scientist and linguist at UC San Diego"
    }
   ],
   "track": "09-memory-problems",
   "era": "winters",
   "what_happened": "Jeffrey Elman published 'Finding Structure in Time,' describing a simple recurrent network: at each step, the network's hidden layer gets a copy of its own previous state as extra input. Trained only to predict the next word in simple sentences, it discovered on its own that words fall into groups like nouns and verbs.",
   "why_it_mattered_kid": "It gave a network a short-term memory, so it could read words one at a time and remember what came before, like you do when you read a sentence.",
   "why_it_mattered_adult": "Elman's simple recurrent network (SRN) showed that next-word prediction alone can force a network to learn grammatical categories and semantic groupings, an early, small-scale version of the bet that later drove language models. It also exposed how hard it is for such networks to carry information over long gaps.",
   "thinking_move": "Feed the past back in: give the network a copy of its own last thought, and it gains memory without anyone designing one.",
   "deeper_dive": [
    "Language happens in time. A word's meaning depends on what came before, and sentences can be any length. But the standard networks of the 1980s took a fixed-size input all at once. Some researchers tried giving the network a big window of words, but that meant deciding in advance how far back to look.",
    "Elman's fix was simple. At each time step, copy the hidden layer into a set of 'context units,' and feed those back in alongside the next input. Now the network's state carries a trace of everything it has seen. (Michael Jordan had proposed a related design a few years earlier that fed back the output instead.)",
    "The surprise came when Elman trained his network to predict the next word in thousands of short, made-up sentences. Nobody told it what a noun or verb was. Yet when he examined the hidden-layer patterns for each word and grouped similar ones together, nouns clustered apart from verbs, and within nouns, animals clustered apart from objects. Predicting what comes next had forced the network to learn something about meaning and grammar.",
    "That is the same core idea behind GPT, more than 25 years later and at a vastly bigger scale. Elman's networks also had a weakness: they struggled to remember things more than a few steps back. Explaining why became the next big puzzle."
   ],
   "sources": [
    {
     "title": "Elman (1990), Finding Structure in Time, Cognitive Science 14(2)",
     "url": "https://doi.org/10.1207/s15516709cog1402_1"
    }
   ],
   "watch": [
    {
     "title": "Recurrent Neural Networks (RNNs), Clearly Explained!!!",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=AsNTP8Kwu80"
    },
    {
     "title": "Lecture 12: Recurrent Networks",
     "channel": "Michigan Online",
     "url": "https://www.youtube.com/watch?v=dUzLD91Sj-o"
    }
   ],
   "read": [
    {
     "title": "Deep Learning",
     "author": "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
     "year": 2016,
     "isbn13": "9780262035613",
     "url": "https://www.amazon.com/s?k=9780262035613",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "language",
    "memory",
    "recurrent"
   ]
  },
  {
   "id": "hochreiter-1991",
   "year": 1991,
   "title": "Why networks forget: the vanishing gradient",
   "people": [
    {
     "name": "Sepp Hochreiter",
     "role": "Student at TU Munich who analyzed the problem in his diploma thesis"
    },
    {
     "name": "Jürgen Schmidhuber",
     "role": "Hochreiter's thesis advisor"
    },
    {
     "name": "Yoshua Bengio",
     "role": "Lead author of an independent 1994 analysis"
    }
   ],
   "track": "09-memory-problems",
   "era": "winters",
   "what_happened": "In his 1991 diploma thesis (written in German), Sepp Hochreiter showed why recurrent networks can't learn long-range connections: as the error signal is passed backward through many time steps, it gets multiplied again and again and either shrinks toward zero or blows up. In 1994 Bengio, Simard and Frasconi independently published a similar analysis in English.",
   "why_it_mattered_kid": "It explained why early memory networks forgot the start of a sentence by the time they reached the end: the learning signal faded away like a whisper passed down a very long line.",
   "why_it_mattered_adult": "The vanishing/exploding gradient problem is a basic property of backpropagation through long chains of multiplications. Diagnosing it precisely pointed to the fix (paths along which error can flow unchanged), which led directly to LSTM and, much later, influenced residual connections in deep networks.",
   "thinking_move": "When a method fails, measure exactly how it fails: trace the signal step by step until you find where it disappears.",
   "deeper_dive": [
    "By 1990 researchers could train recurrent networks with 'backpropagation through time': unroll the network over every step of a sequence and pass the error backward through all of them. On short sequences it worked. On anything that needed remembering something from many steps earlier, training stalled, and nobody was quite sure why.",
    "Sepp Hochreiter, a student at the Technical University of Munich working with Jürgen Schmidhuber, worked through the math. Each step backward multiplies the error signal by the network's weights and the slope of its activation function. Multiply by a number a bit smaller than 1 fifty times and you get almost nothing; a bit bigger than 1 and you get an explosion. So the network gets essentially no useful signal about long-ago inputs.",
    "Because the thesis was in German, it was little known outside Germany for years. In 1994, Yoshua Bengio, Patrice Simard and Paolo Frasconi published 'Learning long-term dependencies with gradient descent is difficult,' reaching a similar conclusion, and that paper became widely cited.",
    "Hochreiter didn't stop at the diagnosis. Working with Schmidhuber, he designed a network specifically to give the error signal a protected path through time. That design became Long Short-Term Memory in 1997."
   ],
   "sources": [
    {
     "title": "Hochreiter (1991), Untersuchungen zu dynamischen neuronalen Netzen (diploma thesis, PDF, in German)",
     "url": "https://people.idsia.ch/~juergen/SeppHochreiter1991ThesisAdvisorSchmidhuber.pdf"
    },
    {
     "title": "Bengio, Simard & Frasconi (1994), Learning long-term dependencies with gradient descent is difficult",
     "url": "https://doi.org/10.1109/72.279181"
    }
   ],
   "watch": [
    {
     "title": "Recurrent Neural Networks (RNNs), Clearly Explained!!!",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=AsNTP8Kwu80"
    }
   ],
   "read": [
    {
     "title": "Deep Learning",
     "author": "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
     "year": 2016,
     "isbn13": "9780262035613",
     "url": "https://www.amazon.com/s?k=9780262035613",
     "kid_friendly": false
    }
   ],
   "kid_friendly": false,
   "tags": [
    "memory",
    "gradients",
    "recurrent"
   ]
  },
  {
   "id": "mixture-of-experts-1991",
   "year": 1991,
   "title": "Mixture of experts: let specialists share the work",
   "people": [
    {
     "name": "Robert Jacobs",
     "role": "Lead author"
    },
    {
     "name": "Michael I. Jordan",
     "role": "Co-author"
    },
    {
     "name": "Steven Nowlan",
     "role": "Co-author"
    },
    {
     "name": "Geoffrey Hinton",
     "role": "Co-author"
    }
   ],
   "track": "14-what-we-know-now",
   "era": "winters",
   "what_happened": "Jacobs, Jordan, Nowlan and Hinton proposed training several small 'expert' networks together with a 'gating' network that decides which expert should handle each input. During training, each expert drifts toward specializing in the kinds of inputs it handles best.",
   "why_it_mattered_kid": "Instead of one giant brain doing everything, a team of specialists plus a smart dispatcher can be faster and better, and that's how many of today's biggest AI models work.",
   "why_it_mattered_adult": "The mixture-of-experts (MoE) idea lets model capacity grow without every parameter being used for every input. Shazeer et al. (2017) scaled it to sparsely-gated layers with thousands of experts, and modern LLMs such as Mixtral (2024) use MoE layers to get the knowledge of a large model at the per-token cost of a smaller one.",
   "thinking_move": "Divide and route: if different inputs need different skills, train specialists and learn who to send each job to.",
   "deeper_dive": [
    "When you train one network on a task that really contains several different sub-problems, the sub-problems can interfere: improving on one kind of example makes the network worse on another. The 1991 paper 'Adaptive Mixtures of Local Experts' asked whether a system could split the task up by itself.",
    "Their answer was a set of separate expert networks plus a gating network that outputs how much to trust each expert for a given input. The training rule rewards an expert for the examples it is already doing well on, so experts naturally carve up the problem. Nobody has to decide in advance which expert gets which job.",
    "For years this stayed a niche technique. Then in 2017 Noam Shazeer and colleagues at Google built a 'sparsely-gated' mixture-of-experts layer with up to thousands of experts, where only a few experts run for each input. That made it possible to build models with far more parameters without making each prediction proportionally more expensive.",
    "In January 2024 Mistral AI described Mixtral 8x7B, an openly released language model in which each layer has 8 experts and a router picks 2 of them for every token. Many of today's frontier language models are reported to use mixture-of-experts designs, which is why a 33-year-old idea sits in the 'what we know now' lesson."
   ],
   "sources": [
    {
     "title": "Jacobs, Jordan, Nowlan & Hinton (1991), Adaptive Mixtures of Local Experts",
     "url": "https://doi.org/10.1162/neco.1991.3.1.79"
    },
    {
     "title": "Shazeer et al. (2017), Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer",
     "url": "https://arxiv.org/abs/1701.06538"
    },
    {
     "title": "Jiang et al. (2024), Mixtral of Experts",
     "url": "https://arxiv.org/abs/2401.04088"
    }
   ],
   "watch": [
    {
     "title": "Mixture of Experts (MoE), Visually Explained",
     "channel": "Jia-Bin Huang",
     "url": "https://www.youtube.com/watch?v=0QQlYR1r6pQ"
    }
   ],
   "read": [
    {
     "title": "Hands-On Large Language Models",
     "author": "Jay Alammar, Maarten Grootendorst",
     "year": 2024,
     "isbn13": "9781098150969",
     "url": "https://www.amazon.com/s?k=9781098150969",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "architecture",
    "scaling",
    "experts"
   ]
  },
  {
   "id": "td-gammon-1992",
   "year": 1992,
   "title": "TD-Gammon teaches itself backgammon",
   "people": [
    {
     "name": "Gerald Tesauro",
     "role": "Researcher at IBM's Thomas J. Watson Research Center who built TD-Gammon"
    },
    {
     "name": "Richard Sutton",
     "role": "Developer of temporal-difference learning, the method it used"
    }
   ],
   "track": "branch-reinforcement-learning",
   "era": "winters",
   "what_happened": "Gerald Tesauro at IBM built TD-Gammon, a neural network that learned backgammon mostly by playing hundreds of thousands of games against itself. It used temporal-difference (TD) learning: after each move it adjusted its guess about who was winning to better match its guess one move later. It reached a level close to the best human players.",
   "why_it_mattered_kid": "A program got really good at a game without being taught strategy, just by playing itself over and over and learning from wins and losses.",
   "why_it_mattered_adult": "TD-Gammon was an early, striking success for combining reinforcement learning with a neural network as a value function. Its self-play approach foreshadowed DeepMind's Atari and AlphaGo systems two decades later, and some of its unconventional opening moves were adopted by expert human players.",
   "thinking_move": "Learn from your own next guess: you don't have to wait for the final score if you update today's prediction toward tomorrow's.",
   "deeper_dive": [
    "Games are a natural test for learning machines, but they have an awkward feature: you only find out whether you won at the very end. Which of the dozens of moves along the way deserve the credit? Richard Sutton's temporal-difference learning (1988) offered an answer: at every step, nudge your estimate of how good the position is toward your estimate at the next step. Good information slowly flows backward from the final result to earlier positions.",
    "Tesauro had earlier trained a backgammon network on positions labeled by human experts, with decent results. TD-Gammon took a bolder route: start with random weights, let the network play both sides, and learn only from the outcomes. Backgammon's dice rolls helped, because the randomness forced the program to explore many different positions.",
    "The results surprised people, including experienced players. Tesauro's 1995 article in Communications of the ACM describes the program playing near the level of top humans, and the program's evaluations changed how experts thought about some opening moves.",
    "Attempts to repeat the trick in chess and Go during the 1990s didn't work nearly as well, and some researchers suspected backgammon was a special case. It took until 2013 to 2016, with deep networks, more computing power and new tricks, for self-play reinforcement learning to conquer Atari games and Go."
   ],
   "sources": [
    {
     "title": "Tesauro (1995), Temporal difference learning and TD-Gammon, Communications of the ACM 38(3)",
     "url": "https://doi.org/10.1145/203330.203343"
    }
   ],
   "watch": [
    {
     "title": "Machine Learning & Artificial Intelligence: Crash Course Computer Science #34",
     "channel": "CrashCourse",
     "url": "https://www.youtube.com/watch?v=z-EtmaFJieY"
    }
   ],
   "read": [
    {
     "title": "Reinforcement Learning: An Introduction (2nd ed.)",
     "author": "Richard S. Sutton, Andrew G. Barto",
     "year": 2018,
     "isbn13": "9780262039246",
     "url": "https://www.amazon.com/s?k=9780262039246",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "games",
    "reinforcement learning",
    "self-play"
   ]
  },
  {
   "id": "svm-1995",
   "year": 1995,
   "title": "Support vector machines: draw the widest road",
   "people": [
    {
     "name": "Corinna Cortes",
     "role": "Researcher at AT&T Bell Labs; co-author"
    },
    {
     "name": "Vladimir Vapnik",
     "role": "Statistician who developed statistical learning theory; co-author"
    }
   ],
   "track": "branch-classic-ml",
   "era": "learning",
   "what_happened": "Corinna Cortes and Vladimir Vapnik published 'Support-vector networks,' a method for sorting data into two classes by finding the boundary that leaves the widest possible gap between them. A 'kernel' trick let the same method draw curved boundaries, and a 'soft margin' let it tolerate some mistakes in messy real data.",
   "why_it_mattered_kid": "For about fifteen years, this careful 'draw the widest line between the groups' method beat neural networks at many tasks, showing that good math can beat brute force.",
   "why_it_mattered_adult": "SVMs combined a convex optimization problem (a unique best answer, no local minima), kernels for nonlinear boundaries, and generalization guarantees from Vapnik's statistical learning theory. They became a dominant tool in machine learning through the late 1990s and 2000s, while neural networks were largely out of favor.",
   "thinking_move": "Don't just separate the groups; separate them with the biggest safety margin, because a boundary with room to spare is less likely to be fooled by new examples.",
   "deeper_dive": [
    "Vladimir Vapnik had spent decades in the Soviet Union, with Alexey Chervonenkis, developing a theory of when learning from examples can be trusted to work on new examples. The key worry was overfitting: a flexible enough model can memorize any training set and still fail on new data. Their theory measured a model's flexibility and linked it to how well it would generalize.",
    "After moving to AT&T Bell Labs around 1990, Vapnik worked with colleagues to turn that theory into a practical algorithm. Bernhard Boser, Isabelle Guyon and Vapnik introduced the kernel trick for this kind of classifier in 1992, letting a straight-line method act as if the data had been mapped into a much higher-dimensional space. In 1995 Cortes and Vapnik added the soft margin, which allowed some points to fall on the wrong side, and tested the method on handwritten digits.",
    "The appeal was reliability. Training a 1990s neural network involved many hand-tuned settings and could get stuck; an SVM's training problem has a single best solution. SVMs spread through text classification, biology and image recognition.",
    "Bell Labs in this period was a remarkable place: Yann LeCun's convolutional networks and Vapnik's SVMs were developed in the same lab, and the two camps argued about which approach was better. For years the SVM side mostly seemed to be winning, until big data and GPUs flipped the outcome after 2012."
   ],
   "sources": [
    {
     "title": "Cortes & Vapnik (1995), Support-vector networks, Machine Learning 20",
     "url": "https://doi.org/10.1007/BF00994018"
    }
   ],
   "watch": [
    {
     "title": "Machine Learning & Artificial Intelligence: Crash Course Computer Science #34",
     "channel": "CrashCourse",
     "url": "https://www.youtube.com/watch?v=z-EtmaFJieY"
    }
   ],
   "read": [
    {
     "title": "Why Machines Learn: The Elegant Math Behind Modern AI",
     "author": "Anil Ananthaswamy",
     "year": 2024,
     "isbn13": "9780593185742",
     "url": "https://www.amazon.com/s?k=9780593185742",
     "kid_friendly": false
    },
    {
     "title": "The Master Algorithm",
     "author": "Pedro Domingos",
     "year": 2015,
     "isbn13": "9780465065707",
     "url": "https://www.amazon.com/s?k=9780465065707",
     "kid_friendly": false
    }
   ],
   "kid_friendly": false,
   "tags": [
    "classification",
    "statistics",
    "kernels"
   ]
  },
  {
   "id": "lstm-1997",
   "year": 1997,
   "title": "LSTM: a network with a protected memory cell",
   "people": [
    {
     "name": "Sepp Hochreiter",
     "role": "Co-inventor of LSTM"
    },
    {
     "name": "Jürgen Schmidhuber",
     "role": "Co-inventor of LSTM"
    }
   ],
   "track": "09-memory-problems",
   "era": "learning",
   "what_happened": "Hochreiter and Schmidhuber published Long Short-Term Memory (LSTM), a recurrent network unit with a memory cell whose contents can pass from step to step mostly unchanged, plus 'gates' that learn when to write into the memory and when to read from it. It could learn connections across hundreds or more time steps where ordinary recurrent networks failed.",
   "why_it_mattered_kid": "LSTM gave networks a notebook they could choose when to write in and when to read from, so they stopped forgetting the beginning of long sentences.",
   "why_it_mattered_adult": "LSTM directly attacked the vanishing gradient problem by adding an additive path (the 'constant error carousel') along which error can flow back through time. With the forget gate added by Gers, Schmidhuber and Cummins in 2000, it became the standard sequence model until Transformers, powering speech recognition and machine translation systems in the mid-2010s.",
   "thinking_move": "If a signal keeps fading, build it a protected channel, and add switches (gates) that decide what gets in and out.",
   "deeper_dive": [
    "Hochreiter's 1991 thesis had shown why recurrent networks forget: the error signal shrinks a little at every step back in time. The LSTM fix was to give the network a memory cell that is updated by adding to it rather than repeatedly multiplying it, so information (and the learning signal) can travel across many steps without fading.",
    "But a memory that holds everything forever would be cluttered. So the cell is guarded by gates, small learned switches. The input gate decides whether new information gets written; the output gate decides whether the memory is used right now. A few years later, Felix Gers and colleagues added a forget gate so the network could clear out memories it no longer needed. The forget gate is now part of the standard LSTM.",
    "The 1997 paper tested LSTM on artificial tasks designed to be impossible for ordinary recurrent networks, such as remembering a signal across long stretches of noise. LSTM solved them. Yet for about a decade it remained a specialist tool, partly because computers and datasets weren't big enough to show what it could really do.",
    "That changed around 2009 to 2016, when LSTMs won handwriting recognition competitions and then moved into speech recognition and machine translation at large technology companies. The 2014 sequence-to-sequence translation model was built from LSTMs. Transformers eventually replaced them for language, but the LSTM paper is one of the most cited in the history of neural networks."
   ],
   "sources": [
    {
     "title": "Hochreiter & Schmidhuber (1997), Long Short-Term Memory, Neural Computation 9(8)",
     "url": "https://doi.org/10.1162/neco.1997.9.8.1735"
    }
   ],
   "watch": [
    {
     "title": "Long Short-Term Memory (LSTM), Clearly Explained",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=YCzL96nL7j0"
    }
   ],
   "read": [
    {
     "title": "Deep Learning",
     "author": "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
     "year": 2016,
     "isbn13": "9780262035613",
     "url": "https://www.amazon.com/s?k=9780262035613",
     "kid_friendly": false
    },
    {
     "title": "Grokking Deep Learning",
     "author": "Andrew Trask",
     "year": 2019,
     "isbn13": "9781617293702",
     "url": "https://www.amazon.com/s?k=9781617293702",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "memory",
    "recurrent",
    "gates"
   ]
  },
  {
   "id": "deep-blue-1997",
   "year": 1997,
   "date": "1997-05-11",
   "title": "Deep Blue beats the world chess champion",
   "people": [
    {
     "name": "Garry Kasparov",
     "role": "World chess champion"
    },
    {
     "name": "Feng-hsiung Hsu",
     "role": "IBM engineer who designed Deep Blue's chess chips"
    },
    {
     "name": "Murray Campbell",
     "role": "IBM researcher on the Deep Blue team"
    },
    {
     "name": "A. Joseph Hoane Jr.",
     "role": "IBM researcher on the Deep Blue team"
    }
   ],
   "track": "branch-symbolic-ai",
   "era": "learning",
   "what_happened": "On May 11, 1997, IBM's Deep Blue won the sixth and final game of a rematch in New York against world champion Garry Kasparov, taking the match 3½–2½. It was the first time a computer beat a reigning world champion in a match under standard tournament time controls. Kasparov had won their first match in 1996.",
   "why_it_mattered_kid": "A computer beat the best chess player in the world, but it won by checking millions of moves really fast, not by learning the way today's AI does.",
   "why_it_mattered_adult": "Deep Blue was a triumph of search plus hand-crafted evaluation running on custom hardware, the high point of the 'good old-fashioned AI' approach to games. It showed that narrow, superhuman performance did not require human-like understanding, and it set up the contrast with AlphaGo (2016), which relied on learned neural networks.",
   "thinking_move": "Out-search instead of out-think: when you can't capture intuition in rules, look so many moves ahead that intuition matters less.",
   "deeper_dive": [
    "The project began at Carnegie Mellon in the 1980s, when graduate student Feng-hsiung Hsu designed special-purpose chess chips for programs called ChipTest and Deep Thought. IBM hired the team, and Deep Blue grew into a supercomputer with hundreds of custom chess chips. The 1997 version could examine roughly 200 million chess positions per second.",
    "Deep Blue's strength came from search: looking many moves ahead and scoring the resulting positions with an evaluation function written and tuned with help from chess grandmasters. It did not learn from playing the way TD-Gammon or AlphaGo did. It was, in a sense, the peak of the rule-and-search approach.",
    "The 1997 rematch was tense. After losing game 2, Kasparov suspected that a human might have helped the machine, because one of its moves seemed too subtle for a computer. He asked to see the machine's logs; IBM declined to release them during the match. Kasparov played the rest of the match uneasily and lost the final game quickly. IBM then retired Deep Blue and declined a rematch. Kasparov went on to champion humans working together with machines. In a 2010 essay he described “Advanced Chess”, a format he launched in 1998 in which players use computer help, and drew the lesson that a “weak human + machine + better process was superior to a strong computer alone.”",
    "To many people Deep Blue seemed to mean computers were about to become generally intelligent. They weren't. The same techniques didn't work for Go, whose board is far too large for brute-force search, and that game stayed out of reach until learning-based methods arrived almost 20 years later."
   ],
   "sources": [
    {
     "title": "Campbell, Hoane & Hsu (2002), Deep Blue, Artificial Intelligence 134",
     "url": "https://doi.org/10.1016/S0004-3702(01)00129-1"
    },
    {
     "title": "Kasparov (2010), The Chess Master and the Computer, New York Review of Books",
     "url": "https://www.nybooks.com/articles/2010/02/11/the-chess-master-and-the-computer/"
    },
    {
     "title": "Science Friday (2018), excerpt from Hannah Fry’s Hello World, which opens with Kasparov and Deep Blue",
     "url": "https://www.sciencefriday.com/articles/how-did-ibms-deep-blue-beat-a-chess-grandmaster/"
    }
   ],
   "watch": [
    {
     "title": "Deep Blue | Down the Rabbit Hole",
     "channel": "Fredrik Knudsen",
     "url": "https://www.youtube.com/watch?v=HwF229U2ba8"
    }
   ],
   "read": [
    {
     "title": "Hello World: Being Human in the Age of Algorithms",
     "author": "Hannah Fry",
     "year": 2018,
     "isbn13": "9780393634990",
     "url": "https://www.amazon.com/s?k=9780393634990",
     "kid_friendly": true
    },
    {
     "title": "Artificial Intelligence: A Guide for Thinking Humans",
     "author": "Melanie Mitchell",
     "year": 2019,
     "isbn13": "9780374257835",
     "url": "https://www.amazon.com/s?k=9780374257835",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "games",
    "search",
    "chess"
   ]
  },
  {
   "id": "bengio-2003",
   "year": 2003,
   "title": "A neural network learns to predict the next word",
   "people": [
    {
     "name": "Yoshua Bengio",
     "role": "Professor at Université de Montréal; lead author"
    },
    {
     "name": "Réjean Ducharme",
     "role": "Co-author"
    },
    {
     "name": "Pascal Vincent",
     "role": "Co-author"
    },
    {
     "name": "Christian Jauvin",
     "role": "Co-author"
    }
   ],
   "track": "07-the-babbling-network",
   "era": "learning",
   "what_happened": "Yoshua Bengio and colleagues published 'A Neural Probabilistic Language Model.' Each word got its own learned list of numbers (a vector), and a neural network used the vectors of the previous few words to predict the next word. Words used in similar ways ended up with similar vectors, so what the model learned about one word helped with others.",
   "why_it_mattered_kid": "Instead of just counting which words came next, the network learned that 'cat' and 'dog' are alike, so it could make good guesses about sentences it had never seen.",
   "why_it_mattered_adult": "This paper introduced learned word embeddings trained jointly with a neural next-word predictor, beating strong n-gram baselines. It is the direct ancestor of word2vec and of the embedding-plus-network structure of every modern language model; Karpathy's 'makemore' MLP lecture rebuilds it.",
   "thinking_move": "Share what you learn across similar things: give each word a position in a learned space, so knowledge about one word spills over to its neighbors.",
   "deeper_dive": [
    "Counting-based language models, like the ones going back to Markov and Shannon, have a fatal problem called the curse of dimensionality. With tens of thousands of words, the number of possible word sequences is astronomically large, so most sequences never appear in any training text. A counting model that has seen 'the cat is walking in the bedroom' learns nothing about 'a dog was running in a room,' even though they're nearly the same sentence.",
    "Bengio's team attacked this by representing each word as a vector of learned numbers. The network takes the vectors of the last several words, combines them in a hidden layer, and outputs a probability for every word in the vocabulary. Training adjusts both the network and the word vectors. Words that appear in similar contexts drift toward similar vectors, so evidence about 'cat' automatically helps with 'dog.'",
    "The price was computing power. Producing a probability for every word in a large vocabulary at every step was expensive, and the team had to spread training across many processors. An earlier version of the work appeared at the NIPS conference in 2000, and the full journal paper came out in 2003.",
    "The idea was ahead of its time; it took another decade, with word2vec and then neural machine translation, for learned word vectors to take over natural language processing. If you build Karpathy's 'makemore' MLP, you are building a small version of this exact model."
   ],
   "sources": [
    {
     "title": "Bengio, Ducharme, Vincent & Jauvin (2003), A Neural Probabilistic Language Model, JMLR 3",
     "url": "https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf"
    }
   ],
   "watch": [
    {
     "title": "Building makemore Part 2: MLP",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=TCH_1BHY58I"
    },
    {
     "title": "The spelled-out intro to language modeling: building makemore",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=PaCmpygFfXo"
    }
   ],
   "read": [
    {
     "title": "Build a Large Language Model (From Scratch)",
     "author": "Sebastian Raschka",
     "year": 2024,
     "isbn13": "9781633437166",
     "url": "https://www.amazon.com/s?k=9781633437166",
     "kid_friendly": false
    },
    {
     "title": "Deep Learning",
     "author": "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
     "year": 2016,
     "isbn13": "9780262035613",
     "url": "https://www.amazon.com/s?k=9780262035613",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "language",
    "embeddings",
    "prediction"
   ]
  },
  {
   "id": "deep-belief-nets-2006",
   "year": 2006,
   "title": "Deep belief nets bring 'deep learning' back",
   "people": [
    {
     "name": "Geoffrey Hinton",
     "role": "Professor at the University of Toronto; lead author"
    },
    {
     "name": "Simon Osindero",
     "role": "Co-author"
    },
    {
     "name": "Yee-Whye Teh",
     "role": "Co-author"
    },
    {
     "name": "Ruslan Salakhutdinov",
     "role": "Hinton's student; co-author of the 2006 Science paper"
    }
   ],
   "track": "branch-memory-networks",
   "era": "learning",
   "what_happened": "Hinton, Osindero and Teh showed that a deep network could be trained by first teaching it one layer at a time, using restricted Boltzmann machines, and then fine-tuning the whole thing. The same year, Hinton and Salakhutdinov used the trick in Science to build deep 'autoencoders' that compressed data far better than older methods.",
   "why_it_mattered_kid": "These papers convinced researchers that networks with many layers could be trained after all, which started the 'deep learning' comeback.",
   "why_it_mattered_adult": "Greedy layer-wise pretraining made deep networks trainable at a time when backpropagation alone usually failed on them. The specific technique was later largely abandoned in favor of better activations, initialization, more data and GPUs, but these papers revived interest and helped popularize the term 'deep learning.'",
   "thinking_move": "When the whole thing is too hard to learn at once, build it up one layer at a time, then polish it all together.",
   "deeper_dive": [
    "By the early 2000s, neural networks were unfashionable in mainstream machine learning. Deep networks, with many hidden layers, were notoriously hard to train with backpropagation: learning signals faded and results were often worse than with shallow networks or support vector machines. A small community kept going, helped in part by funding from the Canadian Institute for Advanced Research (CIFAR), which supported a program led by Hinton that included Yann LeCun and Yoshua Bengio.",
    "Hinton's idea was to use restricted Boltzmann machines, a simplified version of his 1980s Boltzmann machine, as building blocks. Train one to model the raw data. Then treat its hidden units as data and train another on top, and so on. Each layer learns features of the layer below without needing labels. Only at the end do you fine-tune the stack for the task.",
    "The 2006 Neural Computation paper used this to get strong results on handwritten digits, and the Science paper with Salakhutdinov showed deep autoencoders squeezing images and documents into a few numbers while keeping their important structure. Bengio's group in Montréal published related layer-wise methods soon after.",
    "Ironically, within a few years researchers found that with enough labeled data, GPUs, and simple changes like the ReLU activation, deep networks could be trained directly without pretraining. But 2006 was the moment the field's mood began to change, and 'deep learning' became the name of the movement."
   ],
   "sources": [
    {
     "title": "Hinton, Osindero & Teh (2006), A Fast Learning Algorithm for Deep Belief Nets",
     "url": "https://doi.org/10.1162/neco.2006.18.7.1527"
    },
    {
     "title": "Hinton & Salakhutdinov (2006), Reducing the Dimensionality of Data with Neural Networks, Science 313",
     "url": "https://doi.org/10.1126/science.1127647"
    }
   ],
   "watch": [
    {
     "title": "Nobel Prize lecture: Geoffrey Hinton, Nobel Prize in Physics",
     "channel": "Nobel Prize",
     "url": "https://www.youtube.com/watch?v=XDE9DjpcSdI"
    }
   ],
   "read": [
    {
     "title": "Genius Makers",
     "author": "Cade Metz",
     "year": 2021,
     "isbn13": "9781524742676",
     "url": "https://www.amazon.com/s?k=9781524742676",
     "kid_friendly": false
    },
    {
     "title": "The Deep Learning Revolution",
     "author": "Terrence J. Sejnowski",
     "year": 2018,
     "isbn13": "9780262038034",
     "url": "https://www.amazon.com/s?k=9780262038034",
     "kid_friendly": false
    }
   ],
   "kid_friendly": false,
   "tags": [
    "deep learning",
    "pretraining",
    "generative"
   ]
  },
  {
   "id": "imagenet-2009",
   "year": 2009,
   "title": "ImageNet: millions of labeled pictures",
   "people": [
    {
     "name": "Fei-Fei Li",
     "role": "Computer scientist, then at Princeton, who led ImageNet"
    },
    {
     "name": "Jia Deng",
     "role": "Graduate student and lead author of the ImageNet paper"
    },
    {
     "name": "Kai Li",
     "role": "Princeton computer scientist and co-author"
    }
   ],
   "track": "branch-vision",
   "era": "learning",
   "what_happened": "Fei-Fei Li's team presented ImageNet, a database of millions of photos sorted into thousands of categories organized like the WordNet dictionary. The labeling was done with the help of online workers through Amazon Mechanical Turk. From 2010, a yearly ImageNet challenge asked programs to classify images into 1,000 categories.",
   "why_it_mattered_kid": "Computers needed millions of examples to learn to see, so a team organized people around the world to label pictures, and that giant photo collection set off the AI boom.",
   "why_it_mattered_adult": "ImageNet shifted the field's focus from clever algorithms to large, carefully labeled data. Its benchmark (ILSVRC, 2010–2017) became the arena where deep learning proved itself in 2012, and it set the template for data-centric AI.",
   "thinking_move": "Maybe the bottleneck isn't the algorithm but the data: build the dataset the problem actually needs, even if everyone says it's too big.",
   "deeper_dive": [
    "In the mid-2000s, most computer vision datasets had a few thousand images in a few dozen categories. Fei-Fei Li became convinced that this was holding the field back: children see an enormous number of images as they learn, so why should machines learn from so few? She set out to map out the whole world of objects, using the WordNet lexical database (created by psychologist George Miller's team) as a ready-made list of categories.",
    "The problem was labor. Labeling millions of images by hand with student helpers would have taken many years. The team turned to Amazon Mechanical Turk, a then-new website where people around the world do small online tasks for pay. Tens of thousands of workers verified whether each image really showed its category, with checks built in to catch mistakes.",
    "In her memoir 'The Worlds I See,' Li describes how skeptical many colleagues were and how hard it was to get the project funded and taken seriously. The 2009 paper appeared at the CVPR conference as a poster and did not make a big splash at first.",
    "That changed with the ImageNet Large Scale Visual Recognition Challenge, which began in 2010. In 2012, a deep convolutional network called AlexNet won by a huge margin, and the race that followed transformed AI. ImageNet also later prompted serious discussion about bias and privacy in large image datasets, and the team revised parts of it."
   ],
   "sources": [
    {
     "title": "Deng, Dong, Socher, Li, Li & Fei-Fei (2009), ImageNet: A large-scale hierarchical image database",
     "url": "https://doi.org/10.1109/CVPR.2009.5206848"
    }
   ],
   "watch": [
    {
     "title": "How we teach computers to understand pictures | Fei Fei Li",
     "channel": "TED",
     "url": "https://www.youtube.com/watch?v=40riCqvRoMs"
    }
   ],
   "read": [
    {
     "title": "The Worlds I See",
     "author": "Fei-Fei Li",
     "year": 2023,
     "isbn13": "9781250897930",
     "url": "https://www.amazon.com/s?k=9781250897930",
     "kid_friendly": false
    },
    {
     "title": "Artificial Intelligence: A Guide for Thinking Humans",
     "author": "Melanie Mitchell",
     "year": 2019,
     "isbn13": "9780374257835",
     "url": "https://www.amazon.com/s?k=9780374257835",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "data",
    "vision",
    "crowdsourcing"
   ]
  },
  {
   "id": "alexnet-2012",
   "year": 2012,
   "title": "AlexNet wins ImageNet by a landslide",
   "people": [
    {
     "name": "Alex Krizhevsky",
     "role": "Graduate student at the University of Toronto who built and trained AlexNet"
    },
    {
     "name": "Ilya Sutskever",
     "role": "Graduate student and co-author"
    },
    {
     "name": "Geoffrey Hinton",
     "role": "Their advisor and co-author"
    }
   ],
   "track": "branch-vision",
   "era": "deep",
   "what_happened": "A deep convolutional network from the University of Toronto, later called AlexNet, won the 2012 ImageNet challenge with a top-5 error rate of about 15%, compared with about 26% for the next best entry. It was trained on two consumer NVIDIA graphics cards (GPUs) and used tricks like the ReLU activation and dropout.",
   "why_it_mattered_kid": "When a neural network crushed every other method at recognizing photos, the whole field switched to deep learning almost overnight.",
   "why_it_mattered_adult": "AlexNet showed that the old ingredients (convolutional nets plus backpropagation) became decisively better with enough data (ImageNet) and compute (GPUs). It triggered the deep learning boom in industry and academia and a shift of AI research toward neural networks, GPUs and scale.",
   "thinking_move": "Scale up an old idea: sometimes the method was fine all along and only needed far more data and computing power.",
   "deeper_dive": [
    "Convolutional networks had existed since LeCun's work in 1989, but in 2012 most computer vision researchers used hand-designed features fed into classifiers like support vector machines. Training a big neural network on 1.2 million images seemed impractical. Alex Krizhevsky had written very fast code for running neural networks on graphics cards, chips originally built for video games that are good at doing many multiplications at once.",
    "Ilya Sutskever pushed for tackling ImageNet, and Hinton supported it. Krizhevsky trained the network over several days on two NVIDIA GTX 580 GPUs, reportedly on a computer in his bedroom at his parents' home. The network had about 60 million parameters. To keep it from memorizing the training images, they used dropout, a method from Hinton's group that randomly switches off neurons during training, and they enlarged the dataset by flipping and cropping images.",
    "The result shocked the field. The gap between first and second place was far larger than the usual year-to-year improvements. Within a couple of years, nearly all top entries in the challenge were deep convolutional networks.",
    "Industry noticed immediately. Hinton, Krizhevsky and Sutskever formed a tiny company, and in late 2012 several tech companies bid for it in an auction; Google won, reportedly for $44 million. Sutskever later co-founded OpenAI, and the 'bigger data, bigger compute' lesson of AlexNet led directly to the scaling era of language models."
   ],
   "sources": [
    {
     "title": "Krizhevsky, Sutskever & Hinton (2012), ImageNet Classification with Deep Convolutional Neural Networks (NeurIPS proceedings)",
     "url": "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html"
    },
    {
     "title": "Hinton et al. (2012), Improving neural networks by preventing co-adaptation of feature detectors (dropout)",
     "url": "https://arxiv.org/abs/1207.0580"
    }
   ],
   "watch": [
    {
     "title": "The moment we stopped understanding AI [AlexNet]",
     "channel": "Welch Labs",
     "url": "https://www.youtube.com/watch?v=UZDiGooFs54"
    }
   ],
   "read": [
    {
     "title": "Genius Makers",
     "author": "Cade Metz",
     "year": 2021,
     "isbn13": "9781524742676",
     "url": "https://www.amazon.com/s?k=9781524742676",
     "kid_friendly": false
    },
    {
     "title": "You Look Like a Thing and I Love You",
     "author": "Janelle Shane",
     "year": 2019,
     "isbn13": "9780316525244",
     "url": "https://www.amazon.com/s?k=9780316525244",
     "kid_friendly": true
    }
   ],
   "kid_friendly": true,
   "tags": [
    "vision",
    "gpus",
    "deep learning"
   ]
  },
  {
   "id": "word2vec-2013",
   "year": 2013,
   "date": "2013-01-16",
   "title": "word2vec: words become places on a map",
   "people": [
    {
     "name": "Tomas Mikolov",
     "role": "Researcher at Google; lead author"
    },
    {
     "name": "Kai Chen",
     "role": "Co-author"
    },
    {
     "name": "Greg Corrado",
     "role": "Co-author"
    },
    {
     "name": "Jeffrey Dean",
     "role": "Co-author and Google engineering leader"
    }
   ],
   "track": "08-words-as-places",
   "era": "deep",
   "what_happened": "A Google team led by Tomas Mikolov released word2vec, a fast way to learn a vector for every word from billions of words of text by training a tiny network to predict a word's neighbors. The vectors captured meaning so well that simple arithmetic worked: the vector for 'king' minus 'man' plus 'woman' landed closest to 'queen.'",
   "why_it_mattered_kid": "It turned every word into a point on a giant map where similar words sit close together and directions mean things, like a 'royalty' direction or a 'female' direction.",
   "why_it_mattered_adult": "word2vec (skip-gram and CBOW, with negative sampling in the follow-up paper) made high-quality embeddings cheap enough to train on huge corpora and release openly. It showed that relationships appear as roughly consistent directions in embedding space, and pretrained embeddings became a standard ingredient in NLP until contextual models like BERT and GPT replaced them.",
   "thinking_move": "You shall know a word by the company it keeps: learn what a word means by predicting what appears around it.",
   "deeper_dive": [
    "Bengio's 2003 language model had already learned word vectors, but it was slow because it did a lot of work for every word. Mikolov's team stripped the idea down. Their skip-gram model just takes a word and tries to predict the words near it; the CBOW model does the reverse. No deep layers, just vectors and a simple prediction. That made it possible to train on billions of words in hours or days on ordinary computers.",
    "The surprise was the geometry. Words with similar meanings ended up near each other, and consistent relationships showed up as consistent directions. 'Paris' minus 'France' plus 'Italy' pointed near 'Rome.' Nobody programmed in countries or capitals; the structure came purely from how words are used.",
    "The team released the code openly, and word2vec spread fast through research and industry. A follow-up paper later that year, 'Distributed Representations of Words and Phrases and their Compositionality,' added negative sampling and phrase vectors; it received the NeurIPS Test of Time Award in 2023.",
    "Researchers also found a darker side: because the vectors learn from human writing, they absorb human stereotypes. A 2016 paper showed analogies like 'man is to computer programmer as woman is to homemaker' appearing in word vectors. It was an early warning that language models reflect the biases in their training data."
   ],
   "sources": [
    {
     "title": "Mikolov, Chen, Corrado & Dean (2013), Efficient Estimation of Word Representations in Vector Space",
     "url": "https://arxiv.org/abs/1301.3781"
    },
    {
     "title": "Mikolov et al. (2013), Distributed Representations of Words and Phrases and their Compositionality",
     "url": "https://arxiv.org/abs/1310.4546"
    },
    {
     "title": "NeurIPS blog (11 December 2023), Announcing the NeurIPS 2023 Paper Awards (Test of Time: Mikolov et al. 2013)",
     "url": "https://blog.neurips.cc/2023/12/11/announcing-the-neurips-2023-paper-awards/"
    }
   ],
   "watch": [
    {
     "title": "Word Embedding and Word2Vec, Clearly Explained!!!",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=viZrOnJclY0"
    },
    {
     "title": "Vectors | Chapter 1, Essence of linear algebra",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=fNk_zzaMoSs"
    }
   ],
   "read": [
    {
     "title": "Grokking Deep Learning",
     "author": "Andrew Trask",
     "year": 2019,
     "isbn13": "9781617293702",
     "url": "https://www.amazon.com/s?k=9781617293702",
     "kid_friendly": false
    },
    {
     "title": "Hands-On Large Language Models",
     "author": "Jay Alammar, Maarten Grootendorst",
     "year": 2024,
     "isbn13": "9781098150969",
     "url": "https://www.amazon.com/s?k=9781098150969",
     "kid_friendly": false
    },
    {
     "title": "Artificial Intelligence: A Guide for Thinking Humans",
     "author": "Melanie Mitchell",
     "year": 2019,
     "isbn13": "9780374257835",
     "url": "https://www.amazon.com/s?k=9780374257835",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "embeddings",
    "language",
    "vectors"
   ]
  },
  {
   "id": "seq2seq-2014",
   "year": 2014,
   "title": "Sequence to sequence: translate with two networks",
   "people": [
    {
     "name": "Ilya Sutskever",
     "role": "Researcher at Google; lead author of the seq2seq paper"
    },
    {
     "name": "Oriol Vinyals",
     "role": "Co-author"
    },
    {
     "name": "Quoc V. Le",
     "role": "Co-author"
    },
    {
     "name": "Kyunghyun Cho",
     "role": "Lead author of a parallel encoder–decoder paper from Montréal"
    }
   ],
   "track": "09-memory-problems",
   "era": "deep",
   "what_happened": "Sutskever, Vinyals and Le showed that one LSTM network could read an English sentence and squeeze it into a single vector, and a second LSTM could unpack that vector into a French sentence. Around the same time, Kyunghyun Cho and colleagues in Yoshua Bengio's lab published a similar encoder–decoder design and introduced the gated recurrent unit (GRU).",
   "why_it_mattered_kid": "One network reads a whole sentence into a 'thought' made of numbers, and another network turns that thought into a sentence in a new language.",
   "why_it_mattered_adult": "The encoder–decoder framework made neural machine translation competitive with established phrase-based systems and generalized to any sequence-to-sequence task. Its weakness, squeezing a whole input into one fixed-size vector, motivated the attention mechanism (Bahdanau et al., 2014) that led to the Transformer.",
   "thinking_move": "Split a hard job into 'understand' and 'express': encode the input into a meaning, then decode the meaning into the output.",
   "deeper_dive": [
    "Machine translation in 2014 was dominated by phrase-based statistical systems, complex pipelines that chopped sentences into pieces, translated phrases using huge tables, and stitched results back together. The question was whether a neural network could learn the entire job end to end, from raw sentences in, to sentences out.",
    "Sutskever, Vinyals and Le used deep LSTMs. The encoder reads the source sentence word by word; its final state is a fixed-length vector meant to capture the meaning. The decoder starts from that vector and generates the translation one word at a time, each step predicting the next word, just like a language model. On a standard English-to-French benchmark it scored close to, and when combined with an existing system, better than the leading statistical approaches.",
    "One small trick had a surprisingly big effect: feeding the source sentence in reverse order. That put the first words of the source close to the first words of the translation, making it easier for the network to connect them. It was a hint that memory over long distances was still a struggle.",
    "Cho's team in Montréal hit the same wall. Long sentences had to be crammed into one vector, and quality dropped as sentences got longer. Their colleague Dzmitry Bahdanau proposed a way around the bottleneck: let the decoder look back at all of the encoder's states. That idea, attention, is where the next lesson begins."
   ],
   "sources": [
    {
     "title": "Sutskever, Vinyals & Le (2014), Sequence to Sequence Learning with Neural Networks",
     "url": "https://arxiv.org/abs/1409.3215"
    },
    {
     "title": "Cho et al. (2014), Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation",
     "url": "https://arxiv.org/abs/1406.1078"
    }
   ],
   "watch": [
    {
     "title": "Sequence-to-Sequence (seq2seq) Encoder-Decoder Neural Networks, Clearly Explained!!!",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=L8HKweZIOmg"
    },
    {
     "title": "Long Short-Term Memory (LSTM), Clearly Explained",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=YCzL96nL7j0"
    }
   ],
   "read": [
    {
     "title": "Deep Learning",
     "author": "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
     "year": 2016,
     "isbn13": "9780262035613",
     "url": "https://www.amazon.com/s?k=9780262035613",
     "kid_friendly": false
    },
    {
     "title": "Build a Large Language Model (From Scratch)",
     "author": "Sebastian Raschka",
     "year": 2024,
     "isbn13": "9781633437166",
     "url": "https://www.amazon.com/s?k=9781633437166",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "translation",
    "encoder-decoder",
    "language"
   ]
  },
  {
   "id": "gan-2014",
   "year": 2014,
   "date": "2014-06-10",
   "title": "GANs: two networks play forger and detective",
   "people": [
    {
     "name": "Ian Goodfellow",
     "role": "PhD student in Montreal who proposed generative adversarial networks"
    },
    {
     "name": "Yoshua Bengio",
     "role": "Co-author and Goodfellow's co-advisor"
    },
    {
     "name": "Diederik P. Kingma",
     "role": "Co-inventor of the variational autoencoder (2013), a rival way to generate images"
    },
    {
     "name": "Max Welling",
     "role": "Co-inventor of the variational autoencoder"
    }
   ],
   "track": "branch-generative-images",
   "era": "deep",
   "what_happened": "Ian Goodfellow and colleagues introduced generative adversarial networks (GANs). One network, the generator, makes fake images out of random noise; a second network, the discriminator, tries to tell fakes from real photos. Each one's mistakes become the other's training signal, so both get better together. A few months earlier, Kingma and Welling had introduced the variational autoencoder (VAE), another way to teach networks to generate new data.",
   "why_it_mattered_kid": "Two networks played a game of art forger versus detective, and the forger got so good that its made-up faces started to look real.",
   "why_it_mattered_adult": "GANs framed generation as a minimax game, avoiding explicit likelihoods and producing far sharper samples than earlier methods. From 2014 to about 2020 they dominated image synthesis (DCGAN, StyleGAN), before diffusion models took over; VAEs, meanwhile, live on inside modern latent diffusion systems.",
   "thinking_move": "If you can't write down what 'good' looks like, train a critic to recognize it and let the creator learn by trying to fool the critic.",
   "deeper_dive": [
    "Teaching a computer to recognize a cat was getting easy by 2014. Teaching one to draw a convincing new cat was much harder. The standard approach required writing down a probability for every possible image, and the math for that becomes hopeless for anything as rich as a photograph. Images from these models tended to come out blurry, because a blur is a safe average of all the things a picture might be.",
    "Goodfellow's idea, as he later told it, came during an argument with friends at a bar in Montreal about how to generate images. He went home and coded it the same night, and it worked on the first try, which almost never happens in machine learning. The trick is a game: the generator never sees a real image directly. It only learns from how badly it fooled the discriminator.",
    "The same year produced a quieter rival. Kingma and Welling's variational autoencoder squeezes an image into a small 'code' and learns to rebuild it, with a clever trick that keeps the code space smooth so you can sample new codes and decode them into new images. VAEs were more stable to train than GANs but blurrier.",
    "GANs were famously temperamental. If one player got too far ahead, training collapsed, or the generator found one image that fooled the critic and made it over and over. Researchers spent years taming them, and by the late 2010s GANs could produce photo-realistic faces of people who do not exist, which also raised the first big public worries about 'deepfakes'."
   ],
   "sources": [
    {
     "title": "Goodfellow et al. (2014), Generative Adversarial Networks",
     "url": "https://arxiv.org/abs/1406.2661"
    },
    {
     "title": "Kingma & Welling (2013), Auto-Encoding Variational Bayes",
     "url": "https://arxiv.org/abs/1312.6114"
    }
   ],
   "watch": [],
   "read": [
    {
     "title": "Genius Makers",
     "author": "Cade Metz",
     "year": 2021,
     "isbn13": "9781524742676",
     "url": "https://www.amazon.com/s?k=9781524742676",
     "kid_friendly": false
    },
    {
     "title": "Deep Learning",
     "author": "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
     "year": 2016,
     "isbn13": "9780262035613",
     "url": "https://www.amazon.com/s?k=9780262035613",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "generative",
    "images",
    "games"
   ]
  },
  {
   "id": "bahdanau-attention-2014",
   "year": 2014,
   "date": "2014-09-01",
   "title": "Attention: let the translator look back",
   "people": [
    {
     "name": "Dzmitry Bahdanau",
     "role": "PhD student who built the first attention mechanism for translation"
    },
    {
     "name": "Kyunghyun Cho",
     "role": "Postdoc and co-author; co-designed the RNN encoder-decoder"
    },
    {
     "name": "Yoshua Bengio",
     "role": "Senior author; head of the Montreal lab"
    }
   ],
   "track": "10-just-look-back",
   "era": "deep",
   "what_happened": "Bahdanau, Cho and Bengio posted a paper on neural machine translation in which the decoder, while writing each output word, looks back over all of the input words and decides how much to weigh each one. In the authors’ words, the model learns “to automatically (soft-)search for parts of a source sentence that are relevant to predicting a target word,” using what they called an “alignment model”. Today we call this attention. Instead of squeezing a whole sentence into one fixed vector, the model gets to peek at the parts it needs right now.",
   "why_it_mattered_kid": "Instead of memorizing a whole sentence before translating it, the network learned to glance back at the exact words it needed, the way you look back at a page while copying it.",
   "why_it_mattered_adult": "Soft attention replaced the fixed-length bottleneck of encoder-decoder RNNs with a learned, differentiable lookup over all encoder states. It made long-sentence translation work and, three years later, became the only mechanism the Transformer kept.",
   "thinking_move": "When a pipe is too narrow, stop trying to cram more through it: let the receiver reach back and fetch exactly what it needs, and learn where to reach.",
   "deeper_dive": [
    "In 2014 the hot idea in translation was the encoder-decoder: one recurrent network reads a sentence and boils it down to a single vector, and a second network unrolls that vector into another language. It worked surprisingly well for short sentences, but quality fell off a cliff as sentences got longer. Squeezing a 40-word sentence into one fixed list of numbers was like being asked to summarize a whole paragraph in one breath and then translate from your summary.",
    "Bahdanau, then a PhD student visiting Yoshua Bengio's lab in Montreal, proposed a simple fix: keep every one of the encoder's intermediate states, and at each step of writing the translation, let the decoder compute a score for each input position, turn the scores into weights that add up to one, and take a weighted average. Those weights are the 'attention'. Because everything is smooth and differentiable, the network learns where to look using the same backpropagation it uses for everything else.",
    "A delightful side effect was that you could draw the attention weights as a picture. For English-to-French, the bright squares mostly ran along the diagonal, but they bent in the right places where French flips word order, such as putting adjectives after nouns. Nobody had told the network about grammar; it had discovered alignment on its own.",
    "The paper was titled 'Neural Machine Translation by Jointly Learning to Align and Translate'. Its own key words were “align”, “(soft-)search” and “alignment model”, and it named its model RNNsearch. The word 'attention' appears only twice, in one passage: “this implements a mechanism of attention in the decoder.” The name stuck anyway. Within three years, a team at Google asked a radical follow-up question: what if attention is not the helper, but the whole machine?"
   ],
   "sources": [
    {
     "title": "Bahdanau, Cho & Bengio (2014), Neural Machine Translation by Jointly Learning to Align and Translate",
     "url": "https://arxiv.org/abs/1409.0473"
    },
    {
     "title": "Cho et al. (2014), Learning Phrase Representations using RNN Encoder-Decoder",
     "url": "https://arxiv.org/abs/1406.1078"
    }
   ],
   "watch": [
    {
     "title": "Attention for Neural Networks, Clearly Explained!!!",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=PSs6nxngL6k"
    },
    {
     "title": "Attention in transformers, step-by-step | Deep Learning Chapter 6",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=eMlx5fFNoYc"
    }
   ],
   "read": [
    {
     "title": "Why Machines Learn: The Elegant Math Behind Modern AI",
     "author": "Anil Ananthaswamy",
     "year": 2024,
     "isbn13": "9780593185742",
     "url": "https://www.amazon.com/s?k=9780593185742",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "attention",
    "translation",
    "language"
   ]
  },
  {
   "id": "adam-2014",
   "year": 2014,
   "date": "2014-12-22",
   "title": "Adam: a smarter way to slide downhill",
   "people": [
    {
     "name": "Diederik P. Kingma",
     "role": "Researcher (University of Amsterdam / OpenAI) and co-author"
    },
    {
     "name": "Jimmy Ba",
     "role": "PhD student at the University of Toronto and co-author"
    }
   ],
   "track": "04-sliding-downhill",
   "era": "deep",
   "what_happened": "Kingma and Ba published Adam, an optimizer that adjusts the step size separately for every single parameter. It keeps a running average of each parameter's recent gradients (like momentum) and of their squared size, and uses both to decide how big a step to take. It became the default way to train neural networks, including GPTs (usually in the variant AdamW).",
   "why_it_mattered_kid": "Adam is like a hiker who remembers which way they've been heading and takes smaller steps on wobbly ground, so they reach the valley faster without tumbling.",
   "why_it_mattered_adult": "Plain gradient descent uses one learning rate for millions of parameters with wildly different gradient scales. Adam's per-parameter adaptive scaling plus momentum made training far less sensitive to hand-tuning, and AdamW (decoupled weight decay) is what nanoGPT and most LLM training runs use.",
   "thinking_move": "Don't treat every direction the same: keep a little memory of each one's history and let that set its own pace.",
   "deeper_dive": [
    "Cauchy's 1847 recipe, step downhill along the gradient, is still at the heart of training. But a neural network has millions or billions of parameters, and the landscape is steep in some directions and nearly flat in others. A single step size that is safe for the steep directions crawls along the flat ones; one that is good for the flat directions makes the steep ones explode. Researchers spent a lot of time babysitting learning rates.",
    "Ideas to fix this were already around: momentum (keep rolling in the direction you've been going), AdaGrad, and RMSProp, which Geoffrey Hinton described in a lecture of his online course rather than in a paper. Adam combined momentum with RMSProp-style scaling and added a small correction so the running averages aren't biased toward zero at the start.",
    "The paper, posted to arXiv in December 2014 and presented at ICLR 2015, became one of the most cited papers in all of science. It wasn't the last word: researchers later found cases where Adam does worse than plain SGD, and Loshchilov and Hutter's AdamW fixed how it handles weight decay. Newer optimizers keep appearing, but in Lesson 11 you will still see AdamW in nanoGPT's training loop."
   ],
   "sources": [
    {
     "title": "Kingma & Ba (2014), Adam: A Method for Stochastic Optimization",
     "url": "https://arxiv.org/abs/1412.6980"
    }
   ],
   "watch": [
    {
     "title": "Gradient descent, how neural networks learn | Deep Learning Chapter 2",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=IHZwWFHWa-w"
    }
   ],
   "read": [
    {
     "title": "Understanding Deep Learning",
     "author": "Simon J. D. Prince",
     "year": 2023,
     "isbn13": "9780262048644",
     "url": "https://www.amazon.com/s?k=9780262048644",
     "kid_friendly": false
    }
   ],
   "kid_friendly": false,
   "tags": [
    "optimization",
    "training"
   ]
  },
  {
   "id": "bpe-2015",
   "year": 2015,
   "date": "2015-08-31",
   "title": "Byte-pair encoding: chopping words into pieces",
   "people": [
    {
     "name": "Rico Sennrich",
     "role": "Lead author, University of Edinburgh"
    },
    {
     "name": "Barry Haddow",
     "role": "Co-author"
    },
    {
     "name": "Alexandra Birch",
     "role": "Co-author"
    },
    {
     "name": "Philip Gage",
     "role": "Described the byte-pair encoding compression algorithm in 1994"
    }
   ],
   "track": "11-nanogpt",
   "era": "deep",
   "what_happened": "Sennrich, Haddow and Birch borrowed a 1994 data-compression trick, byte-pair encoding, to split text into 'subword' pieces. Start with single characters, then repeatedly glue together the most common neighboring pair into a new token. Rare words get broken into familiar chunks, so the model is never stuck with a word it has no symbol for. GPT-2 later applied the same idea to raw bytes.",
   "why_it_mattered_kid": "Instead of needing a separate symbol for every word ever invented, the model builds words out of common chunks like 'un', 'believ' and 'able', the way you can sound out a word you've never seen.",
   "why_it_mattered_adult": "Subword tokenization solved the open-vocabulary problem for neural translation and became the standard front end for LLMs. Byte-level BPE (GPT-2 onward) guarantees any string can be encoded, and tokenizer quirks still explain many LLM oddities, such as trouble spelling or counting letters.",
   "thinking_move": "Let the data decide the alphabet: merge whatever shows up together most often, and stop when you have as many symbols as you can afford.",
   "deeper_dive": [
    "Neural translation systems in 2015 had a fixed vocabulary, often around 30,000 to 50,000 words. Anything else, such as a rare name, a long German compound, or a new slang word, became an 'unknown' token, and the translation had a hole in it. Character-level models avoided holes but made sequences very long and slow.",
    "Sennrich's team found the answer in an old compression algorithm that Philip Gage had described in 1994 for squashing files: find the most frequent pair of adjacent symbols, replace it with a new symbol, and repeat. Applied to text, the first merges produce pieces like 'th' and 'ing', and later merges produce whole common words. Rare words naturally fall apart into smaller known pieces.",
    "The approach turned out to be exactly what language models needed. GPT-2 ran BPE over raw bytes instead of characters, so emoji, code, and any language can be encoded with no 'unknown' token at all. The catch is that the model sees tokens, not letters. That's one reason chatbots have historically struggled to count the r's in 'strawberry', and why Karpathy devoted a whole video to building a tokenizer from scratch."
   ],
   "sources": [
    {
     "title": "Sennrich, Haddow & Birch (2015), Neural Machine Translation of Rare Words with Subword Units",
     "url": "https://arxiv.org/abs/1508.07909"
    }
   ],
   "watch": [
    {
     "title": "Let's build the GPT Tokenizer",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=zduSFxRajkE"
    }
   ],
   "read": [
    {
     "title": "Build a Large Language Model (From Scratch)",
     "author": "Sebastian Raschka",
     "year": 2024,
     "isbn13": "9781633437166",
     "url": "https://www.amazon.com/s?k=9781633437166",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "tokenization",
    "language",
    "compression"
   ]
  },
  {
   "id": "resnet-2015",
   "year": 2015,
   "date": "2015-12-10",
   "title": "ResNet: shortcuts let networks go 152 layers deep",
   "people": [
    {
     "name": "Kaiming He",
     "role": "Lead author, Microsoft Research Asia"
    },
    {
     "name": "Xiangyu Zhang",
     "role": "Co-author"
    },
    {
     "name": "Shaoqing Ren",
     "role": "Co-author"
    },
    {
     "name": "Jian Sun",
     "role": "Co-author and research lead"
    }
   ],
   "track": "branch-vision",
   "era": "deep",
   "what_happened": "A Microsoft Research team found that very deep networks got worse, not better, as they added layers, even on training data. Their fix was the residual connection: each block adds its output to its own input, so a layer only has to learn a small change. With these shortcuts they trained a 152-layer network that won the 2015 ImageNet competition.",
   "why_it_mattered_kid": "By giving each layer a shortcut around itself, the team could stack more than a hundred layers without the signal getting lost on the way.",
   "why_it_mattered_adult": "Residual connections give gradients a clean path through depth and make 'do nothing' the easy default for each block. Every Transformer, including GPT, is built around a residual stream for exactly this reason.",
   "thinking_move": "Instead of asking each step to rebuild everything, ask it only for the difference it wants to add.",
   "deeper_dive": [
    "After AlexNet in 2012, the race was on to go deeper: 8 layers, then 19, then 22. But past a point something strange happened. Deeper networks had higher error even on the training set. That ruled out overfitting. A deeper network should in principle be able to copy a shallower one and set the extra layers to 'do nothing', yet in practice training couldn't find that solution.",
    "Kaiming He and colleagues flipped the question. Instead of asking a block of layers to learn an output H(x), let it learn only the change F(x), and add the input back: output = x + F(x). Now 'do nothing' just means F = 0, which is easy. And during backpropagation, the '+ x' acts like an express lane that carries the blame signal straight back to early layers.",
    "The result was dramatic: a 152-layer ResNet won ImageNet 2015, and the paper went on to become one of the most cited papers ever written. The lesson spread far beyond vision. When you look inside a GPT in Lesson 11, every attention block and every MLP block is wrapped in exactly this kind of shortcut. People now describe the Transformer's central highway of numbers as the 'residual stream'."
   ],
   "sources": [
    {
     "title": "He et al. (2015), Deep Residual Learning for Image Recognition",
     "url": "https://arxiv.org/abs/1512.03385"
    }
   ],
   "watch": [
    {
     "title": "The moment we stopped understanding AI [AlexNet]",
     "channel": "Welch Labs",
     "url": "https://www.youtube.com/watch?v=UZDiGooFs54"
    }
   ],
   "read": [
    {
     "title": "Understanding Deep Learning",
     "author": "Simon J. D. Prince",
     "year": 2023,
     "isbn13": "9780262048644",
     "url": "https://www.amazon.com/s?k=9780262048644",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "vision",
    "depth",
    "architecture"
   ]
  },
  {
   "id": "alphago-2016",
   "year": 2016,
   "date": "2016-03",
   "title": "AlphaGo beats Lee Sedol at Go",
   "people": [
    {
     "name": "David Silver",
     "role": "Lead researcher on AlphaGo at DeepMind"
    },
    {
     "name": "Demis Hassabis",
     "role": "DeepMind co-founder and CEO"
    },
    {
     "name": "Aja Huang",
     "role": "Lead programmer who placed AlphaGo's stones on the board during the match"
    },
    {
     "name": "Lee Sedol",
     "role": "South Korean Go champion, one of the strongest players of his era"
    },
    {
     "name": "Volodymyr Mnih",
     "role": "Lead author of DeepMind's Atari-playing DQN (2013, 2015)"
    }
   ],
   "track": "branch-reinforcement-learning",
   "era": "deep",
   "what_happened": "In March 2016 in Seoul, DeepMind's AlphaGo defeated Lee Sedol 4 games to 1 in the board game Go, which many experts had expected to resist computers for another decade. AlphaGo combined neural networks that judged moves and positions with a tree search, trained first on human games and then by playing against itself. It built on DeepMind's earlier DQN, which learned to play Atari video games from screen pixels.",
   "why_it_mattered_kid": "A computer taught itself to play Go so well that it beat one of the world's best players, and even made a move that human experts first thought was a mistake.",
   "why_it_mattered_adult": "AlphaGo showed that deep networks plus search plus self-play reinforcement learning could master a domain with an astronomically large search space. Its recipe (learn from humans, then improve beyond them with RL) foreshadows how today's reasoning models are trained.",
   "thinking_move": "Use learned intuition to decide which few options are worth thinking hard about, then let practice against yourself sharpen that intuition.",
   "deeper_dive": [
    "Chess fell to IBM's Deep Blue in 1997, largely through brute-force search. Go was different. A 19x19 board allows far more possible games than chess, and good positions are hard to score with rules. Strong players talk about shape and feel. For years the best Go programs played at an amateur level, and many people assumed beating a top professional was still years away.",
    "DeepMind had already shown in 2013 and 2015 that a single network (DQN) could learn dozens of Atari games from pixels and score alone. For Go they built a 'policy network' to suggest promising moves and a 'value network' to estimate who is winning, then used them to guide a Monte Carlo tree search. The policy network first imitated human expert games, then improved by playing millions of games against versions of itself.",
    "In game 2, AlphaGo played move 37, a stone on the fifth line that commentators initially thought was an error. It turned out to be brilliant, and became a symbol of a machine finding ideas humans had overlooked. In game 4, Lee Sedol answered with his own celebrated move 78, a stunning play that confused AlphaGo and gave humanity its only win.",
    "The match was watched by many millions of people, especially in East Asia. Lee Sedol retired from professional play in 2019, and has said in interviews that AI was part of the reason. DeepMind's next versions, AlphaGo Zero and AlphaZero, dropped the human games entirely and learned from self-play alone."
   ],
   "sources": [
    {
     "title": "Silver et al. (2016), Mastering the game of Go with deep neural networks and tree search",
     "url": "https://doi.org/10.1038/nature16961"
    },
    {
     "title": "Mnih et al. (2013), Playing Atari with Deep Reinforcement Learning",
     "url": "https://arxiv.org/abs/1312.5602"
    },
    {
     "title": "Mnih et al. (2015), Human-level control through deep reinforcement learning",
     "url": "https://doi.org/10.1038/nature14236"
    }
   ],
   "watch": [
    {
     "title": "AlphaGo - The Movie | Full award-winning documentary",
     "channel": "Google DeepMind",
     "url": "https://www.youtube.com/watch?v=WXuK6gekU1Y"
    }
   ],
   "read": [
    {
     "title": "Genius Makers",
     "author": "Cade Metz",
     "year": 2021,
     "isbn13": "9781524742676",
     "url": "https://www.amazon.com/s?k=9781524742676",
     "kid_friendly": false
    },
    {
     "title": "Reinforcement Learning: An Introduction (2nd ed.)",
     "author": "Richard S. Sutton, Andrew G. Barto",
     "year": 2018,
     "isbn13": "9780262039246",
     "url": "https://www.amazon.com/s?k=9780262039246",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "games",
    "reinforcement-learning",
    "search"
   ]
  },
  {
   "id": "rlhf-christiano-2017",
   "year": 2017,
   "date": "2017-06-12",
   "title": "Learning what people want from comparisons",
   "people": [
    {
     "name": "Paul Christiano",
     "role": "Lead author, then at OpenAI"
    },
    {
     "name": "Jan Leike",
     "role": "Co-author, then at DeepMind"
    },
    {
     "name": "Tom B. Brown",
     "role": "Co-author"
    },
    {
     "name": "Dario Amodei",
     "role": "Co-author, then at OpenAI"
    }
   ],
   "track": "12-parrot-to-assistant",
   "era": "transformers",
   "what_happened": "Researchers from OpenAI and DeepMind showed that an AI could learn a task from people simply clicking which of two short video clips looked better. A 'reward model' learned to predict those preferences, and a reinforcement learning agent was trained to please the reward model. With under an hour of human feedback, a simulated robot learned to do a backflip.",
   "why_it_mattered_kid": "Instead of writing rules for what 'good' means, the researchers just showed people two tries and asked 'which is better?', and the AI learned from thousands of those choices.",
   "why_it_mattered_adult": "Learning a reward model from pairwise human preferences made RL usable for goals that are easy to judge but hard to specify. This is the core of RLHF, which InstructGPT and ChatGPT later used to turn raw language models into assistants.",
   "thinking_move": "When you can't define the goal, collect judgments: comparing two options is much easier for people than scoring one.",
   "deeper_dive": [
    "Reinforcement learning works well when the goal is a number the computer can read, like a game score. But most things we want are fuzzy. How do you write a formula for 'a graceful backflip' or 'a helpful answer'? Hand-written reward functions tend to get 'hacked': the agent finds a weird loophole that scores points without doing what you meant.",
    "Christiano, Leike and colleagues asked humans to watch pairs of short clips of an agent and click the one that looked closer to the goal. A neural network learned to predict which clip a person would prefer, and that prediction became the reward. Crucially, the people only had to label a tiny fraction of the agent's experience; the reward model generalized the rest.",
    "The famous demo was a simulated 'Hopper' robot learning a backflip from about 900 human comparisons, a behavior that would be very hard to describe with a formula. The authors were motivated by AI safety: they wanted ways to point powerful systems at what humans actually want. Several of the people involved later helped build InstructGPT, and some went on to found Anthropic."
   ],
   "sources": [
    {
     "title": "Christiano et al. (2017), Deep reinforcement learning from human preferences",
     "url": "https://arxiv.org/abs/1706.03741"
    }
   ],
   "watch": [
    {
     "title": "Reinforcement Learning with Human Feedback (RLHF), Clearly Explained!!!",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=qPN_XZcJf_s"
    }
   ],
   "read": [
    {
     "title": "The Alignment Problem",
     "author": "Brian Christian",
     "year": 2020,
     "isbn13": "9780393635829",
     "url": "https://www.amazon.com/s?k=9780393635829",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "alignment",
    "reinforcement-learning",
    "feedback"
   ]
  },
  {
   "id": "transformer-2017",
   "year": 2017,
   "date": "2017-06-12",
   "title": "“Attention Is All You Need”: the Transformer",
   "people": [
    {
     "name": "Ashish Vaswani",
     "role": "First author, Google Brain"
    },
    {
     "name": "Noam Shazeer",
     "role": "Co-author who worked out key details such as multi-head and scaled dot-product attention"
    },
    {
     "name": "Niki Parmar",
     "role": "Co-author"
    },
    {
     "name": "Jakob Uszkoreit",
     "role": "Co-author who proposed replacing recurrence with self-attention"
    },
    {
     "name": "Llion Jones",
     "role": "Co-author"
    },
    {
     "name": "Aidan N. Gomez",
     "role": "Co-author, then an intern"
    },
    {
     "name": "Łukasz Kaiser",
     "role": "Co-author"
    },
    {
     "name": "Illia Polosukhin",
     "role": "Co-author"
    }
   ],
   "track": "10-just-look-back",
   "era": "transformers",
   "what_happened": "Eight researchers at Google posted a paper describing the Transformer, a translation model with no recurrence at all. Every word looks at every other word through 'self-attention', several attention 'heads' work in parallel, and position is added as a signal. It beat the best translation systems while training much faster, because all positions are processed at once.",
   "why_it_mattered_kid": "The Transformer let every word in a sentence look at every other word at the same time, instead of reading one word after another, and the 'T' in GPT stands for it.",
   "why_it_mattered_adult": "Dropping recurrence made training massively parallel on GPUs, which is what made scaling to billions of parameters practical. Nearly every major language model since, including GPT, BERT, Claude, Gemini and Llama, is a variant of this architecture.",
   "thinking_move": "If the helper is doing all the useful work, try removing everything else and building the whole machine out of the helper.",
   "deeper_dive": [
    "By 2017, recurrent networks with attention were the state of the art for translation. But RNNs have to read one word at a time: word 50 can't be processed until word 49 is done. That made them slow to train on GPUs, which are built to do thousands of things at once. Attention, meanwhile, was doing much of the heavy lifting.",
    "Jakob Uszkoreit pushed the idea that self-attention alone might be enough, an idea that reportedly met skepticism at first. A small team formed around it. Noam Shazeer joined and contributed several of the key details. The final paper lists the eight authors as equal contributors, in random order, with a footnote describing who did what.",
    "The design is surprisingly simple: blocks of multi-head self-attention followed by small feed-forward networks, each wrapped in residual connections and normalization. Because attention by itself has no sense of order, they added 'positional encodings' made of sine waves. The title, a play on the Beatles song 'All You Need Is Love', became one of the most famous in computer science.",
    "Google used it for translation, but others quickly saw more. Within a year, OpenAI's GPT used just the decoder half to predict the next word, and Google's BERT used the encoder half to understand text. In the years that followed, all eight authors left Google, several of them to start their own AI companies."
   ],
   "sources": [
    {
     "title": "Vaswani et al. (2017), Attention Is All You Need",
     "url": "https://arxiv.org/abs/1706.03762"
    }
   ],
   "watch": [
    {
     "title": "Transformers, the tech behind LLMs | Deep Learning Chapter 5",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=wjZofJX0v4M"
    },
    {
     "title": "Attention in transformers, step-by-step | Deep Learning Chapter 6",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=eMlx5fFNoYc"
    },
    {
     "title": "Transformer Neural Networks, ChatGPT's foundation, Clearly Explained!!!",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=zxQyTK8quyY"
    },
    {
     "title": "Attention Is All You Need",
     "channel": "Yannic Kilcher",
     "url": "https://www.youtube.com/watch?v=iDulhoQ2pro"
    }
   ],
   "read": [
    {
     "title": "Build a Large Language Model (From Scratch)",
     "author": "Sebastian Raschka",
     "year": 2024,
     "isbn13": "9781633437166",
     "url": "https://www.amazon.com/s?k=9781633437166",
     "kid_friendly": false
    },
    {
     "title": "Hands-On Large Language Models",
     "author": "Jay Alammar, Maarten Grootendorst",
     "year": 2024,
     "isbn13": "9781098150969",
     "url": "https://www.amazon.com/s?k=9781098150969",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "attention",
    "architecture",
    "transformer"
   ]
  },
  {
   "id": "gpt-1-2018",
   "year": 2018,
   "date": "2018-06",
   "title": "GPT-1: pre-train first, then fine-tune",
   "people": [
    {
     "name": "Alec Radford",
     "role": "Lead author, OpenAI"
    },
    {
     "name": "Karthik Narasimhan",
     "role": "Co-author"
    },
    {
     "name": "Tim Salimans",
     "role": "Co-author"
    },
    {
     "name": "Ilya Sutskever",
     "role": "Co-author; OpenAI co-founder and chief scientist"
    },
    {
     "name": "Jacob Devlin",
     "role": "Lead author of Google's BERT (2018), GPT's encoder-based cousin"
    }
   ],
   "track": "11-nanogpt",
   "era": "transformers",
   "what_happened": "OpenAI trained a 12-layer Transformer decoder to predict the next word on thousands of unpublished books, then fine-tuned it with a little labeled data for tasks like answering questions and judging whether one sentence implies another. This 'generative pre-training' approach set new records on most of the tasks they tried. Later that year Google's BERT used the Transformer's encoder half with a fill-in-the-blank objective and pushed results further still.",
   "why_it_mattered_kid": "GPT-1 showed that a network that just practices guessing the next word in lots of books secretly learns a lot about language, which it can then use for other jobs.",
   "why_it_mattered_adult": "GPT-1 established the two-stage recipe of unsupervised pre-training on raw text, then supervised fine-tuning, with a decoder-only Transformer. The 'GPT' architecture you build in Lesson 11 descends directly from it.",
   "thinking_move": "Train on a cheap, endless task (predict the next word) to learn general knowledge, then spend your scarce labeled data on the specific task.",
   "deeper_dive": [
    "Labeled data is expensive. Someone has to read each example and mark the right answer. But unlabeled text is nearly free: every book and web page is full of it. Word embeddings like word2vec had shown that some knowledge could be squeezed out of raw text, but only at the level of single words. The question was whether a whole network could be pre-trained that way.",
    "Alec Radford had earlier found a single neuron in a next-character prediction model that tracked whether an Amazon review was positive or negative, even though the model had never been told about sentiment. That hinted that next-token prediction forces a model to learn about meaning. GPT-1 scaled the idea up with a Transformer decoder trained on a dataset of roughly 7,000 books.",
    "The paper was released quietly, as a blog post and a PDF rather than a big announcement. A few months later Google's BERT, which reads text in both directions and learns by filling in masked words, beat it on many benchmarks and got more attention at the time. For a few years 'BERT-style' understanding models and 'GPT-style' generating models were seen as rival branches. Generation won the long game."
   ],
   "sources": [
    {
     "title": "Radford et al. (2018), Improving Language Understanding by Generative Pre-Training",
     "url": "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf"
    },
    {
     "title": "Devlin et al. (2018), BERT: Pre-training of Deep Bidirectional Transformers",
     "url": "https://arxiv.org/abs/1810.04805"
    }
   ],
   "watch": [
    {
     "title": "Let's build GPT: from scratch, in code, spelled out.",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=kCc8FmEb1nY"
    }
   ],
   "read": [
    {
     "title": "Build a Large Language Model (From Scratch)",
     "author": "Sebastian Raschka",
     "year": 2024,
     "isbn13": "9781633437166",
     "url": "https://www.amazon.com/s?k=9781633437166",
     "kid_friendly": false
    }
   ],
   "kid_friendly": false,
   "tags": [
    "pre-training",
    "language",
    "gpt"
   ]
  },
  {
   "id": "gpt-2-2019",
   "year": 2019,
   "date": "2019-02-14",
   "title": "GPT-2: “too dangerous to release”?",
   "people": [
    {
     "name": "Alec Radford",
     "role": "Lead author, OpenAI"
    },
    {
     "name": "Jeff Wu",
     "role": "Co-author"
    },
    {
     "name": "Rewon Child",
     "role": "Co-author"
    },
    {
     "name": "Dario Amodei",
     "role": "Co-author; then OpenAI's research director"
    },
    {
     "name": "Ilya Sutskever",
     "role": "Co-author; OpenAI chief scientist"
    }
   ],
   "track": "11-nanogpt",
   "era": "transformers",
   "what_happened": "OpenAI trained GPT-2, a 1.5-billion-parameter Transformer, on about 40 GB of text from web pages linked on Reddit. Without any fine-tuning it could write surprisingly coherent paragraphs and do simple versions of tasks like summarizing and translating. Worried about misuse, OpenAI first released only smaller versions and published the full model in stages, finishing in November 2019.",
   "why_it_mattered_kid": "GPT-2 could write a whole believable news story from one opening sentence, which made people argue for the first time about whether some AI should be kept secret.",
   "why_it_mattered_adult": "GPT-2 showed that scaling a plain decoder on diverse web text produced zero-shot task ability, and its staged release started the ongoing debate over openness versus caution. Its 124M version is the model Karpathy reproduces in nanoGPT.",
   "thinking_move": "Make the same thing bigger and feed it more varied data, then check what it can do that nobody trained it to do.",
   "deeper_dive": [
    "GPT-1 needed fine-tuning for each task. The GPT-2 paper's title stated a bolder idea: 'Language Models are Unsupervised Multitask Learners'. If the internet contains examples of translation, summaries and Q&A, then a model that predicts internet text well should pick up those skills on its own. To get better data, the team collected pages that Reddit users had linked to with at least a few upvotes, a crude but effective quality filter.",
    "The demo that went viral was a made-up news story about scientists discovering unicorns in the Andes, written by the model from a two-sentence prompt. It wasn't perfect, but it stayed on topic for paragraphs, which no earlier model could do reliably.",
    "OpenAI announced it would not immediately release the largest model, citing the risk of automated fake news and spam. Some researchers praised the caution; others called it hype. OpenAI released larger versions over the following months and the full 1.5B model in November 2019, reporting it had seen no strong evidence of misuse so far. The episode set the template for today's arguments about releasing powerful models.",
    "GPT-2 also introduced byte-level BPE tokenization and a few small architectural tweaks that nanoGPT copies. In 2024 Karpathy released a four-hour video reproducing the 124M-parameter GPT-2 from scratch, something that had been a frontier result five years earlier."
   ],
   "sources": [
    {
     "title": "Radford et al. (2019), Language Models are Unsupervised Multitask Learners",
     "url": "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
    },
    {
     "title": "OpenAI (2019), Better language models and their implications",
     "url": "https://openai.com/index/better-language-models/"
    },
    {
     "title": "OpenAI (2019), GPT-2: 1.5B release",
     "url": "https://openai.com/index/gpt-2-1-5b-release/"
    }
   ],
   "watch": [
    {
     "title": "Let's reproduce GPT-2 (124M)",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=l8pRSuU81PU"
    }
   ],
   "read": [
    {
     "title": "Build a Large Language Model (From Scratch)",
     "author": "Sebastian Raschka",
     "year": 2024,
     "isbn13": "9781633437166",
     "url": "https://www.amazon.com/s?k=9781633437166",
     "kid_friendly": false
    },
    {
     "title": "Artificial Intelligence: A Guide for Thinking Humans",
     "author": "Melanie Mitchell",
     "year": 2019,
     "isbn13": "9780374257835",
     "url": "https://www.amazon.com/s?k=9780374257835",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "gpt",
    "scale",
    "ethics"
   ]
  },
  {
   "id": "scaling-laws-2020",
   "year": 2020,
   "date": "2020-01-23",
   "title": "Scaling laws: bigger is predictably better",
   "people": [
    {
     "name": "Jared Kaplan",
     "role": "Lead author; physicist working with OpenAI"
    },
    {
     "name": "Sam McCandlish",
     "role": "Co-lead author, OpenAI"
    },
    {
     "name": "Tom Henighan",
     "role": "Co-author"
    },
    {
     "name": "Dario Amodei",
     "role": "Senior author"
    }
   ],
   "track": "11-nanogpt",
   "era": "transformers",
   "what_happened": "A team at OpenAI trained many language models of different sizes and found that test loss falls along smooth power laws as you increase model size, dataset size, and compute. The curves were so regular that you could predict how good a model would be before training it. They concluded that, for a fixed budget, it pays to train very large models.",
   "why_it_mattered_kid": "The researchers found that making language models bigger made them better in such a steady, predictable way that you could draw the line and guess how good the next one would be.",
   "why_it_mattered_adult": "Power-law scaling turned model building into something like engineering: you could forecast returns on compute and justify very expensive training runs. It helped motivate GPT-3, and its specific advice about model versus data size was later revised by Chinchilla.",
   "thinking_move": "Run many small experiments, plot them on log-log axes, and if you see a straight line, extrapolate.",
   "deeper_dive": [
    "Before 2020, choosing how big to make a model was mostly guesswork. Kaplan, a theoretical physicist by training, brought a physicist's habit to the problem: vary one thing over many orders of magnitude and look for a simple law. The team trained Transformers from a few thousand to over a billion parameters.",
    "The surprise was how clean the results were. On a log-log plot, loss versus parameters, versus data, and versus compute each looked like a straight line spanning many orders of magnitude. Details like the number of layers versus width mattered much less than total size. Bigger models were also more 'sample efficient', learning more from each token.",
    "This gave labs the confidence to spend millions of dollars on a single training run, because they could predict roughly what they would get. GPT-3 followed months later. The paper's recommendation to grow models faster than data turned out to be off, partly because of how learning-rate schedules were set in the experiments. DeepMind's Chinchilla paper corrected it in 2022, but the core insight, that scaling is predictable, held up."
   ],
   "sources": [
    {
     "title": "Kaplan et al. (2020), Scaling Laws for Neural Language Models",
     "url": "https://arxiv.org/abs/2001.08361"
    }
   ],
   "watch": [
    {
     "title": "[1hr Talk] Intro to Large Language Models",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=zjkBMFhNj_g"
    }
   ],
   "read": [
    {
     "title": "Genius Makers",
     "author": "Cade Metz",
     "year": 2021,
     "isbn13": "9781524742676",
     "url": "https://www.amazon.com/s?k=9781524742676",
     "kid_friendly": false
    }
   ],
   "kid_friendly": false,
   "tags": [
    "scale",
    "compute",
    "math"
   ]
  },
  {
   "id": "gpt-3-2020",
   "year": 2020,
   "date": "2020-05-28",
   "title": "GPT-3 learns from examples in the prompt",
   "people": [
    {
     "name": "Tom B. Brown",
     "role": "Lead author, OpenAI"
    },
    {
     "name": "Benjamin Mann",
     "role": "Co-author"
    },
    {
     "name": "Nick Ryder",
     "role": "Co-author"
    },
    {
     "name": "Melanie Subbiah",
     "role": "Co-author"
    },
    {
     "name": "Dario Amodei",
     "role": "Senior author"
    }
   ],
   "track": "11-nanogpt",
   "era": "transformers",
   "what_happened": "OpenAI described GPT-3, a 175-billion-parameter language model, more than 100 times larger than GPT-2. Its headline ability was 'in-context learning': show it a few examples of a task in the prompt, such as English words and their French translations, and it continues the pattern with no retraining at all. It was offered to developers through a paid API rather than released openly.",
   "why_it_mattered_kid": "You could teach GPT-3 a new game just by showing it a few examples in your message, without changing anything inside it.",
   "why_it_mattered_adult": "Few-shot prompting showed that one large pre-trained model could handle many tasks via the prompt alone, shifting effort from fine-tuning to prompting. It also made clear that scale alone produced new capabilities, and showed their limits: errors, made-up facts, and biases.",
   "thinking_move": "Instead of changing the model to fit the task, change the input so the task looks like text the model already knows how to continue.",
   "deeper_dive": [
    "Following the scaling laws, OpenAI went big: 175 billion parameters trained on hundreds of billions of tokens from filtered web text, books and Wikipedia. The paper's title, 'Language Models are Few-Shot Learners', named the surprise. Earlier models had to be fine-tuned for each task. GPT-3 could often do a task after seeing just a few examples in its prompt, and it got better at this the bigger it was.",
    "Developers given early access posted demos of GPT-3 writing poetry, simple code, and website layouts from descriptions. The excitement was intense, and so was the pushback. GPT-3 could confidently state false facts, lose track in long passages, and repeat biases from its web training data. The paper itself, unusually long, devoted sections to these risks.",
    "GPT-3 was also not very good at following instructions. Ask it a question and it might continue with more questions, because that is what the internet often looks like. Turning this powerful but unruly text-continuer into something you could simply talk to was the next problem, and it led directly to InstructGPT and ChatGPT."
   ],
   "sources": [
    {
     "title": "Brown et al. (2020), Language Models are Few-Shot Learners",
     "url": "https://arxiv.org/abs/2005.14165"
    }
   ],
   "watch": [
    {
     "title": "Large Language Models explained briefly",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=LPZh9BOjkQs"
    },
    {
     "title": "[1hr Talk] Intro to Large Language Models",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=zjkBMFhNj_g"
    }
   ],
   "read": [
    {
     "title": "Artificial Intelligence: A Guide for Thinking Humans",
     "author": "Melanie Mitchell",
     "year": 2019,
     "isbn13": "9780374257835",
     "url": "https://www.amazon.com/s?k=9780374257835",
     "kid_friendly": false
    },
    {
     "title": "AI Snake Oil",
     "author": "Arvind Narayanan, Sayash Kapoor",
     "year": 2024,
     "isbn13": "9780691249131",
     "url": "https://www.amazon.com/s?k=9780691249131",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "gpt",
    "scale",
    "prompting"
   ]
  },
  {
   "id": "diffusion-2020",
   "year": 2020,
   "date": "2020-06-19",
   "title": "Diffusion models: making pictures by removing noise",
   "people": [
    {
     "name": "Jonathan Ho",
     "role": "Lead author of DDPM, UC Berkeley"
    },
    {
     "name": "Ajay Jain",
     "role": "Co-author"
    },
    {
     "name": "Pieter Abbeel",
     "role": "Senior author, UC Berkeley"
    },
    {
     "name": "Jascha Sohl-Dickstein",
     "role": "Introduced diffusion-based generative models in 2015"
    },
    {
     "name": "Robin Rombach",
     "role": "Lead author of latent diffusion (2021), the basis of Stable Diffusion"
    }
   ],
   "track": "branch-generative-images",
   "era": "transformers",
   "what_happened": "Ho, Jain and Abbeel showed that 'denoising diffusion probabilistic models' could generate high-quality images. Training is simple: take a real image, add a random amount of noise, and teach a network to predict the noise. To generate, start from pure static and remove noise step by step. The idea came from a 2015 paper by Sohl-Dickstein and colleagues inspired by physics; in 2021 'latent diffusion' made it efficient enough to run on home graphics cards.",
   "why_it_mattered_kid": "Diffusion models learned to draw by practicing cleaning up static-filled pictures, then started from pure static and 'cleaned' their way to a brand-new image.",
   "why_it_mattered_adult": "Diffusion offered stable training and high sample quality and diversity, overtaking GANs for images by around 2021. Combined with text encoders and latent spaces, it powers most text-to-image and text-to-video systems.",
   "thinking_move": "Turn one impossibly hard jump (noise to masterpiece) into many tiny, easy steps, each of which just makes things slightly less messy.",
   "deeper_dive": [
    "In 2015, Jascha Sohl-Dickstein and colleagues borrowed an idea from physics: watch a drop of ink diffuse into water until it is evenly spread out, then imagine running the movie backwards. If you could learn to reverse each tiny step of 'adding noise', you could start from noise and recover structure. The idea was elegant, but the pictures it made were not yet impressive, and GANs got most of the attention.",
    "In 2020, Ho, Jain and Abbeel revisited it with a better neural network (a U-Net) and a simpler training objective: just predict the noise that was added. The results matched or beat GANs on standard image benchmarks, and training was far more stable. There was no adversarial game to collapse, just a straightforward prediction task.",
    "The drawback was speed, since generating an image took hundreds or thousands of small steps. Researchers found faster samplers, and Rombach and colleagues' latent diffusion ran the whole process in a compressed 'latent' space made by an autoencoder. That made it cheap enough to release openly as Stable Diffusion in 2022, the same year DALL-E 2 and Midjourney brought text-to-image to the public.",
    "These tools also brought hard questions that are still debated, about artists' work in training data, about consent, and about fake images, which are worth discussing alongside the technology."
   ],
   "sources": [
    {
     "title": "Ho, Jain & Abbeel (2020), Denoising Diffusion Probabilistic Models",
     "url": "https://arxiv.org/abs/2006.11239"
    },
    {
     "title": "Sohl-Dickstein et al. (2015), Deep Unsupervised Learning using Nonequilibrium Thermodynamics",
     "url": "https://arxiv.org/abs/1503.03585"
    },
    {
     "title": "Rombach et al. (2021), High-Resolution Image Synthesis with Latent Diffusion Models",
     "url": "https://arxiv.org/abs/2112.10752"
    }
   ],
   "watch": [
    {
     "title": "But how do AI images and videos actually work? | Guest video by Welch Labs",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=iv-5mZ_9CPY"
    }
   ],
   "read": [
    {
     "title": "Understanding Deep Learning",
     "author": "Simon J. D. Prince",
     "year": 2023,
     "isbn13": "9780262048644",
     "url": "https://www.amazon.com/s?k=9780262048644",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "generative",
    "images",
    "diffusion"
   ]
  },
  {
   "id": "rope-2021",
   "year": 2021,
   "date": "2021-04-20",
   "title": "RoPE: telling position by rotating",
   "people": [
    {
     "name": "Jianlin Su",
     "role": "Lead author; researcher at Zhuiyi Technology in Shenzhen"
    },
    {
     "name": "Yu Lu",
     "role": "Co-author"
    },
    {
     "name": "Shengfeng Pan",
     "role": "Co-author"
    },
    {
     "name": "Ahmed Murtadha",
     "role": "Co-author"
    }
   ],
   "track": "14-what-we-know-now",
   "era": "transformers",
   "what_happened": "Jianlin Su and colleagues proposed rotary position embedding (RoPE). Instead of adding a position signal to each token, RoPE rotates the query and key vectors by an angle that depends on the token's position. When two tokens are compared in attention, the result depends only on how far apart they are. RoPE became the standard in open models such as Llama, and nanochat uses it.",
   "why_it_mattered_kid": "RoPE tells the model where each word is by turning its arrow by a different amount, so the model can tell how far apart two words are just by comparing their angles.",
   "why_it_mattered_adult": "Rotating query/key pairs encodes absolute position while making attention scores depend on relative position, with no extra parameters. It generalizes better than learned absolute embeddings and is easy to extend to longer contexts, which is why most modern LLMs adopted it.",
   "thinking_move": "Encode 'where' as a rotation, so that comparing two things automatically tells you the difference between their positions.",
   "deeper_dive": [
    "Attention, on its own, has no idea of order: 'dog bites man' and 'man bites dog' contain the same words. The original Transformer added sine-wave patterns to each word's vector, and GPT-2 learned a separate vector for each position. Both work, but they mix position into the meaning of the word, and models struggled with texts longer than the positions they had seen in training.",
    "Su's idea used geometry from Lesson 2. Treat pairs of numbers in the query and key vectors as little 2D arrows, and rotate each arrow by an angle proportional to the token's position. A dot product between two rotated arrows depends only on the difference of their angles, so attention naturally sees relative distance. Different pairs rotate at different speeds, like the hands of a clock, giving both fine and coarse position information.",
    "The method was first described in Chinese on Su's blog and then in an English arXiv paper. It spread through the open-source community and was adopted by many open models, notably Meta's Llama. It is a good example of a key idea coming from outside the biggest labs."
   ],
   "sources": [
    {
     "title": "Su et al. (2021), RoFormer: Enhanced Transformer with Rotary Position Embedding",
     "url": "https://arxiv.org/abs/2104.09864"
    }
   ],
   "watch": [],
   "read": [
    {
     "title": "Hands-On Large Language Models",
     "author": "Jay Alammar, Maarten Grootendorst",
     "year": 2024,
     "isbn13": "9781098150969",
     "url": "https://www.amazon.com/s?k=9781098150969",
     "kid_friendly": false
    }
   ],
   "kid_friendly": false,
   "tags": [
    "position",
    "geometry",
    "architecture"
   ]
  },
  {
   "id": "instructgpt-2022",
   "year": 2022,
   "date": "2022-03-04",
   "title": "InstructGPT: teaching a model to follow instructions",
   "people": [
    {
     "name": "Long Ouyang",
     "role": "Lead author, OpenAI"
    },
    {
     "name": "Jeff Wu",
     "role": "Co-author"
    },
    {
     "name": "Paul Christiano",
     "role": "Co-author; pioneer of learning from human preferences"
    },
    {
     "name": "Jan Leike",
     "role": "Co-author; led OpenAI's alignment team"
    },
    {
     "name": "Ryan Lowe",
     "role": "Co-author"
    }
   ],
   "track": "12-parrot-to-assistant",
   "era": "assistants",
   "what_happened": "OpenAI fine-tuned GPT-3 in three steps: (1) supervised fine-tuning on answers written by human labelers, (2) training a reward model on labelers' rankings of different answers, and (3) reinforcement learning (PPO) against that reward model. People preferred the outputs of a 1.3-billion-parameter InstructGPT over those of the 175-billion-parameter GPT-3.",
   "why_it_mattered_kid": "By showing the model good examples and then rewarding the answers people liked best, OpenAI turned a text-continuing machine into one that actually tried to do what you asked.",
   "why_it_mattered_adult": "This SFT then reward-model then RL pipeline (RLHF) became the standard recipe for turning base LLMs into assistants and directly produced ChatGPT later that year. It showed alignment work could matter more than 100 times more parameters.",
   "thinking_move": "A model that knows a lot still needs to learn what job it is doing: show it examples, then let human preferences steer it.",
   "deeper_dive": [
    "GPT-3 was powerful but awkward. Because it was trained to continue internet text, a request like 'Explain gravity to a 6-year-old' might be continued with a list of similar homework questions rather than an answer. It could also produce false or toxic text. The knowledge was in there; the behavior wasn't.",
    "The InstructGPT team hired about 40 contractors to write good responses to prompts and to rank model outputs from best to worst. Those rankings trained a reward model, using the method Christiano and colleagues had developed in 2017, and reinforcement learning then pushed the language model toward high-reward answers.",
    "The headline result surprised many: labelers preferred the small 1.3B InstructGPT to the full 175B GPT-3. The paper was candid about limits. The model still made things up, and it was aligned to the preferences of a specific group of labelers and researchers, not to 'humanity'. Those questions about whose values a model reflects remain open, and are good ones to discuss in class."
   ],
   "sources": [
    {
     "title": "Ouyang et al. (2022), Training language models to follow instructions with human feedback",
     "url": "https://arxiv.org/abs/2203.02155"
    },
    {
     "title": "Schulman et al. (2017), Proximal Policy Optimization Algorithms",
     "url": "https://arxiv.org/abs/1707.06347"
    }
   ],
   "watch": [
    {
     "title": "State of GPT | BRK216HFS",
     "channel": "Microsoft Developer",
     "url": "https://www.youtube.com/watch?v=bZQun8Y4L2A"
    },
    {
     "title": "Reinforcement Learning with Human Feedback (RLHF), Clearly Explained!!!",
     "channel": "StatQuest with Josh Starmer",
     "url": "https://www.youtube.com/watch?v=qPN_XZcJf_s"
    }
   ],
   "read": [
    {
     "title": "The Alignment Problem",
     "author": "Brian Christian",
     "year": 2020,
     "isbn13": "9780393635829",
     "url": "https://www.amazon.com/s?k=9780393635829",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "alignment",
    "rlhf",
    "assistants"
   ]
  },
  {
   "id": "chinchilla-2022",
   "year": 2022,
   "date": "2022-03-29",
   "title": "Chinchilla: you need more data, not just more size",
   "people": [
    {
     "name": "Jordan Hoffmann",
     "role": "Lead author, DeepMind"
    },
    {
     "name": "Sebastian Borgeaud",
     "role": "Co-author"
    },
    {
     "name": "Arthur Mensch",
     "role": "Co-author; later co-founded Mistral AI"
    },
    {
     "name": "Laurent Sifre",
     "role": "Senior author"
    }
   ],
   "track": "11-nanogpt",
   "era": "assistants",
   "what_happened": "DeepMind trained over 400 language models and concluded that most big models were too big and trained on too little text. For a fixed compute budget, model size and number of training tokens should grow together, roughly 20 tokens per parameter. Their 70-billion-parameter model Chinchilla, trained on 1.4 trillion tokens, beat their own 280-billion-parameter Gopher using the same compute.",
   "why_it_mattered_kid": "Chinchilla showed that a smaller brain that reads four times as much can beat a much bigger brain that read less.",
   "why_it_mattered_adult": "The 'compute-optimal' rule corrected the earlier scaling-law advice and shifted the field's bottleneck toward data. It also made smaller, cheaper-to-run models attractive, and nanochat sizes its training runs using this kind of rule.",
   "thinking_move": "When a rule of thumb shapes billion-dollar decisions, re-measure it carefully; an experimental detail can change the answer.",
   "deeper_dive": [
    "After Kaplan's 2020 scaling laws, labs raced to build ever-larger models: GPT-3 at 175 billion parameters, then Gopher at 280 billion, then even bigger. But the amount of training text grew much more slowly, with many of these models trained on around 300 billion tokens.",
    "The DeepMind team redid the analysis with three different methods and a key fix: they matched the learning-rate schedule to each run's length. All three methods agreed. Parameters and data should be scaled in equal proportion. By that measure, most frontier models were badly 'undertrained'.",
    "To prove it, they trained Chinchilla, a quarter of Gopher's size, on four times as much data, and it won across the board while also being cheaper to use. The ratio of about 20 tokens per parameter became a famous rule of thumb. Today many models are trained even longer than 'Chinchilla-optimal', because a smaller model that is cheap to run for millions of users is worth the extra training cost."
   ],
   "sources": [
    {
     "title": "Hoffmann et al. (2022), Training Compute-Optimal Large Language Models",
     "url": "https://arxiv.org/abs/2203.15556"
    }
   ],
   "watch": [
    {
     "title": "[1hr Talk] Intro to Large Language Models",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=zjkBMFhNj_g"
    }
   ],
   "read": [],
   "kid_friendly": false,
   "tags": [
    "scale",
    "data",
    "compute"
   ]
  },
  {
   "id": "chatgpt-2022",
   "year": 2022,
   "date": "2022-11-30",
   "title": "ChatGPT is released to the public",
   "people": [
    {
     "name": "John Schulman",
     "role": "OpenAI co-founder who led the team that built ChatGPT"
    },
    {
     "name": "Sam Altman",
     "role": "OpenAI CEO"
    }
   ],
   "track": "12-parrot-to-assistant",
   "era": "assistants",
   "what_happened": "OpenAI released ChatGPT as a free 'research preview': a GPT-3.5 model fine-tuned for conversation with the same human-feedback methods as InstructGPT. Anyone could chat with it in a web browser. It became one of the fastest-growing consumer apps in history and set off a global race to build and deploy chatbots.",
   "why_it_mattered_kid": "ChatGPT was the moment AI chatbots went from a lab experiment to something millions of people, including students and teachers, used every day.",
   "why_it_mattered_adult": "The underlying techniques were mostly published; the leap was packaging a capable RLHF-tuned model in a free, simple chat interface. It reshaped public awareness, investment, education policy, and the research agenda almost overnight.",
   "thinking_move": "Sometimes the breakthrough isn't a new algorithm but a new interface that lets everyone try what experts already had.",
   "deeper_dive": [
    "Inside OpenAI, ChatGPT was reportedly seen as a modest release, a way to gather feedback on a chat-tuned model. The blog post called it a 'research preview' and listed its limitations openly: it could write plausible-sounding but wrong answers, was sensitive to phrasing, and was often wordy.",
    "The public reaction was explosive. OpenAI reported that it passed one million users within about five days. People used it to write essays, debug code, plan meals and argue about philosophy. Schools scrambled to decide what to allow, and rival companies rushed to release their own chatbots in the months that followed.",
    "Technically, ChatGPT was a sibling of InstructGPT: supervised fine-tuning on example conversations written by trainers, followed by RLHF. In Lesson 12 you'll see that the 'assistant' behavior is a thin but powerful layer on top of a base model that, underneath, is still predicting the next token."
   ],
   "sources": [
    {
     "title": "OpenAI (2022), Introducing ChatGPT",
     "url": "https://openai.com/index/chatgpt/"
    },
    {
     "title": "Ouyang et al. (2022), Training language models to follow instructions with human feedback",
     "url": "https://arxiv.org/abs/2203.02155"
    }
   ],
   "watch": [
    {
     "title": "Deep Dive into LLMs like ChatGPT",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=7xTGNNLPyMI"
    },
    {
     "title": "How I use LLMs",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=EWvNQjAaOHw"
    }
   ],
   "read": [
    {
     "title": "AI Snake Oil",
     "author": "Arvind Narayanan, Sayash Kapoor",
     "year": 2024,
     "isbn13": "9780691249131",
     "url": "https://www.amazon.com/s?k=9780691249131",
     "kid_friendly": false
    },
    {
     "title": "Hello World: Being Human in the Age of Algorithms",
     "author": "Hannah Fry",
     "year": 2018,
     "isbn13": "9780393634990",
     "url": "https://www.amazon.com/s?k=9780393634990",
     "kid_friendly": true
    }
   ],
   "kid_friendly": true,
   "tags": [
    "assistants",
    "chatbots",
    "society"
   ]
  },
  {
   "id": "nanogpt-2022",
   "year": 2022,
   "date": "2022-12-28",
   "title": "nanoGPT: a GPT you can read in an afternoon",
   "people": [
    {
     "name": "Andrej Karpathy",
     "role": "Researcher and educator; formerly at OpenAI and Tesla; author of nanoGPT"
    }
   ],
   "track": "11-nanogpt",
   "era": "assistants",
   "what_happened": "Andrej Karpathy published nanoGPT, a small, readable codebase for training and fine-tuning GPT-style models. The core model and training loop are each only a few hundred lines of Python. In January 2023 he released a two-hour video building a GPT from scratch, explaining every piece along the way.",
   "why_it_mattered_kid": "nanoGPT proved that the code behind a GPT is short enough for one person to read, and Karpathy made a video showing how to build it, step by step.",
   "why_it_mattered_adult": "By stripping GPT to its essentials, nanoGPT made the architecture legible and became a common starting point for students and researchers. It is the target of Lesson 11 and a direct ancestor of nanochat.",
   "thinking_move": "Understand a big system by rebuilding the smallest version that still works, and remove everything else.",
   "deeper_dive": [
    "By 2022, production language model code was huge, spread across many files and tied to specialized infrastructure. That made it hard for learners to see that the core idea is fairly small: embeddings, a stack of attention and MLP blocks with residual connections, and a loss that rewards guessing the next token.",
    "Karpathy had already built several teaching projects, including micrograd, a tiny autograd engine, and makemore, a character-level name generator. nanoGPT rewrote his earlier minGPT with a focus on being 'small and fast'. Its `model.py` defines the whole GPT, and `train.py` trains it. With enough GPU time it reproduces GPT-2 (124M) on OpenWebText, and with a laptop it can learn to write fake Shakespeare from a small text file.",
    "His video 'Let's build GPT: from scratch, in code, spelled out' starts from a blank notebook and a text file of Shakespeare and ends with a working Transformer, deriving self-attention along the way. It became one of the most popular introductions to how language models actually work, and this course's Lesson 11 follows the same path."
   ],
   "sources": [
    {
     "title": "karpathy/nanoGPT on GitHub",
     "url": "https://github.com/karpathy/nanoGPT"
    },
    {
     "title": "karpathy/micrograd on GitHub",
     "url": "https://github.com/karpathy/micrograd"
    }
   ],
   "watch": [
    {
     "title": "Let's build GPT: from scratch, in code, spelled out.",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=kCc8FmEb1nY"
    },
    {
     "title": "Let's reproduce GPT-2 (124M)",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=l8pRSuU81PU"
    },
    {
     "title": "The spelled-out intro to neural networks and backpropagation: building micrograd",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=VMj-3S1tku0"
    }
   ],
   "read": [
    {
     "title": "Build a Large Language Model (From Scratch)",
     "author": "Sebastian Raschka",
     "year": 2024,
     "isbn13": "9781633437166",
     "url": "https://www.amazon.com/s?k=9781633437166",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "code",
    "education",
    "gpt"
   ]
  },
  {
   "id": "dpo-2023",
   "year": 2023,
   "date": "2023-05-29",
   "title": "DPO: preference training without the RL",
   "people": [
    {
     "name": "Rafael Rafailov",
     "role": "Co-lead author, Stanford"
    },
    {
     "name": "Archit Sharma",
     "role": "Co-lead author, Stanford"
    },
    {
     "name": "Eric Mitchell",
     "role": "Co-lead author, Stanford"
    },
    {
     "name": "Stefano Ermon",
     "role": "Co-author"
    },
    {
     "name": "Christopher D. Manning",
     "role": "Co-author"
    },
    {
     "name": "Chelsea Finn",
     "role": "Co-author"
    }
   ],
   "track": "12-parrot-to-assistant",
   "era": "assistants",
   "what_happened": "A Stanford team showed that the RLHF objective can be solved with a simple loss applied directly to pairs of preferred and rejected answers. Direct Preference Optimization (DPO) skips training a separate reward model and skips reinforcement learning, but aims at the same goal. It quickly became a popular way to fine-tune open models.",
   "why_it_mattered_kid": "DPO found a shortcut: instead of building a separate 'judge' and then training against it, the model learns directly from pairs of 'this answer is better than that one'.",
   "why_it_mattered_adult": "By showing the language model itself implicitly defines a reward model, DPO turned preference tuning into a stable, supervised-style loss that is much cheaper and simpler than PPO-based RLHF, widening access to alignment-style training.",
   "thinking_move": "Before building a complicated pipeline, check whether the math lets you collapse several stages into one.",
   "deeper_dive": [
    "RLHF works, but it is fiddly. You train a reward model, then run reinforcement learning with PPO, which needs several copies of the model in memory and careful tuning to avoid instability or 'reward hacking'. For university labs and open-source groups with limited computing power, it was a major barrier.",
    "The DPO authors noticed a mathematical shortcut. The best policy under the standard RLHF objective has a closed form in terms of the reward. Flip that around, and the reward can be written in terms of the policy itself. Plug that into the preference-learning loss, and you get an objective you can optimize with ordinary gradient descent on preference pairs, with no sampling loop and no separate reward model. Hence the subtitle: 'Your Language Model is Secretly a Reward Model'.",
    "DPO spread quickly through open-model fine-tuning, and many variants followed. Big labs still use RL heavily, especially when there is a checkable reward such as a correct math answer, as with DeepSeek-R1. But DPO is a great example of a cleaner idea replacing a messy one."
   ],
   "sources": [
    {
     "title": "Rafailov et al. (2023), Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
     "url": "https://arxiv.org/abs/2305.18290"
    }
   ],
   "watch": [],
   "read": [],
   "kid_friendly": false,
   "tags": [
    "alignment",
    "preferences",
    "math"
   ]
  },
  {
   "id": "interpretability-2023",
   "year": 2023,
   "date": "2023-10",
   "title": "Looking inside: finding features in the network",
   "people": [
    {
     "name": "Chris Olah",
     "role": "Anthropic co-founder and interpretability research lead"
    },
    {
     "name": "Trenton Bricken",
     "role": "Lead author of 'Towards Monosemanticity'"
    },
    {
     "name": "Adly Templeton",
     "role": "Lead author of 'Scaling Monosemanticity'"
    },
    {
     "name": "Jack Lindsey",
     "role": "Lead author of 'On the Biology of a Large Language Model'"
    }
   ],
   "track": "14-what-we-know-now",
   "era": "assistants",
   "what_happened": "Researchers at Anthropic used 'sparse autoencoders' to break a small language model's tangled neuron activity into thousands of cleaner, more understandable 'features' (2023). In 2024 they scaled this to a production model, Claude 3 Sonnet, finding features for things like the Golden Gate Bridge, bugs in code, and deception. In 2025 they built 'attribution graphs' that trace some of the steps a model takes inside, for example when planning a rhyme before writing a line of poetry.",
   "why_it_mattered_kid": "Scientists found ways to peek inside a language model and spot the 'ideas' it uses, like a brain scan that lights up for the Golden Gate Bridge.",
   "why_it_mattered_adult": "Individual neurons are polysemantic, but dictionary learning recovers features that are far more interpretable and can be used to steer behavior. Circuit-tracing work begins to show mechanisms such as multi-step reasoning and planning, though only a fraction of a model's computation is explained so far.",
   "thinking_move": "If each part does many jobs at once, look for a better set of parts: rewrite the activity as a combination of many simpler, single-purpose pieces.",
   "deeper_dive": [
    "We build large language models, but we don't really know how they do what they do. Looking at single neurons was disappointing: one neuron might respond to academic citations, Korean text, and HTTP requests all at once. Researchers called this polysemanticity and suspected 'superposition', meaning the network packs more concepts than it has neurons by spreading each concept across many neurons.",
    "'Towards Monosemanticity' (2023) trained a second, much wider network, a sparse autoencoder, to re-express a small model's activations as a sparse combination of many features. Many features turned out to be crisp: DNA sequences, Arabic script, legal language. 'Scaling Monosemanticity' (2024) did the same for Claude 3 Sonnet and found millions of features, some of them abstract and multilingual. In a public demo, amplifying the Golden Gate Bridge feature made the model bring up the bridge in almost every answer.",
    "In 2025, 'On the Biology of a Large Language Model' traced internal pathways for specific prompts. When asked to write a rhyming couplet, the model appeared to choose the rhyme word before writing the line that leads to it, a small piece of evidence that these models can plan ahead rather than only reacting one word at a time. The authors stress their tools explain only part of what is happening. Interpretability is a young science, and that makes it a good field for curious newcomers."
   ],
   "sources": [
    {
     "title": "Bricken et al. (2023), Towards Monosemanticity",
     "url": "https://transformer-circuits.pub/2023/monosemantic-features"
    },
    {
     "title": "Templeton et al. (2024), Scaling Monosemanticity",
     "url": "https://transformer-circuits.pub/2024/scaling-monosemanticity/"
    },
    {
     "title": "Lindsey et al. (2025), On the Biology of a Large Language Model",
     "url": "https://transformer-circuits.pub/2025/attribution-graphs/biology.html"
    },
    {
     "title": "Anthropic (2025), Tracing the thoughts of a large language model",
     "url": "https://www.anthropic.com/research/tracing-thoughts-language-model"
    }
   ],
   "watch": [
    {
     "title": "How might LLMs store facts | Deep Learning Chapter 7",
     "channel": "3Blue1Brown",
     "url": "https://www.youtube.com/watch?v=9-Jl0dxWQs8"
    }
   ],
   "read": [
    {
     "title": "The Alignment Problem",
     "author": "Brian Christian",
     "year": 2020,
     "isbn13": "9780393635829",
     "url": "https://www.amazon.com/s?k=9780393635829",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "interpretability",
    "science",
    "safety"
   ]
  },
  {
   "id": "state-space-models-2023",
   "year": 2023,
   "date": "2023-12-01",
   "title": "State space models: S4 and Mamba",
   "people": [
    {
     "name": "Albert Gu",
     "role": "Lead author of S4 and co-lead of Mamba; Carnegie Mellon"
    },
    {
     "name": "Tri Dao",
     "role": "Co-lead of Mamba; known for FlashAttention; Princeton"
    },
    {
     "name": "Karan Goel",
     "role": "Co-author of S4"
    },
    {
     "name": "Christopher Ré",
     "role": "Senior author of S4, Stanford"
    }
   ],
   "track": "branch-state-space",
   "era": "assistants",
   "what_happened": "Albert Gu and colleagues revived an idea from control engineering, the state space model, as a neural network layer. S4 (2021) handled very long sequences efficiently. Mamba (Gu and Dao, 2023) made the state update depend on the input, so the model can choose what to remember and what to ignore. It processes text in time proportional to its length, unlike attention, whose cost grows with the square of the length.",
   "why_it_mattered_kid": "Mamba reads a long text like you read a book, keeping a running summary in its head instead of rereading every earlier page for every new word.",
   "why_it_mattered_adult": "SSMs offer linear-time training and constant-memory generation, addressing attention's quadratic cost on long contexts. Pure SSMs still trail Transformers on some recall-heavy tasks, so several recent models mix SSM layers with attention layers.",
   "thinking_move": "Revisit an old tool from another field, and fix the one weakness (it couldn't choose what to remember) that kept it from working.",
   "deeper_dive": [
    "Transformers compare every token with every other token. Double the length of the text and the work roughly quadruples. RNNs (Lesson 9) are cheap per step but forget, and they are slow to train because they go one step at a time. Researchers wanted the best of both: something trainable in parallel but cheap to run on very long inputs.",
    "State space models come from control theory, where engineers have used them for decades to describe systems like circuits and aircraft. A hidden 'state' evolves over time according to fixed matrices. Gu's S4 found a clever way to set up and compute these matrices so the model could handle sequences tens of thousands of steps long and train like a convolution.",
    "But fixed rules meant S4 treated every input the same way, which hurt on language. Mamba made the rules 'selective': the input itself decides how much to update or forget. Together with a hardware-aware algorithm from Tri Dao, this produced a model that matched similarly sized Transformers in their experiments on language modeling. The paper drew huge interest, and also a well-publicized rejection from one major conference before being accepted elsewhere. Today, hybrids that combine Mamba-style layers with some attention are an active direction."
   ],
   "sources": [
    {
     "title": "Gu, Goel & Ré (2021), Efficiently Modeling Long Sequences with Structured State Spaces",
     "url": "https://arxiv.org/abs/2111.00396"
    },
    {
     "title": "Gu & Dao (2023), Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
     "url": "https://arxiv.org/abs/2312.00752"
    }
   ],
   "watch": [
    {
     "title": "MAMBA and State Space Models explained | SSM explained",
     "channel": "AI Coffee Break with Letitia",
     "url": "https://www.youtube.com/watch?v=vrF3MtGwD0Y"
    }
   ],
   "read": [],
   "kid_friendly": false,
   "tags": [
    "architecture",
    "memory",
    "long-context"
   ]
  },
  {
   "id": "o1-reasoning-2024",
   "year": 2024,
   "date": "2024-09-12",
   "title": "o1: models that think before answering",
   "people": [
    {
     "name": "Jason Wei",
     "role": "Lead author of chain-of-thought prompting (2022); later worked on o1 at OpenAI"
    },
    {
     "name": "Denny Zhou",
     "role": "Senior author of chain-of-thought prompting at Google"
    }
   ],
   "track": "14-what-we-know-now",
   "era": "assistants",
   "what_happened": "OpenAI released o1-preview, a model trained with reinforcement learning to produce a long hidden 'chain of thought' before giving its answer. It scored far higher than earlier models on competition math and coding problems. OpenAI reported that performance kept improving both with more RL training and with more 'thinking time' at answer time. The idea built on 2022 research showing that prompting models to write out steps improves reasoning.",
   "why_it_mattered_kid": "Instead of blurting out the first answer, o1 was trained to work through a problem step by step first, like showing your work in math class.",
   "why_it_mattered_adult": "o1 showed a second scaling axis: test-time compute. RL on verifiable tasks taught the model to use long reasoning traces productively, starting the era of 'reasoning models' and shifting attention from just pre-training scale to post-training and inference-time computation.",
   "thinking_move": "If a problem is hard, spend more effort at answer time, and train the habit of using that effort well.",
   "deeper_dive": [
    "In 2022, Jason Wei, Denny Zhou and colleagues at Google showed that simply including worked examples with step-by-step reasoning in a prompt, called 'chain-of-thought prompting', made large models much better at math word problems. A follow-up found that even adding 'Let's think step by step' helped. Models could reason better when they had room to write intermediate steps.",
    "OpenAI's o1 went further. Rather than relying on prompts, it was trained with reinforcement learning to generate long internal reasoning, trying approaches, noticing mistakes and backtracking, before answering. OpenAI shared accuracy curves showing gains as both training compute and thinking time increased, but kept the raw reasoning hidden from users and did not publish the full method.",
    "That secrecy set up a puzzle for the research community: how exactly do you train a reasoning model? Four months later, DeepSeek published one answer openly. Since then, nearly every major lab has released models that can 'think' before answering, and today's assistants often let you choose how much reasoning effort to spend."
   ],
   "sources": [
    {
     "title": "OpenAI (2024), Learning to reason with LLMs",
     "url": "https://openai.com/index/learning-to-reason-with-llms/"
    },
    {
     "title": "OpenAI (2024), Introducing OpenAI o1-preview",
     "url": "https://openai.com/index/introducing-openai-o1-preview/"
    },
    {
     "title": "Wei et al. (2022), Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
     "url": "https://arxiv.org/abs/2201.11903"
    }
   ],
   "watch": [
    {
     "title": "Deep Dive into LLMs like ChatGPT",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=7xTGNNLPyMI"
    }
   ],
   "read": [],
   "kid_friendly": true,
   "tags": [
    "reasoning",
    "reinforcement-learning",
    "test-time"
   ]
  },
  {
   "id": "nobel-physics-2024",
   "year": 2024,
   "date": "2024-10-08",
   "title": "Nobel Prize for Hopfield and Hinton",
   "people": [
    {
     "name": "John Hopfield",
     "role": "Physicist; 2024 Nobel laureate for the Hopfield network"
    },
    {
     "name": "Geoffrey Hinton",
     "role": "Computer scientist; 2024 Nobel laureate for the Boltzmann machine and related work"
    },
    {
     "name": "Demis Hassabis",
     "role": "2024 Nobel laureate in Chemistry (AlphaFold)"
    },
    {
     "name": "John Jumper",
     "role": "2024 Nobel laureate in Chemistry (AlphaFold)"
    },
    {
     "name": "David Baker",
     "role": "2024 Nobel laureate in Chemistry (computational protein design)"
    }
   ],
   "track": "branch-memory-networks",
   "era": "assistants",
   "what_happened": "The Royal Swedish Academy of Sciences awarded the 2024 Nobel Prize in Physics to John Hopfield and Geoffrey Hinton 'for foundational discoveries and inventions that enable machine learning with artificial neural networks'. The next day, the Chemistry prize went to David Baker for computational protein design and to Demis Hassabis and John Jumper of Google DeepMind for AlphaFold's protein structure prediction.",
   "why_it_mattered_kid": "For the first time, Nobel Prizes went to the ideas behind neural networks and to an AI that figures out the shapes of proteins.",
   "why_it_mattered_adult": "The physics prize recognized that Hopfield networks and Boltzmann machines drew on statistical physics (energy landscapes, spin systems) and laid groundwork for modern deep learning. Some physicists debated whether it was really physics, which itself became a conversation about where AI belongs among the sciences.",
   "thinking_move": "Ideas cross borders: a tool from one science (the physics of magnets) can become the foundation of another (machine learning).",
   "deeper_dive": [
    "In 1982, John Hopfield, a physicist, showed that a network of simple on/off units could store memories as low points in an 'energy landscape', borrowing math used to study magnetic materials. Give it a partial or noisy pattern and it rolls downhill to the nearest stored memory. A few years later, Geoffrey Hinton and Terry Sejnowski built on this with the Boltzmann machine, which used ideas from statistical physics to learn the patterns in data.",
    "The Nobel announcement surprised many people, including, by his own account, Hinton, who got the call in the middle of the night at a hotel in California. Some physicists were delighted; others asked whether the work was really physics. The committee's answer was that these networks were built with the tools and ideas of physics, and that machine learning is now used throughout physics research.",
    "Hinton used his Nobel moments to repeat warnings he had been giving since leaving Google in 2023, about the long-term risks of AI that could become smarter than people. Meanwhile the Chemistry prize, for AlphaFold and for protein design, showed AI producing results that working scientists rely on every day."
   ],
   "sources": [
    {
     "title": "NobelPrize.org: The Nobel Prize in Physics 2024 (summary)",
     "url": "https://www.nobelprize.org/prizes/physics/2024/summary/"
    },
    {
     "title": "NobelPrize.org: Press release, Physics 2024",
     "url": "https://www.nobelprize.org/prizes/physics/2024/press-release/"
    },
    {
     "title": "NobelPrize.org: The Nobel Prize in Chemistry 2024 (summary)",
     "url": "https://www.nobelprize.org/prizes/chemistry/2024/summary/"
    },
    {
     "title": "Jumper et al. (2021), Highly accurate protein structure prediction with AlphaFold",
     "url": "https://doi.org/10.1038/s41586-021-03819-2"
    }
   ],
   "watch": [
    {
     "title": "Nobel Prize lecture: Geoffrey Hinton, Nobel Prize in Physics",
     "channel": "Nobel Prize",
     "url": "https://www.youtube.com/watch?v=XDE9DjpcSdI"
    },
    {
     "title": "Nobel Prize lecture: John J. Hopfield, Nobel Prize in Physics 2024",
     "channel": "Nobel Prize",
     "url": "https://www.youtube.com/watch?v=8SffhDk4mdU"
    },
    {
     "title": "Hopfield network: How are memories stored in neural networks? [Nobel Prize in Physics 2024]  #SoME2",
     "channel": "Layerwise Lectures",
     "url": "https://www.youtube.com/watch?v=piF6D6CQxUw"
    }
   ],
   "read": [
    {
     "title": "The Deep Learning Revolution",
     "author": "Terrence J. Sejnowski",
     "year": 2018,
     "isbn13": "9780262038034",
     "url": "https://www.amazon.com/s?k=9780262038034",
     "kid_friendly": false
    },
    {
     "title": "Genius Makers",
     "author": "Cade Metz",
     "year": 2021,
     "isbn13": "9781524742676",
     "url": "https://www.amazon.com/s?k=9781524742676",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "prize",
    "physics",
    "history"
   ]
  },
  {
   "id": "deepseek-r1-2025",
   "year": 2025,
   "date": "2025-01-20",
   "title": "DeepSeek-R1: open reasoning from pure RL",
   "people": [
    {
     "name": "Liang Wenfeng",
     "role": "Founder of DeepSeek (and of the hedge fund High-Flyer)"
    },
    {
     "name": "Zhihong Shao",
     "role": "Lead author of DeepSeekMath, which introduced the GRPO algorithm"
    },
    {
     "name": "Daya Guo",
     "role": "Lead author on the DeepSeek-R1 paper"
    }
   ],
   "track": "14-what-we-know-now",
   "era": "assistants",
   "what_happened": "Chinese lab DeepSeek released DeepSeek-R1, a reasoning model with openly published weights and a detailed paper. A version called R1-Zero was trained with reinforcement learning alone, rewarded only for correct answers and proper format, using GRPO, an RL method from their earlier DeepSeekMath work. It learned to reason at length on its own. R1 performed comparably to OpenAI's o1 on several math and coding benchmarks, and a peer-reviewed version appeared in Nature in September 2025.",
   "why_it_mattered_kid": "DeepSeek showed that if you just reward a model for getting math answers right, it can teach itself to think longer and check its work, and they shared how they did it.",
   "why_it_mattered_adult": "R1 gave the field an open, reproducible recipe for reasoning via RL with verifiable rewards and released weights that others could study and distill. Its release, and claims about low training cost for the base model, briefly shook AI-related stock markets.",
   "thinking_move": "If you can automatically check the answer, you can let the model explore freely and reward only results; useful habits can emerge without being taught.",
   "deeper_dive": [
    "After o1, the open question was how to train a reasoning model, since OpenAI hadn't shared its method. DeepSeek's R1-Zero experiment was strikingly simple. Start from their base model, give it math and coding problems whose answers can be checked automatically, and reward correct answers. There was no human-written reasoning to imitate. GRPO compares a group of sampled answers to each other, avoiding the need for a separate value model.",
    "During training, the model's responses grew longer on their own, and the team reported behaviors like re-checking and trying a different approach. In one example, the model wrote something like 'wait, wait' and re-evaluated, which the researchers called an 'aha moment'. R1-Zero's text was often hard to read and mixed languages, so the final R1 added a small amount of curated example data plus further rounds of training.",
    "The release landed in January 2025 with an open license, and it shot to the top of app store charts. Reports about how cheaply DeepSeek trained its base model (a figure that covered the final training run, not all research costs) contributed to a sharp one-day fall in Nvidia's stock price. Whatever the true costs, R1 made reasoning-model research accessible to the whole community, and Karpathy's nanochat includes a small GRPO-style RL stage on math word problems."
   ],
   "sources": [
    {
     "title": "DeepSeek-AI (2025), DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
     "url": "https://arxiv.org/abs/2501.12948"
    },
    {
     "title": "Guo et al. (2025), DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning (Nature)",
     "url": "https://doi.org/10.1038/s41586-025-09422-z"
    },
    {
     "title": "Shao et al. (2024), DeepSeekMath (introduces GRPO)",
     "url": "https://arxiv.org/abs/2402.03300"
    }
   ],
   "watch": [
    {
     "title": "Deep Dive into LLMs like ChatGPT",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=7xTGNNLPyMI"
    }
   ],
   "read": [],
   "kid_friendly": true,
   "tags": [
    "reasoning",
    "reinforcement-learning",
    "open-source"
   ]
  },
  {
   "id": "turing-award-rl-2025",
   "year": 2025,
   "date": "2025-03",
   "title": "Turing Award for the founders of reinforcement learning",
   "people": [
    {
     "name": "Andrew Barto",
     "role": "Professor emeritus, University of Massachusetts Amherst; RL pioneer"
    },
    {
     "name": "Richard S. Sutton",
     "role": "Professor at the University of Alberta; RL pioneer"
    }
   ],
   "track": "branch-reinforcement-learning",
   "era": "assistants",
   "what_happened": "In March 2025 the Association for Computing Machinery (ACM) named Andrew Barto and Richard Sutton the recipients of the 2024 A.M. Turing Award, often called the 'Nobel Prize of computing', for the foundations of reinforcement learning. Starting in the late 1970s and 1980s, they developed the foundations of reinforcement learning, including temporal-difference learning and policy-gradient methods, and wrote its standard textbook.",
   "why_it_mattered_kid": "Barto and Sutton spent decades on a then-unfashionable idea, learning by trial and error from rewards, and it ended up powering AlphaGo and the training of today's chatbots.",
   "why_it_mattered_adult": "RL theory from Barto and Sutton underlies TD-Gammon, AlphaGo, RLHF, and RL-trained reasoning models. The award recognized that a long-term research program, pursued patiently, became central to modern AI.",
   "thinking_move": "Learn from the difference between what you expected and what happened, and update your predictions step by step, before the final outcome is even known.",
   "deeper_dive": [
    "When Sutton arrived as a graduate student to work with Barto at UMass Amherst around 1978, the idea of a machine learning from reward and punishment, inspired by animal psychology, was out of fashion in AI. Together they formalized it with ideas like temporal-difference (TD) learning: instead of waiting until the end of a game to learn, update your guess about a position using your next guess. Learning from a prediction about a prediction turned out to be enormously powerful.",
    "Their textbook, Reinforcement Learning: An Introduction (1998; second edition 2018), trained generations of researchers. Gerald Tesauro's TD-Gammon used TD learning to play backgammon near the level of the best human players in the early 1990s, and decades later DeepMind's AlphaGo and the RLHF used for chatbots grew from the same roots.",
    "Sutton is also known for a 2019 essay, 'The Bitter Lesson', arguing that, over AI's history, general methods that scale with computation have repeatedly beaten clever hand-built knowledge. Whether or not you agree, it's a good example of a scientist drawing a big pattern from a long career."
   ],
   "sources": [
    {
     "title": "UMass Amherst press release via EurekAlert (March 2025), Barto and Sutton receive the 2024 ACM A.M. Turing Award",
     "url": "https://www.eurekalert.org/news-releases/1075873"
    }
   ],
   "watch": [
    {
     "title": "2024 ACM A.M. Turing Award",
     "channel": "Association for Computing Machinery (ACM)",
     "url": "https://www.youtube.com/watch?v=sNtuVLO3yaE"
    }
   ],
   "read": [
    {
     "title": "Reinforcement Learning: An Introduction (2nd ed.)",
     "author": "Richard S. Sutton, Andrew G. Barto",
     "year": 2018,
     "isbn13": "9780262039246",
     "url": "https://www.amazon.com/s?k=9780262039246",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "prize",
    "reinforcement-learning",
    "history"
   ]
  },
  {
   "id": "nanochat-2025",
   "year": 2025,
   "date": "2025-10-13",
   "title": "nanochat: build your own ChatGPT for about $100",
   "people": [
    {
     "name": "Andrej Karpathy",
     "role": "Author of nanochat; founder of the AI-education company Eureka Labs"
    }
   ],
   "track": "13-nanochat",
   "era": "assistants",
   "what_happened": "Andrej Karpathy released nanochat, a compact, readable codebase that runs the whole pipeline for a small ChatGPT-like model: training a tokenizer, pretraining a Transformer, midtraining on conversations, supervised fine-tuning, optional reinforcement learning on math word problems, evaluation, and a simple web chat interface. Its 'speedrun' script was designed to run start to finish on a single rented 8-GPU (H100) node in roughly four hours, at about $24 per hour, so around $100.",
   "why_it_mattered_kid": "nanochat showed that the whole recipe for a chatbot, from raw text to a chat window, fits in one small project that one person can run for about the cost of a video game console.",
   "why_it_mattered_adult": "nanochat extends nanoGPT from 'pretrain a GPT' to the full modern stack, including midtraining, SFT, a GRPO-style RL stage, and inference with a KV cache, so learners can see every stage of an assistant in one codebase. It is the capstone of this course.",
   "thinking_move": "Shrink the whole pipeline until it fits on one machine and one budget, so every stage can be seen, run, and changed.",
   "deeper_dive": [
    "By 2025, building a chatbot involved many separate steps, usually spread across different tools and teams: tokenization, pretraining on web text, conversation fine-tuning, preference or RL training, evaluation, and serving. Karpathy's goal, stated in the launch post, was 'the best ChatGPT that $100 can buy': a single, dependency-light repository where all of it happens in order.",
    "The launch write-up walks through each stage. A Rust-based BPE tokenizer is trained, a GPT-style Transformer is pretrained on web text, then 'midtrained' on conversations (SmolTalk), multiple-choice questions and tool-use examples so it learns the chat format. A short supervised fine-tuning pass follows, and an optional RL stage uses GRPO-style training on GSM8K math problems, which have checkable answers. Finally a web server lets you chat with your model in a browser.",
    "The result is honest about its size. Karpathy compared talking to the small model to talking with a kindergartener: it makes things up and gets facts wrong, but it is recognizably a chatbot, and every line that made it is readable. Since launch the project has kept evolving, with a community leaderboard for how fast a model can be trained to GPT-2-level quality. Lesson 13 follows nanochat's stages."
   ],
   "sources": [
    {
     "title": "karpathy/nanochat on GitHub",
     "url": "https://github.com/karpathy/nanochat"
    },
    {
     "title": "Karpathy (2025), Introducing nanochat: The best ChatGPT that $100 can buy (GitHub Discussion #1)",
     "url": "https://github.com/karpathy/nanochat/discussions/1"
    }
   ],
   "watch": [
    {
     "title": "Andrej Karpathy — “We’re summoning ghosts, not building animals”",
     "channel": "Dwarkesh Patel",
     "url": "https://www.youtube.com/watch?v=lXUZvyajciY"
    },
    {
     "title": "Deep Dive into LLMs like ChatGPT",
     "channel": "Andrej Karpathy",
     "url": "https://www.youtube.com/watch?v=7xTGNNLPyMI"
    }
   ],
   "read": [
    {
     "title": "Build a Large Language Model (From Scratch)",
     "author": "Sebastian Raschka",
     "year": 2024,
     "isbn13": "9781633437166",
     "url": "https://www.amazon.com/s?k=9781633437166",
     "kid_friendly": false
    }
   ],
   "kid_friendly": true,
   "tags": [
    "code",
    "education",
    "assistants"
   ]
  }
 ]
};
