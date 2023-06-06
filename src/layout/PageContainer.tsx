import React, { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-full flex-col items-start justify-start  sm:px-6 md:max-w-7xl md:py-16 lg:px-8">
      {children}
    </div>
  )
}

export default PageContainer
