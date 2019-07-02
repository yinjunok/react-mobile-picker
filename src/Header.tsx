import * as React from 'react'

export interface IHeaderProps {
  title?: React.ReactNode
  cancelText?: string
  confirmText?: string
  onConfirm?: () => void
  onCancel?: () => void
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  children,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
}) => (
  <div className='picker-header'>
    <button className='picker-button' onClick={onCancel}>{cancelText}</button>
    <span>{children}</span>
    <button className='picker-button' onClick={onConfirm}>{confirmText}</button>
  </div>
)

Header.defaultProps = {
  title: null,
  cancelText: '取消',
  confirmText: '确定',
}

export default Header
