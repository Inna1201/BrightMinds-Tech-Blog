const commentFormHandler = async function (event) {
    event.preventDefault();
  
    const blogId = document.querySelector("#blog-id").value.trim();
    const body = document.querySelector("#comment-body").value.trim();
    
  
  
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        blogId,
        body
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Please try again");
    }
  };
  
  document.querySelector('#cform').addEventListener('submit', commentFormHandler);



