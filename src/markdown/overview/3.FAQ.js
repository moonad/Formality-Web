const h = require('inferno-hyperscript').h;
module.exports = 
[
  h('h1', {style: {'margin-top': '25px'}}, 
    [
      "FAQ"
    ]
  ),
  h('h3', {style: {'margin-top': '15px'}}, 
    [
      h('b', 
        [
          "What Formality aims to be",
          "?"
        ]
      )
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Formality aims to to be both a general",
      "-purpose programming language",
      ", in the sense it can be used to build algorithms",
      ", applications",
      ", smart",
      "-contracts and anything else",
      ", not unlike Python",
      ", JavaScript and similars",
      ", and a proof language",
      ", in the sense it can express and prove mathematical theorems about its own programs",
      ", not unlike Agda",
      ", Idris and Coq",
      "."
    ]
  ),
  h('h3', {style: {'margin-top': '15px'}}, 
    [
      h('b', 
        [
          "What is the difference between Formality and other proof languages like Agda",
          ", Coq and Idris",
          "?"
        ]
      )
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Formality has two main differences due to its planned usage in the context of Smart",
      "-Contracts",
      "."
    ]
  ),
  h('ol', {style: {'margin-left': '23px'}}, [
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "It aims to be not just a single implementation",
        ", but also a well",
        "-documented",
        ", minimalist specification which can be used by developers to implement it independently without much effort",
        ". This is important",
        ", because it removes the need for users to trust in a single",
        ", big ",
        "\"official implementation",
        "\"",
        ". For comparison purposes",
        ", the current reference implementation of Formality has only 500 lines of code",
        ", while Coq",
        "'s core has ",
        ", Idris has ",
        ", and Agda has ",
        "<",
        "?",
        "?",
        "?",
        ">",
        "."
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "It is built from the beginning with efficiency as a priority",
        ". That means it includes a series of restrictions that make it more compatible with NASIC and",
        ", thus",
        ", more lightweight and faster than other proof languages",
        ", allowing its programs to run in architectures where performance is essential",
        ". This includes",
        ", for example",
        ", Smart",
        "-Contracts",
        ", where each operation has a monetary cost",
        ", or even graphics and scientific applications",
        ", which usually run in massively parallel architectures such as the GPU",
        "."
      ]
    ),
  ]),
  h('h3', {style: {'margin-top': '15px'}}, 
    [
      h('b', 
        [
          "What is NASIC",
          "?"
        ]
      )
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "NASIC is short for N",
      "-Ary Symmetric Interaction Combinators",
      ", a graph",
      "-based model of computation used as the main compile target for Formality",
      ". It has a similar role to ASM for C",
      ", or the STG for Haskell",
      ". Compared to those",
      ", it has very good computational properties",
      ":"
    ]
  ),
  h('ol', {style: {'margin-left': '23px'}}, [
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "It is inherently parallel",
        ", meaning you can reduce NASIC graphics in massively parallel architectures like the GPU",
        "."
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "It is strongly confluent",
        ", which gives us a very clear cost model for use",
        "-cases like gas metering",
        "."
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "It can be used to implement optimal reductions for the λ",
        "-calculus",
        "."
      ]
    ),
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "NASIC is based on ",
      h('a', {href: 'https://pdfs.semanticscholar.org/1731/a6e49c6c2afda3e72256ba0afb34957377d3.pdf', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "Symmetric Interaction Combinators"
        ]
      ),
      ", with two main changes",
      ":"
    ]
  ),
  h('ol', {style: {'margin-left': '23px'}}, [
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "Instead of only two node ",
        "\"labels",
        "\" ",
        "(δ and ζ",
        ")",
        ", nodes can be labelled with 32",
        "-bit integers",
        ". This is what allows efficient evaluation of Formality programs through ",
        "\"boxes",
        "\" and ",
        "\"levels",
        "\"",
        "."
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "For simplicity",
        ", there isn",
        "'t an erasure node",
        ". Instead",
        ", we use a fan node wired with each port wired to itself",
        ", which is equivalent",
        "."
      ]
    ),
  ]),
  h('h3', {style: {'margin-top': '15px'}}, 
    [
      h('b', 
        [
          "What is the relationship between Formality and Cedille",
          "?"
        ]
      )
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Cedille is a language invented by Aaron Stump that shares similar goals to Formality",
      ", in special minimalism",
      ". For a while",
      ", ",
      h('a', {href: 'https://github.com/MaiaVictor/Cedille-Core', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "Cedille",
          "-Core"
        ]
      ),
      " was actually planned to be used instead of Formality on Ethereum",
      ". Sadly",
      ", when trying to do so",
      ", I got stuck due to some problems which I explain ",
      h('a', {href: 'https://medium.com/@maiavictor/towards-a-simple-theorem-prover-5005a1e66a6f', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "in this article"
        ]
      ),
      ". This led me to design a new language",
      ", ",
      h('a', {href: 'https://github.com/maiavictor/escoc', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "ESCoC"
        ]
      ),
      ", which is better",
      "-suited for my goals",
      ". Compared to Cedille",
      "-Core",
      ", ESCoC is simpler to implement ",
      "(60",
      "-70",
      "% smaller",
      ")",
      ", simpler to use ",
      "(declaring datatypes take 60",
      "-70",
      "% less code",
      ")",
      ", and more compatible with NASIC",
      ". Formality is just a product name for ESCoC",
      "."
    ]
  ),
  h('h3', {style: {'margin-top': '15px'}}, 
    [
      h('b', 
        [
          "Why can",
          "'t Formality be considered a proof language yet",
          "?"
        ]
      )
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Because",
      ", unlike Cedille and Coq",
      "'s core",
      ", we don",
      "'t have a model for Formality yet",
      ". The language",
      ", as presented currently",
      ", is inconsistent and trivial",
      ", which means it can",
      "'t be used as a proper proof language",
      ". It is perfectly fine as a programming language",
      ", though",
      ". In order to enable logical reasoning",
      ", we must identify a sound",
      ", consistent fragment of Formality",
      ", which is what we are doing right now",
      "."
    ]
  ),
  h('h3', {style: {'margin-top': '15px'}}, 
    [
      h('b', 
        [
          "What are the challenges for achieving consistency",
          "?"
        ]
      )
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "In order to derive inductive datatypes so succinctly",
      ", Formality must feature mutually recursive definitions",
      ". This",
      ", unfortunatelly",
      ", is known to introduce inconsistencies",
      ". Fortunatelly",
      ", though",
      ", the same set of restrictions required to make Formality compatible with NASIC has also ",
      h('a', {href: 'http://www.kurims.kyoto-u.ac.jp/~terui/lastfin.pdf', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "been proven"
        ]
      ),
      " to be consistent with the presence of type",
      "-level recursion",
      ". Our challenge is",
      ", thus",
      ", to formalize Formality and attempt to use the same idea to prove it is consistent under those restrictions",
      "."
    ]
  )
]