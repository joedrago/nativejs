gGame = null

log = (s) ->
  if gGame != null
    gGame.log(s)

startup = (game) ->
  gGame = game
  log("startup")

shutdown = ->
  log("shutdown")

update = ->
  log("update")
