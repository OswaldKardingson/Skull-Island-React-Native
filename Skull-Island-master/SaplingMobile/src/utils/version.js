export function appVersion() {
          return new Promise((resolve, reject) => {
            cordova.getAppVersion.getVersionNumber((successResponse) => {
              resolve(successResponse)
            }, (errorResponse) =>{
              reject(errorResponse)
            })
          })
        }
