module Three.Scene where

import Three.Types (Three, ThreeT, Scene, Color)
import Control.Monad.Eff (Eff)

type SceneEff = ThreeT Scene

foreign import createScene :: SceneEff
foreign import setSceneBackground :: Color -> Scene -> SceneEff
