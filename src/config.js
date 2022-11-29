import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

export default {
    mongodb: {
        connectionString: process.env.MONGODB_CONNECTION_STRING,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    firebase: {
        type: 'service_account',
        project_id: 'ltcoderhouse32065',
        private_key_id: '30512dd0b8bdbe333ac2e287248869e4bb29cfca',
        private_key:
            '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCILRrGCzqrt0M8\nB0sz4aRZnCjGems/AzWDw1i1vrXztlZCI0Wvu4xp7DGrraeGRGBpaeDIStXMRAqr\n725PCLnljFV4gIN2FxI9Ctr2vEJQ1V9PoJSSWpuFTWYSp6+EUCSbuQHrrVvfhrx8\nX7xwVyFzvvpcq3eJscsO4SCN3JmBciiPilRrFJLguz/2xVztADXriqRZ8x0vwOf9\nZYTY67jhy3ekN6dte89piOVpaNwwbHgUj5giJI5W9KCim81oC3gzB/3FVNm8jMUn\nptyi4bGBpi4mcdbiK/BeOvR/nWqva64OC7+ercdoLRhZ4VRujW6H6+ZOOSM0YTpg\nDjsexLRDAgMBAAECggEAQcn4u2FFcRxSwTeM333N1vUYxfrywTidrBC+VN/UK/AV\ncFJ2IlZrmejgfl6hJr72DTd3v4xYCh19Ql+kXU6L8RiBWnxMBstSpmcOLlH5f+/1\n4hRkcuiPZjFkdPLKWxQU+57ADMpuLml7umLOOT//C1pivk6gq8dXoNKm1aKUDvMR\nsT4dHH599fdJ4QEVybkJFkc0L3qpCeT4s49acM3zVbpkjsx/6SnscCWk9lIB/W9Y\ntfZLmyHQtYHFbnGwVL1yjGPIIzH69CnzxmVTWgOgUe8+n1E7IeFt7PuIZxg5sWfO\np/zjYFyZTiRLHkvCws840zEFXbHItCtcydUCJeZBYQKBgQC+F48z2X2hXBa+X1ZC\nGyUBKYQyeNRHM928mC3De7cl7MSB9TrI8Dubvk8ynUgrKGOy8AYC6V8VI94WQiUE\nqkqntxy22Ae+Ed7wV/zmTQ95lr8Ejl33nyTz2fsAWTKe6d/jRDoWl91PdI7yMczj\ngW5FjhLWHFsCmMf9F4bsO2O1yQKBgQC3ZAL3mmfqQPUq3Xpm2SzMI2tpXjYBI6rf\nxsJ37mI5HWAjrgqTggnnSydqnHbpaEWm6K5f/fqgzq39G1+OfZKzdXK0CiYinnZ2\nhDO5Lr6d4MiYXAlfpiZX2JGa5fiwPFtkdg7SySOa+LsiE6Ylzuov/aIT+RUraQgt\n9bxVFyePqwKBgHp7DZ8X7NWyU0k4foi7mr1D9dTbe9Og/KdO2nXRWfHKu9cMnmLo\nP1AbcEYph12feZXLB+SKX+RsJuXqmpWF7/JejtbVHS//rcjouJ/fWTA7zDpwTOWH\nGjUw54SS9IXmJYb26AK0uTk/3fb51Y1lURrp7wMcZBupO3q81QeTQKzZAoGANB4v\nHbD68T7urfTtcUctDQLP5s0IagB58kipQa40qeioRtuSU+Nz7xCTrh+zR5gDm3Cr\nBcrHLGYwWisqV/Nl+qxZIcN0nQgNwJbHoEwhjfqw52PYoh807Gg20R+kMmmky4Ml\nqU/SV5tyizesUzhfo63gHu79zi12TqF0mXYQHysCgYBAc5E9w3697L0SzNrqki2c\n+Y7i7FkJcJvzr8ebxUv5BAOw4Adb7PEjIVmXpPUdycm+F86fYPXPf/LebhZizmoo\nWc9dHK6P0SZwU7CCx/FRj+QbW0/sDd6iqUxPPnk5Z8a5wo3eBObsoaSoJXl+wS6l\nuaneMxzHQcvyHOaT0eIUnw==\n-----END PRIVATE KEY-----\n',
        client_email:
            'firebase-adminsdk-pgrx5@ltcoderhouse32065.iam.gserviceaccount.com',
        client_id: '115667723450621955104',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url:
            'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pgrx5%40ltcoderhouse32065.iam.gserviceaccount.com',
    },
    log4js: {
        appenders: {
            info: { type: 'console' },
            errFile: { type: 'file', filename: 'error.log' },
            warnFile: { type: 'file', filename: 'warn.log' },

            log: { type: 'logLevelFilter', appender: 'info', level: 'all' },
            errLog: {
                type: 'logLevelFilter',
                appender: 'errFile',
                level: 'error',
            },
            warnLog: {
                type: 'logLevelFilter',
                appender: 'warnFile',
                level: 'warn',
            },
        },
        categories: {
            default: {
                appenders: ['log', 'errLog', 'warnLog'],
                level: 'all',
            },
        },
    },
};
