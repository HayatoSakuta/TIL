---
title: "synchronizedによるオブジェクト排他"
date: 2026-03-11
status: draft
---

# 20260311_[WIP]synchronizedによるオブジェクト排他

- synchronizedはThreadではなくオブジェクトをロックする
- オブジェクトにはモニターという概念があり、synchronized(obj)と書いた場合は、objのモニターをロックする
- スレッドAがオブジェクトXをロックしており、同タイミングでスレッドBがオブジェクトXをロックしようとした場合、スレッドBはスレッドAがオブジェクトXのロックを解除するまでは待たされる（BLOCKED）。