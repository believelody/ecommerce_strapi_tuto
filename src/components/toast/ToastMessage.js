import React, { useEffect, useRef } from 'react'
import { Box, Toast } from 'gestalt'
import { useAppHooks } from '../../contexts'
import { RESET_TOAST } from '../../reducers/toastReducer'

const ToastMessage = () => {
    const { useToast } = useAppHooks()
    const [{isActivated, msg, duration}, dispatchToast] = useToast
    const timeRef = useRef()

    const deleteToast = () => {
        dispatchToast({ type: RESET_TOAST })
        clearTimeout(timeRef.current)
    }

    useEffect(() => {
        if (isActivated) {
            if (timeRef) {
                timeRef.current = setTimeout(() => {
                    dispatchToast({ type: RESET_TOAST })
                }, duration)
            }
        }
    }, [isActivated])

  return (
    isActivated &&
    <Box
        position='fixed'
        fit
        dangerouslySetInlineStyle={{
            __style: {
                bottom: 50,
                left: '50%',
                transform: 'translateX(-50%)',
            },
        }}
        paddingX={1}
        onClick={deleteToast}
    >
      <Toast text={msg} />
    </Box>
  )
}

export default ToastMessage
