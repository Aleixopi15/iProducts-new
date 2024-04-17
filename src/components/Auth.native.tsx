import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin'
  import { supabase } from '@/services/supabase'
  
  export default function GoogleButton() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: '160004261417-1hd7vers9ci4s79trk0fm0u4nq9l0hh0.apps.googleusercontent.com',
    })
  
    return (
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices()
            const userInfo = await GoogleSignin.signIn()
            if (userInfo.idToken) {
              const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: userInfo.idToken,
              })
              console.log(error, data)
            } else {
              throw new Error('no ID token present!')
            }
          } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          }
        }}
      />
    )
  }