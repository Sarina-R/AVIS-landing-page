import { FaApple, FaLinux, FaWindows } from 'react-icons/fa'

export interface Version {
  version: string
  isLatest: boolean
  releaseDate: string
  platforms: {
    name: string
    icon: React.ReactNode
    downloads: {
      name: string
      size: string
      url: string
    }[]
  }[]
}

export const versions: Version[] = [
  {
    version: '1.2.0',
    isLatest: false,
    releaseDate: '2025-06-01',
    platforms: [
      {
        name: 'macOS',
        icon: <FaApple className='w-4 h-4' />,
        downloads: [
          {
            name: 'Mac Universal',
            size: '184 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_0_Mac_Universal/.zip',
            url: 'https://drive.google.com/file/d/1535B3IWH4AEZlqtG2vkCbxsYGfSRTRbs/view?usp=drive_link',
          },
        ],
      },
      {
        name: 'Windows',
        icon: <FaWindows className='w-4 h-4' />,
        downloads: [
          {
            name: 'Windows X64',
            size: '182 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_0_Win_Universal/.zip',
            url: 'https://drive.google.com/file/d/12diU6qCgTT_iC_9WiZJn9kLm3fXfehzM/view?usp=drive_link',
          },
          {
            name: 'Windows X86',
            size: '174 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_0_Win_Universal/.zip',
            url: 'https://drive.google.com/file/d/1vEqyOi7c5ziSE4ZcEsj_NwqK3PCeZ1g0/view?usp=drive_link',
          },
        ],
      },
      {
        name: 'Linux',
        icon: <FaLinux className='w-4 h-4' />,
        downloads: [
          {
            name: 'Linux Universal',
            size: '191 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_0_Linux_Universal/.zip',
            url: 'https://drive.google.com/file/d/1474kpPOf3dcqQcqyIc_-BK5lo2wN-YNp/view?usp=drive_link',
          },
        ],
      },
    ],
  },
  {
    version: '1.2.4',
    isLatest: false,
    releaseDate: '2025-06-05',
    platforms: [
      {
        name: 'macOS',
        icon: <FaApple className='w-4 h-4' />,
        downloads: [
          {
            name: 'Mac Universal',
            size: '189 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_4_Mac_Universal/.zip',
            url: 'https://drive.google.com/file/d/1Pl3ij4J5squtAFeuxxpftFXOYmGB8dAp/view',
          },
        ],
      },
      {
        name: 'Windows',
        icon: <FaWindows className='w-4 h-4' />,
        downloads: [
          {
            name: 'Windows',
            size: '186 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_4_Win_Universal/.zip',
            url: 'https://drive.google.com/file/d/1HjHECsspQNi5ggZPoyGr9WE3z3IodwOu/view',
          },
        ],
      },
      {
        name: 'Linux',
        icon: <FaLinux className='w-4 h-4' />,
        downloads: [
          {
            name: 'Linux Universal',
            size: '195 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_4_Linux_Universal/.zip',
            url: 'https://drive.google.com/file/d/1gJG9fA3iPqoWPmFmBklpEXVeM7IYAHgc/view?usp=drive_link',
          },
        ],
      },
    ],
  },
  {
    version: '1.2.6',
    isLatest: false,
    releaseDate: '2025-06-10',
    platforms: [
      {
        name: 'Windows',
        icon: <FaWindows className='w-4 h-4' />,
        downloads: [
          {
            name: 'Windows',
            size: '192 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_6_Win_Universal/.zip',
            url: 'https://drive.google.com/file/d/1HeoZrr4L-2_KFwBcCea9CxmxwfUtQgGa/view?usp=drive_link',
          },
        ],
      },
    ],
  },
  {
    version: '1.2.7',
    isLatest: false,
    releaseDate: '2025-06-12',
    platforms: [
      {
        name: 'macOS',
        icon: <FaApple className='w-4 h-4' />,
        downloads: [
          {
            name: 'Mac Universal',
            size: '251 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_7_ACL_Mac_Universal/.zip',
            url: 'https://drive.google.com/file/d/1cZEZtzgzyDE5vrGai8548JADHhuOn4aW/view?usp=drive_link',
          },
        ],
      },
      {
        name: 'Windows',
        icon: <FaWindows className='w-4 h-4' />,
        downloads: [
          {
            name: 'Windows',
            size: '236 MB',
            url: 'https://drive.google.com/file/d/1CmSlkFDuqhZh8DHkSbTWCUyQHLgfYNyb/view?usp=drive_link',
            // url: 's3.avisengine.com/AVISEngine_1_2_7_ACL_Win_Universal/.zip',
          },
        ],
      },
      {
        name: 'Linux',
        icon: <FaLinux className='w-4 h-4' />,
        downloads: [
          {
            name: 'Linux Universal',
            size: '274 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_7_ACL_Linux_Universal/.zip',
            url: 'https://drive.google.com/file/d/1vuWaMYRvc_EvPbqdNcjsPj4xKwRtV4Yx/view?usp=drive_link',
          },
        ],
      },
    ],
  },
  {
    version: '1.2.8',
    isLatest: false,
    releaseDate: '2025-06-12',
    platforms: [
      {
        name: 'macOS',
        icon: <FaApple className='w-4 h-4' />,
        downloads: [
          {
            name: 'Mac Universal',
            size: '140 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_7_ACL_Mac_Universal/.zip',
            url: 'https://drive.google.com/file/d/1RcnLNSD2syq9LDoAc5KTYJ2kYUQ_fbxn/view?usp=drive_link',
          },
        ],
      },
      {
        name: 'Windows',
        icon: <FaWindows className='w-4 h-4' />,
        downloads: [
          {
            name: 'Windows',
            size: '133 MB',
            url: 'https://drive.google.com/file/d/1NzEHfmbZgzsbSXPrcQwr6o20yD7tP7L7/view?usp=drive_link',
            // url: 's3.avisengine.com/AVISEngine_1_2_7_ACL_Win_Universal/.zip',
          },
        ],
      },
      {
        name: 'Linux',
        icon: <FaLinux className='w-4 h-4' />,
        downloads: [
          {
            name: 'Linux Universal',
            size: '140 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_7_ACL_Linux_Universal/.zip',
            url: 'https://drive.google.com/file/d/1kHisBUxEej87AKcasfarmtlFiNSfW9Zz/view?usp=drive_link',
          },
        ],
      },
    ],
  },
  {
    version: '1.2.9',
    isLatest: false,
    releaseDate: '2025-06-12',
    platforms: [
      {
        name: 'macOS',
        icon: <FaApple className='w-4 h-4' />,
        downloads: [
          {
            name: 'Mac Universal',
            size: '140 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_7_ACL_Mac_Universal/.zip',
            url: 'https://drive.google.com/file/d/1vrUs0rAJgcnxZutztJWYamlkzAhv_uBA/view?usp=drive_link',
          },
        ],
      },
      {
        name: 'Windows',
        icon: <FaWindows className='w-4 h-4' />,
        downloads: [
          {
            name: 'Windows',
            size: '133 MB',
            url: 'https://drive.google.com/file/d/10X0tIESzn6mrSzNvWqzExFxyukK5ATh1/view?usp=drive_link',
            // url: 's3.avisengine.com/AVISEngine_1_2_7_ACL_Win_Universal/.zip',
          },
        ],
      },
      {
        name: 'Linux',
        icon: <FaLinux className='w-4 h-4' />,
        downloads: [
          {
            name: 'Linux Universal',
            size: '140 MB',
            // url: 's3.avisengine.com/AVISEngine_1_2_7_ACL_Linux_Universal/.zip',
            url: 'https://drive.google.com/file/d/14MWrg34spkNIENkZSCf6v1qX-0KqqkUF/view?usp=drive_link',
          },
        ],
      },
    ],
  },
  {
    version: '1.3.0',
    isLatest: false,
    releaseDate: '2025-06-25',
    platforms: [
      {
        name: 'Windows',
        icon: <FaWindows className='w-4 h-4' />,
        downloads: [
          {
            name: 'Windows x64',
            size: '116 MB',
            // url: 's3.avisengine.com/AVISEngine_1_3_0_Win_x64/.zip',
            url: 'https://drive.google.com/file/d/1yOp76fIzPhGMzVjSJ8u2UH-8xrQRt-H1/view?usp=drive_link',
          },
        ],
      },
    ],
  },
  {
    version: '2.0.0',
    isLatest: false,
    releaseDate: '2025-07-01',
    platforms: [
      {
        name: 'macOS',
        icon: <FaApple className='w-4 h-4' />,
        downloads: [
          {
            name: 'Mac Universal',
            size: '238 MB',
            // url: 's3.avisengine.com/AVISEngine_2_0_0_Mac_Universal/.zip',
            url: 'https://drive.google.com/file/d/1G3fpNL8Mvi_VsvdyVcVAzRWEnq2pRekv/view?usp=drive_link',
          },
        ],
      },
      {
        name: 'Windows',
        icon: <FaWindows className='w-4 h-4' />,
        downloads: [
          {
            name: 'Windows',
            size: '229 MB',
            // url: 's3.avisengine.com/AVISEngine_2_0_0_Win_Universal/.zip',
            url: 'https://drive.google.com/file/d/1rADQgUSmTk8yx_pQ6dBTcsL46rLkw3Zu/view?usp=drive_link',
          },
        ],
      },
      {
        name: 'Linux',
        icon: <FaLinux className='w-4 h-4' />,
        downloads: [
          {
            name: 'Linux Universal',
            size: '242 MB',
            // url: 's3.avisengine.com/AVISEngine_2_0_0_Linux_Universal/.zip',
            url: 'https://drive.google.com/file/d/1IjBnfmOJrt86OTh53ZLxqYMpqKkmMOnB/view?usp=drive_link',
          },
        ],
      },
    ],
  },
  {
    version: '2.0.1',
    isLatest: false,
    releaseDate: '2025-07-05',
    platforms: [
      {
        name: 'macOS',
        icon: <FaApple className='w-4 h-4' />,
        downloads: [
          {
            name: 'Mac Universal',
            size: '238 MB',
            // url: 's3.avisengine.com/AVISEngine_2_0_1_Mac_Universal/.zip',
            url: 'https://drive.google.com/file/d/1TDerza3IxHzkxEiSoeoaGjfrIAJtHCRM/view?usp=drive_link',
          },
        ],
      },
      {
        name: 'Windows',
        icon: <FaWindows className='w-4 h-4' />,
        downloads: [
          {
            name: 'Windows',
            size: '229 MB',
            // url: 's3.avisengine.com/AVISEngine_2_0_1_Win_Universal/.zip',
            url: 'https://drive.google.com/file/d/1WRZ627dZj61p6YvWx12BoLdxGW1_jHDl/view?usp=drive_link',
          },
        ],
      },
      {
        name: 'Linux',
        icon: <FaLinux className='w-4 h-4' />,
        downloads: [
          {
            name: 'Linux Universal',
            size: '214 MB',
            // url: 's3.avisengine.com/AVISEngine_2_0_1_Linux_Universal/.zip',
            url: 'https://drive.google.com/file/d/18qDyM2AlE1X7rfgR0FY1Bm_8Ot4uSiHO/view?usp=drive_link',
          },
        ],
      },
    ],
  },
  {
    version: '2.3.1',
    isLatest: true,
    releaseDate: '2025-07-20',
    platforms: [
      {
        name: 'Windows',
        icon: <FaWindows className='w-4 h-4' />,
        downloads: [
          {
            name: 'Windows x64',
            size: '329 MB',
            // url: 's3.avisengine.com/AVISEngine_2_3_1_Win_x64/.zip',
            url: 'https://drive.google.com/file/d/1-F0yMRl22Ql9XphTTU_c6kDTX6fLQpbQ/view?usp=drive_link',
          },
        ],
      },
    ],
  },
]
