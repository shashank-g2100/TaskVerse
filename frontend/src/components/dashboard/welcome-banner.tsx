interface WelcomeBannerProps {
    user: {
      name: string
    }
  }
  
  export function WelcomeBanner({ user }: WelcomeBannerProps) {
    const currentHour = new Date().getHours()
    let greeting = "Hello"
  
    if (currentHour < 12) {
      greeting = "Good morning"
    } else if (currentHour < 18) {
      greeting = "Good afternoon"
    } else {
      greeting = "Good evening"
    }
  
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-bold text-slate-800">
          {greeting}, {user.name}!
        </h2>
        <p className="text-gray-600 mt-1">
          Welcome to your Task Manager dashboard. Here you can manage your tasks and stay organized.
        </p>
      </div>
    )
  }
  