# Links verified

Last checked: **2026-11-12**, by `python3 check_links.py` (Python standard library only).

**183 of 186 unique links verified, 3 failed.** The 3 failures are official openai.com pages that passed in an earlier run and now return HTTP 403 to scripts; open them by hand before publishing. Other links that could not be verified were left out of `data/events.json` (see below).

## Methods

- **YouTube videos:** the YouTube oEmbed API (`https://www.youtube.com/oembed?url=…&format=json`) must return the video. The title and channel in the data are copied from that response.
- **DOIs:** the doi.org handle API (`https://doi.org/api/handles/<doi>`) must report the DOI as registered. When the data was assembled, each DOI's title, year and authors were also matched against Crossref (`https://api.crossref.org/works/<doi>`). Publisher sites often block scripts, so the publisher landing page itself is not fetched.
- **Books:** Amazon blocks automated requests, so book links are not fetched. Each link is a plain search URL built from the ISBN-13 (`https://www.amazon.com/s?k=<ISBN>`, no affiliate tag). The ISBN must pass the ISBN-13 checksum and be found by Open Library (`https://openlibrary.org/isbn/<ISBN>.json`).
- **Other pages (arXiv, PDFs, GitHub, nobelprize.org…):** an HTTPS GET, following redirects, must end with a 2xx status. arXiv titles, dates and authors were also matched against each abstract page's citation metadata when the data was assembled.

## Failed on this run

| Link | Method | Result | Used in |
|---|---|---|---|
| https://openai.com/index/better-language-models/ | HTTPS GET | HTTP 403 | gpt-2-2019 |
| https://openai.com/index/learning-to-reason-with-llms/ | HTTPS GET | HTTP 403 | o1-reasoning-2024 |
| https://openai.com/index/introducing-openai-o1-preview/ | HTTPS GET | HTTP 403 | o1-reasoning-2024 |

## Videos (55)

| Link | What | Method | Result | Used in |
|---|---|---|---|---|
| https://www.youtube.com/watch?v=0QQlYR1r6pQ | Mixture of Experts (MoE), Visually Explained | YouTube oEmbed | "Mixture of Experts (MoE), Visually Explained" by Jia-Bin Huang | mixture-of-experts-1991 |
| https://www.youtube.com/watch?v=3FX2wmJ1fAQ | Early AI: The 1956 Dartmouth Conference | YouTube oEmbed | "Early AI: The 1956 Dartmouth Conference" by Computer History Museum | dartmouth-1956 |
| https://www.youtube.com/watch?v=3wLqsRLvV-c | The Turing test: Can a computer pass for a human? - Alex Gendler | YouTube oEmbed | "The Turing test: Can a computer pass for a human? - Alex Gendler" by TED-Ed | turing-test-1950 |
| https://www.youtube.com/watch?v=40riCqvRoMs | How we teach computers to understand pictures \| Fei Fei Li | YouTube oEmbed | "How we teach computers to understand pictures \| Fei Fei Li" by TED | imagenet-2009 |
| https://www.youtube.com/watch?v=4sngIh0YJtk | Eliza — Please tell me your problem (Bits and Bytes, Episode 7) | YouTube oEmbed | "Eliza — Please tell me your problem (Bits and Bytes, Episode 7)" by Bits and Bytes TVO | eliza-1966 |
| https://www.youtube.com/watch?v=7xTGNNLPyMI | Deep Dive into LLMs like ChatGPT | YouTube oEmbed | "Deep Dive into LLMs like ChatGPT" by Andrej Karpathy | chatgpt-2022, o1-reasoning-2024, deepseek-r1-2025, nanochat-2025 |
| https://www.youtube.com/watch?v=8SffhDk4mdU | Nobel Prize lecture: John J. Hopfield, Nobel Prize in Physics 2024 | YouTube oEmbed | "Nobel Prize lecture: John J. Hopfield, Nobel Prize in Physics 2024" by Nobel Prize | hopfield-1982, nobel-physics-2024 |
| https://www.youtube.com/watch?v=9-Jl0dxWQs8 | How might LLMs store facts \| Deep Learning Chapter 7 | YouTube oEmbed | "How might LLMs store facts \| Deep Learning Chapter 7" by 3Blue1Brown | interpretability-2023 |
| https://www.youtube.com/watch?v=AsNTP8Kwu80 | Recurrent Neural Networks (RNNs), Clearly Explained!!! | YouTube oEmbed | "Recurrent Neural Networks (RNNs), Clearly Explained!!!" by StatQuest with Josh Starmer | elman-1990, hochreiter-1991 |
| https://www.youtube.com/watch?v=CqOfi41LfDw | The Essential Main Ideas of Neural Networks | YouTube oEmbed | "The Essential Main Ideas of Neural Networks" by StatQuest with Josh Starmer | mcculloch-pitts-1943 |
| https://www.youtube.com/watch?v=EWvNQjAaOHw | How I use LLMs | YouTube oEmbed | "How I use LLMs" by Andrej Karpathy | chatgpt-2022 |
| https://www.youtube.com/watch?v=HZGCoVF3YvM | Bayes theorem, the geometry of changing beliefs | YouTube oEmbed | "Bayes theorem, the geometry of changing beliefs" by 3Blue1Brown | bayes-1763 |
| https://www.youtube.com/watch?v=HwF229U2ba8 | Deep Blue \| Down the Rabbit Hole | YouTube oEmbed | "Deep Blue \| Down the Rabbit Hole" by Fredrik Knudsen | deep-blue-1997 |
| https://www.youtube.com/watch?v=IHZwWFHWa-w | Gradient descent, how neural networks learn \| Deep Learning Chapter 2 | YouTube oEmbed | "Gradient descent, how neural networks learn \| Deep Learning Chapter 2" by 3Blue1Brown | cauchy-1847, adam-2014 |
| https://www.youtube.com/watch?v=Ilg3gGewQ5U | Backpropagation, intuitively \| Deep Learning Chapter 3 | YouTube oEmbed | "Backpropagation, intuitively \| Deep Learning Chapter 3" by 3Blue1Brown | werbos-1974, backprop-1986 |
| https://www.youtube.com/watch?v=KuXjwB4LzSA | But what is a convolution? | YouTube oEmbed | "But what is a convolution?" by 3Blue1Brown | neocognitron-1980, lecun-convnet-1989 |
| https://www.youtube.com/watch?v=L8HKweZIOmg | Sequence-to-Sequence (seq2seq) Encoder-Decoder Neural Networks, Clearly Explained!!! | YouTube oEmbed | "Sequence-to-Sequence (seq2seq) Encoder-Decoder Neural Networks, Clearly Explained!!!" by StatQuest with Josh Starmer | seq2seq-2014 |
| https://www.youtube.com/watch?v=LPZh9BOjkQs | Large Language Models explained briefly | YouTube oEmbed | "Large Language Models explained briefly" by 3Blue1Brown | shannon-1951, gpt-3-2020 |
| https://www.youtube.com/watch?v=PSs6nxngL6k | Attention for Neural Networks, Clearly Explained!!! | YouTube oEmbed | "Attention for Neural Networks, Clearly Explained!!!" by StatQuest with Josh Starmer | bahdanau-attention-2014 |
| https://www.youtube.com/watch?v=PaCmpygFfXo | The spelled-out intro to language modeling: building makemore | YouTube oEmbed | "The spelled-out intro to language modeling: building makemore" by Andrej Karpathy | markov-1913, shannon-1951, bengio-2003 |
| https://www.youtube.com/watch?v=TCH_1BHY58I | Building makemore Part 2: MLP | YouTube oEmbed | "Building makemore Part 2: MLP" by Andrej Karpathy | bengio-2003 |
| https://www.youtube.com/watch?v=UZDiGooFs54 | The moment we stopped understanding AI [AlexNet] | YouTube oEmbed | "The moment we stopped understanding AI [AlexNet]" by Welch Labs | alexnet-2012, resnet-2015 |
| https://www.youtube.com/watch?v=VMj-3S1tku0 | The spelled-out intro to neural networks and backpropagation: building micrograd | YouTube oEmbed | "The spelled-out intro to neural networks and backpropagation: building micrograd" by Andrej Karpathy | linnainmaa-1970, backprop-1986, nanogpt-2022 |
| https://www.youtube.com/watch?v=WXuK6gekU1Y | AlphaGo - The Movie \| Full award-winning documentary | YouTube oEmbed | "AlphaGo - The Movie \| Full award-winning documentary" by Google DeepMind | alphago-2016 |
| https://www.youtube.com/watch?v=XDE9DjpcSdI | Nobel Prize lecture: Geoffrey Hinton, Nobel Prize in Physics | YouTube oEmbed | "Nobel Prize lecture: Geoffrey Hinton, Nobel Prize in Physics" by Nobel Prize | boltzmann-machine-1985, deep-belief-nets-2006, nobel-physics-2024 |
| https://www.youtube.com/watch?v=YCzL96nL7j0 | Long Short-Term Memory (LSTM), Clearly Explained | YouTube oEmbed | "Long Short-Term Memory (LSTM), Clearly Explained" by StatQuest with Josh Starmer | lstm-1997, seq2seq-2014 |
| https://www.youtube.com/watch?v=a0_lo_GDcFw | What Is Artificial Intelligence? Crash Course AI #1 | YouTube oEmbed | "What Is Artificial Intelligence? Crash Course AI #1" by CrashCourse | dartmouth-1956 |
| https://www.youtube.com/watch?v=aircAruvnKk | But what is a neural network? \| Deep learning chapter 1 | YouTube oEmbed | "But what is a neural network? \| Deep learning chapter 1" by 3Blue1Brown | mcculloch-pitts-1943, rosenblatt-1958, perceptrons-1969 |
| https://www.youtube.com/watch?v=bZQun8Y4L2A | State of GPT \| BRK216HFS | YouTube oEmbed | "State of GPT \| BRK216HFS" by Microsoft Developer | instructgpt-2022 |
| https://www.youtube.com/watch?v=dNRDvLACg5Q | Turing Machines Explained - Computerphile | YouTube oEmbed | "Turing Machines Explained - Computerphile" by Computerphile | turing-1936 |
| https://www.youtube.com/watch?v=dUzLD91Sj-o | Lecture 12: Recurrent Networks | YouTube oEmbed | "Lecture 12: Recurrent Networks" by Michigan Online | elman-1990 |
| https://www.youtube.com/watch?v=eMlx5fFNoYc | Attention in transformers, step-by-step \| Deep Learning Chapter 6 | YouTube oEmbed | "Attention in transformers, step-by-step \| Deep Learning Chapter 6" by 3Blue1Brown | bahdanau-attention-2014, transformer-2017 |
| https://www.youtube.com/watch?v=fNk_zzaMoSs | Vectors \| Chapter 1, Essence of linear algebra | YouTube oEmbed | "Vectors \| Chapter 1, Essence of linear algebra" by 3Blue1Brown | salton-1975, word2vec-2013 |
| https://www.youtube.com/watch?v=gI-qXk7XojA | Boolean Logic & Logic Gates: Crash Course Computer Science #3 | YouTube oEmbed | "Boolean Logic & Logic Gates: Crash Course Computer Science #3" by CrashCourse | boole-1854 |
| https://www.youtube.com/watch?v=i3AkTO9HLXo | Markov Chains Clearly Explained! Part - 1 | YouTube oEmbed | "Markov Chains Clearly Explained! Part - 1" by Normalized Nerd | markov-1913 |
| https://www.youtube.com/watch?v=i8D90DkCLhI | Learning To See [Part 1: Introduction] | YouTube oEmbed | "Learning To See [Part 1: Introduction]" by Welch Labs | neocognitron-1980, lecun-convnet-1989 |
| https://www.youtube.com/watch?v=iDulhoQ2pro | Attention Is All You Need | YouTube oEmbed | "Attention Is All You Need" by Yannic Kilcher | transformer-2017 |
| https://www.youtube.com/watch?v=iv-5mZ_9CPY | But how do AI images and videos actually work? \| Guest video by Welch Labs | YouTube oEmbed | "But how do AI images and videos actually work? \| Guest video by Welch Labs" by 3Blue1Brown | diffusion-2020 |
| https://www.youtube.com/watch?v=kCc8FmEb1nY | Let's build GPT: from scratch, in code, spelled out. | YouTube oEmbed | "Let's build GPT: from scratch, in code, spelled out." by Andrej Karpathy | gpt-1-2018, nanogpt-2022 |
| https://www.youtube.com/watch?v=kYB8IZa5AuE | Linear transformations and matrices \| Chapter 3, Essence of linear algebra | YouTube oEmbed | "Linear transformations and matrices \| Chapter 3, Essence of linear algebra" by 3Blue1Brown | cayley-1858 |
| https://www.youtube.com/watch?v=l8pRSuU81PU | Let's reproduce GPT-2 (124M) | YouTube oEmbed | "Let's reproduce GPT-2 (124M)" by Andrej Karpathy | gpt-2-2019, nanogpt-2022 |
| https://www.youtube.com/watch?v=lXUZvyajciY | Andrej Karpathy — “We’re summoning ghosts, not building animals” | YouTube oEmbed | "Andrej Karpathy — “We’re summoning ghosts, not building animals”" by Dwarkesh Patel | nanochat-2025 |
| https://www.youtube.com/watch?v=piF6D6CQxUw | Hopfield network: How are memories stored in neural networks? [Nobel Prize in Physics 2024]  #SoME2 | YouTube oEmbed | "Hopfield network: How are memories stored in neural networks? [Nobel Prize in Physics 2024]  #SoME2" by Layerwise Lectures | hopfield-1982, nobel-physics-2024 |
| https://www.youtube.com/watch?v=qPN_XZcJf_s | Reinforcement Learning with Human Feedback (RLHF), Clearly Explained!!! | YouTube oEmbed | "Reinforcement Learning with Human Feedback (RLHF), Clearly Explained!!!" by StatQuest with Josh Starmer | rlhf-christiano-2017, instructgpt-2022 |
| https://www.youtube.com/watch?v=sNtuVLO3yaE | 2024 ACM A.M. Turing Award | YouTube oEmbed | "2024 ACM A.M. Turing Award" by Association for Computing Machinery (ACM) | turing-award-rl-2025 |
| https://www.youtube.com/watch?v=tIeHLnjs5U8 | Backpropagation calculus \| Deep Learning Chapter 4 | YouTube oEmbed | "Backpropagation calculus \| Deep Learning Chapter 4" by 3Blue1Brown | linnainmaa-1970, backprop-1986 |
| https://www.youtube.com/watch?v=tJMqVauWsjk | ITS, Eliza & MiT's AI Lab - Computerphile | YouTube oEmbed | "ITS, Eliza & MiT's AI Lab - Computerphile" by Computerphile | eliza-1966 |
| https://www.youtube.com/watch?v=viZrOnJclY0 | Word Embedding and Word2Vec, Clearly Explained!!! | YouTube oEmbed | "Word Embedding and Word2Vec, Clearly Explained!!!" by StatQuest with Josh Starmer | word2vec-2013 |
| https://www.youtube.com/watch?v=vrF3MtGwD0Y | MAMBA and State Space Models explained \| SSM explained | YouTube oEmbed | "MAMBA and State Space Models explained \| SSM explained" by AI Coffee Break with Letitia | state-space-models-2023 |
| https://www.youtube.com/watch?v=wjZofJX0v4M | Transformers, the tech behind LLMs \| Deep Learning Chapter 5 | YouTube oEmbed | "Transformers, the tech behind LLMs \| Deep Learning Chapter 5" by 3Blue1Brown | transformer-2017 |
| https://www.youtube.com/watch?v=z-EtmaFJieY | Machine Learning & Artificial Intelligence: Crash Course Computer Science #34 | YouTube oEmbed | "Machine Learning & Artificial Intelligence: Crash Course Computer Science #34" by CrashCourse | samuel-1959, td-gammon-1992, svm-1995 |
| https://www.youtube.com/watch?v=z2Whj_nL-x8 | Claude Shannon - Father of the Information Age | YouTube oEmbed | "Claude Shannon - Father of the Information Age" by University of California Television (UCTV) | shannon-1948 |
| https://www.youtube.com/watch?v=zduSFxRajkE | Let's build the GPT Tokenizer | YouTube oEmbed | "Let's build the GPT Tokenizer" by Andrej Karpathy | bpe-2015 |
| https://www.youtube.com/watch?v=zjkBMFhNj_g | [1hr Talk] Intro to Large Language Models | YouTube oEmbed | "[1hr Talk] Intro to Large Language Models" by Andrej Karpathy | scaling-laws-2020, gpt-3-2020, chinchilla-2022 |
| https://www.youtube.com/watch?v=zxQyTK8quyY | Transformer Neural Networks, ChatGPT's foundation, Clearly Explained!!! | YouTube oEmbed | "Transformer Neural Networks, ChatGPT's foundation, Clearly Explained!!!" by StatQuest with Josh Starmer | transformer-2017 |

## Papers by DOI (37)

| Link | What | Method | Result | Used in |
|---|---|---|---|---|
| https://doi.org/10.1002/j.1538-7305.1948.tb01338.x | Shannon (1948), A Mathematical Theory of Communication, Bell System Technical Journal | doi.org handle API | resolves to ieeexplore.ieee.org | shannon-1948 |
| https://doi.org/10.1002/j.1538-7305.1951.tb01366.x | Shannon (1951), Prediction and Entropy of Printed English, Bell System Technical Journal | doi.org handle API | resolves to ieeexplore.ieee.org | shannon-1951 |
| https://doi.org/10.1007/BF00344251 | Fukushima (1980), Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position | doi.org handle API | resolves to link.springer.com | neocognitron-1980 |
| https://doi.org/10.1007/BF00994018 | Cortes & Vapnik (1995), Support-vector networks, Machine Learning 20 | doi.org handle API | resolves to link.springer.com | svm-1995 |
| https://doi.org/10.1007/BF01931367 | Linnainmaa (1976), Taylor Expansion of the Accumulated Rounding Error, BIT Numerical Mathematics | doi.org handle API | resolves to link.springer.com | linnainmaa-1970 |
| https://doi.org/10.1007/BF02478259 | McCulloch & Pitts (1943), A Logical Calculus of the Ideas Immanent in Nervous Activity, Bulletin of Mathematical Biophysics | doi.org handle API | resolves to link.springer.com | mcculloch-pitts-1943 |
| https://doi.org/10.1016/S0004-3702(01)00129-1 | Campbell, Hoane & Hsu (2002), Deep Blue, Artificial Intelligence 134 | doi.org handle API | resolves to linkinghub.elsevier.com | deep-blue-1997 |
| https://doi.org/10.1017/S0269889706001074 | Markov (1913), An Example of Statistical Investigation of the Text Eugene Onegin (English translation, Science in Context 2006) | doi.org handle API | resolves to www.cambridge.org | markov-1913 |
| https://doi.org/10.1037/h0042519 | Rosenblatt (1958), The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain, Psychological Review | doi.org handle API | resolves to doi.apa.org | rosenblatt-1958 |
| https://doi.org/10.1038/323533a0 | Rumelhart, Hinton & Williams (1986), Learning representations by back-propagating errors, Nature 323 | doi.org handle API | resolves to www.nature.com | backprop-1986 |
| https://doi.org/10.1038/nature14236 | Mnih et al. (2015), Human-level control through deep reinforcement learning | doi.org handle API | resolves to www.nature.com | alphago-2016 |
| https://doi.org/10.1038/nature16961 | Silver et al. (2016), Mastering the game of Go with deep neural networks and tree search | doi.org handle API | resolves to www.nature.com | alphago-2016 |
| https://doi.org/10.1038/s41586-021-03819-2 | Jumper et al. (2021), Highly accurate protein structure prediction with AlphaFold | doi.org handle API | resolves to www.nature.com | nobel-physics-2024 |
| https://doi.org/10.1038/s41586-025-09422-z | Guo et al. (2025), DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning (Nature) | doi.org handle API | resolves to www.nature.com | deepseek-r1-2025 |
| https://doi.org/10.1073/pnas.79.8.2554 | Hopfield (1982), Neural networks and physical systems with emergent collective computational abilities | doi.org handle API | resolves to pnas.org | hopfield-1982 |
| https://doi.org/10.1093/mind/LIX.236.433 | Turing (1950), Computing Machinery and Intelligence, Mind | doi.org handle API | resolves to academic.oup.com | turing-test-1950 |
| https://doi.org/10.1098/rstl.1763.0053 | Bayes & Price (1763), An Essay towards Solving a Problem in the Doctrine of Chances, Philosophical Transactions | doi.org handle API | resolves to royalsocietypublishing.org | bayes-1763 |
| https://doi.org/10.1098/rstl.1858.0002 | Cayley (1858), A Memoir on the Theory of Matrices, Philosophical Transactions of the Royal Society | doi.org handle API | resolves to royalsocietypublishing.org | cayley-1858 |
| https://doi.org/10.1109/5.58337 | Werbos (1990), Backpropagation Through Time: What It Does and How to Do It, Proceedings of the IEEE | doi.org handle API | resolves to ieeexplore.ieee.org | werbos-1974 |
| https://doi.org/10.1109/5.726791 | LeCun, Bottou, Bengio & Haffner (1998), Gradient-based learning applied to document recognition | doi.org handle API | resolves to ieeexplore.ieee.org | lecun-convnet-1989 |
| https://doi.org/10.1109/72.279181 | Bengio, Simard & Frasconi (1994), Learning long-term dependencies with gradient descent is difficult | doi.org handle API | resolves to ieeexplore.ieee.org | hochreiter-1991 |
| https://doi.org/10.1109/CVPR.2009.5206848 | Deng, Dong, Socher, Li, Li & Fei-Fei (2009), ImageNet: A large-scale hierarchical image database | doi.org handle API | resolves to ieeexplore.ieee.org | imagenet-2009 |
| https://doi.org/10.1112/plms/s2-42.1.230 | Turing (1936), On Computable Numbers, with an Application to the Entscheidungsproblem, Proceedings of the London Mathematical Society | doi.org handle API | resolves to doi.wiley.com | turing-1936 |
| https://doi.org/10.1113/jphysiol.1959.sp006308 | Hubel & Wiesel (1959), Receptive fields of single neurones in the cat's striate cortex | doi.org handle API | resolves to physoc.onlinelibrary.wiley.com | neocognitron-1980 |
| https://doi.org/10.1113/jphysiol.1962.sp006837 | Hubel & Wiesel (1962), Receptive fields, binocular interaction and functional architecture in the cat's visual cortex | doi.org handle API | resolves to physoc.onlinelibrary.wiley.com | neocognitron-1980 |
| https://doi.org/10.1126/science.1127647 | Hinton & Salakhutdinov (2006), Reducing the Dimensionality of Data with Neural Networks, Science 313 | doi.org handle API | resolves to www.science.org | deep-belief-nets-2006 |
| https://doi.org/10.1145/203330.203343 | Tesauro (1995), Temporal difference learning and TD-Gammon, Communications of the ACM 38(3) | doi.org handle API | resolves to dl.acm.org | td-gammon-1992 |
| https://doi.org/10.1145/361219.361220 | Salton, Wong & Yang (1975), A Vector Space Model for Automatic Indexing, Communications of the ACM | doi.org handle API | resolves to dl.acm.org | salton-1975 |
| https://doi.org/10.1145/365153.365168 | Weizenbaum (1966), ELIZA — A Computer Program for the Study of Natural Language Communication Between Man and Machine, Communications of the ACM | doi.org handle API | resolves to dl.acm.org | eliza-1966 |
| https://doi.org/10.1147/rd.33.0210 | Samuel (1959), Some Studies in Machine Learning Using the Game of Checkers, IBM Journal of Research and Development | doi.org handle API | resolves to ieeexplore.ieee.org | samuel-1959 |
| https://doi.org/10.1162/neco.1989.1.4.541 | LeCun et al. (1989), Backpropagation Applied to Handwritten Zip Code Recognition | doi.org handle API | resolves to direct.mit.edu | lecun-convnet-1989 |
| https://doi.org/10.1162/neco.1991.3.1.79 | Jacobs, Jordan, Nowlan & Hinton (1991), Adaptive Mixtures of Local Experts | doi.org handle API | resolves to direct.mit.edu | mixture-of-experts-1991 |
| https://doi.org/10.1162/neco.1997.9.8.1735 | Hochreiter & Schmidhuber (1997), Long Short-Term Memory, Neural Computation 9(8) | doi.org handle API | resolves to direct.mit.edu | lstm-1997 |
| https://doi.org/10.1162/neco.2006.18.7.1527 | Hinton, Osindero & Teh (2006), A Fast Learning Algorithm for Deep Belief Nets | doi.org handle API | resolves to direct.mit.edu | deep-belief-nets-2006 |
| https://doi.org/10.1207/s15516709cog0901_7 | Ackley, Hinton & Sejnowski (1985), A Learning Algorithm for Boltzmann Machines | doi.org handle API | resolves to onlinelibrary.wiley.com | boltzmann-machine-1985 |
| https://doi.org/10.1207/s15516709cog1402_1 | Elman (1990), Finding Structure in Time, Cognitive Science 14(2) | doi.org handle API | resolves to onlinelibrary.wiley.com | elman-1990 |
| https://doi.org/10.7551/mitpress/11301.001.0001 | Perceptrons: An Introduction to Computational Geometry (Minsky & Papert; MIT Press reissue, 2017) | doi.org handle API | resolves to direct.mit.edu | perceptrons-1969 |

## Web pages and PDFs (63)

| Link | What | Method | Result | Used in |
|---|---|---|---|---|
| https://archive.org/details/comptes-rendus-hebdomadaires-academie-des-sciences_1847-10-18_25_16 | Comptes rendus de l’Académie des sciences, vol. 25, issue of 18 Oct 1847 (contains Cauchy, “Méthode générale pour la résolution des systèmes d’équations simultanées”) | HTTPS GET | HTTP 200 | cauchy-1847 |
| https://arxiv.org/abs/1207.0580 | Hinton et al. (2012), Improving neural networks by preventing co-adaptation of feature detectors (dropout) | HTTPS GET | HTTP 200 | alexnet-2012 |
| https://arxiv.org/abs/1301.3781 | Mikolov, Chen, Corrado & Dean (2013), Efficient Estimation of Word Representations in Vector Space | HTTPS GET | HTTP 200 | word2vec-2013 |
| https://arxiv.org/abs/1310.4546 | Mikolov et al. (2013), Distributed Representations of Words and Phrases and their Compositionality | HTTPS GET | HTTP 200 | word2vec-2013 |
| https://arxiv.org/abs/1312.5602 | Mnih et al. (2013), Playing Atari with Deep Reinforcement Learning | HTTPS GET | HTTP 200 | alphago-2016 |
| https://arxiv.org/abs/1312.6114 | Kingma & Welling (2013), Auto-Encoding Variational Bayes | HTTPS GET | HTTP 200 | gan-2014 |
| https://arxiv.org/abs/1406.1078 | Cho et al. (2014), Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation | HTTPS GET | HTTP 200 | seq2seq-2014, bahdanau-attention-2014 |
| https://arxiv.org/abs/1406.2661 | Goodfellow et al. (2014), Generative Adversarial Networks | HTTPS GET | HTTP 200 | gan-2014 |
| https://arxiv.org/abs/1409.0473 | Bahdanau, Cho & Bengio (2014), Neural Machine Translation by Jointly Learning to Align and Translate | HTTPS GET | HTTP 200 | bahdanau-attention-2014 |
| https://arxiv.org/abs/1409.3215 | Sutskever, Vinyals & Le (2014), Sequence to Sequence Learning with Neural Networks | HTTPS GET | HTTP 200 | seq2seq-2014 |
| https://arxiv.org/abs/1412.6980 | Kingma & Ba (2014), Adam: A Method for Stochastic Optimization | HTTPS GET | HTTP 200 | adam-2014 |
| https://arxiv.org/abs/1503.03585 | Sohl-Dickstein et al. (2015), Deep Unsupervised Learning using Nonequilibrium Thermodynamics | HTTPS GET | HTTP 200 | diffusion-2020 |
| https://arxiv.org/abs/1508.07909 | Sennrich, Haddow & Birch (2015), Neural Machine Translation of Rare Words with Subword Units | HTTPS GET | HTTP 200 | bpe-2015 |
| https://arxiv.org/abs/1512.03385 | He et al. (2015), Deep Residual Learning for Image Recognition | HTTPS GET | HTTP 200 | resnet-2015 |
| https://arxiv.org/abs/1701.06538 | Shazeer et al. (2017), Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer | HTTPS GET | HTTP 200 | mixture-of-experts-1991 |
| https://arxiv.org/abs/1706.03741 | Christiano et al. (2017), Deep reinforcement learning from human preferences | HTTPS GET | HTTP 200 | rlhf-christiano-2017 |
| https://arxiv.org/abs/1706.03762 | Vaswani et al. (2017), Attention Is All You Need | HTTPS GET | HTTP 200 | transformer-2017 |
| https://arxiv.org/abs/1707.06347 | Schulman et al. (2017), Proximal Policy Optimization Algorithms | HTTPS GET | HTTP 200 | instructgpt-2022 |
| https://arxiv.org/abs/1810.04805 | Devlin et al. (2018), BERT: Pre-training of Deep Bidirectional Transformers | HTTPS GET | HTTP 200 | gpt-1-2018 |
| https://arxiv.org/abs/2001.08361 | Kaplan et al. (2020), Scaling Laws for Neural Language Models | HTTPS GET | HTTP 200 | scaling-laws-2020 |
| https://arxiv.org/abs/2005.14165 | Brown et al. (2020), Language Models are Few-Shot Learners | HTTPS GET | HTTP 200 | gpt-3-2020 |
| https://arxiv.org/abs/2006.11239 | Ho, Jain & Abbeel (2020), Denoising Diffusion Probabilistic Models | HTTPS GET | HTTP 200 | diffusion-2020 |
| https://arxiv.org/abs/2104.09864 | Su et al. (2021), RoFormer: Enhanced Transformer with Rotary Position Embedding | HTTPS GET | HTTP 200 | rope-2021 |
| https://arxiv.org/abs/2111.00396 | Gu, Goel & Ré (2021), Efficiently Modeling Long Sequences with Structured State Spaces | HTTPS GET | HTTP 200 | state-space-models-2023 |
| https://arxiv.org/abs/2112.10752 | Rombach et al. (2021), High-Resolution Image Synthesis with Latent Diffusion Models | HTTPS GET | HTTP 200 | diffusion-2020 |
| https://arxiv.org/abs/2201.11903 | Wei et al. (2022), Chain-of-Thought Prompting Elicits Reasoning in Large Language Models | HTTPS GET | HTTP 200 | o1-reasoning-2024 |
| https://arxiv.org/abs/2203.02155 | Ouyang et al. (2022), Training language models to follow instructions with human feedback | HTTPS GET | HTTP 200 | instructgpt-2022, chatgpt-2022 |
| https://arxiv.org/abs/2203.15556 | Hoffmann et al. (2022), Training Compute-Optimal Large Language Models | HTTPS GET | HTTP 200 | chinchilla-2022 |
| https://arxiv.org/abs/2305.18290 | Rafailov et al. (2023), Direct Preference Optimization: Your Language Model is Secretly a Reward Model | HTTPS GET | HTTP 200 | dpo-2023 |
| https://arxiv.org/abs/2312.00752 | Gu & Dao (2023), Mamba: Linear-Time Sequence Modeling with Selective State Spaces | HTTPS GET | HTTP 200 | state-space-models-2023 |
| https://arxiv.org/abs/2401.04088 | Jiang et al. (2024), Mixtral of Experts | HTTPS GET | HTTP 200 | mixture-of-experts-1991 |
| https://arxiv.org/abs/2402.03300 | Shao et al. (2024), DeepSeekMath (introduces GRPO) | HTTPS GET | HTTP 200 | deepseek-r1-2025 |
| https://arxiv.org/abs/2501.12948 | DeepSeek-AI (2025), DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning | HTTPS GET | HTTP 200 | deepseek-r1-2025 |
| https://blog.neurips.cc/2023/12/11/announcing-the-neurips-2023-paper-awards/ | NeurIPS blog (11 December 2023), Announcing the NeurIPS 2023 Paper Awards (Test of Time: Mikolov et al. 2013) | HTTPS GET | HTTP 200 | word2vec-2013 |
| https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf | Radford et al. (2019), Language Models are Unsupervised Multitask Learners | HTTPS GET | HTTP 200 | gpt-2-2019 |
| https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf | Radford et al. (2018), Improving Language Understanding by Generative Pre-Training | HTTPS GET | HTTP 200 | gpt-1-2018 |
| https://github.com/karpathy/micrograd | karpathy/micrograd on GitHub | HTTPS GET | HTTP 200 | nanogpt-2022 |
| https://github.com/karpathy/nanoGPT | karpathy/nanoGPT on GitHub | HTTPS GET | HTTP 200 | nanogpt-2022 |
| https://github.com/karpathy/nanochat | karpathy/nanochat on GitHub | HTTPS GET | HTTP 200 | nanochat-2025 |
| https://github.com/karpathy/nanochat/discussions/1 | Karpathy (2025), Introducing nanochat: The best ChatGPT that $100 can buy (GitHub Discussion #1) | HTTPS GET | HTTP 200 | nanochat-2025 |
| https://homepages.math.uic.edu/~lreyzin/papers/rosenblatt58.pdf | Rosenblatt (1958), full text scan | HTTPS GET | HTTP 200 | rosenblatt-1958 |
| https://jontallen.ece.illinois.edu/uploads/498-NS.S21/McCulloch-Pitts-1943-neural-networks-ocr.pdf | McCulloch & Pitts (1943), full text scan (University of Illinois course page) | HTTPS GET | HTTP 200 | mcculloch-pitts-1943 |
| https://openai.com/index/chatgpt/ | OpenAI (2022), Introducing ChatGPT | HTTPS GET | HTTP 200 | chatgpt-2022 |
| https://openai.com/index/gpt-2-1-5b-release/ | OpenAI (2019), GPT-2: 1.5B release | HTTPS GET | HTTP 200 | gpt-2-2019 |
| https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html | Krizhevsky, Sutskever & Hinton (2012), ImageNet Classification with Deep Convolutional Neural Networks (NeurIPS proceedings) | HTTPS GET | HTTP 200 | alexnet-2012 |
| https://people.csail.mit.edu/brooks/idocs/Samuel.pdf | Samuel (1959), readable copy (MIT CSAIL) | HTTPS GET | HTTP 200 | samuel-1959 |
| https://people.idsia.ch/~juergen/SeppHochreiter1991ThesisAdvisorSchmidhuber.pdf | Hochreiter (1991), Untersuchungen zu dynamischen neuronalen Netzen (diploma thesis, PDF, in German) | HTTPS GET | HTTP 200 | hochreiter-1991 |
| https://transformer-circuits.pub/2023/monosemantic-features | Bricken et al. (2023), Towards Monosemanticity | HTTPS GET | HTTP 200 | interpretability-2023 |
| https://transformer-circuits.pub/2024/scaling-monosemanticity/ | Templeton et al. (2024), Scaling Monosemanticity | HTTPS GET | HTTP 200 | interpretability-2023 |
| https://transformer-circuits.pub/2025/attribution-graphs/biology.html | Lindsey et al. (2025), On the Biology of a Large Language Model | HTTPS GET | HTTP 200 | interpretability-2023 |
| https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html | McCarthy, Minsky, Rochester & Shannon (1955), A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence (Stanford copy) | HTTPS GET | HTTP 200 | dartmouth-1956 |
| https://www.anthropic.com/research/tracing-thoughts-language-model | Anthropic (2025), Tracing the thoughts of a large language model | HTTPS GET | HTTP 200 | interpretability-2023 |
| https://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/contents.htm | Lighthill (1973), Artificial Intelligence: A General Survey (Chilton Computing archive) | HTTPS GET | HTTP 200 | lighthill-1973 |
| https://www.cs.toronto.edu/~hinton/absps/naturebp.pdf | Author's copy of the 1986 Nature paper (University of Toronto) | HTTPS GET | HTTP 200 | backprop-1986 |
| https://www.eurekalert.org/news-releases/1075873 | UMass Amherst press release via EurekAlert (March 2025), Barto and Sutton receive the 2024 ACM A.M. Turing Award | HTTPS GET | HTTP 200 | turing-award-rl-2025 |
| https://www.gutenberg.org/ebooks/15114 | Boole, An Investigation of the Laws of Thought (Project Gutenberg) | HTTPS GET | HTTP 200 | boole-1854 |
| https://www.gutenberg.org/ebooks/58881 | Laplace, A Philosophical Essay on Probabilities (English translation, Project Gutenberg) | HTTPS GET | HTTP 200 | bayes-1763 |
| https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf | Bengio, Ducharme, Vincent & Jauvin (2003), A Neural Probabilistic Language Model, JMLR 3 | HTTPS GET | HTTP 200 | bengio-2003 |
| https://www.nobelprize.org/prizes/chemistry/2024/summary/ | NobelPrize.org: The Nobel Prize in Chemistry 2024 (summary) | HTTPS GET | HTTP 200 | nobel-physics-2024 |
| https://www.nobelprize.org/prizes/physics/2024/press-release/ | The Nobel Prize in Physics 2024: press release | HTTPS GET | HTTP 200 | hopfield-1982, boltzmann-machine-1985, nobel-physics-2024 |
| https://www.nobelprize.org/prizes/physics/2024/summary/ | NobelPrize.org: The Nobel Prize in Physics 2024 (summary) | HTTPS GET | HTTP 200 | nobel-physics-2024 |
| https://www.nybooks.com/articles/2010/02/11/the-chess-master-and-the-computer/ | Kasparov (2010), The Chess Master and the Computer, New York Review of Books | HTTPS GET | HTTP 200 | deep-blue-1997 |
| https://www.sciencefriday.com/articles/how-did-ibms-deep-blue-beat-a-chess-grandmaster/ | Science Friday (2018), excerpt from Hannah Fry’s Hello World, which opens with Kasparov and Deep Blue | HTTPS GET | HTTP 200 | deep-blue-1997 |

## Books (Amazon search links) (28)

| Link | What | Method | Result | Used in |
|---|---|---|---|---|
| https://www.amazon.com/s?k=9780137909100 | Code: The Hidden Language of Computer Hardware and Software (2nd ed.) (9780137909100) | ISBN checksum + Open Library lookup | Open Library: "Code" | boole-1854 |
| https://www.amazon.com/s?k=9780262035613 | Deep Learning (9780262035613) | ISBN checksum + Open Library lookup | Open Library: "Deep Learning" | elman-1990, hochreiter-1991, lstm-1997, bengio-2003, seq2seq-2014, gan-2014 |
| https://www.amazon.com/s?k=9780262038034 | The Deep Learning Revolution (9780262038034) | ISBN checksum + Open Library lookup | Open Library: "The deep learning revolution" | hopfield-1982, boltzmann-machine-1985, deep-belief-nets-2006, nobel-physics-2024 |
| https://www.amazon.com/s?k=9780262039246 | Reinforcement Learning: An Introduction (2nd ed.) (9780262039246) | ISBN checksum + Open Library lookup | Open Library: "Reinforcement Learning" | td-gammon-1992, alphago-2016, turing-award-rl-2025 |
| https://www.amazon.com/s?k=9780262048644 | Understanding Deep Learning (9780262048644) | ISBN checksum + Open Library lookup | Open Library: "Understanding Deep Learning" | neocognitron-1980, lecun-convnet-1989, adam-2014, resnet-2015, diffusion-2020 |
| https://www.amazon.com/s?k=9780262631112 | Perceptrons (Expanded Edition) (9780262631112) | ISBN checksum + Open Library lookup | Open Library: "Perceptrons - Expanded Edition" | perceptrons-1969 |
| https://www.amazon.com/s?k=9780300188226 | The Theory That Would Not Die (9780300188226) | ISBN checksum + Open Library lookup | Open Library: "The Theory That Would Not Die" | bayes-1763 |
| https://www.amazon.com/s?k=9780316525244 | You Look Like a Thing and I Love You (9780316525244) | ISBN checksum + Open Library lookup | Open Library: "You Look Like a Thing and I Love You" | alexnet-2012 |
| https://www.amazon.com/s?k=9780374257835 | Artificial Intelligence: A Guide for Thinking Humans (9780374257835) | ISBN checksum + Open Library lookup | Open Library: "Artificial Intelligence" | neocognitron-1980, lecun-convnet-1989, deep-blue-1997, imagenet-2009, word2vec-2013, gpt-2-2019, gpt-3-2020 |
| https://www.amazon.com/s?k=9780393634990 | Hello World: Being Human in the Age of Algorithms (9780393634990) | ISBN checksum + Open Library lookup | Open Library: "Hello world" | deep-blue-1997, chatgpt-2022 |
| https://www.amazon.com/s?k=9780393635829 | The Alignment Problem (9780393635829) | ISBN checksum + Open Library lookup | Open Library: "The Alignment Problem" | rlhf-christiano-2017, instructgpt-2022, interpretability-2023 |
| https://www.amazon.com/s?k=9780465026562 | Gödel, Escher, Bach: An Eternal Golden Braid (9780465026562) | ISBN checksum + Open Library lookup | Open Library: "Gödel, Escher, Bach" | turing-test-1950 |
| https://www.amazon.com/s?k=9780465065707 | The Master Algorithm (9780465065707) | ISBN checksum + Open Library lookup | Open Library: "The master algorithm" | samuel-1959, svm-1995 |
| https://www.amazon.com/s?k=9780465097609 | The Book of Why (9780465097609) | ISBN checksum + Open Library lookup | Open Library: "The Book of Why" | bayes-1763 |
| https://www.amazon.com/s?k=9780470229057 | The Annotated Turing (9780470229057) | ISBN checksum + Open Library lookup | Open Library: "The Annotated Turing" | turing-1936 |
| https://www.amazon.com/s?k=9780471598978 | The Roots of Backpropagation (9780471598978) | ISBN checksum + Open Library lookup | Open Library: "The roots of backpropagation" | werbos-1974 |
| https://www.amazon.com/s?k=9780593185742 | Why Machines Learn: The Elegant Math Behind Modern AI (9780593185742) | ISBN checksum + Open Library lookup | Open Library: "Why Machines Learn" | cauchy-1847, cayley-1858, mcculloch-pitts-1943, rosenblatt-1958, perceptrons-1969, hopfield-1982, backprop-1986, svm-1995, bahdanau-attention-2014 |
| https://www.amazon.com/s?k=9780691164724 | Alan Turing: The Enigma (9780691164724) | ISBN checksum + Open Library lookup | Open Library: "Alan Turing: the enigma" | turing-1936, turing-test-1950 |
| https://www.amazon.com/s?k=9780691249131 | AI Snake Oil (9780691249131) | ISBN checksum + Open Library lookup | Open Library: "AI Snake Oil" | gpt-3-2020, chatgpt-2022 |
| https://www.amazon.com/s?k=9781098150969 | Hands-On Large Language Models (9781098150969) | ISBN checksum + Open Library lookup | Open Library: "Hands-On Large Language Models" | mixture-of-experts-1991, word2vec-2013, transformer-2017, rope-2021 |
| https://www.amazon.com/s?k=9781250897930 | The Worlds I See (9781250897930) | ISBN checksum + Open Library lookup | Open Library: "The Worlds I See" | imagenet-2009 |
| https://www.amazon.com/s?k=9781400096237 | The Information: A History, a Theory, a Flood (9781400096237) | ISBN checksum + Open Library lookup | Open Library: "The Information" | shannon-1948, shannon-1951 |
| https://www.amazon.com/s?k=9781476766683 | A Mind at Play: How Claude Shannon Invented the Information Age (9781476766683) | ISBN checksum + Open Library lookup | Open Library: "A Mind at Play" | shannon-1948 |
| https://www.amazon.com/s?k=9781524742676 | Genius Makers (9781524742676) | ISBN checksum + Open Library lookup | Open Library: "Genius Makers" | boltzmann-machine-1985, backprop-1986, deep-belief-nets-2006, alexnet-2012, gan-2014, alphago-2016, scaling-laws-2020, nobel-physics-2024 |
| https://www.amazon.com/s?k=9781530826605 | Make Your Own Neural Network (9781530826605) | ISBN checksum + Open Library lookup | Open Library: "Make your own neural network" | rosenblatt-1958, backprop-1986 |
| https://www.amazon.com/s?k=9781568812052 | Machines Who Think (2nd ed.) (9781568812052) | ISBN checksum + Open Library lookup | Open Library: "Machines who think" | dartmouth-1956, eliza-1966, lighthill-1973 |
| https://www.amazon.com/s?k=9781617293702 | Grokking Deep Learning (9781617293702) | ISBN checksum + Open Library lookup | Open Library: "Grokking Deep Learning" | lstm-1997, word2vec-2013 |
| https://www.amazon.com/s?k=9781633437166 | Build a Large Language Model (From Scratch) (9781633437166) | ISBN checksum + Open Library lookup | Open Library: "Build a Large Language Model (from Scratch)" | bengio-2003, seq2seq-2014, bpe-2015, transformer-2017, gpt-1-2018, gpt-2-2019, nanogpt-2022, nanochat-2025 |

## Candidates dropped

These candidates were checked on 2026-11-12 while the data was being assembled and were **left out** because they could not be verified. `check_links.py` keeps this section when it rewrites the file.

**Videos.** Ten candidate YouTube IDs returned HTTP 404 from oEmbed, so they don't exist or aren't embeddable: `ByzS6UzDLQo`, `fd44p0JxLIo`, `WeGnrsCHUsQ`, `-EjOyzQhVlE`, `_y-oCI-wvAg`, `z1ZnwkKqrKc`, `vGDdUgiDYZU`, `2zoQ7wnBdtY`, `B8LHkQ3BNCM`, `DuWbMrLz3zw`. Some other candidates existed but were off-topic or low quality, and were not used.

**Web pages.**

| Candidate | Result | What we did instead |
|---|---|---|
| https://www.math.uni-bielefeld.de/documenta/vol-ismp/40_lemarechal-claude.pdf (Lemaréchal, "Cauchy and the gradient method") | HTTP 404 | Used an archive.org scan of Cauchy's 1847 Comptes rendus note |
| https://www.americanscientist.org/article/first-links-in-the-markov-chain | HTTP 503 (twice) | Used the DOI of the English translation of Markov's 1913 paper |
| https://mitpress.mit.edu/9780262631112/perceptrons/ | HTTP 403 (blocks scripts) | Used the DOI of MIT Press's 2017 reissue of *Perceptrons* |
| https://awards.acm.org/about/2024-turing and two other acm.org pages | HTTP 403 (blocks scripts) | No web source. The event links ACM's own announcement video (verified) instead |
| https://www.image-net.org/ | connection refused | Used the DOI of the 2009 CVPR ImageNet paper |
| https://incompleteideas.net/book/the-book-2nd.html (Sutton & Barto book page) | TLS certificate failure over https | Listed the book by ISBN instead |
| https://gallica.bnf.fr/… (Cauchy 1847) | HTTP 403 | Used archive.org instead |

**Books.** Crevier's *AI: The Tumultuous History…* was dropped because its edition year could not be confirmed. Every other candidate ISBN was found in Open Library.
