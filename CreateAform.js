<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Document</title>
</head>
<body class="bg-image" style="background-image: url('https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80');
      height: 100vh;">
    <div class="container border border-info rounded-4 bg-white text-dark" style="width:50%;">
    <div class="container-sm">
    <h3 style="text-align: center;color: #f7b946;">Book a call</h3>
    <h6 class="lead"> Book a call slot and our representative will call you within 1 hr of selected time</h6>
    <hr>

    <form id="my-form">
        <div class="row mb-3">
        <label for="name" class="form-label">Name:</label><br>
        <input type="text" class="form-control" id="name" value="">
        </div>

        <div class="row mb-3">
        <label for="email" class="form-label">Email:</label><br>
        <input type="text" class="form-control" id="email" value="">
        </div>

        <div class="row mb-3">
        <label for="phonenumber" class="form-label">Phone:</label><br>
        <input type="tel" class="form-control" id="phonenumber" value="">
        </div>
     
        <div class="row mb-3">
        <label for="Dateforcall">Time for Call:</label><br>
        <div class="col mb-6">
        <input type="date" class="form-control" id="Dateforcall">
        </div>
        <div class="col mb-6">
        <input type="time" class="form-control" id="Timeforcall">
        </div>
        </div>
        
        <div class="row mb-3">
        
            <button type="submit" class="form-control" style="background-color:#f7b946; height:35px ">GET A CALL</button>
        </div>
    </form>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>
