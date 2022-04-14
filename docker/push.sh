
. ./version.sh

eval "docker build -t pawelfurman/qisapp:${PACKAGE_VERSION} -f ./Dockerfile.frontend-angular .."
eval "docker push pawelfurman/qisapp:${PACKAGE_VERSION}"
