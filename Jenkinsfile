pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Define NodeJS installation in Jenkins
                    def nodejsInstallation = tool 'NodeJS'
                    env.PATH = "${nodejsInstallation}/bin:${env.PATH}"

                    // Install project dependencies and build the React app
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                // This is a simple example; you might deploy to a server or a cloud service
                sh 'docker build -t my-react-app .'
                sh 'docker run -p 8080:80 my-react-app'
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
