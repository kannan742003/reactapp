pipeline {
    agent any

    environment {
        // Define NodeJS installation in Jenkins
        NODEJS_HOME = tool 'NodeJS'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Install project dependencies and build the React app
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                // This is a simple example; you might deploy to a server or a cloud service
                script {
                    sh 'docker build -t my-react-app .'
                    sh 'docker run -p 8080:80 my-react-app'
                }
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
