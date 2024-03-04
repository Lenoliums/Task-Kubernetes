# kubernetes-task
Deploy a backend-frontend app using Kubernetes. 
Backend: application that listens to a port and sends some response if a message comes there. Must be replicated.
Frontend: application that sends incoming requests to the backend.
Frontend must have an IP that can be used outside the cluster. Use Kubernetes Services. 
## list of commands:

**create docker images**  
docker build -t lenolium/backend backend  
docker build -t lenolium/frontend frontend

**login into docker hub**
docker login

**push them to docker hub**  
docker push lenolium/backend  
docker push lenolium/frontend

**create and run kubernetes cluster locally using minikube**  
minikube start --driver=docker

**apply backend deployment and service**  
kubectl apply -f backend-deployment.yaml  
kubectl apply -f backend-service.yaml

**expose backend**  
minikube service backend-service

get the backend port and paste it to REACT_APP_BACKEND_URL

**apply frontend deployment and service**  
kubectl apply -f frontend-deployment.yaml  
kubectl apply -f frontend-service.yaml

**expose frontend**  
minikube service frontend-service
