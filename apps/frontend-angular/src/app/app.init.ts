
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { LocalStorageService, loginOnInit, UserAuth } from "@qisapp/frontend-angular/auth";



export function initializeApp(router: Router, store: Store, ls: LocalStorageService): () => Promise<void> {
    return () => new Promise((resolve, reject) => {

        const user:UserAuth = JSON.parse(ls.getItem('user') || '{}')

        if(user?.token?.length){
            store.dispatch(loginOnInit({...user}))
        }else{
            router.navigate(['/', 'login'])
        }

        resolve();
    })
}