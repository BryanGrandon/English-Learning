import type { SVGProps } from 'react'

type Letter = 'C' | 'O' | 'U' | 'R' | 'S' | 'E'

interface Props extends SVGProps<SVGSVGElement> {
  letterColors?: Partial<Record<Letter, string>>
  lineColor?: string
}

const DEFAULT_COLORS: Record<Letter, string> = {
  C: '#F9D66B',
  O: '#F4A7B5',
  U: '#FFF0A3',
  R: '#70E8DB',
  S: '#C6A2F0',
  E: '#A9E58B',
}

const LETTERS = [
  { letter: 'C', x: 150 },
  { letter: 'O', x: 340 },
  { letter: 'U', x: 530 },
  { letter: 'R', x: 720 },
  { letter: 'S', x: 910 },
  { letter: 'E', x: 1100 },
  { letter: 'S', x: 1290 },
] as const

const CoursesIllustration = ({ letterColors = {}, lineColor = 'currentColor', className, ...props }: Props) => {
  const colors = { ...DEFAULT_COLORS, ...letterColors }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 800'
      fill='none'
      role='img'
      aria-label='Courses illustration with colorful letters and educational elements'
      className={className}
      {...props}
    >
      <defs>
        <filter id='courses-shadow' x='-20%' y='-20%' width='140%' height='150%'>
          <feGaussianBlur stdDeviation='5' />
        </filter>

        <style>
          {`
            .doodle {
              stroke: ${lineColor};
              stroke-width: 3;
              stroke-linecap: round;
              stroke-linejoin: round;
              fill: none;
              opacity: .7;
            }

            .doodle-thin {
              stroke: ${lineColor};
              stroke-width: 2;
              stroke-linecap: round;
              stroke-linejoin: round;
              fill: none;
              opacity: .4;
            }

            .dashed {
              stroke: ${lineColor};
              stroke-width: 2;
              stroke-dasharray: 6 9;
              stroke-linecap: round;
              fill: none;
              opacity: .35;
            }

            .label {
              fill: ${lineColor};
              font-family: Arial, sans-serif;
              font-weight: 700;
              letter-spacing: 2px;
              opacity: .55;
            }
          `}
        </style>
      </defs>

      {/* Decorative background */}
      <g className='doodle-thin'>
        <circle cx='200' cy='400' r='18' />
        <circle cx='510' cy='80' r='25' />
        <circle cx='830' cy='550' r='20' />
        <circle cx='1300' cy='300' r='15' />

        <path d='M80 90L120 35L165 90L120 145Z' />
        <path d='M1270 650L1320 590L1370 650L1320 710Z' />
      </g>

      {/* Graduation cap */}
      <g className='doodle'>
        <path d='M150 140L240 105L330 140L240 175L150 140Z' />
        <path d='M185 155V190C220 220 270 220 305 190V155' />
        <path d='M330 140V190' />
        <path d='M320 190H340L330 208L320 190Z' />
      </g>

      {/* Envelope */}
      <g className='doodle'>
        <rect x='345' y='130' width='78' height='54' rx='3' />
        <path d='M345 130L384 162L423 130M345 184L374 153M423 184L394 153' />
      </g>

      {/* Paper plane */}
      <g className='doodle'>
        <path d='M680 70L810 35L745 140L720 100L680 70Z' />
        <path d='M720 100L810 35L735 115' />
      </g>

      {/* Open book */}
      <g className='doodle'>
        <path d='M1090 110C1060 90 1025 95 1005 110V190C1035 170 1065 175 1090 195C1115 175 1145 170 1175 190V110C1155 95 1120 90 1090 110Z' />
        <path d='M1090 110V195' />
        <path d='M1020 125C1040 118 1060 120 1078 130M1020 145C1040 138 1060 140 1078 150' />
        <path d='M1102 130C1120 120 1140 118 1160 125M1102 150C1120 140 1140 138 1160 145' />
      </g>

      {/* Speech bubble */}
      <g className='doodle'>
        <path d='M530 190C530 145 570 120 625 120H720C775 120 800 145 800 190C800 235 775 260 720 260H610L570 295L580 252C545 240 530 220 530 190Z' />
        <path d='M580 170H745M580 190H745M580 210H710' />
      </g>

      {/* Conversation */}
      <g className='doodle'>
        <circle cx='890' cy='190' r='18' />
        <circle cx='950' cy='190' r='18' />
        <circle cx='920' cy='155' r='18' />
        <path d='M865 240V225C865 200 910 200 910 225V245H865Z' />
        <path d='M925 240V225C925 200 970 200 970 225V245H925Z' />
      </g>

      {/* Letter shadows */}
      <g fill='currentColor' opacity='.12' filter='url(#courses-shadow)'>
        {LETTERS.map(({ letter, x }, index) => (
          <text
            key={index}
            x={x}
            y='495'
            textAnchor='middle'
            fontFamily='Georgia, serif'
            fontSize='190'
            fontWeight='900'
            transform='translate(7 12)'
          >
            {letter}
          </text>
        ))}
      </g>

      {/* Main lettering */}
      <g fontFamily='Georgia, serif' fontSize='190' fontWeight='900'>
        {LETTERS.map(({ letter, x }, index) => (
          <text
            key={index}
            x={x}
            y='485'
            textAnchor='middle'
            fill={colors[letter]}
            stroke='currentColor'
            strokeOpacity='.08'
            strokeWidth='1'
            paintOrder='stroke fill'
          >
            {letter}
          </text>
        ))}
      </g>

      {/* Bottom book */}
      <g className='doodle'>
        <path d='M130 570C100 550 65 555 40 575V655C70 635 105 635 130 655C155 635 190 635 220 655V575C195 555 160 550 130 570Z' />
        <path d='M130 570V655' />
        <path d='M55 590H110M55 610H110M55 630H110' />
        <path d='M150 590H205M150 610H205M150 630H205' />
      </g>

      {/* Diploma */}
      <g className='doodle'>
        <rect x='1180' y='515' width='100' height='95' rx='5' />
        <path d='M1195 540H1265M1195 560H1265M1195 580H1245' />s
      </g>

      {/* Labels */}
      <g className='label' fontSize='24'>
        <text x='80' y='280'>
          LEARN
        </text>
        <text x='570' y='290'>
          YOUR LEVEL
        </text>
        <text x='1010' y='280'>
          ACHIEVE
        </text>
        <text x='80' y='700'>
          BEGINNER
        </text>
        <text x='400' y='700'>
          LESSONS
        </text>
        <text x='750' y='700'>
          LEARNING PATH
        </text>
        <text x='1130' y='700'>
          ADVANCED
        </text>
      </g>

      {/* Level badges */}
      <g className='doodle' fontSize='21' fontWeight='bold' textAnchor='middle'>
        {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((label, index) => {
          const x = 360 + index * 130
          const y = 580

          return (
            <g key={label}>
              <rect x={x - 27} y={y - 27} width='54' height='54' rx='8' />
              <text x={x} y={y + 7} fill='currentColor' stroke='none' opacity='.7'>
                {label}
              </text>
            </g>
          )
        })}
      </g>

      {/* Connecting lines */}
      <g className='dashed'>
        <path d='M250 200H350V250' />
        <path d='M800 190H850V250H900' />
        <path d='M970 250H1100V300' />
        <path d='M220 600H300V650' />
        <path d='M600 550V620H700' />
        <path d='M1080 550V620H1150' />
      </g>

      {/* Decorative details */}
      <g className='doodle-thin'>
        <circle cx='460' cy='95' r='28' />
        <path d='M380 260L410 230M400 265L430 235M420 270L450 240' />
        <path d='M70 350V430M50 375L70 350L90 375' />
        <path d='M1350 350V430M1330 405L1350 430L1370 405' />
        <path d='M750 550L780 520L810 550L780 580Z' />
        <path d='M900 570H940M900 580H930' />
        <path d='M1320 160L1340 180L1360 160' />
        <circle cx='550' cy='580' r='22' />
        <path d='M540 580H560M550 570V590' />
      </g>

      {/* Stars */}
      <g className='doodle-thin'>
        <path d='M1280 300L1295 335L1330 340L1302 363L1310 398L1280 380L1250 398L1258 363L1230 340L1265 335Z' />
        <path d='M650 510L660 535L685 540L665 557L670 582L650 568L630 582L635 557L615 540L640 535Z' />
      </g>

      {/* Decorative dots */}
      <g fill='currentColor' opacity='.45'>
        {[
          [100, 180],
          [275, 90],
          [430, 240],
          [490, 300],
          [610, 80],
          [850, 100],
          [1000, 260],
          [1120, 90],
          [1300, 250],
          [1380, 450],
          [280, 550],
          [380, 590],
          [550, 680],
          [700, 600],
          [900, 620],
          [1050, 500],
          [1250, 520],
          [1350, 690],
          [350, 700],
          [750, 750],
        ].map(([cx, cy], index) => (
          <circle key={index} cx={cx} cy={cy} r='3' />
        ))}
      </g>
    </svg>
  )
}

export default CoursesIllustration
