// 未完成 開發中
import React from 'react'
import LoginPage from './member/login-modal'
import DefaultLayout from './common/default-layout'
import Link from 'next/link'
import { useAuth } from '@/context/auth-context'
import { useEffect, useState } from 'react'

export default function UnauthenticatedView() {
  // member
  const { checkAuth, auth } = useAuth()
  const [showLogin, setShowLogin] = useState(false)
  // ---Modal---
  // 關閉登入視窗
  const handleLoginClose = () => {
    if (!isLoading) {
      setShowLogin(false)
    }
  }
  // 點擊登入按鈕
  const handleLoginClick = () => {
    if (!auth.isAuth) {
      // 如果用戶未登入，則顯示登入表單
      setShowLogin(true)
    }
  }
  // 登入表單提交
  const handleLoginSubmit = async () => {
    // 開始檢查認證狀態
    setIsLoading(true)
    await checkAuth()
    // 結束檢查認證狀態
    setIsLoading(false)
    if (auth.isAuth) {
      // 如果已經登入，則關閉模態框
      setShowLogin(false)
    }
  }

  // 如果已經登入，則關閉模態框
  useEffect(() => {
    if (auth.isAuth) {
      setShowLogin(false)
      checkAuth()
    }
  }, [auth.isAuth])

  // Loading bar-----
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (isLoading) {
      setProgress(60)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(100)
      }, 300)
    }
  }, [isLoading])

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setIsShow(false)
      }, 800)
    }
  })

  return (
    <>
      <DefaultLayout>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <Link
              href="#login"
              style={{ textDecoration: 'none' }}
              onClick={handleLoginClick}
            >
              <h2 style={{ color: '#8e2626' }}>
                <strong>
                  請先登入<small>(點擊我登入)</small>
                </strong>
              </h2>
            </Link>
            <img src="/logo9.png" alt="" />
          </div>
        </div>
      </DefaultLayout>
      {/* Login Modal start */}
      <LoginPage
        show={showLogin}
        onHide={handleLoginClose}
        onSubmit={handleLoginSubmit}
      />
      {/* Login Modal end */}
    </>
  )
}
