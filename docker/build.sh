. ./version.sh

eval "docker build -t pawelfurman/qisapp:${PACKAGE_VERSION} -f ./Dockerfile.frontend-angular .."