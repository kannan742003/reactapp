pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'NodeJS'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    // Install project dependencies and build the React app
                    if (isUnix()) {
                        sh 'npm install'
                        sh 'npm run build'
                    } else {
                        bat 'npm install'
                        bat 'npm run build'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here (e.g., deploy to a server or a cloud service)
                // Adjust this based on your deployment requirements
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }
        failure {
            echo 'CI/CD Pipeline failed. Check the Jenkins logs for details.'
        }
    }
}

def isUnix() {
    return !(isWindows() || isUnixoid())
}

def isWindows() {
    return (isAnyOf(['windows']))
}

def isUnixoid() {
    return (isAnyOf(['unix', 'mac']))
}

def isAnyOf(targets) {
    return targets.contains(env.BUILD_OS)
}
