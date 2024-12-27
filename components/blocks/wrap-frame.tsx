import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

const WrapFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full justify-center select-none">
      <DeviceFrameset device="Nexus 5" height={512} width={288}>
        {children}
      </DeviceFrameset>
    </div>
  )
}

export default WrapFrame
