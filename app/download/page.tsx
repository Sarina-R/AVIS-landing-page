'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa'

interface OSInfo {
  name: string
  icon: React.ReactNode
  downloadUrl: string
  architecture: string
}

interface Version {
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

const versions: Version[] = [
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

const detectOS = (): OSInfo => {
  const userAgent = navigator.userAgent.toLowerCase()
  const platform = navigator.platform.toLowerCase()

  if (platform.includes('mac') || userAgent.includes('mac')) {
    return {
      name: 'macOS',
      icon: <FaApple className='w-4 h-4' />,
      downloadUrl: '#mac-universal',
      architecture: 'Universal',
    }
  }

  if (platform.includes('linux') || userAgent.includes('linux')) {
    return {
      name: 'Linux',
      icon: <FaLinux className='w-4 h-4' />,
      downloadUrl: '#linux-x64',
      architecture: 'x64',
    }
  }

  return {
    name: 'Windows',
    icon: <FaWindows className='w-4 h-4' />,
    downloadUrl: '#windows-x64',
    architecture: 'x64',
  }
}

const CursorDownloadPage: React.FC = () => {
  const [expandedVersion, setExpandedVersion] = useState<string | null>('1.3')
  const [detectedOS, setDetectedOS] = useState<OSInfo | null>(null)

  useEffect(() => {
    setDetectedOS(detectOS())
  }, [])

  const latestVersion = versions.find((v) => v.isLatest) || versions[0]

  const getDownloadUrl = () => {
    if (!detectedOS) return '#'
    const platform = latestVersion.platforms.find(
      (p) => p.name === detectedOS.name
    )
    if (!platform) return '#'

    const preferredDownload =
      platform.downloads.find(
        (d) =>
          d.name.includes(detectedOS.architecture) ||
          d.name.includes('Universal')
      ) || platform.downloads[0]

    return preferredDownload.url
  }

  const handleDownload = () => {
    const downloadUrl = getDownloadUrl()
    if (downloadUrl !== '#') {
      console.log(
        `Downloading version ${latestVersion.version} for ${detectedOS?.name} (${detectedOS?.architecture})`
      )
      window.location.href = downloadUrl
    }
  }

  return (
    <div className='min-h-[80vh] mt-[10vh]'>
      <motion.div
        className='max-w-2xl mx-auto px-6 py-20 text-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className='mb-8'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className='w-24 h-24 relative mx-auto flex items-center justify-center'>
            <Image
              src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'
              alt='logo'
              fill
              className='max-w-40 object-contain'
            />
          </div>
        </motion.div>

        <h1 className='text-4xl font-light mb-8 tracking-wide'>
          Download AVIS Engine
        </h1>

        <ShimmerButton
          onClick={handleDownload}
          className='inline-flex items-center '
        >
          <div className='inline-flex gap-2 items-center bg-white text-black px-6 py-3 rounded hover:bg-neutral-200 transition-colors text-sm font-medium'>
            {detectedOS?.icon}
            Download for {detectedOS?.name}
          </div>
        </ShimmerButton>

        <p className='mt-3 text-neutral-400 text-xs'>
          Version {latestVersion.version} for {detectedOS?.name} (
          {detectedOS?.architecture})
        </p>
      </motion.div>

      <motion.div
        className='max-w-5xl mx-auto px-6 py-12'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className='text-lg font-medium px-4'>All Versions</h2>
        <div className='w-full h-[0.5px] bg-neutral-800 my-4 mb-8'></div>
        <div className='space-y-1'>
          {versions
            .slice()
            .reverse()
            .map((version) => (
              <motion.div
                key={version.version}
                className='border-b border-neutral-800 rounded'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className='w-full p-4 flex items-center justify-between hover:bg-neutral-900 transition-colors text-left'
                  onClick={() =>
                    setExpandedVersion(
                      expandedVersion === version.version
                        ? null
                        : version.version
                    )
                  }
                  whileHover={{ backgroundColor: '#111' }}
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-base font-medium'>
                      {version.version}
                    </span>
                    {version.isLatest && (
                      <span className='px-2 py-1 bg-white text-black text-xs rounded'>
                        LATEST
                      </span>
                    )}
                    <button className='text-neutral-400 hover:text-white text-xs underline'>
                      Release notes
                    </button>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedVersion === version.version ? 'rotate-180' : ''
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {expandedVersion === version.version && (
                    <motion.div
                      className='border-t border-neutral-800 bg-neutral-00'
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className='grid md:grid-cols-3 gap-6 p-4'>
                        {version.platforms.map((platform) => (
                          <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className='border px-4 py-2 rounded-md bg-white/[0.05]'
                          >
                            <div className='flex items-center gap-2 mb-3 pb-2 border-b border-neutral-700'>
                              {platform.icon}
                              <h4 className='text-sm font-medium'>
                                {platform.name}
                              </h4>
                            </div>
                            <div className='space-y-2'>
                              {platform.downloads.map((download, index) => (
                                <motion.div
                                  key={index}
                                  className='flex items-center justify-between p-2  border-neutral-800 rounded hover:bg-neutral-900 cursor-pointer text-xs'
                                  onClick={() =>
                                    window.open(download.url, '_blank')
                                  }
                                  transition={{ duration: 0.2 }}
                                >
                                  <div>
                                    <div className='font-medium'>
                                      {download.name}
                                    </div>
                                    <div className='text-neutral-400'>
                                      {download.size}
                                    </div>
                                  </div>
                                  <Download className='w-3 h-3 text-neutral-500' />
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  )
}

export default CursorDownloadPage
