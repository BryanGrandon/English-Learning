import type { SVGProps } from 'react'

type Letter = 'E' | 'N' | 'G' | 'L' | 'I' | 'S' | 'H'

interface Props extends SVGProps<SVGSVGElement> {
  letterColors?: Partial<Record<Letter, string>>
  letterStroke?: string
  lineColor?: string
}

const COLOR_MAIN = 'var(--color-brand)'

const LETTERS: { letter: Letter; x: number }[] = [
  { letter: 'E', x: 172 },
  { letter: 'N', x: 338 },
  { letter: 'G', x: 525 },
  { letter: 'L', x: 712 },
  { letter: 'I', x: 875 },
  { letter: 'S', x: 958 },
  { letter: 'H', x: 1138 },
]

const EnglishIllustration = ({
  letterColors = {},
  letterStroke = '#20232D',
  lineColor = 'var(--color-text)',
  className,
  ...props
}: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 800'
      fill='none'
      role='img'
      aria-label='English language learning illustration'
      className={className}
      {...props}
    >
      <defs>
        <style>
          {`
            .illustration-line {
              stroke: ${lineColor};
              stroke-width: 2.5;
              stroke-linecap: round;
              stroke-linejoin: round;
            }

            .illustration-dashed {
              stroke: ${lineColor};
              stroke-width: 1.8;
              stroke-dasharray: 7 7;
              stroke-linecap: round;
              fill: none;
              opacity: .85;
            }

            .illustration-label {
              fill: ${lineColor};
              font-family: Arial, sans-serif;
              font-weight: 700;
            }
          `}
        </style>

        <filter id='letter-shadow' x='-20%' y='-20%' width='140%' height='150%'>
          <feGaussianBlur in='SourceAlpha' stdDeviation='5' result='blur' />
          <feOffset dy='5' result='offset' />
          <feComponentTransfer>
            <feFuncA type='linear' slope='.22' />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Main lettering */}
      <g filter='url(#letter-shadow)'>
        {LETTERS.map(({ letter, x }) => (
          <text
            key={letter}
            x={x}
            y='533'
            fill={COLOR_MAIN}
            stroke={letterStroke}
            strokeWidth='3'
            paintOrder='stroke fill'
            fontFamily='Arial, Helvetica, sans-serif'
            fontSize='245'
            fontWeight='900'
          >
            {letter}
          </text>
        ))}
      </g>

      {/* Dashed letter details */}
      <g className='illustration-dashed'>
        <path d='M188 348H326V375H230V405H306V431H230V460H326V487H188Z' />
        <path d='M354 347L389 347L465 487H431Z' />
        <path d='M467 348H514V487H467Z' />
        <path d='M554 400C565 353 601 339 651 348L687 367L698 397L660 406L645 380C604 366 578 389 580 437C581 475 607 493 644 477L644 453H629' />
        <path d='M740 348H784V487H740Z' />
        <path d='M897 348H944V487H897Z' />
        <path d='M1023 382C1054 348 1095 347 1122 371L1104 399C1082 379 1056 383 1044 400' />
        <path d='M1158 347H1203V487H1158Z' />
        <path d='M1260 347H1306V407H1260Z' />
      </g>

      {/* Upper decorations */}
      <g className='illustration-line'>
        {/* Speech bubble */}
        <path d='M578 198C578 158 615 127 669 127C721 127 761 156 761 198C761 242 726 270 671 276L581 323L597 273C584 255 578 227 578 198Z' />
        <rect x='611' y='165' width='99' height='10' rx='2' />
        <rect x='611' y='185' width='99' height='10' rx='2' />
        <rect x='611' y='205' width='99' height='10' rx='2' />

        {/* Pencil */}
        <path d='M408 248H489C496 248 501 253 501 260V263C501 270 496 275 489 275H408C398 275 390 269 390 261C390 253 398 248 408 248Z' />
        <path d='M447 248V275M454 248V275M490 252L501 257V266L490 271' />

        {/* Lamp */}
        <path d='M115 345V300C115 286 124 275 139 270' />
        <path d='M139 270L158 260C164 256 172 258 176 265L158 282' />
        <path d='M138 269L121 252C117 247 121 240 127 237L134 233L151 250' />
        <path d='M140 274L158 291L144 308L127 291Z' />
        <path d='M96 345H137V357H96Z' />
        <path d='M93 357H140' />

        {/* Upper connections */}
        <path d='M458 235V222C458 215 465 211 475 211H538' />
        <path d='M764 260V223C764 203 778 189 798 189H909' />
        <path d='M970 256V213C970 193 956 178 938 178C920 178 909 193 909 213V223' />
        <path d='M970 228H1018C1034 228 1039 244 1039 253H1174' />

        {/* Conversation people */}
        <circle cx='872' cy='263' r='13' />
        <circle cx='904' cy='250' r='13' />
        <circle cx='934' cy='263' r='13' />
        <path d='M850 306C850 289 861 281 872 281C884 281 893 289 893 306V324H850Z' />
        <path d='M890 305C890 288 901 279 913 279C924 279 934 289 934 305V322' />

        {/* Cloud */}
        <path d='M1261 290C1249 290 1243 280 1248 269C1252 260 1262 258 1272 262C1272 243 1287 242 1295 247C1306 232 1327 242 1327 263C1344 260 1355 274 1346 289C1342 296 1336 310 1323 310H1268C1256 310 1248 303 1248 294' />
      </g>

      {/* Upper labels */}
      <g className='illustration-label' fontSize='23'>
        <text x='370' y='307'>
          LANGUAGE
        </text>
        <text x='637' y='311'>
          TALK
        </text>
        <text x='935' y='301' fontSize='28'>
          CONVERSATION
        </text>
      </g>

      {/* Vocabulary book */}
      <g className='illustration-line'>
        <rect x='54' y='510' width='107' height='76' rx='2' />
        <path d='M62 518H106V578H62Z' />
        <path d='M110 518H153V578H110Z' />
        <path d='M68 527H100M68 537H100M68 547H100M68 557H100M68 567H100' />
        <path d='M116 527H147M116 537H147M116 547H147M116 557H147M116 567H147' />
      </g>

      {/* Writing document */}
      <g className='illustration-line'>
        <path d='M514 510H549L565 525V564H514Z' />
        <path d='M549 510V525H565' />
        <path d='M522 533H553M522 543H553M522 553H546' />
        <path d='M498 518H513V570H498Z' />
      </g>

      {/* Certificate */}
      <g className='illustration-line'>
        <path d='M828 387H862L870 395V441H828Z' />
        <path d='M862 387V395H870' />
        <circle cx='844' cy='402' r='7' />
        <path d='M838 402H850M838 416H861M838 423H861M838 430H856' />
      </g>

      {/* Pencil */}
      <g className='illustration-line'>
        <path d='M748 546H810L820 552L810 558H748C743 558 743 546 748 546Z' />
        <path d='M748 546V558M755 546V558' />
      </g>

      {/* Mustache */}
      <g className='illustration-line'>
        <path d='M829 560C829 544 840 542 845 550C852 564 858 566 868 553C879 540 888 547 889 561' />
        <path d='M829 560C833 579 849 574 859 563C870 576 885 578 889 560' />
      </g>

      {/* Glasses */}
      <g className='illustration-line'>
        <path d='M958 586C958 572 969 571 985 578L1000 588L1016 578C1032 571 1043 572 1043 586C1043 600 1034 612 1020 612C1008 612 1001 604 1000 593C999 604 991 612 979 612C965 612 958 600 958 586Z' />
      </g>

      {/* Notebook */}
      <g className='illustration-line'>
        <rect x='1307' y='488' width='48' height='66' rx='2' />
        <path d='M1313 497H1349M1313 507H1349M1313 517H1349M1313 527H1349M1313 537H1349' />
        <path d='M1364 554V518L1369 511L1374 518V554L1369 562Z' />
      </g>

      {/* Lower labels */}
      <g className='illustration-label'>
        <text x='135' y='637' fontSize='23'>
          VOCABULARY
        </text>
        <text x='363' y='576' fontSize='23'>
          STUDENT
        </text>
        <text x='598' y='576' fontSize='23'>
          ESSAY
        </text>
        <text x='762' y='614' fontSize='36'>
          WRITING
        </text>
      </g>

      {/* Vertical labels */}
      <g className='illustration-label' fontSize='18'>
        <text transform='rotate(-90 1170 470)' x='1170' y='470'>
          LISTENING
        </text>
        <text transform='rotate(-90 366 462)' x='366' y='462'>
          WORDING
        </text>
      </g>

      {/* Bottom decorations */}
      <g className='illustration-line'>
        <path d='M96 586C96 609 113 624 135 624' />
        <path d='M176 567H350' />
        <path d='M185 607V585C185 570 198 568 215 568H232' />
        <path d='M398 607C411 625 427 625 441 607' />
        <path d='M399 605V590M442 605V590' />
        <path d='M630 590C630 608 614 617 598 617' />
        <path d='M1117 625L1139 602L1161 625L1139 648Z' />
        <path d='M1139 625L1161 602L1183 625L1161 648Z' />
      </g>

      {/* Dashed decorative paths */}
      <g className='illustration-dashed'>
        <path d='M388 229L423 188M408 229L443 188M428 229L463 188' />
        <path d='M210 311L245 278M233 319L269 278M256 319L291 278' />
        <path d='M1190 179L1264 258M1260 179L1190 258' />
        <path d='M1191 320H1260' />
        <path d='M1304 311L1364 370M1327 312L1387 361' />
        <path d='M265 604V673M248 630L283 591M248 651L283 613M248 673L283 635' />
        <path d='M345 610C345 629 357 645 376 645C394 645 405 632 405 610' />
        <path d='M1126 552C1148 552 1165 538 1165 518V490' />
        <path d='M1130 607H1204C1225 607 1233 592 1233 575V551' />
      </g>

      {/* Small ABC */}
      <g className='illustration-label' fontSize='21'>
        <text x='1217' y='195'>
          A
        </text>
        <text x='1191' y='225'>
          C
        </text>
        <text x='1247' y='225'>
          D
        </text>
        <text x='1217' y='252'>
          B
        </text>
      </g>

      {/* Decorative dots */}
      <g fill={lineColor}>
        {[
          [76, 439],
          [160, 365],
          [337, 258],
          [375, 265],
          [458, 234],
          [518, 228],
          [577, 308],
          [702, 263],
          [730, 229],
          [807, 264],
          [818, 233],
          [937, 229],
          [994, 244],
          [1061, 230],
          [1109, 322],
          [1174, 253],
          [1223, 264],
          [1333, 392],
          [1349, 439],
          [1372, 489],
          [977, 551],
          [1129, 544],
          [1242, 622],
          [1048, 609],
          [976, 620],
          [733, 608],
          [630, 590],
          [494, 591],
          [380, 592],
          [350, 571],
          [175, 556],
          [95, 596],
        ].map(([cx, cy], index) => (
          <circle key={index} cx={cx} cy={cy} r='3.5' />
        ))}
      </g>
    </svg>
  )
}

export default EnglishIllustration
